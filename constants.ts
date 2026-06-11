
import type { Problem, ProblemCard, Category, Ability, AbilityType, DailyQuestDef, BadgeDef, ShopItemDef, TitleDef } from './types';
import { geometryProblems } from './data/geometryProblems';
import { linearFunctionsProblems } from './data/linearFunctionsProblems';
import { polynomialProblems } from './data/polynomialProblems';
import { probabilityProblems } from './data/probabilityProblems';
import { simultaneousEquationsProblems } from './data/simultaneousEquations';
import { dataAnalysisProblems } from './data/dataAnalysisProblems';
import { SVG_MAP } from './data/svgDefinitions';
import svgMap from './data/geometrySvgMap';
import { geometryProofFigures } from './data/geometryProofFigures';

// Merge all SVG maps for enriching card problems with inline SVGs
const ALL_SVG: Record<string, string> = { ...SVG_MAP, ...svgMap, ...geometryProofFigures };

export const DEFAULT_SCHOOL_YEAR = 2025;

export const getCurrentSchoolYear = (): number => {
  const now = new Date();
  const month = now.getMonth() + 1;
  return month >= 4 ? now.getFullYear() : now.getFullYear() - 1;
};

export const MAX_SCORE = 5;
export const DECK_SIZE = 20;
export const HAND_SIZE = 5;
export const MAX_DUPLICATES = 2;

// HP Battle System (aicardbattle2 integration)
// エビデンスA: Testing Effect (Roediger & Butler 2011) — 想起回数が学習効果に比例
// HP40 + 新ダメージ式 → 平均7-8ラウンド/試合（旧: 2-3ラウンド）
export const INITIAL_HP = 40;

// Damage formula: difficulty × 1.5 + 1
// Lv1=2.5→3, Lv2=4, Lv3=5.5→6, Lv4=7, Lv5=8.5→9
// HP40 ÷ 平均5.5dmg ≈ 7.3ラウンド（学習量2-3倍に増加）
export const calcDamage = (difficulty: number): number =>
  Math.round(difficulty * 1.5 + 1);

// Admin settings
export const ADMIN_EMAILS: string[] = ['ono.yosuke@isesaki-school.ed.jp']; // firestore.rules の isAdmin() と同期すること
export const GAMEMASTER_PASSWORD = '215124'; // Change in production

export const DECK_CONSTRAINTS: Record<number, number> = {
  4: 7,
  5: 3,
};

