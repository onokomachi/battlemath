/**
 * App.tsx - BattleMath Online v3.0
 *
 * 統合機能:
 *  - Firebase Authentication (Google OAuth + Guest)  [エビデンスA: Firebase公式パターン]
 *  - HP制カードバトル (aicardbattle2より移植)        [エビデンスB: 標準カードゲーム設計]
 *  - PvP マルチプレイヤー (Firestore リアルタイム)   [エビデンスA: Firebase onSnapshot]
 *  - ランキングボード                               [エビデンスA: Firestore query/orderBy]
 *  - 管理画面 (GameMaster)                          [エビデンスB: RBAC管理UI設計]
 *  - DDA (Dynamic Difficulty Adjustment)            [エビデンスB: ゲームAI適応設計]
 */
import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import {
  onAuthStateChanged, signInWithPopup, signInWithRedirect,
  getRedirectResult, signOut,
  type User
} from 'firebase/auth';
import {
  doc, getDoc, getDocs, setDoc, updateDoc, increment, arrayUnion,
  collection, onSnapshot, query, addDoc, serverTimestamp,
  runTransaction, where, orderBy, limit, Timestamp, deleteDoc
} from 'firebase/firestore';
import { auth, db, googleProvider } from './firebase';
import type { ProblemCard, TurnPhase, GameState, TurnInitiative, Room, BattleMode, BattleFormat, BadgeDef, StudentProfile, ActiveBooster } from './types';
import {
  CARD_DEFINITIONS, HAND_SIZE, DECK_SIZE,
  INITIAL_HP, calcDamage, ADMIN_EMAILS, GAMEMASTER_PASSWORD,
  BADGE_DEFS, DAILY_QUEST_DEFS, WEEKLY_QUEST_DEFS, getTodayStr, getWeekStart,
  SHOP_ITEMS, TITLE_DEFS, THEME_CONFIGS, DEFAULT_SCHOOL_YEAR, getCurrentSchoolYear,
} from './constants';
import GameBoard from './components/GameBoard';
import DeckBuilder from './components/DeckBuilder';
import MainMenu from './components/MainMenu';
import PracticeMode from './components/PracticeMode';
import CardShop from './components/CardShop';
import LevelUpModal from './components/LevelUpModal';
import GravityBackground from './components/GravityBackground';
import LoginScreen from './components/LoginScreen';
import Matchmaking from './components/Matchmaking';
import RankingBoard from './components/RankingBoard';
import GameMaster from './components/GameMaster';
import QuestPanel from './components/QuestPanel';
import BadgeNotification from './components/BadgeNotification';
import LoginBonusModal, { getLoginReward } from './components/LoginBonusModal';
import ClassBattleBoard from './components/ClassBattleBoard';
import { addIncorrectToSrs, getDueCount } from './services/spacedRepetitionService';
import { recordAttempt, getCategoryWeights } from './services/weaknessAnalysisService';
import WeaknessPanel from './components/WeaknessPanel';
import ItemShop from './components/ItemShop';
import TutorialBattle from './components/TutorialBattle';
import SpeedDuelSetup from './components/SpeedDuelSetup';
import SpeedDuelBoard from './components/SpeedDuelBoard';
import NewYearPrompt from './components/NewYearPrompt';
import type { ShopItemDef, BattleType, Problem } from './types';
import { getCategoryStats } from './services/weaknessAnalysisService';

