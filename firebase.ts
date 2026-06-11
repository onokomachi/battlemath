// Firebase v9 modular SDK
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported as isAnalyticsSupported } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, enableNetwork, disableNetwork } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// battlemath-online Firebase project config (from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyDfr022IMbBXCJT_wM2UCmZqexv-KKMtEM",
  authDomain: "battlemath-online.firebaseapp.com",
  projectId: "battlemath-online",
  storageBucket: "battlemath-online.firebasestorage.app",
  messagingSenderId: "492702213499",
  appId: "1:492702213499:web:7680fa2a44be90a77b89de",
  measurementId: "G-19HQYHJJN9"
};

let app: any, auth: any, db: any, storage: any, googleProvider: any, analytics: any;
let firestoreReady = false;

// Core services (auth, db, storage) - must not fail
try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app, 'default');
  storage = getStorage(app);
  googleProvider = new GoogleAuthProvider();
} catch (error) {
  console.error("Firebase core initialization error:", error);
}

// Firestore connectivity check (non-blocking)
const checkFirestoreConnection = async (): Promise<boolean> => {
  if (!db) return false;
  try {
    // Import getDocs/collection dynamically to test connectivity
    const { getDocs, collection, query, limit } = await import('firebase/firestore');
    await getDocs(query(collection(db, '__health_check__'), limit(1)));
    firestoreReady = true;
    return true;
  } catch (e: any) {
    const msg = e?.message || '';
    if (msg.includes('not found') || msg.includes('404') || e?.code === 'not-found') {
      console.error(
        '%c[BattleMath] Firestoreデータベースが見つかりません。\n' +
        'Firebase Console → Firestore Database → 「データベースを作成」を実行してください。\n' +
        'https://console.firebase.google.com/project/battlemath-online/firestore',
        'color: #ff6b6b; font-size: 14px; font-weight: bold;'
      );
    } else {
      console.warn('[BattleMath] Firestore connectivity check failed:', msg);
    }
    return false;
  }
};

// Fire connectivity check (non-blocking)
checkFirestoreConnection().then(ok => {
  if (ok) console.log('[BattleMath] Firestore connected');
});

// Analytics - optional, should not block auth
isAnalyticsSupported().then(supported => {
  if (supported && app) {
    try {
      analytics = getAnalytics(app);
    } catch (e) {
      console.warn("Analytics init skipped:", e);
    }
  }
}).catch(() => {});

export { app, auth, db, storage, googleProvider, analytics, firestoreReady, checkFirestoreConnection };