// 要望に基づき、細かい単元を維持しつつ、学習目的別にグループ化して構造化
export const MATH_CATEGORIES: Category[] = [
    {
        name: "式の計算",
        groups: [
            {
                name: "基本と次数",
                subtopics: ["式の次数", "同類項の加減(基)", "数値代入(基)"]
            },
            {
                name: "加法・減法",
                subtopics: ["同類項の加減(標1)", "同類項の加減(標2)", "(#+#)+(#+#)", "(#+#)-(#+#)", "(#+#)±#(#+#)", "縦書きの加法", "減法"]
            },
            {
                name: "乗法・除法",
                subtopics: ["式の乗法(基)", "式の乗法(標)", "式の二乗(基)", "式の三乗(基)", "式の除法(初1)", "式の除法(基1)", "式の除法(基2)", "式の除法(標1)", "式の除法(標2)"]
            },
            {
                name: "分数・混合計算",
                subtopics: ["分数式の加減(基礎)", "分数式の加減(標準1)", "分数式の加減(標準2)", "乗除の混合型1", "乗除の混合型2", "乗除の混合型3"]
            },
            {
                name: "応用とまとめ",
                subtopics: ["数値代入(標1)", "数値代入(標2)", "等式の変形(基)", "等式の変形(標1)", "等式の変形(標2)", "式の変形(完)", "文字式(完成1)", "文字式(完成2)", "文字式の値(完)"]
            }
        ]
    },
    {
        name: "連立方程式",
        groups: [
            {
                name: "計算の基本",
                subtopics: ["加減法（ガイド付き）", "代入法（ガイド付き）", "加減法（計算練習）①", "代入法（計算練習）①"]
            },
            {
                name: "複雑な計算",
                subtopics: ["加減法（計算練習）②", "代入法（計算練習）②", "()付きの方程式", "分数係数の方程式", "小数係数の方程式", "連立方程式（統合）"]
            },
            {
                name: "文章題演習",
                subtopics: ["金銭問題(基)", "数の問題(基)", "割合(準備)", "割合(標準)", "濃度(準備)", "食塩濃度(標)", "速度(準備)", "速度問題(標1)", "速度問題(標2)", "速度問題(標3)"]
            }
        ]
    },
    {
        name: "図形の性質",
        groups: [
            {
                name: "角度の計算",
                subtopics: ["角度 基礎", "平行線の錯角・同位角（基本）", "平行線と角①", "平行線と角②", "三角形と角(基)", "三角形と角(応)", "三角形と角（標）", "角度（基本）", "角度（応用）", "角度（応用2）", "二等辺三角形(角度)", "二等辺三角形(角度・応用)", "三・四角形(角度)", "多角形と角(基)", "多角形と角(標)", "多角形と角(基2)", "交差する三角形", "星形多角形の角度"]
            },
            {
                name: "合同と証明の基礎",
                subtopics: ["合同条件(基)", "合同の証明(基)", "合同の証明(標)", "二等辺三角形(準)", "直角三角形(準)"]
            },
            {
                name: "図形の証明(発展)",
                subtopics: ["二等辺三角形(証)", "直角三角形(証)", "正三角形(証)", "平行四辺形(証)", "三・四角形(証明)", "証明（応用）", "証明（EX）"]
            },
            {
                name: "四角形の性質",
                subtopics: ["四角形の性質(基)", "四角形の関係"]
            }
        ]
    },
    {
        name: "一次関数",
        groups: [
            {
                name: "グラフの作成",
                subtopics: ["表からｸﾞﾗﾌを書く", "2点でｸﾞﾗﾌを書く", "2点でｸﾞﾗﾌを書く2", "切片と傾きで書く"]
            },
            {
                name: "式の決定",
                subtopics: ["切片を求める", "傾きを求める", "ｸﾞﾗﾌの式を求める", "ｸﾞﾗﾌから式1", "ｸﾞﾗﾌから式2", "ｸﾞﾗﾌから式3(発展)", "1点と傾きから(基)", "1点と切片から(基)", "2点から式を(基)", "1次関数の式1", "1次関数の式2", "1次関数の式3"]
            },
            {
                name: "関数の特徴と応用",
                subtopics: ["1次関数の変化の割合", "グラフの変域", "2直線の交点", "グラフと面積1", "グラフと面積2", "1次関数の利用(基)"]
            }
        ]
    },
    {
        name: "確率",
        groups: [
            {
                name: "基本演習",
                subtopics: ["サイコロ1個の確率(基)", "1個の確率問題", "ボール1個の確率(基)"]
            },
            {
                name: "2つの事象",
                subtopics: ["サイコロ2個の確率(基)", "サイコロ2個の確率(標)", "サイコロ2個の確率(応)", "ボール2個の確率(標)"]
            },
            {
                name: "数え上げと応用",
                subtopics: ["樹形図に表す", "樹形図に表す(標)", "区別できない時"]
            }
        ]
    },
    {
        name: "データの活用",
        groups: [
            {
                name: "四分位数と箱ひげ図",
                subtopics: ["四分位数(基)", "四分位範囲(基)", "箱ひげ図の読み取り(基)", "箱ひげ図の読み取り(標)"]
            },
            {
                name: "データの分析",
                subtopics: ["度数分布表(基)", "ヒストグラム(基)", "平均値・中央値(基)", "代表値の比較(標)"]
            }
        ]
    }
];