// ============================
// Helpers
// ============================
// エビデンスA: Fisher-Yates shuffle — 唯一の均一分布シャッフル
// sort(() => Math.random()-0.5) は偏りがある (Raymond Chen 2007)
const shuffleDeck = (deck: ProblemCard[]): ProblemCard[] => {
  const arr = [...deck];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const SUPERSCRIPT_MAP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', 'n': 'ⁿ', 'm': 'ᵐ' };

const normalizeAnswer = (str: string): string => {
  if (!str) return '';
  return str
    .replace(/[！-～]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
    .replace(/\s+/g, '')
    .replace(/[°度円枚個m分]/g, '')
    .replace(/＝/g, '=')
    .replace(/／/g, '/')
    .replace(/（/g, '(')
    .replace(/）/g, ')')
    .replace(/\^([0-9+\-nm]+)/g, (_, digits: string) => digits.split('').map(c => SUPERSCRIPT_MAP[c] || c).join(''))
    .replace(/pi/gi, 'π')
    .replace(/0\.5x/g, '1/2x')
    .replace(/([+-])0\.5x/g, '$11/2x')
    .toLowerCase();
};

// ============================
// App Component
// ============================
const App: React.FC = () => {
  // --- Auth ---
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  // --- Student Profile (学年・組・番号) ---
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(() => {
    try {
      const s = localStorage.getItem('battleMathStudentProfile');
      if (!s) return null;
      const sp = JSON.parse(s);
      // 既存プロフィールに school がない場合はデフォルト設定
      if (sp && !sp.school) {
        sp.school = '第三中学校';
        sp.displayLabel = `第三中学校 ${sp.grade}年${sp.classNum}組${sp.number}番`;
      }
      // 既存プロフィールに schoolYear がない場合はデフォルト設定
      if (sp && !sp.schoolYear) {
        sp.schoolYear = DEFAULT_SCHOOL_YEAR;
      }
      localStorage.setItem('battleMathStudentProfile', JSON.stringify(sp));
      return sp;
    } catch { return null; }
  });

  // --- New Year Prompt ---
  const [showNewYearPrompt, setShowNewYearPrompt] = useState(false);
  const newYearCheckedRef = useRef(false);

  // --- Game State ---
  const [gameState, setGameState] = useState<GameState>('login_screen');
  const [gameMode, setGameMode] = useState<BattleMode>('cpu');
  const [turnPhase, setTurnPhase] = useState<TurnPhase>('selecting_card');
  const [initiative, setInitiative] = useState<TurnInitiative>('player');

  // --- Player Progression (synced to Firestore when logged in) ---
  const [mathPoints, setMathPoints] = useState<number>(() => {
    try { return JSON.parse(localStorage.getItem('battleMathPoints') || '1000'); }
    catch { return 1000; }
  });
  const [ownedCardIds, setOwnedCardIds] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem('battleMathOwnedCardIds');
      if (s) return new Set(JSON.parse(s));
    } catch {}
    return new Set(CARD_DEFINITIONS.slice(0, 20).map(c => c.id));
  });
  const [playerLevel, setPlayerLevel] = useState<number>(() => {
    try { return JSON.parse(localStorage.getItem('battleMathPlayerLevel') || '1'); }
    catch { return 1; }
  });
  const [playerExp, setPlayerExp] = useState<number>(() => {
    try { return JSON.parse(localStorage.getItem('battleMathPlayerExp') || '0'); }
    catch { return 0; }
  });
  const [userLevelStats, setUserLevelStats] = useState<Record<number, { avgTime: number; count: number }>>(() => {
    try {
      const s = localStorage.getItem('battleMathUserLevelStats');
      return s ? JSON.parse(s) : {
        1: { avgTime: 5000, count: 0 }, 2: { avgTime: 10000, count: 0 },
        3: { avgTime: 20000, count: 0 }, 4: { avgTime: 40000, count: 0 },
        5: { avgTime: 60000, count: 0 }
      };
    } catch { return { 1: { avgTime: 5000, count: 0 }, 2: { avgTime: 10000, count: 0 }, 3: { avgTime: 20000, count: 0 }, 4: { avgTime: 40000, count: 0 }, 5: { avgTime: 60000, count: 0 } }; }
  });
  const [levelUpInfo, setLevelUpInfo] = useState<{
    oldLevel: number; newLevel: number; mpReward: number; newCard: ProblemCard | null;
  } | null>(null);

  // --- Battle State ---
  const [playerDeck, setPlayerDeck] = useState<ProblemCard[]>([]);
  const [pcDeck, setPcDeck] = useState<ProblemCard[]>([]);
  const [playerHand, setPlayerHand] = useState<ProblemCard[]>([]);
  const [pcHand, setPcHand] = useState<ProblemCard[]>([]);
  const [playerHP, setPlayerHP] = useState(INITIAL_HP);
  const [pcHP, setPcHP] = useState(INITIAL_HP);
  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [playerPlayedCard, setPlayerPlayedCard] = useState<ProblemCard | null>(null);
  const [pcPlayedCard, setPcPlayedCard] = useState<ProblemCard | null>(null);
  const [gameLog, setGameLog] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [roundResult, setRoundResult] = useState<string | null>(null);
  const [playerAnswered, setPlayerAnswered] = useState(false);
  const [pcAnswered, setPcAnswered] = useState(false);
  const [roundStartTime, setRoundStartTime] = useState(0);
  const [mismatchRound, setMismatchRound] = useState(false);
  const [battleFormat, setBattleFormat] = useState<BattleFormat>('master_duel');
  const [playerRoundWins, setPlayerRoundWins] = useState(0);
  const [pcRoundWins, setPcRoundWins] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  // --- Speed Duel State ---
  const [battleType, setBattleType] = useState<BattleType>('card_battle');
  const [speedCategories, setSpeedCategories] = useState<string[]>([]);
  const [speedProblems, setSpeedProblems] = useState<Problem[]>([]);
  const [speedRound, setSpeedRound] = useState(1);
  const [speedTotalRounds, setSpeedTotalRounds] = useState(5);
  const [speedPlayerScore, setSpeedPlayerScore] = useState(0);
  const [speedOpponentScore, setSpeedOpponentScore] = useState(0);
  const [speedPhase, setSpeedPhase] = useState<'countdown' | 'answering' | 'round_result' | 'match_over'>('countdown');
  const [speedRoundWinner, setSpeedRoundWinner] = useState<'player' | 'opponent' | 'draw' | null>(null);
  const [speedPlayerAnswered, setSpeedPlayerAnswered] = useState(false);
  const [speedOpponentAnswered, setSpeedOpponentAnswered] = useState(false);
  const [speedTimeLeft, setSpeedTimeLeft] = useState(30);
  const [speedGameResult, setSpeedGameResult] = useState<'win' | 'lose' | 'draw' | null>(null);
  const speedTimerRef = useRef<NodeJS.Timeout | null>(null);
  const speedCpuTimerRef = useRef<NodeJS.Timeout | null>(null);


  // --- PvP State ---
  const [currentRoomId, setCurrentRoomId] = useState<string | null>(null);
  const [isHost, setIsHost] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [firestoreError, setFirestoreError] = useState<string | null>(null);
  const [opponentDisconnected, setOpponentDisconnected] = useState(false);
  const unsubscribeRoomRef = useRef<(() => void) | null>(null);
  const isHostRef = useRef(isHost);
  const processedMatchIdRef = useRef<string | null>(null);
  const pvpDeckRef = useRef<ProblemCard[]>([]);
  const currentRoomIdRef = useRef<string | null>(null);
  const gameModeRef = useRef<BattleMode>('cpu');
  const gameStateRef = useRef<GameState>(gameState);
  const speedPhaseRef = useRef(speedPhase);
  const battleTypeRef = useRef<BattleType>(battleType);

  // --- UI Overlays ---
  const [showRanking, setShowRanking] = useState(false);

  // --- ゲーミフィケーション State ---
  // エビデンスA: ログイン連続日数 × ストリーク喪失回避（Kahneman 1979）
  const [loginStreak, setLoginStreak] = useState(0);
  const [totalWins, setTotalWins] = useState(0);
  // エビデンスA: チェインカウンター × 可変報酬スケジュール（Skinner 1938）
  const [chainCount, setChainCount] = useState(0);
  const [wrongAnswerText, setWrongAnswerText] = useState<string | null>(null);
  const [playerWrongAnswer, setPlayerWrongAnswer] = useState<string | null>(null);
  const [wrongCategory, setWrongCategory] = useState<string | null>(null);
  // エビデンスB: バッジ × 自己決定理論（Deci & Ryan 1985）
  const [earnedBadgeIds, setEarnedBadgeIds] = useState<Set<string>>(new Set());
  const [pendingBadge, setPendingBadge] = useState<BadgeDef | null>(null);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  // パネル表示
  const [showQuestPanel, setShowQuestPanel] = useState(false);
  const [showLoginBonus, setShowLoginBonus] = useState(false);
  const [loginBonusClaimed, setLoginBonusClaimed] = useState(false);
  const [showClassBattle, setShowClassBattle] = useState(false);
  const [showWeaknessPanel, setShowWeaknessPanel] = useState(false);
  const [showItemShop, setShowItemShop] = useState(false);
  const [ownedShopItems, setOwnedShopItems] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem('bm_owned_shop_items');
      return s ? new Set(JSON.parse(s)) : new Set();
    } catch { return new Set(); }
  });
  const [equippedTitle, setEquippedTitle] = useState<string | null>(() => {
    try { return localStorage.getItem('bm_equipped_title') || null; }
    catch { return null; }
  });
  // 称号システム
  const [earnedTitleIds, setEarnedTitleIds] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem('bm_earned_titles');
      return s ? new Set(JSON.parse(s)) : new Set(['title_newcomer']);
    } catch { return new Set(['title_newcomer']); }
  });
  // バトルテーマ
  const [equippedTheme, setEquippedTheme] = useState<string | null>(() => {
    try { return localStorage.getItem('bm_equipped_theme') || null; }
    catch { return null; }
  });
  // 消耗品
  const [activeBooster, setActiveBooster] = useState<ActiveBooster | null>(() => {
    try {
      const s = localStorage.getItem('bm_active_booster');
      if (!s) return null;
      const b = JSON.parse(s) as ActiveBooster;
      return Date.now() < b.expiresAt ? b : null;
    } catch { return null; }
  });
  const [hintTokens, setHintTokens] = useState<number>(() => {
    try { return parseInt(localStorage.getItem('bm_hint_tokens') || '0', 10); }
    catch { return 0; }
  });
  const [expBoosterActive, setExpBoosterActive] = useState<boolean>(() => {
    return localStorage.getItem('bm_exp_booster') === '1';
  });
  const [tutorialDone, setTutorialDone] = useState(() => {
    return localStorage.getItem('bm_tutorial_done') === '1';
  });
  // クエスト進捗 (localStorage管理でFirestoreクォータ節約)
  const [dailyQuestProgress, setDailyQuestProgress] = useState<Record<string, number>>({});
  const [dailyQuestDone, setDailyQuestDone] = useState<Set<string>>(new Set());
  const [weeklyQuestProgress, setWeeklyQuestProgress] = useState<Record<string, number>>({});
  const [weeklyQuestDone, setWeeklyQuestDone] = useState<Set<string>>(new Set());
  // セッション蓄積 refs (書き込み最小化)
  const sessionCorrectRef = useRef(0);
  const sessionAnsweredRef = useRef(0);

  // Sync refs
  useEffect(() => { isHostRef.current = isHost; }, [isHost]);
  useEffect(() => { currentRoomIdRef.current = currentRoomId; }, [currentRoomId]);
  useEffect(() => { gameModeRef.current = gameMode; }, [gameMode]);
  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);
  useEffect(() => { speedPhaseRef.current = speedPhase; }, [speedPhase]);
  useEffect(() => { battleTypeRef.current = battleType; }, [battleType]);

  // ============================
  // localStorage sync
  // ============================
  useEffect(() => {
    localStorage.setItem('battleMathPoints', JSON.stringify(mathPoints));
    localStorage.setItem('battleMathOwnedCardIds', JSON.stringify(Array.from(ownedCardIds)));
    localStorage.setItem('battleMathPlayerLevel', JSON.stringify(playerLevel));
    localStorage.setItem('battleMathPlayerExp', JSON.stringify(playerExp));
    localStorage.setItem('battleMathUserLevelStats', JSON.stringify(userLevelStats));
    if (studentProfile) localStorage.setItem('battleMathStudentProfile', JSON.stringify(studentProfile));
    localStorage.setItem('bm_owned_shop_items', JSON.stringify(Array.from(ownedShopItems)));
    if (equippedTitle) localStorage.setItem('bm_equipped_title', equippedTitle);
    else localStorage.removeItem('bm_equipped_title');
    if (equippedTheme) localStorage.setItem('bm_equipped_theme', equippedTheme);
    else localStorage.removeItem('bm_equipped_theme');
    localStorage.setItem('bm_earned_titles', JSON.stringify(Array.from(earnedTitleIds)));
    localStorage.setItem('bm_hint_tokens', String(hintTokens));
    if (expBoosterActive) localStorage.setItem('bm_exp_booster', '1');
    else localStorage.removeItem('bm_exp_booster');
    if (activeBooster && Date.now() < activeBooster.expiresAt) {
      localStorage.setItem('bm_active_booster', JSON.stringify(activeBooster));
    } else {
      localStorage.removeItem('bm_active_booster');
    }
  }, [mathPoints, ownedCardIds, playerLevel, playerExp, userLevelStats, studentProfile, ownedShopItems, equippedTitle, equippedTheme, earnedTitleIds, hintTokens, expBoosterActive, activeBooster]);

  const ownedCards = useMemo(
    () => CARD_DEFINITIONS.filter(c => ownedCardIds.has(c.id)),
    [ownedCardIds]
  );

  // Splash screen timer (minimum 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // ============================
  // Firebase Auth
  // ============================
  useEffect(() => {
    if (!auth) { setAuthLoading(false); return; }

    // Handle redirect result (for mobile/popup-blocked environments)
    getRedirectResult(auth).catch((e) => {
      console.warn('Redirect result check:', e);
    });

    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setAuthLoading(false);
      if (u && db) {
        // Sync user data from Firestore
        const ref = doc(db, 'users', u.uid);
        try {
          const snap = await getDoc(ref);
          if (snap.exists()) {
            const d = snap.data();
            if (d.mathPoints !== undefined) setMathPoints(d.mathPoints);
            if (d.playerLevel !== undefined) setPlayerLevel(d.playerLevel);
            if (d.playerExp !== undefined) setPlayerExp(d.playerExp);
            if (d.ownedCardIds) setOwnedCardIds(new Set(d.ownedCardIds));
            // ゲーミフィケーションデータ読み込み
            if (d.earnedBadgeIds) setEarnedBadgeIds(new Set(d.earnedBadgeIds));
            if (d.totalCorrectAnswers !== undefined) setTotalCorrectAnswers(d.totalCorrectAnswers);
            if (d.totalWins !== undefined) setTotalWins(d.totalWins);
            if (d.earnedTitleIds) setEarnedTitleIds(prev => new Set([...prev, ...d.earnedTitleIds]));
            // 学校・学年・組・番号情報をFirestoreから復元
            // school フィールドがない既存ユーザーは第三中学校をデフォルト設定
            if (d.studentProfile) {
              const sp = d.studentProfile;
              let needsSync = false;
              if (!sp.school) {
                sp.school = '第三中学校';
                sp.displayLabel = `第三中学校 ${sp.grade}年${sp.classNum}組${sp.number}番`;
                needsSync = true;
              }
              if (!sp.schoolYear) {
                sp.schoolYear = DEFAULT_SCHOOL_YEAR;
                needsSync = true;
              }
              if (needsSync) {
                updateDoc(ref, { studentProfile: sp }).catch(() => {});
              }
              setStudentProfile(sp);
              localStorage.setItem('battleMathStudentProfile', JSON.stringify(sp));
            }
            // ログインストリーク計算
            const today = getTodayStr();
            const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().slice(0, 10);
            const lastLogin: string = d.lastLoginDate || '';
            let newStreak: number = d.loginStreak || 0;
            if (lastLogin !== today) {
              if (lastLogin === yesterdayStr) {
                // 連続ログイン
                newStreak = newStreak + 1;
              } else if (d.hasStreakShield && lastLogin) {
                // ストリークシールド発動
                // streak維持、シールドを消費
                await updateDoc(ref, { loginStreak: newStreak, lastLoginDate: today, hasStreakShield: false }).catch(() => {});
                setOwnedShopItems(prev => { const n = new Set(prev); n.delete('streak_shield'); return n; });
                setLoginStreak(newStreak);
                setLoginBonusClaimed(false);
                setTimeout(() => setShowLoginBonus(true), 800);
                setTimeout(() => checkMonthlyChampion(), 2000);
                // シールド使用通知はloginBonusModal側で表示（shieldUsedフラグ不要）
                return;
              } else {
                newStreak = 1;
              }
              await updateDoc(ref, { loginStreak: newStreak, lastLoginDate: today }).catch(() => {});
              // Show login bonus modal automatically on new day
              setLoginBonusClaimed(false);
              setTimeout(() => setShowLoginBonus(true), 800);
            } else {
              // Already logged in today - check if bonus was claimed
              setLoginBonusClaimed(!!d.loginBonusClaimedDate && d.loginBonusClaimedDate === today);
            }
            setLoginStreak(newStreak);
            // 月次チャンピオン称号チェック（ログイン時1回のみ）
            setTimeout(() => checkMonthlyChampion(), 2000);
          } else {
            // First login: initialize user doc
            await setDoc(ref, {
              uid: u.uid,
              displayName: u.displayName,
              email: u.email,
              photoURL: u.photoURL,
              mathPoints,
              playerLevel,
              playerExp,
              totalWins: 0,
              totalMatches: 0,
              ownedCardIds: Array.from(ownedCardIds),
              earnedBadgeIds: [],
              totalCorrectAnswers: 0,
              totalAnswered: 0,
              loginStreak: 1,
              lastLoginDate: getTodayStr(),
              loginBonusClaimedDate: '',
              studentProfile: studentProfile || null,
              createdAt: serverTimestamp(),
            });
            setLoginStreak(1);
            setLoginBonusClaimed(false);
            setTimeout(() => setShowLoginBonus(true), 800);
          }
          // クエスト進捗をlocalStorageから復元
          const dqKey = `bm_dq_${getTodayStr()}`;
          const wqKey = `bm_wq_${getWeekStart()}`;
          try {
            setDailyQuestProgress(JSON.parse(localStorage.getItem(dqKey) || '{}'));
            setWeeklyQuestProgress(JSON.parse(localStorage.getItem(wqKey) || '{}'));
            setDailyQuestDone(new Set(JSON.parse(localStorage.getItem(`${dqKey}_done`) || '[]')));
            setWeeklyQuestDone(new Set(JSON.parse(localStorage.getItem(`${wqKey}_done`) || '[]')));
          } catch {}
        } catch (e) { console.error('User sync error:', e); }
      }
    });
    return () => unsub();
  }, []);

  const saveUserToFirestore = useCallback(async (updates: Record<string, any>) => {
    if (!user || !db) return;
    try {
      await updateDoc(doc(db, 'users', user.uid), updates);
    } catch (e) { console.error('Firestore update error:', e); }
  }, [user]);

  // ============================
  // バッジ獲得
  // エビデンスB: 自己決定理論 × 有能感フィードバック（Deci & Ryan 1985）
  // ============================
  const earnBadge = useCallback((badgeId: string) => {
    setEarnedBadgeIds(prev => {
      if (prev.has(badgeId)) return prev;
      const badge = BADGE_DEFS.find(b => b.id === badgeId);
      if (!badge) return prev;
      setPendingBadge(badge);
      setMathPoints(p => p + 100);
      // Firestore にバッジ追加 (arrayUnion で冪等性確保)
      if (user && db) {
        updateDoc(doc(db, 'users', user.uid), {
          earnedBadgeIds: arrayUnion(badgeId),
          mathPoints: increment(100),
        }).catch(() => {});
      }
      return new Set(prev).add(badgeId);
    });
  }, [user]);

  // ============================
  // クエスト進捗更新
  // エビデンスA: 目標設定理論（Locke & Latham 1990）
  // ============================
  const handleQuestProgress = useCallback((type: 'correct' | 'pvp_match') => {
    const dqKey = `bm_dq_${getTodayStr()}`;
    const wqKey = `bm_wq_${getWeekStart()}`;

    setDailyQuestProgress(prev => {
      const next = { ...prev };
      if (type === 'correct') {
        next['dq_5'] = (next['dq_5'] || 0) + 1;
        next['dq_15'] = (next['dq_15'] || 0) + 1;
        next['dq_30'] = (next['dq_30'] || 0) + 1;
      } else if (type === 'pvp_match') {
        next['dq_pvp'] = (next['dq_pvp'] || 0) + 1;
      }
      localStorage.setItem(dqKey, JSON.stringify(next));
      // クエスト達成チェック
      setDailyQuestDone(prevDone => {
        const newDone = new Set(prevDone);
        DAILY_QUEST_DEFS.forEach(q => {
          if (!newDone.has(q.id) && (next[q.id] || 0) >= q.target) {
            newDone.add(q.id);
            setMathPoints(p => p + q.reward.mp);
            if (user && db) {
              updateDoc(doc(db, 'users', user.uid), { mathPoints: increment(q.reward.mp) }).catch(() => {});
            }
          }
        });
        localStorage.setItem(`${dqKey}_done`, JSON.stringify([...newDone]));
        return newDone;
      });
      return next;
    });

    setWeeklyQuestProgress(prev => {
      const next = { ...prev };
      if (type === 'correct') {
        next['wq_50'] = (next['wq_50'] || 0) + 1;
        next['wq_100'] = (next['wq_100'] || 0) + 1;
      } else if (type === 'pvp_match') {
        next['wq_pvp3'] = (next['wq_pvp3'] || 0) + 1;
      }
      localStorage.setItem(wqKey, JSON.stringify(next));
      setWeeklyQuestDone(prevDone => {
        const newDone = new Set(prevDone);
        WEEKLY_QUEST_DEFS.forEach(q => {
          if (!newDone.has(q.id) && (next[q.id] || 0) >= q.target) {
            newDone.add(q.id);
            setMathPoints(p => p + q.reward.mp);
            if (user && db) {
              updateDoc(doc(db, 'users', user.uid), { mathPoints: increment(q.reward.mp) }).catch(() => {});
            }
          }
        });
        localStorage.setItem(`${wqKey}_done`, JSON.stringify([...newDone]));
        return newDone;
      });
      return next;
    });
  }, [user]);

  // ============================
  // 称号システム
  // ============================
  const earnTitle = useCallback((titleId: string) => {
    setEarnedTitleIds(prev => {
      if (prev.has(titleId)) return prev;
      if (!TITLE_DEFS.find(t => t.id === titleId)) return prev;
      if (user && db) {
        updateDoc(doc(db, 'users', user.uid), {
          earnedTitleIds: arrayUnion(titleId),
        }).catch(() => {});
      }
      return new Set(prev).add(titleId);
    });
  }, [user]);

  const checkTitleConditions = useCallback((snapshot: {
    totalCorrectAnswers: number;
    totalWins: number;
    loginStreak: number;
    playerLevel: number;
    earnedBadgeIds: Set<string>;
  }) => {
    TITLE_DEFS.filter(t => !t.isMonthly).forEach(title => {
      const { type, value = 0, badgeId } = title.condition;
      let satisfied = false;
      switch (type) {
        case 'any': satisfied = true; break;
        case 'total_correct': satisfied = snapshot.totalCorrectAnswers >= value; break;
        case 'total_wins': satisfied = snapshot.totalWins >= value; break;
        case 'login_streak': satisfied = snapshot.loginStreak >= value; break;
        case 'level': satisfied = snapshot.playerLevel >= value; break;
        case 'badge_owned': satisfied = !!badgeId && snapshot.earnedBadgeIds.has(badgeId); break;
      }
      if (satisfied) earnTitle(title.id);
    });
  }, [earnTitle]);

  const checkMonthlyChampion = useCallback(async () => {
    if (!db || !user) return;
    try {
      const monthKey = new Date().toISOString().slice(0, 7);
      const snap = await getDoc(doc(db, 'config', `monthly_champion_${monthKey}`));
      const isChampion = snap.exists() && snap.data()?.winnerUid === user.uid;
      if (isChampion) {
        earnTitle('title_monthly_champion');
      } else {
        setEarnedTitleIds(prev => {
          const next = new Set(prev);
          next.delete('title_monthly_champion');
          return next;
        });
        if (equippedTitle === 'title_monthly_champion') setEquippedTitle(null);
      }
    } catch {}
  }, [user, equippedTitle, earnTitle]);

  // ============================
  // 正解イベント統合処理
  // チェイン・バッジ・クエスト・クラス蓄積
  // ============================
  const onCorrectAnswerEvent = useCallback((isCorrect: boolean, correctAnswer: string) => {
    // 全回答数をトラック（正答率計算用）
    sessionAnsweredRef.current += 1;
    if (isCorrect) {
      // チェインカウンター更新
      setChainCount(prev => {
        const next = prev + 1;
        if (next === 5) earnBadge('chain_5');
        if (next === 10) earnBadge('chain_10');
        if (next === 20) earnBadge('chain_20');
        return next;
      });
      setWrongAnswerText(null);
      // 累積カウンター
      sessionCorrectRef.current += 1;
      setTotalCorrectAnswers(prev => {
        const next = prev + 1;
        if (next === 1) earnBadge('first_correct');
        if (next === 50) earnBadge('correct_50');
        if (next === 100) earnBadge('correct_100');
        if (next === 500) earnBadge('correct_500');
        if (next === 1000) earnBadge('correct_1000');
        return next;
      });
      // クエスト進捗
      handleQuestProgress('correct');
    } else {
      // 不正解: チェインリセット、正解ヒント表示
      setChainCount(0);
      setWrongAnswerText(correctAnswer);
    }
  }, [earnBadge, handleQuestProgress]);

  // ログインストリークバッジ
  useEffect(() => {
    if (loginStreak >= 3) earnBadge('streak_3');
    if (loginStreak >= 7) earnBadge('streak_7');
    if (loginStreak >= 14) earnBadge('streak_14');
    if (loginStreak >= 30) earnBadge('streak_30');
    // ログインストリーク称号チェック
    checkTitleConditions({ totalCorrectAnswers, totalWins, loginStreak, playerLevel, earnedBadgeIds });
  }, [loginStreak, earnBadge, checkTitleConditions, totalCorrectAnswers, totalWins, playerLevel, earnedBadgeIds]);

  // 正解ヒント自動クリア（3秒後）
  useEffect(() => {
    if (!wrongAnswerText) return;
    const t = setTimeout(() => setWrongAnswerText(null), 3000);
    return () => clearTimeout(t);
  }, [wrongAnswerText]);

  // ============================
  // セッションデータ書き込み (Firestore quota最小化)
  // ============================
  const flushSessionData = useCallback(async () => {
    if (!user || !db) return;
    const updates: Record<string, any> = {};
    if (sessionCorrectRef.current > 0) {
      updates.totalCorrectAnswers = increment(sessionCorrectRef.current);
      sessionCorrectRef.current = 0;
    }
    if (sessionAnsweredRef.current > 0) {
      updates.totalAnswered = increment(sessionAnsweredRef.current);
      sessionAnsweredRef.current = 0;
    }
    if (Object.keys(updates).length > 0) {
      await updateDoc(doc(db, 'users', user.uid), updates).catch(() => {});
    }
  }, [user]);

  // ============================
  // Auth Handlers
  // ============================
  const handleLogin = async () => {
    if (!auth || !googleProvider) {
      console.error('Firebase auth not initialized. auth:', !!auth, 'provider:', !!googleProvider);
      return;
    }
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e: any) {
      console.warn('Popup login failed, trying redirect:', e?.code || e);
      // Fallback to redirect for mobile/popup-blocked environments
      if (e?.code === 'auth/popup-blocked' || e?.code === 'auth/popup-closed-by-user' || e?.code === 'auth/cancelled-popup-request') {
        try {
          await signInWithRedirect(auth, googleProvider);
        } catch (redirectError) {
          console.error('Redirect login also failed:', redirectError);
        }
      }
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    try {
      await leaveRoom(currentRoomId, isHost);
      await flushSessionData();
      await signOut(auth);
      setGameState('login_screen');
      cleanupGameSession();
    } catch (e) { console.error('Logout failed:', e); }
  };

  const handleStudentProfileSet = useCallback(async (profile: StudentProfile) => {
    setStudentProfile(profile);
    localStorage.setItem('battleMathStudentProfile', JSON.stringify(profile));
    if (user && db) {
      try {
        await updateDoc(doc(db, 'users', user.uid), {
          studentProfile: profile,
        });
      } catch (e) { console.error('Student profile sync error:', e); }
    }
  }, [user]);

  // 新年度チェック（studentProfile が初めてセットされた時に1回のみ）
  useEffect(() => {
    if (!studentProfile || newYearCheckedRef.current) return;
    newYearCheckedRef.current = true;

    const currentSchoolYear = getCurrentSchoolYear();
    if ((studentProfile.schoolYear ?? DEFAULT_SCHOOL_YEAR) < currentSchoolYear) {
      const lastSkipped = parseInt(localStorage.getItem('beng_newYearSkippedAt') || '0', 10);
      const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
      if (!lastSkipped || Date.now() - lastSkipped > threeDaysMs) {
        setShowNewYearPrompt(true);
      }
    }
  }, [studentProfile]);

  // 新年度更新確定ハンドラー
  const handleNewYearConfirm = async (updated: StudentProfile) => {
    setShowNewYearPrompt(false);
    localStorage.removeItem('beng_newYearSkippedAt');
    await handleStudentProfileSet(updated);
  };

  // 新年度スキップハンドラー（3日後に再表示）
  const handleNewYearSkip = () => {
    localStorage.setItem('beng_newYearSkippedAt', String(Date.now()));
    setShowNewYearPrompt(false);
  };

  const handleGuestPlay = () => {
    setGameState(tutorialDone ? 'main_menu' : 'tutorial');
  };

  const handleClaimLoginBonus = useCallback(() => {
    const reward = getLoginReward(loginStreak);
    setMathPoints(p => p + reward);
    setLoginBonusClaimed(true);
    if (user && db) {
      updateDoc(doc(db, 'users', user.uid), {
        mathPoints: increment(reward),
        loginBonusClaimedDate: getTodayStr(),
      }).catch(() => {});
    }
  }, [loginStreak, user]);

  const handleShopPurchase = useCallback((item: ShopItemDef) => {
    if (mathPoints < item.cost) return;
    // 消耗品は重複購入可
    if (item.type !== 'hint_token' && item.type !== 'mp_booster' && item.type !== 'exp_booster') {
      if (ownedShopItems.has(item.id)) return;
    }
    setMathPoints(p => p - item.cost);
    if (user && db) {
      updateDoc(doc(db, 'users', user.uid), { mathPoints: increment(-item.cost) }).catch(() => {});
    }
    // 消耗品処理
    if (item.type === 'hint_token') {
      setHintTokens(prev => prev + 1);
      return;
    }
    if (item.type === 'mp_booster') {
      const booster: ActiveBooster = { type: 'mp_booster', expiresAt: Date.now() + (item.durationMs || 3600000), multiplier: 2 };
      setActiveBooster(booster);
      return;
    }
    if (item.type === 'exp_booster') {
      setExpBoosterActive(true);
      return;
    }
    // 通常アイテム（シールド・テーマ）
    setOwnedShopItems(prev => new Set([...prev, item.id]));
    if (item.type === 'streak_shield' && user && db) {
      updateDoc(doc(db, 'users', user.uid), { hasStreakShield: true }).catch(() => {});
    }
  }, [ownedShopItems, mathPoints, user]);

  // 分野マスターバッジチェック
  const checkCategoryMasterBadges = useCallback(() => {
    const stats = getCategoryStats();
    const categoryBadgeMap: Record<string, string> = {
      '式の計算': 'master_polynomial',
      '連立方程式': 'master_equation',
      '図形の性質': 'master_geometry',
      '一次関数': 'master_function',
      '確率': 'master_probability',
      'データの活用': 'master_data',
    };
    let masteredCount = 0;
    Object.entries(categoryBadgeMap).forEach(([cat, badgeId]) => {
      const s = stats[cat];
      if (s && s.total >= 10 && (s.correct / s.total) >= 0.85) {
        earnBadge(badgeId);
        masteredCount++;
      }
    });
    if (masteredCount >= Object.keys(categoryBadgeMap).length) {
      earnBadge('all_master');
    }
  }, [earnBadge]);

  const canAccessGameMaster = true;

  const handleOpenGameMaster = () => {
    const pass = window.prompt('Game Master パスワードを入力:');
    if (pass === GAMEMASTER_PASSWORD) setGameState('gamemaster');
  };

  // ============================
  // Progression
  // ============================
  const expForNextLevel = useCallback((level: number) => 100 + (level - 1) * 50, []);

  // Refs to break useCallback dependency cycle (prevents infinite re-render on level-up)
  const playerLevelRef = useRef(playerLevel);
  const playerExpRef = useRef(playerExp);
  const mathPointsRef = useRef(mathPoints);
  const ownedCardIdsRef = useRef(ownedCardIds);
  useEffect(() => { playerLevelRef.current = playerLevel; }, [playerLevel]);
  useEffect(() => { playerExpRef.current = playerExp; }, [playerExp]);
  useEffect(() => { mathPointsRef.current = mathPoints; }, [mathPoints]);
  useEffect(() => { ownedCardIdsRef.current = ownedCardIds; }, [ownedCardIds]);

  /** MPブースターが有効な場合、MP報酬を倍増して加算 */
  const addBoostedMp = useCallback((amount: number) => {
    const boosted = activeBooster?.type === 'mp_booster' && Date.now() < (activeBooster?.expiresAt || 0)
      ? Math.round(amount * activeBooster.multiplier)
      : amount;
    setMathPoints(p => p + boosted);
    if (user && db) {
      updateDoc(doc(db, 'users', user.uid), { mathPoints: increment(boosted) }).catch(() => {});
    }
  }, [activeBooster, user]);

  const addExp = useCallback((amount: number) => {
    const boostedAmount = expBoosterActive ? amount * 2 : amount;
    if (expBoosterActive) {
      setExpBoosterActive(false);
    }
    let currentExp = playerExpRef.current + boostedAmount;
    let currentLevel = playerLevelRef.current;
    const oldLevel = currentLevel;
    let totalMpReward = 0;
    while (currentExp >= expForNextLevel(currentLevel)) {
      currentExp -= expForNextLevel(currentLevel);
      currentLevel++;
      totalMpReward += currentLevel * 100;
    }
    if (currentLevel > oldLevel) {
      let newCard: ProblemCard | null = null;
      const unowned = CARD_DEFINITIONS.filter(c => !ownedCardIdsRef.current.has(c.id));
      if (unowned.length > 0) {
        newCard = shuffleDeck(unowned)[0];
        setOwnedCardIds(prev => new Set(prev).add(newCard!.id));
      } else {
        totalMpReward += 500;
      }
      setMathPoints(p => p + totalMpReward);
      setLevelUpInfo({ oldLevel, newLevel: currentLevel, mpReward: totalMpReward, newCard });
      setPlayerLevel(currentLevel);
      saveUserToFirestore({ playerLevel: currentLevel, mathPoints: mathPointsRef.current + totalMpReward });
    }
    setPlayerExp(currentExp);
    saveUserToFirestore({ playerExp: currentExp });
  }, [expForNextLevel, saveUserToFirestore]);

  // ============================
  // Room / PvP watch
  // ============================
  // エビデンスA: Firestore query最適化 - finishedルームを除外
  useEffect(() => {
    if (gameState !== 'matchmaking' || !db) return;
    const q = query(
      collection(db, 'rooms'),
      where('status', 'in', ['waiting', 'playing']),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    return onSnapshot(q, snap => {
      const list: Room[] = [];
      const now = Date.now();
      snap.forEach(d => {
        const data = d.data() as Room;
        if (!data.roomId) data.roomId = d.id;
        // クライアント側ゾンビ除去: 10分以上前のwaitingルーム
        if (data.status === 'waiting' && data.createdAt) {
          const createdMs = data.createdAt.toDate ? data.createdAt.toDate().getTime() : 0;
          if (createdMs > 0 && now - createdMs > 10 * 60 * 1000) {
            updateDoc(doc(db, 'rooms', d.id), { status: 'finished', winnerId: 'abandoned' }).catch(() => {});
            return;
          }
        }
        // クライアント側ゾンビ除去: playing状態で片方でも3分以上不活性、
        // または両者とも2分以上不活性の場合はゾンビと判定
        if (data.status === 'playing') {
          const hostActive = data.hostLastActive?.toDate ? data.hostLastActive.toDate().getTime() : 0;
          const guestActive = data.guestLastActive?.toDate ? data.guestLastActive.toDate().getTime() : 0;
          const singleStaleMs = 3 * 60 * 1000; // 片方が3分不活性
          const bothStaleMs = 2 * 60 * 1000;   // 両方が2分不活性
          const hostStale = hostActive > 0 && now - hostActive > singleStaleMs;
          const guestStale = guestActive > 0 && now - guestActive > singleStaleMs;
          const bothInactive = hostActive > 0 && guestActive > 0
            && now - hostActive > bothStaleMs && now - guestActive > bothStaleMs;
          if (hostStale || guestStale || bothInactive) {
            // 片方だけ不活性なら、活性側を勝者にする
            let winnerId: string = 'abandoned';
            if (hostStale && !guestStale) winnerId = 'guest';
            else if (guestStale && !hostStale) winnerId = 'host';
            updateDoc(doc(db, 'rooms', d.id), { status: 'finished', winnerId }).catch(() => {});
            return;
          }
        }
        list.push(data);
      });
      setRooms(list);
    }, (error) => {
      const msg = error?.message || '';
      if (msg.includes('not found') || msg.includes('404') || error?.code === 'not-found') {
        setFirestoreError('Firestoreデータベースが未作成です。Firebase Console で Firestore Database を有効化してください。');
      } else if (msg.includes('offline') || msg.includes('unavailable')) {
        setFirestoreError('サーバーに接続できません。インターネット接続を確認してください。');
      } else {
        setFirestoreError(`接続エラー: ${msg}`);
      }
    });
  }, [gameState]);

  // エビデンスA: Firebase公式 - ドキュメントライフサイクル管理
  // ルーム離脱時にFirestoreステータスを更新し、ゾンビルームを防止
  const leaveRoom = useCallback(async (roomId: string | null, wasHost: boolean) => {
    if (!roomId || !db) return;
    try {
      const roomRef = doc(db, 'rooms', roomId);
      const snap = await getDoc(roomRef);
      if (!snap.exists()) return;
      const data = snap.data() as Room;
      if (data.status === 'finished') return;
      if (data.status === 'waiting' && wasHost) {
        // ホストが待機中に離脱 → ルームを終了
        await updateDoc(roomRef, { status: 'finished', winnerId: 'abandoned' });
      } else if (data.status === 'playing') {
        // 対戦中に離脱 → 相手の勝利
        await updateDoc(roomRef, {
          status: 'finished',
          winnerId: wasHost ? 'guest' : 'host',
        });
      }
    } catch (e) { console.error('leaveRoom error:', e); }
  }, []);

  const cleanupGameSession = useCallback((keepConn = false) => {
    if (!keepConn) {
      if (unsubscribeRoomRef.current) unsubscribeRoomRef.current();
      setCurrentRoomId(null);
      setIsHost(false);
      setOpponentDisconnected(false);
    }
    processedMatchIdRef.current = null;
    setWinner(null);
    setPlayerPlayedCard(null);
    setPcPlayedCard(null);
    setMismatchRound(false);
    setPlayerRoundWins(0);
    setPcRoundWins(0);
    setCurrentRound(1);
    setTurnPhase('selecting_card');
  }, []);

  // ブラウザ閉じ/タブ閉じ/iPad切替時のルームクリーンアップ
  // pagehide: iOS Safari で beforeunload より信頼性が高い
  // visibilitychange: iPad のホーム画面切替やアプリ切替を検知
  useEffect(() => {
    const markRoomFinished = () => {
      const rid = currentRoomIdRef.current;
      if (!rid || !db) return;
      const roomRef = doc(db, 'rooms', rid);
      updateDoc(roomRef, {
        status: 'finished',
        winnerId: isHostRef.current ? 'guest' : 'host',
      }).catch(() => {});
    };

    // pagehide は iOS Safari でページ離脱時に発火する（beforeunloadより信頼性高）
    const handlePageHide = (e: PageTransitionEvent) => {
      // persisted=true (bfcache) の場合は戻ってくる可能性があるのでスキップ
      if (!e.persisted) {
        markRoomFinished();
      }
    };

    // visibilitychange で iPad のアプリ切替/ホーム画面移動を検知
    // hidden になってから一定時間戻らない場合のための保険タイマー
    let hiddenTimer: NodeJS.Timeout | null = null;
    const handleVisibilityChange = () => {
      const rid = currentRoomIdRef.current;
      if (!rid || !db) return;
      if (document.hidden) {
        // hidden になったら即座に lastActive を更新（最後の生存信号）
        const field = isHostRef.current ? 'hostLastActive' : 'guestLastActive';
        updateDoc(doc(db, 'rooms', rid), { [field]: serverTimestamp() }).catch(() => {});
        // 60秒後もまだ hidden ならルームを終了（長時間離脱対策）
        hiddenTimer = setTimeout(() => {
          if (document.hidden && currentRoomIdRef.current === rid) {
            markRoomFinished();
          }
        }, 60000);
      } else {
        // visible に戻ったらタイマーをキャンセル
        if (hiddenTimer) { clearTimeout(hiddenTimer); hiddenTimer = null; }
        // 復帰時にハートビートを即時送信
        const field = isHostRef.current ? 'hostLastActive' : 'guestLastActive';
        updateDoc(doc(db, 'rooms', rid), { [field]: serverTimestamp() }).catch(() => {});
      }
    };

    // beforeunload も残す（デスクトップブラウザ用）
    const handleBeforeUnload = () => markRoomFinished();

    window.addEventListener('pagehide', handlePageHide);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (hiddenTimer) clearTimeout(hiddenTimer);
    };
  }, []);

  const listenToRoom = (roomId: string) => {
    if (!db) return;
    if (unsubscribeRoomRef.current) unsubscribeRoomRef.current();
    unsubscribeRoomRef.current = onSnapshot(doc(db, 'rooms', roomId), snap => {
      if (!snap.exists()) {
        // ルームが削除された場合
        setOpponentDisconnected(true);
        return;
      }
      const data = snap.data() as Room;
      const isHostVal = isHostRef.current;

      // 相手の切断検知（lastActiveが60秒以上古い場合）
      // ハートビート30秒に合わせてしきい値を60秒に短縮
      if (data.status === 'playing') {
        const opponentLastActive = isHostVal ? data.guestLastActive : data.hostLastActive;
        if (opponentLastActive) {
          const lastActiveMs = opponentLastActive.toDate ? opponentLastActive.toDate().getTime() : 0;
          const staleThreshold = 60000; // 60秒（ハートビート30秒 × 2回分）
          const autoEndThreshold = 120000; // 120秒で自動終了
          if (lastActiveMs > 0 && Date.now() - lastActiveMs > staleThreshold) {
            setOpponentDisconnected(true);
            // 120秒以上応答がなければ自動的にルームを終了（勝利宣言不要）
            if (Date.now() - lastActiveMs > autoEndThreshold) {
              const roomRef = doc(db!, 'rooms', roomId);
              updateDoc(roomRef, {
                status: 'finished',
                winnerId: isHostVal ? 'host' : 'guest',
              }).catch(() => {});
            }
          } else {
            setOpponentDisconnected(false);
          }
        }
      }

      // ルームが外部要因で finished になった場合（相手離脱・管理者終了等）
      if (data.status === 'finished' && (data.winnerId === 'abandoned' || data.winnerId === 'admin_terminated')) {
        cleanupGameSession();
        setGameState(battleTypeRef.current === 'speed_duel' ? 'speed_duel_setup' : 'deck_building');
        return;
      }

      if (data.status === 'playing' && gameStateRef.current === 'matchmaking') {
        setCurrentRound(1);
        processedMatchIdRef.current = null;

        if (data.battleType === 'speed_duel' && data.speedProblems) {
          // Speed Duel PvP: load problems from room and start
          setBattleType('speed_duel');
          setSpeedProblems(data.speedProblems as Problem[]);
          setSpeedTotalRounds(data.speedTotalRounds || 5);
          setBattleFormat((data.speedFormat as BattleFormat) || 'best_of_5');
          setSpeedRound(1);
          setSpeedPlayerScore(0);
          setSpeedOpponentScore(0);
          setSpeedPlayerAnswered(false);
          setSpeedOpponentAnswered(false);
          setSpeedRoundWinner(null);
          setSpeedGameResult(null);
          setSpeedPhase('countdown');
          setGameState('speed_duel');
          setTimeout(() => {
            setSpeedPhase('answering');
            setSpeedTimeLeft(30);
          }, 2000);
        } else {
          setTimeout(() => {
            const deckToUse = pvpDeckRef.current.length > 0 ? pvpDeckRef.current : playerDeck;
            startGame(deckToUse, false, data);
            setGameState('in_game');
          }, 500);
        }
      }

      // Speed Duel PvP: sync round results from Firestore
      if (gameStateRef.current === 'speed_duel' && data.battleType === 'speed_duel') {
        const myScore = isHostVal ? (data.speedP1Score || 0) : (data.speedP2Score || 0);
        const oppScore = isHostVal ? (data.speedP2Score || 0) : (data.speedP1Score || 0);
        setSpeedPlayerScore(myScore);
        setSpeedOpponentScore(oppScore);

        const oppAnswer = isHostVal ? data.speedP2Answer : data.speedP1Answer;
        if (oppAnswer) setSpeedOpponentAnswered(true);

        // Round resolved by opponent's correct answer
        if (data.speedRoundWinner && speedPhaseRef.current === 'answering') {
          if (speedTimerRef.current) clearInterval(speedTimerRef.current);
          const winner = data.speedRoundWinner;
          if ((winner === 'host' && isHostVal) || (winner === 'guest' && !isHostVal)) {
            setSpeedRoundWinner('player');
          } else {
            setSpeedRoundWinner('opponent');
          }
          setSpeedPhase('round_result');
        }

        // Match finished
        if (data.winnerId && processedMatchIdRef.current !== roomId) {
          processedMatchIdRef.current = roomId;
          const isWinner = (data.winnerId === 'host' && isHostVal) || (data.winnerId === 'guest' && !isHostVal);
          setSpeedGameResult(data.winnerId === 'draw' ? 'draw' : isWinner ? 'win' : 'lose');
          setSpeedPhase('match_over');
          flushSessionData().catch(() => {});
        }
      }

      if (gameStateRef.current === 'in_game') {
        setPlayerHP(isHostVal ? data.p1Hp : data.p2Hp);
        setPcHP(isHostVal ? data.p2Hp : data.p1Hp);

        if (data.winnerId && processedMatchIdRef.current !== roomId) {
          processedMatchIdRef.current = roomId;
          const isWinner = (data.winnerId === 'host' && isHostVal) || (data.winnerId === 'guest' && !isHostVal);
          const isAbandoned = data.winnerId === 'abandoned' || data.winnerId === 'admin_terminated';
          if (isAbandoned) {
            setWinner('中断されました');
          } else {
            setWinner(data.winnerId === 'draw' ? '引き分け' : isWinner ? '勝利！' : '敗北...');
          }
          if (isWinner && !isAbandoned) {
            addExp(500);
            addBoostedMp(300);
            saveUserToFirestore({ totalWins: increment(1), totalMatches: increment(1) });
            earnBadge('first_pvp_win');
            // PvP10勝バッジチェックはサーバー側totalWinsで判断できないので省略
          } else if (!isAbandoned) {
            addExp(100);
            saveUserToFirestore({ totalMatches: increment(1) });
          }
          if (!isAbandoned) handleQuestProgress('pvp_match');
          flushSessionData().catch(() => {}); // fire-and-forget
          setChainCount(0);
          setGameState('end');
        }
      }
    }, (error) => {
      const msg = error?.message || '';
      if (msg.includes('not found') || msg.includes('404') || error?.code === 'not-found') {
        console.error('[BattleMath] Firestoreデータベースが未作成です');
      } else {
        console.error('[BattleMath] Room listener error:', msg);
      }
    });
  };

  const handleJoinRoom = async (roomId: string) => {
    if (!user || !db) {
      alert('PvP対戦にはログインが必要です');
      return;
    }
    cleanupGameSession(false);
    const uid = user.uid.trim();

    try {
      // ゾンビ部屋防止: 自分がホストの未終了ルームを自動クリーンアップ
      const myHostRoomsSnap = await getDocs(
        query(
          collection(db, 'rooms'),
          where('hostId', '==', uid),
          where('status', 'in', ['waiting', 'playing']),
        )
      );
      const cleanupPromises: Promise<void>[] = [];
      myHostRoomsSnap.forEach(d => {
        if (d.id !== roomId) {
          cleanupPromises.push(
            updateDoc(doc(db, 'rooms', d.id), {
              status: 'finished',
              winnerId: 'abandoned',
            }).catch(() => {})
          );
        }
      });
      // 自分がゲストの未終了ルームも同様にクリーンアップ
      const myGuestRoomsSnap = await getDocs(
        query(
          collection(db, 'rooms'),
          where('guestId', '==', uid),
          where('status', 'in', ['waiting', 'playing']),
        )
      );
      myGuestRoomsSnap.forEach(d => {
        if (d.id !== roomId) {
          cleanupPromises.push(
            updateDoc(doc(db, 'rooms', d.id), {
              status: 'finished',
              winnerId: 'abandoned',
            }).catch(() => {})
          );
        }
      });
      if (cleanupPromises.length > 0) {
        await Promise.all(cleanupPromises);
        console.log(`Cleaned up ${cleanupPromises.length} zombie room(s) for user ${uid}`);
      }
    } catch (cleanupErr) {
      console.warn('Zombie room cleanup failed (non-blocking):', cleanupErr);
    }

    try {
      const roomRef = doc(db, 'rooms', roomId);
      const result = await runTransaction(db, async (tx) => {
        const roomDoc = await tx.get(roomRef);
        const base: Record<string, any> = {
          roomId, status: 'waiting', hostId: uid,
          hostName: user.displayName || 'Player',
          guestId: null, guestName: null,
          createdAt: serverTimestamp(), hostLastActive: serverTimestamp(),
          guestLastActive: null, hostReady: true, guestReady: false,
          round: 1, p1Move: null, p2Move: null,
          p1Hp: INITIAL_HP, p2Hp: INITIAL_HP, winnerId: null,
          battleType: battleType || 'card_battle',
        };
        // Speed duel: add categories and problems to room
        if (battleType === 'speed_duel') {
          const total = getSpeedTotalRounds(battleFormat);
          const problems = generateSpeedProblems(speedCategories, total);
          base.speedCategories = speedCategories;
          base.speedFormat = battleFormat;
          base.speedRound = 1;
          base.speedTotalRounds = total;
          base.speedP1Score = 0;
          base.speedP2Score = 0;
          base.speedProblems = problems.map(p => ({ type: p.type, data: p.data, answer: p.answer }));
          base.speedP1Answer = null;
          base.speedP2Answer = null;
          base.speedRoundWinner = null;
          base.speedRoundActive = false;
        }
        if (!roomDoc.exists() || (roomDoc.data() as Room).status === 'finished') {
          tx.set(roomRef, base);
          return 'host';
        }
        const d = roomDoc.data() as Room;
        if ((d.hostId || '').trim() === uid) return 'host';
        if ((d.guestId || '').trim() === uid) return 'guest';
        if (d.status === 'waiting') {
          tx.update(roomRef, {
            status: 'playing', guestId: uid,
            guestName: user.displayName || 'Player',
            guestReady: true, guestLastActive: serverTimestamp()
          });
          return 'guest';
        }
        throw new Error('ROOM_FULL');
      });
      setIsHost(result === 'host');
      setCurrentRoomId(roomId);
    } catch (e: any) {
      const msg = e?.message || '';
      if (msg === 'ROOM_FULL') {
        alert('この部屋は満員です。');
      } else if (msg.includes('not found') || msg.includes('404') || e?.code === 'not-found') {
        alert('Firestoreデータベースが未作成です。\nFirebase Console → Firestore Database → 「データベースを作成」を実行してください。');
      } else if (msg.includes('offline') || msg.includes('unavailable')) {
        alert('サーバーに接続できません。インターネット接続を確認してください。');
      } else {
        console.error('Room join error:', e);
        alert(`入室エラー: ${msg || '不明なエラーが発生しました'}`);
      }
    }
  };

  useEffect(() => { if (currentRoomId) listenToRoom(currentRoomId); }, [currentRoomId]);

  // ハートビートパターン - 30秒ごとにlastActiveを更新（切断を素早く検知）
  useEffect(() => {
    if (!currentRoomId || !db || !user) return;
    const field = isHostRef.current ? 'hostLastActive' : 'guestLastActive';
    const interval = setInterval(() => {
      updateDoc(doc(db, 'rooms', currentRoomId), {
        [field]: serverTimestamp(),
      }).catch(() => {});
    }, 30000);
    // 初回も即時更新
    updateDoc(doc(db, 'rooms', currentRoomId), {
      [field]: serverTimestamp(),
    }).catch(() => {});
    return () => clearInterval(interval);
  }, [currentRoomId, user]);

  // ============================
  // Game Start
  // ============================
  // ZPD重み付きデッキ構築（エビデンスA: Vygotsky 1978）
  const buildAdaptiveCpuDeck = useCallback((): ProblemCard[] => {
    const weights = getCategoryWeights();
    const cards = [...CARD_DEFINITIONS];
    // 各カードに重みを割り当て（未記録カテゴリはデフォルト2）
    const weighted = cards.map(c => ({ card: c, weight: weights[c.category] || 2 }));
    const totalWeight = weighted.reduce((sum, w) => sum + w.weight, 0);

    // 重み付きサンプリング（復元なし）
    const selected: ProblemCard[] = [];
    const pool = [...weighted];
    while (selected.length < DECK_SIZE && pool.length > 0) {
      let roll = Math.random() * pool.reduce((s, w) => s + w.weight, 0);
      let idx = 0;
      for (; idx < pool.length - 1; idx++) {
        roll -= pool[idx].weight;
        if (roll <= 0) break;
      }
      selected.push(pool[idx].card);
      pool.splice(idx, 1);
    }
    return selected;
  }, []);

  const startGame = useCallback((playerDeckSetup: ProblemCard[], isCpu: boolean, roomData?: Room, format?: BattleFormat) => {
    cleanupGameSession(true);
    const pcDeckSetup = isCpu ? buildAdaptiveCpuDeck() : shuffleDeck([...CARD_DEFINITIONS]).slice(0, DECK_SIZE);
    const shuffledP = shuffleDeck(playerDeckSetup);
    const shuffledC = shuffleDeck(pcDeckSetup);
    setPlayerHand(shuffledP.slice(0, HAND_SIZE));
    setPlayerDeck(shuffledP.slice(HAND_SIZE));
    setPcHand(shuffledC.slice(0, HAND_SIZE));
    setPcDeck(shuffledC.slice(HAND_SIZE));
    if (roomData) {
      setPlayerHP(isHostRef.current ? roomData.p1Hp : roomData.p2Hp);
      setPcHP(isHostRef.current ? roomData.p2Hp : roomData.p1Hp);
    } else {
      setPlayerHP(INITIAL_HP);
      setPcHP(INITIAL_HP);
    }
    setPlayerScore(0);
    setPcScore(0);
    setWinner(null);
    setRoundResult(null);
    setPlayerAnswered(false);
    setPcAnswered(false);
    setInitiative(Math.random() > 0.5 ? 'player' : 'pc');
    setTurnPhase('selecting_card');
    if (format) setBattleFormat(format);
    setPlayerRoundWins(0);
    setPcRoundWins(0);
    setCurrentRound(1);
    const formatLabel = format === 'best_of_3' ? '【3本勝負】' : format === 'best_of_5' ? '【5本勝負】' : format === 'best_of_7' ? '【7本勝負】' : '【マスターデュエル】';
    setGameLog([`${formatLabel} バトル開始！問題に答えてダメージを与えよう！`]);
  }, [cleanupGameSession, buildAdaptiveCpuDeck]);

  // ============================
  // Speed Duel Logic
  // ============================
  const generateSpeedProblems = useCallback((subtopics: string[], count: number): Problem[] => {
    // Support both subtopic names (granular) and main category names (legacy)
    const subtopicSet = new Set(subtopics);
    const eligible = CARD_DEFINITIONS.filter(c => subtopicSet.has(c.category) || subtopicSet.has(c.mainCategory));
    const shuffled = [...eligible].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length)).map(c => c.problem);
  }, []);

  const getSpeedTotalRounds = useCallback((format: BattleFormat): number => {
    if (format === 'best_of_3') return 3;
    if (format === 'best_of_5') return 5;
    if (format === 'best_of_7') return 7;
    return 10; // master_duel
  }, []);

  const getSpeedRequiredWins = useCallback((format: BattleFormat): number => {
    if (format === 'best_of_3') return 2;
    if (format === 'best_of_5') return 3;
    if (format === 'best_of_7') return 4;
    return 0; // master_duel: most wins after all rounds
  }, []);

  const startSpeedDuel = useCallback((categories: string[], format: BattleFormat, mode: 'cpu' | 'pvp') => {
    setBattleType('speed_duel');
    setSpeedCategories(categories);
    setBattleFormat(format);
    const bmode = mode === 'pvp' ? 'pvp' : 'cpu';
    setGameMode(bmode as any);

    if (bmode === 'pvp') {
      setGameState('matchmaking');
      return;
    }

    // CPU mode: generate problems and start
    const total = getSpeedTotalRounds(format);
    const problems = generateSpeedProblems(categories, total);
    setSpeedProblems(problems);
    setSpeedTotalRounds(total);
    setSpeedRound(1);
    setSpeedPlayerScore(0);
    setSpeedOpponentScore(0);
    setSpeedPlayerAnswered(false);
    setSpeedOpponentAnswered(false);
    setSpeedRoundWinner(null);
    setSpeedGameResult(null);
    setSpeedPhase('countdown');
    setGameState('speed_duel');

    // Countdown then start
    setTimeout(() => {
      setSpeedPhase('answering');
      setSpeedTimeLeft(30);
    }, 1500);
  }, [generateSpeedProblems, getSpeedTotalRounds]);

  // Speed Duel timer
  useEffect(() => {
    if (gameState !== 'speed_duel' || speedPhase !== 'answering') return;
    speedTimerRef.current = setInterval(() => {
      setSpeedTimeLeft(prev => {
        if (prev <= 1) {
          // Time's up - resolve round
          clearInterval(speedTimerRef.current!);
          if (speedCpuTimerRef.current) clearTimeout(speedCpuTimerRef.current);
          setSpeedPhase('round_result');
          if (!speedPlayerAnswered && !speedOpponentAnswered) {
            setSpeedRoundWinner('draw');
          } else if (speedPlayerAnswered && !speedOpponentAnswered) {
            // Player already answered (might be correct or wrong, handled in answer handler)
          } else if (!speedPlayerAnswered && speedOpponentAnswered) {
            // CPU already answered correctly
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (speedTimerRef.current) clearInterval(speedTimerRef.current); };
  }, [gameState, speedPhase, speedRound]);

  // Speed Duel CPU answer (simulated)
  useEffect(() => {
    if (gameState !== 'speed_duel' || speedPhase !== 'answering' || gameMode !== 'cpu') return;
    // CPU answers after a random delay (difficulty-based)
    const problem = speedProblems[speedRound - 1];
    if (!problem) return;
    const baseDelay = 5000 + Math.random() * 15000; // 5-20 seconds
    speedCpuTimerRef.current = setTimeout(() => {
      if (speedPhase !== 'answering') return;
      setSpeedOpponentAnswered(true);
      // CPU has ~65% chance of correct answer
      const cpuCorrect = Math.random() < 0.65;
      if (cpuCorrect && !speedPlayerAnswered) {
        // CPU wins this round
        if (speedTimerRef.current) clearInterval(speedTimerRef.current);
        setSpeedRoundWinner('opponent');
        setSpeedOpponentScore(prev => prev + 1);
        setSpeedPhase('round_result');
      }
    }, baseDelay);
    return () => { if (speedCpuTimerRef.current) clearTimeout(speedCpuTimerRef.current); };
  }, [gameState, speedPhase, speedRound, gameMode, speedProblems]);

  const handleSpeedAnswer = useCallback(async (answer: string) => {
    if (speedPhase !== 'answering' || speedPlayerAnswered) return;
    const problem = speedProblems[speedRound - 1];
    if (!problem) return;

    setSpeedPlayerAnswered(true);

    // Check correctness
    const correctAnswer = problem.answer.toLowerCase().replace(/\s/g, '');
    const userAnswer = answer.toLowerCase().replace(/\s/g, '');
    const correctAnswers = correctAnswer.split(';').map(a => a.trim());
    const isCorrect = correctAnswers.some(ca => ca === userAnswer);

    // Track for stats
    sessionAnsweredRef.current += 1;
    if (isCorrect) {
      sessionCorrectRef.current += 1;
      handleQuestProgress('correct');
    }

    if (gameMode === 'pvp' && currentRoomId && db) {
      // PvP: write answer to Firestore, use transaction for atomicity
      const answerField = isHostRef.current ? 'speedP1Answer' : 'speedP2Answer';
      const myRole = isHostRef.current ? 'host' : 'guest';
      try {
        await runTransaction(db, async (tx) => {
          const roomSnap = await tx.get(doc(db, 'rooms', currentRoomId));
          if (!roomSnap.exists()) return;
          const roomData = roomSnap.data() as Room;
          // Already resolved?
          if (roomData.speedRoundWinner) return;
          const update: Record<string, any> = {
            [answerField]: { answer, correct: isCorrect, answeredAt: Date.now() },
          };
          if (isCorrect && !roomData.speedRoundWinner) {
            update.speedRoundWinner = myRole;
            const scoreField = isHostRef.current ? 'speedP1Score' : 'speedP2Score';
            update[scoreField] = (isHostRef.current ? (roomData.speedP1Score || 0) : (roomData.speedP2Score || 0)) + 1;
          }
          tx.update(doc(db, 'rooms', currentRoomId), update);
        });
      } catch (e) {
        console.error('Speed duel PvP answer error:', e);
      }
      // State will be updated by the room listener
      return;
    }

    // CPU mode: resolve locally
    if (isCorrect) {
      if (speedTimerRef.current) clearInterval(speedTimerRef.current);
      if (speedCpuTimerRef.current) clearTimeout(speedCpuTimerRef.current);
      setSpeedRoundWinner('player');
      setSpeedPlayerScore(prev => prev + 1);
      setSpeedPhase('round_result');
    }
    // If wrong, player can't retry - wait for CPU or timeout
  }, [speedPhase, speedPlayerAnswered, speedProblems, speedRound, handleQuestProgress, gameMode, currentRoomId, db]);

  const handleSpeedNextRound = useCallback(() => {
    const format = battleFormat;
    const required = getSpeedRequiredWins(format);
    const newPlayerScore = speedPlayerScore + (speedRoundWinner === 'player' ? 0 : 0); // already incremented
    const newOpponentScore = speedOpponentScore + (speedRoundWinner === 'opponent' ? 0 : 0);

    // Check if match is over
    if (required > 0) {
      // best-of-N: check if either player reached required wins
      if (speedPlayerScore >= required || speedOpponentScore >= required) {
        setSpeedGameResult(speedPlayerScore >= required ? 'win' : 'lose');
        setSpeedPhase('match_over');
        return;
      }
    }

    // Check if all rounds played (master_duel or remaining rounds exhausted)
    if (speedRound >= speedTotalRounds) {
      if (speedPlayerScore > speedOpponentScore) setSpeedGameResult('win');
      else if (speedPlayerScore < speedOpponentScore) setSpeedGameResult('lose');
      else setSpeedGameResult('draw');
      setSpeedPhase('match_over');
      return;
    }

    // Next round
    setSpeedRound(prev => prev + 1);
    setSpeedPlayerAnswered(false);
    setSpeedOpponentAnswered(false);
    setSpeedRoundWinner(null);
    setSpeedPhase('countdown');
    setTimeout(() => {
      setSpeedPhase('answering');
      setSpeedTimeLeft(30);
    }, 1500);
  }, [battleFormat, speedPlayerScore, speedOpponentScore, speedRound, speedTotalRounds, getSpeedRequiredWins, speedRoundWinner]);

  // ============================
  // Auto-draw helper
  // ============================
  const handleAutoDraw = useCallback((
    hand: ProblemCard[], deck: ProblemCard[], targetLevel: number
  ) => {
    const idx = deck.findIndex(c => c.difficulty === targetLevel);
    if (idx !== -1) {
      const newCard = deck[idx];
      const newDeck = [...deck];
      newDeck.splice(idx, 1);
      const oldCard = hand[Math.floor(Math.random() * hand.length)];
      const newHand = [...hand.filter(c => c.id !== oldCard.id), newCard];
      newDeck.push(oldCard);
      return { newHand, newDeck, success: true };
    }
    return { newHand: hand, newDeck: deck, success: false };
  }, []);

  // ============================
  // HP Battle Resolution
  // エビデンスB: ATK/DEF + 正解ダメージ統合設計
  // ============================
  const resolveHpBattle = useCallback((
    playerCorrect: boolean,
    playerCard: ProblemCard,
    pcCard: ProblemCard
  ) => {
    // Damage formula: difficulty × 2 HP
    // SCORE_BOOST: +2 bonus damage on correct answer
    // DEFENSIVE_STANCE: block damage when wrong
    if (playerCorrect) {
      let dmg = calcDamage(playerCard.difficulty);
      if (playerCard.ability?.type === 'SCORE_BOOST') dmg += (playerCard.ability.value || 1) * 2;
      addLog(`正解！${(pcCard.problem.data as Record<string, unknown>).question ? String((pcCard.problem.data as Record<string, unknown>).question).slice(0, 20) : ''}... → ${dmg}ダメージ！`);
      setPcHP(prev => Math.max(0, prev - dmg));
      setPlayerScore(s => s + 1);
      return 'player_win';
    } else {
      if (playerCard.ability?.type === 'DEFENSIVE_STANCE') {
        addLog(`不正解 [防御スタンス] ダメージをガード！`);
        return 'defended';
      }
      const dmg = calcDamage(pcCard.difficulty);
      addLog(`不正解… ${dmg}ダメージを受けた`);
      setPlayerHP(prev => Math.max(0, prev - dmg));
      setPcScore(s => s + 1);
      return 'pc_win';
    }
  }, []);

  const addLog = useCallback((msg: string) => {
    setGameLog(prev => [...prev.slice(-10), msg]);
  }, []);

  // ============================
  // Player Answer Handler
  // ============================
  const handlePlayerAnswer = (answer: string) => {
    if (playerAnswered || pcAnswered || !pcPlayedCard || !playerPlayedCard) return;
    setPlayerAnswered(true);
    const solveTime = Date.now() - roundStartTime;
    // Proof problems are auto-correct (same as practice mode)
    // Multiple-choice: compare as sorted sets so answer order doesn't matter
    const problemData = pcPlayedCard.problem.data as any;
    const correct = pcPlayedCard.problem.type === 'proof'
      ? true
      : problemData?.multiple
        ? normalizeAnswer(answer).split(',').sort().join(',') === normalizeAnswer(pcPlayedCard.problem.answer).split(',').sort().join(',')
        : normalizeAnswer(answer) === normalizeAnswer(pcPlayedCard.problem.answer);

    if (correct) {
      // Update DDA stats
      const diff = pcPlayedCard.difficulty;
      setUserLevelStats(prev => {
        const s = prev[diff] || { avgTime: 20000, count: 0 };
        return { ...prev, [diff]: { avgTime: (s.avgTime * s.count + solveTime) / (s.count + 1), count: s.count + 1 } };
      });
      // スピードバッジ: 3秒以内正解
      if (solveTime < 3000) earnBadge('speed_demon');
    }

    // ゲーミフィケーション: チェイン・バッジ・クエスト更新
    onCorrectAnswerEvent(correct, pcPlayedCard.problem.answer);

    // メタ認知: カテゴリ別正答率を記録（エビデンスA: Wang et al. 1993, ES=0.69）
    recordAttempt(pcPlayedCard.category, correct);

    // 精緻化フィードバック: 不正解時にプレイヤーの回答とカテゴリを記録
    if (!correct) {
      setPlayerWrongAnswer(answer);
      setWrongCategory(pcPlayedCard.category);
      // SRS: 不正解を間隔反復キューに追加（エビデンスA: Cepeda 2006, d=0.42）
      const qData = pcPlayedCard.problem.data as Record<string, unknown>;
      addIncorrectToSrs(
        pcPlayedCard.category,
        String(qData.question || '').slice(0, 50),
        pcPlayedCard.problem.answer,
        pcPlayedCard.problem.type
      );
    } else {
      setPlayerWrongAnswer(null);
      setWrongCategory(null);
    }

    const outcome = resolveHpBattle(correct, playerPlayedCard, pcPlayedCard);
    setRoundResult(outcome === 'player_win' ? 'ラウンド勝利！' : 'ラウンド敗北...');
    if (!pcAnswered) setPcAnswered(true);
    setTurnPhase('round_end');
  };

  // ============================
  // Card Selection
  // ============================
  // 手札+デッキに同レベルカードがあるか判定
  const hasMatchingCard = useCallback((targetDiff: number): boolean => {
    return playerHand.some(c => c.difficulty === targetDiff) ||
           playerDeck.some(c => c.difficulty === targetDiff);
  }, [playerHand, playerDeck]);

  const handleCardClickInHand = (card: ProblemCard) => {
    if (turnPhase !== 'selecting_card') return;

    // PC先攻時: 同レベルマッチング制約
    if (initiative === 'pc' && pcPlayedCard !== null) {
      const canMatch = hasMatchingCard(pcPlayedCard.difficulty);
      if (canMatch && card.difficulty !== pcPlayedCard.difficulty) {
        // 同レベルカードが存在するなら、それを選ぶよう促す
        addLog('同じ難易度のカードを選んでください');
        return;
      }
      // 同レベルカードが無い場合 → 任意カードで応戦OK（mismatch round）
    }

    if (selectedCardId === card.id) {
      // 難易度不一致ラウンド判定
      const isMismatch = initiative === 'pc' && pcPlayedCard !== null &&
                          card.difficulty !== pcPlayedCard.difficulty;
      setMismatchRound(isMismatch);
      if (isMismatch) {
        addLog(`⚡ レベル不一致で応戦！ 解答時間ボーナス獲得（+50%）`);
      }

      setPlayerPlayedCard(card);
      setPlayerHand(prev => prev.filter(c => c.id !== card.id));
      if (initiative === 'player') {
        let pcMatchingCard = pcHand.find(c => c.difficulty === card.difficulty);
        if (!pcMatchingCard) {
          const res = handleAutoDraw(pcHand, pcDeck, card.difficulty);
          if (res.success) {
            addLog('PC: カードを引き直しています...');
            setPcHand(res.newHand);
            setPcDeck(res.newDeck);
            pcMatchingCard = res.newHand.find(c => c.difficulty === card.difficulty);
          }
        }
        const pcCard = pcMatchingCard || pcHand[Math.floor(Math.random() * pcHand.length)];
        setPcPlayedCard(pcCard);
        setPcHand(prev => prev.filter(c => c.id !== pcCard.id));
        setTurnPhase('solving_problem');
        setRoundStartTime(Date.now());
      } else {
        setTurnPhase('solving_problem');
        setRoundStartTime(Date.now());
      }
    } else {
      setSelectedCardId(card.id);
    }
  };

  // ============================
  // PC Initiative
  // ============================
  useEffect(() => {
    if (gameState !== 'in_game' || turnPhase !== 'selecting_card' || initiative !== 'pc' || pcPlayedCard !== null) return;
    const timer = setTimeout(() => {
      const pcCard = pcHand[Math.floor(Math.random() * pcHand.length)];
      if (!pcCard) return;
      setPcPlayedCard(pcCard);
      setPcHand(prev => prev.filter(c => c.id !== pcCard.id));
      addLog(`PC: レベル${pcCard.difficulty} の問題を出題`);
      const hasMatch = playerHand.some(c => c.difficulty === pcCard.difficulty);
      if (!hasMatch) {
        // まずデッキから同レベルカードを自動補充
        const res = handleAutoDraw(playerHand, playerDeck, pcCard.difficulty);
        if (res.success) {
          addLog('カードを自動補充しました');
          setPlayerHand(res.newHand);
          setPlayerDeck(res.newDeck);
        } else {
          // 手札にもデッキにも同レベルがない → 任意カードで応戦可能
          addLog('⚠ 同レベルカードがありません — 手持ちのカードで応戦しましょう！');
        }
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [gameState, turnPhase, initiative, pcPlayedCard, pcHand, playerHand, playerDeck, handleAutoDraw, addLog]);

  // ============================
  // PC Solve Timer (DDA)
  // エビデンスB: Dynamic Difficulty Adjustment
  // ============================
  useEffect(() => {
    if (turnPhase !== 'solving_problem' || pcAnswered || !pcPlayedCard) return;
    const diff = pcPlayedCard.difficulty;
    const stats = userLevelStats[diff] || { avgTime: diff * 12000, count: 0 };
    const baseTime = stats.count > 2 ? stats.avgTime : diff * 12000;
    let finalTime = baseTime * 1.25;
    // レベル不一致ラウンド: 解答時間+50%ボーナス
    if (mismatchRound) finalTime *= 1.5;
    if (pcPlayedCard.ability?.type === 'TIME_PRESSURE') finalTime -= (pcPlayedCard.ability.value || 3) * 1000;
    const solveTime = Math.max(3000, Math.min(120000, finalTime));

    const timer = setTimeout(() => {
      if (!playerAnswered) {
        if (playerPlayedCard?.ability?.type !== 'DEFENSIVE_STANCE') {
          const dmg = calcDamage(pcPlayedCard.difficulty);
          setPlayerHP(prev => Math.max(0, prev - dmg));
          addLog(`時間切れ！${dmg}ダメージを受けた`);
          setPcScore(s => s + 1);
        }
        setRoundResult('ラウンド敗北...');
        setTurnPhase('round_end');
      }
      setPcAnswered(true);
    }, solveTime);
    return () => clearTimeout(timer);
  }, [turnPhase, pcAnswered, playerAnswered, pcPlayedCard, playerPlayedCard, userLevelStats, mismatchRound]);

  // ============================
  // Round End / Win Check (supports both HP and round-based formats)
  // ============================
  const getRequiredWins = useCallback((format: BattleFormat): number => {
    if (format === 'best_of_3') return 2;
    if (format === 'best_of_5') return 3;
    if (format === 'best_of_7') return 4;
    return 0; // master_duel uses HP
  }, []);

  useEffect(() => {
    if (turnPhase !== 'round_end') return;
    const timer = setTimeout(async () => {
      const isPlayerWonRound = roundResult?.includes('勝利');
      const isPlayerLostRound = roundResult?.includes('敗北');

      // Track round wins for best-of-N formats
      let newPlayerRoundWins = playerRoundWins;
      let newPcRoundWins = pcRoundWins;
      if (battleFormat !== 'master_duel') {
        if (isPlayerWonRound) {
          newPlayerRoundWins = playerRoundWins + 1;
          setPlayerRoundWins(newPlayerRoundWins);
        } else if (isPlayerLostRound) {
          newPcRoundWins = pcRoundWins + 1;
          setPcRoundWins(newPcRoundWins);
        }
      }

      // Determine if game is over
      let gameOver = false;
      let isWin = false;
      let isDraw = false;

      if (battleFormat === 'master_duel') {
        // HP-based win condition
        if (playerHP <= 0 || pcHP <= 0) {
          gameOver = true;
          isWin = pcHP <= 0 && playerHP > 0;
          isDraw = pcHP <= 0 && playerHP <= 0;
        }
      } else {
        // Round-based win condition
        const required = getRequiredWins(battleFormat);
        if (newPlayerRoundWins >= required || newPcRoundWins >= required) {
          gameOver = true;
          isWin = newPlayerRoundWins >= required;
          isDraw = false;
        }
        // Also end if HP reaches 0 (knockout in round format)
        if (!gameOver && (playerHP <= 0 || pcHP <= 0)) {
          gameOver = true;
          isWin = pcHP <= 0 && playerHP > 0;
          isDraw = pcHP <= 0 && playerHP <= 0;
        }
      }

      if (gameOver) {
        // Immediately exit 'round_end' phase to prevent this effect from re-firing
        // when state updates (addExp, setPlayerRoundWins, etc.) trigger a re-render
        setTurnPhase('selecting_card');
        const formatLabel = battleFormat === 'best_of_3' ? '3本勝負' : battleFormat === 'best_of_5' ? '5本勝負' : battleFormat === 'best_of_7' ? '7本勝負' : 'マスターデュエル';
        const formatWinKey = `formatWins.${battleFormat}`;
        const formatMatchKey = `formatMatches.${battleFormat}`;
        if (isDraw) {
          setWinner('引き分け\nお互い健闘しました！');
          addExp(200);
          saveUserToFirestore({ totalMatches: increment(1), [formatMatchKey]: increment(1) });
        } else if (isWin) {
          const winDetail = battleFormat !== 'master_duel' ? `\n${newPlayerRoundWins}-${newPcRoundWins} (${formatLabel})` : '';
          setWinner(`勝利！\nおめでとう！${winDetail}`);
          addExp(500);
          addBoostedMp(300);
          setTotalWins(w => {
            const next = w + 1;
            saveUserToFirestore({ totalWins: increment(1), totalMatches: increment(1), [formatWinKey]: increment(1), [formatMatchKey]: increment(1) });
            if (gameMode === 'cpu') earnBadge('first_cpu_win');
            else earnBadge('first_pvp_win');
            if (playerHP >= INITIAL_HP) earnBadge('perfect_battle');
            if (playerHP <= 5) earnBadge('comeback');
            checkCategoryMasterBadges();
            // 称号条件チェック
            checkTitleConditions({
              totalCorrectAnswers,
              totalWins: next,
              loginStreak,
              playerLevel,
              earnedBadgeIds,
            });
            return next;
          });
        } else {
          const loseDetail = battleFormat !== 'master_duel' ? `\n${newPlayerRoundWins}-${newPcRoundWins} (${formatLabel})` : '';
          setWinner(`敗北...\n次こそ勝とう！${loseDetail}`);
          addExp(100);
          saveUserToFirestore({ totalMatches: increment(1), [formatMatchKey]: increment(1) });
        }
        await flushSessionData();
        setGameState('end');
        return;
      }

      // Round-based format: advance round counter and log score
      if (battleFormat !== 'master_duel') {
        setCurrentRound(prev => prev + 1);
        addLog(`第${currentRound}回戦終了 [${newPlayerRoundWins}-${newPcRoundWins}]`);
      }

      // PvP: update Firestore HP
      if (gameMode === 'pvp' && currentRoomId && db && isHostRef.current) {
        const p1Hp = playerHP;
        const p2Hp = pcHP;
        let wId = p1Hp <= 0 && p2Hp <= 0 ? 'draw' : p1Hp <= 0 ? 'guest' : p2Hp <= 0 ? 'host' : null;
        const updates: any = { p1Hp, p2Hp, p1Move: null, p2Move: null };
        if (wId) { updates.winnerId = wId; updates.status = 'finished'; }
        else { updates.round = increment(1); }
        await updateDoc(doc(db, 'rooms', currentRoomId), updates).catch(console.error);
      }

      // Next round setup
      setInitiative(isPlayerLostRound ? 'player' : 'pc');
      setPlayerHand(prev => {
        const needed = HAND_SIZE - prev.length;
        if (needed <= 0 || playerDeck.length === 0) return prev;
        const newCards = playerDeck.slice(0, needed);
        setPlayerDeck(d => d.slice(needed));
        return [...prev, ...newCards];
      });
      setPcHand(prev => {
        const needed = HAND_SIZE - prev.length;
        if (needed <= 0 || pcDeck.length === 0) return prev;
        const newCards = pcDeck.slice(0, needed);
        setPcDeck(d => d.slice(needed));
        return [...prev, ...newCards];
      });
      setPlayerPlayedCard(null);
      setPcPlayedCard(null);
      setRoundResult(null);
      setPlayerAnswered(false);
      setPcAnswered(false);
      setSelectedCardId(null);
      setMismatchRound(false);
      setTurnPhase('selecting_card');
    }, 3000);
    return () => clearTimeout(timer);
  }, [turnPhase, playerHP, pcHP, gameMode, currentRoomId, playerDeck, pcDeck, addExp, roundResult, battleFormat, playerRoundWins, pcRoundWins, currentRound, getRequiredWins]);

  // ============================
  // Render
  // ============================
  if (authLoading || showSplash) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-950">
        <div className="text-center animate-[fadeIn_1.5s_ease-in-out]">
          <p className="text-lg text-gray-400 font-mono tracking-[0.3em] opacity-80">
            presented by
          </p>
          <p className="text-2xl text-white font-bold font-mono tracking-[0.2em] mt-2">
            onokomachi
          </p>
        </div>
        <style>{`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  const renderContent = () => {
    switch (gameState) {
      case 'login_screen':
        return (
          <LoginScreen
            currentUser={user}
            onLogin={handleLogin}
            onGuestPlay={handleGuestPlay}
            onLogout={handleLogout}
            onOpenGameMaster={handleOpenGameMaster}
            mathPoints={mathPoints}
            playerLevel={playerLevel}
            studentProfile={studentProfile}
            onStudentProfileSet={handleStudentProfileSet}
          />
        );

      case 'main_menu':
        return (
          <MainMenu
            onSelectMode={mode => setGameState(mode)}
            playerLevel={playerLevel}
            playerExp={playerExp}
            expForNextLevel={expForNextLevel(playerLevel)}
            user={user}
            mathPoints={mathPoints}
            onLogout={handleLogout}
            onOpenRanking={() => setShowRanking(true)}
            loginStreak={loginStreak}
            onOpenQuests={() => setShowQuestPanel(true)}
            onOpenLoginBonus={() => setShowLoginBonus(true)}
            canAccessGameMaster={canAccessGameMaster}
            onOpenGameMaster={handleOpenGameMaster}
            dailyQuestDefs={DAILY_QUEST_DEFS}
            dailyQuestProgress={dailyQuestProgress}
            dailyQuestDone={dailyQuestDone}
            onOpenClassBattle={() => setShowClassBattle(true)}
            hasStudentProfile={!!studentProfile}
            srsReviewCount={getDueCount()}
            onOpenWeakness={() => setShowWeaknessPanel(true)}
            onOpenItemShop={() => setShowItemShop(true)}
            equippedTitleName={equippedTitle ? (TITLE_DEFS.find(t => t.id === equippedTitle)?.name || SHOP_ITEMS.find(i => i.id === equippedTitle)?.name || null) : null}
          />
        );

      case 'practice_mode':
        return (
          <PracticeMode
            onSessionComplete={pts => { setMathPoints(p => p + pts); setGameState('main_menu'); }}
            db={db}
            user={user}
            studentProfile={studentProfile}
          />
        );

      case 'deck_building':
        return (
          <DeckBuilder
            ownedCards={ownedCards}
            onDeckSubmit={(deck, mode, format) => {
              const bmode: BattleMode = (mode as string) === 'pvp' ? 'pvp' : 'cpu';
              setGameMode(bmode);
              setBattleFormat(format);
              setBattleType('card_battle');
              if (bmode === 'pvp') {
                pvpDeckRef.current = deck;
                setPlayerDeck(deck);
                setGameState('matchmaking');
              } else {
                startGame(deck, true, undefined, format);
                setGameState('in_game');
              }
            }}
            onBack={() => setGameState('main_menu')}
          />
        );

      case 'matchmaking':
        return (
          <Matchmaking
            rooms={rooms}
            onJoinRoom={handleJoinRoom}
            onCancel={async () => {
              await leaveRoom(currentRoomId, isHost);
              cleanupGameSession();
              setGameState(battleType === 'speed_duel' ? 'speed_duel_setup' : 'deck_building');
            }}
            currentRoomId={currentRoomId}
            user={user}
            connectionError={firestoreError}
            battleType={battleType}
          />
        );

      case 'speed_duel_setup':
        return (
          <SpeedDuelSetup
            onStart={(categories, format, mode) => {
              setBattleType('speed_duel');
              startSpeedDuel(categories, format, mode);
            }}
            onBack={() => { setBattleType('card_battle'); setGameState('main_menu'); }}
            isLoggedIn={!!user}
          />
        );

      case 'speed_duel':
        return (
          <SpeedDuelBoard
            problem={speedProblems[speedRound - 1] || null}
            playerScore={speedPlayerScore}
            opponentScore={speedOpponentScore}
            round={speedRound}
            totalRounds={speedTotalRounds}
            format={battleFormat}
            phase={speedPhase}
            onAnswer={handleSpeedAnswer}
            onNextRound={handleSpeedNextRound}
            onExit={() => {
              if (speedTimerRef.current) clearInterval(speedTimerRef.current);
              if (speedCpuTimerRef.current) clearTimeout(speedCpuTimerRef.current);
              setBattleType('card_battle');
              setGameState('main_menu');
            }}
            roundWinner={speedRoundWinner}
            playerName={user?.displayName || 'あなた'}
            opponentName={gameMode === 'cpu' ? 'CPU' : '相手'}
            isPlayerAnswered={speedPlayerAnswered}
            isOpponentAnswered={speedOpponentAnswered}
            timeLeft={speedTimeLeft}
            gameResult={speedGameResult}
          />
        );

      case 'card_shop':
        return (
          <CardShop
            mathPoints={mathPoints}
            onBuyPack={(m, cost, _t) => {
              const cards = CARD_DEFINITIONS.filter(c => !ownedCardIds.has(c.id) && c.mainCategory === m);
              if (mathPoints < cost || cards.length === 0) return cards.length === 0 ? [] : null;
              // エビデンスA: 可変報酬スケジュール — 3〜6枚ランダム + 20%でCRITICAL!（Skinner 1938）
              const isCritical = Math.random() < 0.2;
              const baseCount = 3 + Math.floor(Math.random() * 2); // 3 or 4
              const packCount = Math.min(cards.length, isCritical ? baseCount + 2 : baseCount);
              const newCards = [...cards].sort(() => Math.random() - 0.5).slice(0, packCount);
              setMathPoints(p => p - cost);
              setOwnedCardIds(prev => {
                const next = new Set(prev);
                newCards.forEach(c => next.add(c.id));
                return next;
              });
              saveUserToFirestore({
                mathPoints: mathPoints - cost,
                ownedCardIds: arrayUnion(...newCards.map(c => c.id)),
              });
              return newCards;
            }}
            onExit={() => setGameState('main_menu')}
          />
        );

      case 'in_game':
        return (
          <>
            <GameBoard
              turnPhase={turnPhase}
              playerScore={playerScore}
              pcScore={pcScore}
              playerHP={playerHP}
              pcHP={pcHP}
              initialHP={INITIAL_HP}
              playerHand={playerHand}
              pcHandSize={pcHand.length}
              playerDeckSize={playerDeck.length}
              pcDeckSize={pcDeck.length}
              playerPlayedCard={playerPlayedCard}
              pcPlayedCard={pcPlayedCard}
              onCardSelect={handleCardClickInHand}
              onAnswerSubmit={handlePlayerAnswer}
              selectedCardId={selectedCardId}
              gameLog={gameLog}
              roundResult={roundResult}
              maxScore={INITIAL_HP}
              initiative={initiative}
              chainCount={chainCount}
              wrongAnswerText={wrongAnswerText}
              playerWrongAnswer={playerWrongAnswer}
              wrongCategory={wrongCategory}
              mismatchRound={mismatchRound}
              battleFormat={battleFormat}
              playerRoundWins={playerRoundWins}
              pcRoundWins={pcRoundWins}
              currentRound={currentRound}
              battleTheme={equippedTheme}
            />
            {/* 相手切断通知バナー */}
            {opponentDisconnected && gameMode === 'pvp' && (
              <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-red-900/90 border border-red-500 rounded-xl px-6 py-3 flex items-center gap-4 shadow-2xl">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-red-200 text-sm font-bold">相手の接続が切れました</span>
                  <span className="text-red-300/60 text-[10px]">しばらくすると自動的に勝利になります</span>
                </div>
                <button
                  onClick={async () => {
                    if (currentRoomId && db) {
                      await updateDoc(doc(db, 'rooms', currentRoomId), {
                        status: 'finished',
                        winnerId: isHost ? 'host' : 'guest',
                      }).catch(() => {});
                    }
                  }}
                  className="bg-red-700 hover:bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors"
                >
                  今すぐ勝利を宣言
                </button>
              </div>
            )}
          </>
        );

      case 'end':
        return (
          <div className="text-center flex flex-col items-center justify-center h-full animate-level-up-reveal">
            <h1 className="text-7xl font-bold text-hologram mb-4 whitespace-pre-line uppercase tracking-widest leading-tight">
              {winner}
            </h1>
            <div className="flex gap-4 mt-12">
              <button
                onClick={() => { cleanupGameSession(); setChainCount(0); setGameState('deck_building'); }}
                className="btn-tactical py-4 px-10 rounded-lg text-xl tracking-[0.4em]"
              >
                RETRY
              </button>
              <button
                onClick={async () => { await flushSessionData(); cleanupGameSession(); setChainCount(0); setGameState('main_menu'); }}
                className="border border-gray-600 text-gray-400 hover:text-white py-4 px-10 rounded-lg text-xl tracking-[0.4em] transition-colors"
              >
                MENU
              </button>
            </div>
          </div>
        );

      case 'tutorial':
        return (
          <TutorialBattle
            onComplete={() => {
              setTutorialDone(true);
              localStorage.setItem('bm_tutorial_done', '1');
              earnBadge('tutorial_clear');
              setGameState('main_menu');
            }}
            onSkip={() => {
              setTutorialDone(true);
              localStorage.setItem('bm_tutorial_done', '1');
              setGameState('main_menu');
            }}
          />
        );

      case 'gamemaster':
        return db ? (
          <GameMaster db={db} onClose={() => setGameState('login_screen')} />
        ) : (
          <div className="text-center text-red-400 p-12">Firebase接続エラー</div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-center font-sans">
      <GravityBackground />
      <div className="relative z-10 w-full h-full">
        {renderContent()}
        {levelUpInfo && <LevelUpModal {...levelUpInfo} onClose={() => setLevelUpInfo(null)} />}
        {showRanking && db && (
          <RankingBoard
            onClose={() => setShowRanking(false)}
            db={db}
            currentUserId={user?.uid}
          />
        )}
        {showQuestPanel && (
          <QuestPanel
            loginStreak={loginStreak}
            dailyProgress={dailyQuestProgress}
            dailyCompleted={Object.fromEntries([...dailyQuestDone].map(id => [id, true]))}
            weeklyProgress={weeklyQuestProgress}
            weeklyCompleted={Object.fromEntries([...weeklyQuestDone].map(id => [id, true]))}
            onClose={() => setShowQuestPanel(false)}
          />
        )}
        {pendingBadge && (
          <BadgeNotification
            badge={pendingBadge}
            onDismiss={() => setPendingBadge(null)}
          />
        )}
        {showLoginBonus && (
          <LoginBonusModal
            loginStreak={loginStreak}
            todayReward={getLoginReward(loginStreak)}
            alreadyClaimed={loginBonusClaimed}
            onClaim={handleClaimLoginBonus}
            onClose={() => setShowLoginBonus(false)}
          />
        )}
        {showClassBattle && db && (
          <ClassBattleBoard
            db={db}
            onClose={() => setShowClassBattle(false)}
            currentSchool={studentProfile?.school}
          />
        )}
        {showWeaknessPanel && (
          <WeaknessPanel onClose={() => setShowWeaknessPanel(false)} />
        )}
        {showItemShop && (
          <ItemShop
            mathPoints={mathPoints}
            ownedItems={ownedShopItems}
            earnedTitleIds={earnedTitleIds}
            equippedTitle={equippedTitle}
            equippedTheme={equippedTheme}
            hintTokens={hintTokens}
            onPurchase={handleShopPurchase}
            onEquipTitle={setEquippedTitle}
            onEquipTheme={setEquippedTheme}
            onClose={() => setShowItemShop(false)}
          />
        )}
        {showNewYearPrompt && studentProfile && (
          <NewYearPrompt
            profile={studentProfile}
            currentSchoolYear={getCurrentSchoolYear()}
            onConfirm={handleNewYearConfirm}
            onSkip={handleNewYearSkip}
          />
        )}
      </div>
    </main>
  );
};

export default App;
