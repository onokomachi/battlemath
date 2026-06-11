/**
 * useAuth.ts — Firebase認証 + ログインストリーク管理
 *
 * App.tsxから抽出: 認証関連のstate/effectを集約
 */
import { useState, useEffect, useCallback } from 'react';
import {
  onAuthStateChanged, signInWithPopup, signInWithRedirect,
  getRedirectResult, signOut,
  type User
} from 'firebase/auth';
import {
  doc, getDoc, setDoc, updateDoc, increment, serverTimestamp
} from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';
import type { StudentProfile } from '../types';
import { getTodayStr } from '../constants';

export interface UseAuthReturn {
  user: User | null;
  authLoading: boolean;
  studentProfile: StudentProfile | null;
  loginStreak: number;
  loginBonusClaimed: boolean;
  showLoginBonus: boolean;
  setShowLoginBonus: (v: boolean) => void;
  setLoginBonusClaimed: (v: boolean) => void;
  handleLogin: () => Promise<void>;
  handleLogout: (onBeforeLogout?: () => Promise<void>) => Promise<void>;
  handleStudentProfileSet: (profile: StudentProfile) => Promise<void>;
  handleGuestPlay: () => void;
  setGameStateOnAuth: (setter: (s: string) => void) => void;
  /** Firestore上のユーザーデータ初期化コールバック（gamification等の初期データを受け取るため） */
  onUserDataLoaded: (callback: (data: Record<string, any>) => void) => void;
  saveUserToFirestore: (updates: Record<string, any>) => Promise<void>;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(() => {
    try {
      const s = localStorage.getItem('battleMathStudentProfile');
      return s ? JSON.parse(s) : null;
    } catch { return null; }
  });
  const [loginStreak, setLoginStreak] = useState(0);
  const [showLoginBonus, setShowLoginBonus] = useState(false);
  const [loginBonusClaimed, setLoginBonusClaimed] = useState(false);

  // データ読み込みコールバック（外部hookがFirestoreデータを受け取るため）
  const [dataCallbacks, setDataCallbacks] = useState<Array<(data: Record<string, any>) => void>>([]);

  const onUserDataLoaded = useCallback((callback: (data: Record<string, any>) => void) => {
    setDataCallbacks(prev => [...prev, callback]);
  }, []);

  const saveUserToFirestore = useCallback(async (updates: Record<string, any>) => {
    if (!user || !db) return;
    try {
      await updateDoc(doc(db, 'users', user.uid), updates);
    } catch (e) { console.error('Firestore update error:', e); }
  }, [user]);

  // Firebase Auth listener
  useEffect(() => {
    if (!auth) { setAuthLoading(false); return; }
    getRedirectResult(auth).catch((e) => {
      console.warn('Redirect result check:', e);
    });

    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setAuthLoading(false);
      if (u && db) {
        const ref = doc(db, 'users', u.uid);
        try {
          const snap = await getDoc(ref);
          if (snap.exists()) {
            const d = snap.data();
            // 通知: 外部hookにデータを渡す
            dataCallbacks.forEach(cb => cb(d));

            if (d.studentProfile) {
              setStudentProfile(d.studentProfile);
              localStorage.setItem('battleMathStudentProfile', JSON.stringify(d.studentProfile));
            }
            // ログインストリーク計算
            const today = getTodayStr();
            const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().slice(0, 10);
            const lastLogin: string = d.lastLoginDate || '';
            let newStreak: number = d.loginStreak || 0;
            if (lastLogin !== today) {
              newStreak = lastLogin === yesterdayStr ? newStreak + 1 : 1;
              await updateDoc(ref, { loginStreak: newStreak, lastLoginDate: today }).catch(() => {});
              setLoginBonusClaimed(false);
              setTimeout(() => setShowLoginBonus(true), 800);
            } else {
              setLoginBonusClaimed(!!d.loginBonusClaimedDate && d.loginBonusClaimedDate === today);
            }
            setLoginStreak(newStreak);
          } else {
            // First login
            const initialData: Record<string, any> = {
              uid: u.uid,
              displayName: u.displayName,
              email: u.email,
              photoURL: u.photoURL,
              mathPoints: 1000,
              playerLevel: 1,
              playerExp: 0,
              totalWins: 0,
              totalMatches: 0,
              ownedCardIds: [],
              earnedBadgeIds: [],
              totalCorrectAnswers: 0,
              loginStreak: 1,
              lastLoginDate: getTodayStr(),
              loginBonusClaimedDate: '',
              studentProfile: studentProfile || null,
              createdAt: serverTimestamp(),
            };
            await setDoc(ref, initialData);
            dataCallbacks.forEach(cb => cb(initialData));
            setLoginStreak(1);
            setLoginBonusClaimed(false);
            setTimeout(() => setShowLoginBonus(true), 800);
          }
        } catch (e) { console.error('User sync error:', e); }
      }
    });
    return () => unsub();
  }, []);

  const handleLogin = useCallback(async () => {
    if (!auth || !googleProvider) return;
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e: any) {
      if (e?.code === 'auth/popup-blocked' || e?.code === 'auth/popup-closed-by-user' || e?.code === 'auth/cancelled-popup-request') {
        try { await signInWithRedirect(auth, googleProvider); }
        catch (redirectError) { console.error('Redirect login also failed:', redirectError); }
      }
    }
  }, []);

  const handleLogout = useCallback(async (onBeforeLogout?: () => Promise<void>) => {
    if (!auth) return;
    try {
      if (onBeforeLogout) await onBeforeLogout();
      await signOut(auth);
    } catch (e) { console.error('Logout failed:', e); }
  }, []);

  const handleStudentProfileSet = useCallback(async (profile: StudentProfile) => {
    setStudentProfile(profile);
    localStorage.setItem('battleMathStudentProfile', JSON.stringify(profile));
    if (user && db) {
      try {
        await updateDoc(doc(db, 'users', user.uid), { studentProfile: profile });
      } catch (e) { console.error('Student profile sync error:', e); }
    }
  }, [user]);

  const handleGuestPlay = useCallback(() => {
    // ゲストモードではメインメニューへ遷移（呼び出し側でsetGameStateを行う）
  }, []);

  return {
    user, authLoading, studentProfile, loginStreak,
    showLoginBonus, setShowLoginBonus,
    loginBonusClaimed, setLoginBonusClaimed,
    handleLogin, handleLogout, handleStudentProfileSet, handleGuestPlay,
    onUserDataLoaded, saveUserToFirestore,
  };
};