export const difficultyMap: Record<string, number> = {
    // --- 式の計算 ---
    "式の次数": 1, "同類項の加減(基)": 1, "数値代入(基)": 1, "式の乗法(基)": 1, "式の二乗(基)": 1, "式の除法(初1)": 1,
    "同類項の加減(標1)": 2, "(#+#)+(#+#)": 2, "(#+#)-(#+#)": 2, "数値代入(標1)": 2, "等式の変形(基)": 2, "式の除法(基1)": 2,
    "縦書きの加法": 3, "減法": 3, "分数式の加減(基礎)": 3, "#(#+#)±#(#+#)": 3, "等式の変形(標1)": 3, "式の乗法(標)": 3, "式の除法(標1)": 3, "乗除の混合型1": 3,
    "等式の変形(標2)": 4, "文字式(完成1)": 4, "文字式の値(完)": 4, "分数式の加減(標準1)": 4,
    "式の変形(完)": 5, "文字式(完成2)": 5,

    // --- 連立方程式 ---
    "加減法（ガイド付き）": 2, "代入法（ガイド付き）": 2,
    "加減法（計算練習）①": 3, "代入法（計算練習）①": 3, "()付きの方程式": 3,
    "連立方程式（統合）": 4, "金銭問題(基)": 4, "数の問題(基)": 4, "割合(準備)": 4, "速度(準備)": 4,
    "割合(標準)": 5, "食塩濃度(標)": 5, "速度問題(標3)": 5,

    // --- 図形の性質 ---
    "角度 基礎": 1, "平行線の錯角・同位角（基本）": 1, "三角形と角（基本）": 1, "合同条件(基)": 1,
    "角度（基本）": 2, "二等辺三角形(角度)": 2, "二等辺三角形(角度・応用)": 3, "三・四角形(角度)": 2, "四角形の性質(基)": 2,
    "多角形と角(基2)": 3, "交差する三角形": 3, "星形多角形の角度": 4,
    "角度（応用）": 3, "合同の証明(基)": 3, "二等辺三角形(準)": 3, "四角形の関係": 3,
    "二等辺三角形(証)": 4, "直角三角形(証)": 4, "正三角形(証)": 4, "平行四辺形(証)": 4,
    "証明（応用）": 5, "証明（EX）": 5, "三・四角形(証明)": 5,

    // --- 一次関数 ---
    "表からｸﾞﾗﾌを書く": 2, "切片を求める": 2, "傾きを求める": 2,
    "2点でｸﾞﾗﾌを書く": 3, "切片と傾きで書く": 3, "ｸﾞﾗﾌから式1": 3, "1次関数の変化の割合": 3,
    "2直線の交点": 4, "グラフの変域": 4, "1次関数の利用(基)": 4,
    "グラフと面積1": 5, "グラフと面積2": 5,

    // --- 確率 ---
    "サイコロ1個の確率(基)": 1, "ボール1個の確率(基)": 1,
    "サイコロ2個の確率(基)": 2, "樹形図に表す": 3,
    "サイコロ1個の確率(標)": 3, "カード1枚の確率(標)": 3,
    "サイコロ2個の確率(標)": 4, "区別できない時": 4,
    "サイコロ2個の確率(応)": 5,

    // --- データの活用 ---
    "四分位数(基)": 2, "四分位範囲(基)": 2, "度数分布表(基)": 2, "ヒストグラム(基)": 2,
    "平均値・中央値(基)": 1, "箱ひげ図の読み取り(基)": 3,
    "箱ひげ図の読み取り(標)": 4, "代表値の比較(標)": 4,
};

const getDifficulty = (category: string): number => {
    return difficultyMap[category] || 3;
};

const ABILITIES: Ability[] = [
    { type: 'DEFENSIVE_STANCE', description: '[防御] このラウンドで敗北しても失点しない。' },
    { type: 'TIME_PRESSURE', value: 3, description: '[速攻] 相手の解答時間を3秒短縮する。' },
    { type: 'SCORE_BOOST', value: 1, description: '[激励] このラウンドで勝利した場合、追加で1スコアを得る。' },
];

const assignAbility = (card: ProblemCard): Ability | undefined => {
    if (card.difficulty < 3) return undefined;
    const abilityMap: { [key: string]: AbilityType[] } = {
        "図形の性質": ['DEFENSIVE_STANCE'],
        "確率": ['DEFENSIVE_STANCE', 'SCORE_BOOST'],
        "一次関数": ['TIME_PRESSURE', 'SCORE_BOOST'],
        "連立方程式": ['TIME_PRESSURE'],
        "式の計算": ['SCORE_BOOST'],
        "データの活用": ['DEFENSIVE_STANCE', 'SCORE_BOOST'],
    };
    const possibleTypes = abilityMap[card.mainCategory];
    if (!possibleTypes) return undefined;
    if (Math.random() < 0.25) {
        const randomType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
        return ABILITIES.find(a => a.type === randomType);
    }
    return undefined;
}

const processProblems = (): ProblemCard[] => {
    const allProblems: ProblemCard[] = [];
    let idCounter = 0;
    const sets = [
        { mainCat: "式の計算", problems: polynomialProblems },
        { mainCat: "連立方程式", problems: simultaneousEquationsProblems },
        { mainCat: "図形の性質", problems: geometryProblems },
        { mainCat: "一次関数", problems: linearFunctionsProblems },
        { mainCat: "確率", problems: probabilityProblems },
        { mainCat: "データの活用", problems: dataAnalysisProblems },
    ];
    for (const set of sets) {
        for (const category in set.problems) {
            const difficulty = getDifficulty(category);
            for (const problem of (set.problems as any)[category]) {
                // Enrich with SVG: if problem has imageUrl but no svg, populate from SVG maps
                const enriched = (() => {
                    const p = problem as Problem;
                    const data = p.data as any;
                    if (data?.imageUrl && !data.svg && ALL_SVG[data.imageUrl]) {
                        return { ...p, data: { ...data, svg: ALL_SVG[data.imageUrl] } };
                    }
                    return p;
                })();
                const card: ProblemCard = {
                    id: idCounter++,
                    mainCategory: set.mainCat,
                    category,
                    difficulty,
                    problem: enriched,
                };
                card.ability = assignAbility(card);
                allProblems.push(card);
            }
        }
    }
    return allProblems;
}

export const CARD_DEFINITIONS: ProblemCard[] = processProblems();

// ============================
// Gamification Helpers
// ============================
export const getTodayStr = (): string => new Date().toISOString().slice(0, 10);

export const getWeekStart = (): string => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); // Monday
  return d.toISOString().slice(0, 10);
};

// ============================
// Badge Definitions
// エビデンスB: 達成バッジ × 自己決定理論（有能感欲求）
// ============================
export const BADGE_DEFS: BadgeDef[] = [
  // --- 正解マイルストーン ---
  { id: 'first_correct', title: '初正解', description: 'はじめて問題に正解した', icon: '⭐' },
  { id: 'correct_50', title: '50問達成', description: '通算50問正解した', icon: '🎯' },
  { id: 'correct_100', title: '100問達成', description: '通算100問正解した', icon: '💯' },
  { id: 'correct_500', title: '500問達成', description: '通算500問正解した', icon: '🌟' },
  { id: 'correct_1000', title: '1000問達成', description: '通算1000問正解した', icon: '🏅' },
  // --- PvPバトル ---
  { id: 'first_pvp_win', title: '初勝利', description: 'はじめてPvPで勝利した', icon: '⚔️' },
  { id: 'pvp_10wins', title: 'PvP10勝', description: 'PvPで10勝した', icon: '🏆' },
  { id: 'pvp_50wins', title: 'PvP50勝', description: 'PvPで50勝した', icon: '🥇' },
  { id: 'first_cpu_win', title: 'CPU撃破', description: 'はじめてCPU戦に勝利した', icon: '🤖' },
  { id: 'perfect_battle', title: '完全勝利', description: 'HP満タンで勝利した', icon: '💎' },
  // --- ログインストリーク ---
  { id: 'streak_3', title: '3日連続', description: '3日連続でログインした', icon: '🔥' },
  { id: 'streak_7', title: '7日連続', description: '7日連続でログインした', icon: '🔥🔥' },
  { id: 'streak_14', title: '14日連続', description: '14日連続でログインした', icon: '🔥🔥🔥' },
  { id: 'streak_30', title: '30日連続', description: '30日連続でログインした', icon: '👑' },
  // --- 連鎖 ---
  { id: 'chain_5', title: '5連鎖', description: '5問連続正解した', icon: '⚡' },
  { id: 'chain_10', title: '10連鎖', description: '10問連続正解した', icon: '⚡⚡' },
  { id: 'chain_20', title: '20連鎖', description: '20問連続正解した', icon: '⚡⚡⚡' },
  // --- 分野マスター ---
  { id: 'master_polynomial', title: '式の計算マスター', description: '式の計算の正答率85%以上', icon: '📐' },
  { id: 'master_equation', title: '連立方程式マスター', description: '連立方程式の正答率85%以上', icon: '📝' },
  { id: 'master_geometry', title: '図形マスター', description: '図形の性質の正答率85%以上', icon: '📏' },
  { id: 'master_function', title: '一次関数マスター', description: '一次関数の正答率85%以上', icon: '📈' },
  { id: 'master_probability', title: '確率マスター', description: '確率の正答率85%以上', icon: '🎲' },
  { id: 'master_data', title: 'データ活用マスター', description: 'データの活用の正答率85%以上', icon: '📊' },
  { id: 'all_master', title: '全分野制覇', description: '全分野の正答率85%以上', icon: '🎓' },
  // --- コレクション ---
  { id: 'deck_full', title: 'フルデッキ', description: 'カードを50枚以上所持', icon: '🃏' },
  { id: 'shop_first', title: '初めての買い物', description: 'ショップで初購入', icon: '🛒' },
  { id: 'title_collector', title: '称号コレクター', description: '称号を3つ以上購入', icon: '🏷️' },
  // --- クエスト ---
  { id: 'daily_complete', title: 'デイリー完遂', description: '全デイリークエストを達成', icon: '📋' },
  { id: 'weekly_complete', title: 'ウィークリー完遂', description: '全ウィークリークエストを達成', icon: '📅' },
  // --- チュートリアル ---
  { id: 'tutorial_clear', title: 'チュートリアル完了', description: 'チュートリアルバトルをクリア', icon: '🎮' },
  // --- スペシャル ---
  { id: 'speed_demon', title: 'スピードデーモン', description: '3秒以内に正解した', icon: '⏱️' },
  { id: 'comeback', title: '逆転勝利', description: 'HP5以下から勝利した', icon: '🔄' },
];

// ============================
// Quest Definitions
// エビデンスA: 目標設定理論（Locke & Latham 1990, d=0.48）
// 3層設計: Easy(確実達成) → Medium(努力で達成) → Hard(チャレンジ)
// ============================
export const DAILY_QUEST_DEFS: DailyQuestDef[] = [
  // Easy層: ほぼ全員が達成でき、毎日の起動動機になる
  { id: 'dq_5', title: '今日の5問', description: '5問正解しよう', target: 5, reward: { mp: 150, exp: 80 }, icon: '⚡' },
  // Medium層: 15-20分の学習を要する。目標設定理論の最適難度
  { id: 'dq_15', title: '15問突破', description: '15問正解しよう', target: 15, reward: { mp: 400, exp: 200 }, icon: '🔥' },
  // Hard層: 30分以上+高品質。達成感が最大のチャレンジ目標
  { id: 'dq_30', title: '30問＆正答率80%', description: '30問正解（正答率80%以上）', target: 30, reward: { mp: 1000, exp: 500 }, icon: '💎' },
  // PvP: 社会的動機づけ（SDT関係性欲求）
  { id: 'dq_pvp', title: 'PvP参戦', description: 'PvP対戦を1回行おう', target: 1, reward: { mp: 200, exp: 100 }, icon: '⚔️' },
];

export const WEEKLY_QUEST_DEFS: DailyQuestDef[] = [
  { id: 'wq_50', title: '週50問チャレンジ', description: '今週50問正解しよう', target: 50, reward: { mp: 800, exp: 400 }, icon: '🌟' },
  { id: 'wq_pvp3', title: '週3回PvP', description: '今週PvPを3回行おう', target: 3, reward: { mp: 800, exp: 400 }, icon: '🏆' },
  { id: 'wq_100', title: '週100問マスター', description: '今週100問正解しよう', target: 100, reward: { mp: 2000, exp: 1000 }, icon: '👑' },
];

/**
 * MPシンク — 称号・ストリークシールド・テーマ
 * エビデンスB: 仮想経済バランス（Castronova 2005）
 *   消費先がないとインフレ → モチベーション低下
 */
export const SHOP_ITEMS: ShopItemDef[] = [
  // ストリークシールド（ログイン連続日数を1回保護）
  { id: 'streak_shield', name: 'ストリークシールド', description: 'ログイン途切れを1回だけ防ぐ', cost: 2000, icon: '🛡️', type: 'streak_shield' },
  // バトルテーマ
  { id: 'theme_fire', name: '炎のテーマ', description: 'バトル画面が炎に包まれる', cost: 4000, icon: '🔴', type: 'theme' },
  { id: 'theme_ice', name: '氷のテーマ', description: '冷徹な戦場で戦う', cost: 4000, icon: '🔵', type: 'theme' },
  { id: 'theme_gold', name: '黄金のテーマ', description: '栄光のゴールドバトル', cost: 8000, icon: '🟡', type: 'theme' },
  // 消耗品
  { id: 'mp_booster', name: '2倍MPブースター', description: '1時間MPの獲得量が2倍になる', cost: 3000, icon: '⚡', type: 'mp_booster', durationMs: 3600000 },
  { id: 'hint_token', name: 'ヒントトークン', description: 'バトル中に1問ヒントが使える（1個）', cost: 500, icon: '💡', type: 'hint_token' },
  { id: 'exp_booster', name: '経験値ブースター', description: '次のバトルで獲得EXPが2倍', cost: 1500, icon: '🌟', type: 'exp_booster' },
];

/**
 * バトルテーマ設定
 */
export const THEME_CONFIGS: Record<string, { bgClass: string; accentColor: string }> = {
  theme_fire: {
    bgClass: 'bg-gradient-to-br from-red-950 via-orange-900/20 to-red-950',
    accentColor: '#ef4444',
  },
  theme_ice: {
    bgClass: 'bg-gradient-to-br from-blue-950 via-cyan-900/20 to-slate-950',
    accentColor: '#06b6d4',
  },
  theme_gold: {
    bgClass: 'bg-gradient-to-br from-amber-950 via-yellow-900/20 to-amber-950',
    accentColor: '#f59e0b',
  },
};

/**
 * 称号定義（条件達成で自動付与）
 * エビデンスA: 自己決定理論（Deci & Ryan 1985）— 有能感・達成感による内発的動機づけ
 */
export const TITLE_DEFS: TitleDef[] = [
  // スターター
  { id: 'title_newcomer', name: '新入生', description: 'ゲームを始めた証', icon: '🔰', condition: { type: 'any' }, rarity: 'common' },

  // 正解数マイルストーン
  { id: 'title_correct_50', name: '問題解き師', description: '50問正解した', icon: '📝', condition: { type: 'total_correct', value: 50 }, rarity: 'common' },
  { id: 'title_correct_100', name: '百問突破', description: '100問正解した', icon: '💯', condition: { type: 'total_correct', value: 100 }, rarity: 'common' },
  { id: 'title_correct_500', name: '解答機械', description: '500問正解した', icon: '⚙️', condition: { type: 'total_correct', value: 500 }, rarity: 'rare' },
  { id: 'title_correct_1000', name: '千問達人', description: '1000問正解した', icon: '🏅', condition: { type: 'total_correct', value: 1000 }, rarity: 'rare' },
  { id: 'title_correct_5000', name: '万能数学者', description: '5000問正解した', icon: '🌟', condition: { type: 'total_correct', value: 5000 }, rarity: 'epic' },

  // PvP勝利
  { id: 'title_first_pvp_win', name: '初陣', description: 'PvPで初勝利', icon: '⚔️', condition: { type: 'badge_owned', badgeId: 'first_pvp_win' }, rarity: 'common' },
  { id: 'title_pvp_10wins', name: '闘士', description: 'PvPで10勝した', icon: '🗡️', condition: { type: 'badge_owned', badgeId: 'pvp_10wins' }, rarity: 'common' },
  { id: 'title_pvp_50wins', name: '戦士', description: 'PvPで50勝した', icon: '🏆', condition: { type: 'badge_owned', badgeId: 'pvp_50wins' }, rarity: 'rare' },
  { id: 'title_pvp_100wins', name: '猛将', description: 'PvPで100勝した', icon: '👑', condition: { type: 'total_wins', value: 100 }, rarity: 'epic' },

  // ログインストリーク
  { id: 'title_streak_3', name: '習慣者', description: '3日連続ログイン', icon: '🔥', condition: { type: 'login_streak', value: 3 }, rarity: 'common' },
  { id: 'title_streak_7', name: '精勤', description: '7日連続ログイン', icon: '🔥', condition: { type: 'login_streak', value: 7 }, rarity: 'common' },
  { id: 'title_streak_30', name: '皆勤賞', description: '30日連続ログイン', icon: '🏆', condition: { type: 'login_streak', value: 30 }, rarity: 'epic' },
  { id: 'title_streak_90', name: '鉄人', description: '90日連続ログイン', icon: '💪', condition: { type: 'login_streak', value: 90 }, rarity: 'legendary' },

  // 連鎖コンボ
  { id: 'title_chain_5', name: '連続正解者', description: '5問連続正解した', icon: '⚡', condition: { type: 'badge_owned', badgeId: 'chain_5' }, rarity: 'common' },
  { id: 'title_chain_10', name: '怒涛の連撃', description: '10問連続正解した', icon: '⚡', condition: { type: 'badge_owned', badgeId: 'chain_10' }, rarity: 'rare' },
  { id: 'title_chain_20', name: '無敵連鎖', description: '20問連続正解した', icon: '⚡', condition: { type: 'badge_owned', badgeId: 'chain_20' }, rarity: 'epic' },

  // レベル
  { id: 'title_level_10', name: '一人前', description: 'レベル10に到達', icon: '📈', condition: { type: 'level', value: 10 }, rarity: 'common' },
  { id: 'title_level_30', name: '熟練者', description: 'レベル30に到達', icon: '🎖️', condition: { type: 'level', value: 30 }, rarity: 'rare' },
  { id: 'title_level_50', name: '上級者', description: 'レベル50に到達', icon: '🌠', condition: { type: 'level', value: 50 }, rarity: 'epic' },

  // カテゴリマスター
  { id: 'title_master_polynomial', name: '式の計算マスター', description: '式の計算の正答率85%以上', icon: '📐', condition: { type: 'badge_owned', badgeId: 'master_polynomial' }, rarity: 'rare' },
  { id: 'title_master_equation', name: '方程式マスター', description: '連立方程式の正答率85%以上', icon: '📝', condition: { type: 'badge_owned', badgeId: 'master_equation' }, rarity: 'rare' },
  { id: 'title_master_geometry', name: '図形の達人', description: '図形の正答率85%以上', icon: '📏', condition: { type: 'badge_owned', badgeId: 'master_geometry' }, rarity: 'rare' },
  { id: 'title_master_function', name: '関数の申し子', description: '一次関数の正答率85%以上', icon: '📈', condition: { type: 'badge_owned', badgeId: 'master_function' }, rarity: 'rare' },
  { id: 'title_master_probability', name: '確率の魔術師', description: '確率の正答率85%以上', icon: '🎲', condition: { type: 'badge_owned', badgeId: 'master_probability' }, rarity: 'rare' },
  { id: 'title_master_data', name: 'データの賢者', description: 'データ活用の正答率85%以上', icon: '📊', condition: { type: 'badge_owned', badgeId: 'master_data' }, rarity: 'rare' },
  { id: 'title_all_master', name: '全科目制覇', description: '全分野85%以上の正答率', icon: '🎓', condition: { type: 'badge_owned', badgeId: 'all_master' }, rarity: 'legendary' },

  // スペシャル
  { id: 'title_perfect_battle', name: '完璧主義者', description: 'HP満タンで勝利した', icon: '💎', condition: { type: 'badge_owned', badgeId: 'perfect_battle' }, rarity: 'epic' },
  { id: 'title_comeback', name: '逆転の帝王', description: 'HP5以下から勝利した', icon: '🔄', condition: { type: 'badge_owned', badgeId: 'comeback' }, rarity: 'rare' },
  { id: 'title_speed_demon', name: 'スピードデーモン', description: '3秒以内に正解した', icon: '⏱️', condition: { type: 'badge_owned', badgeId: 'speed_demon' }, rarity: 'rare' },
  { id: 'title_first_cpu_win', name: 'CPU撃破者', description: 'CPUに初勝利した', icon: '🤖', condition: { type: 'badge_owned', badgeId: 'first_cpu_win' }, rarity: 'common' },

  // 月次限定（動的 — 1位のみ装備可能）
  { id: 'title_monthly_champion', name: '数学王', description: '今月の総合勝利数1位のみ装備可能', icon: '👑', condition: { type: 'monthly_top1' }, isMonthly: true, rarity: 'legendary' },
];
