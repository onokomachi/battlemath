
import React, { useState } from 'react';
import type { SessionStats, StudentProfile } from '../types';
import type { User } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { doc, setDoc, getDoc, updateDoc, increment } from 'firebase/firestore';
import MenuScreen from './MenuScreen';
import ProblemScreen from './ProblemScreen';
import RecordsScreen from './RecordsScreen';
import { saveRecord } from '../services/recordService';

interface PracticeModeProps {
  onSessionComplete: (score: number) => void;
  db: Firestore | null;
  user: User | null;
  studentProfile: StudentProfile | null;
}

/**
 * 月次ランキングにスコアを送信する。
 * Firebase最適化:
 * - コレクション名: `rankings` / ドキュメントID: `{YYYY-MM}_{subtopic}_{uid}`
 * - 1プレイ=最大1書込（upsert: ベストスコアのみ更新）
 * - Firestore無料枠: 20K writes/day → 十分な余裕
 */
const submitRanking = async (
  db: Firestore,
  user: User,
  studentProfile: StudentProfile | null,
  subTopic: string,
  score: number
) => {
  const month = new Date().toISOString().slice(0, 7); // YYYY-MM
  const docId = `${month}_${subTopic}_${user.uid}`;
  const rankRef = doc(db, 'rankings', docId);

  try {
    const existing = await getDoc(rankRef);
    if (existing.exists()) {
      const data = existing.data();
      // ベストスコアのみ更新（書込最小化）
      if (data.score >= score) return;
    }
    await setDoc(rankRef, {
      uid: user.uid,
      displayName: user.displayName || 'Guest',
      studentLabel: studentProfile?.displayLabel || null,
      subTopic,
      score,
      month,
      updatedAt: new Date().toISOString(),
    });
  } catch (e) {
    console.warn('Ranking submission failed:', e);
  }
};

const PracticeMode: React.FC<PracticeModeProps> = ({ onSessionComplete, db, user, studentProfile }) => {
  const [screen, setScreen] = useState<'menu' | 'problem' | 'records'>('menu');
  const [selectedTopic, setSelectedTopic] = useState<{ category: string; subTopic: string } | null>(null);
  const [overallStats, setOverallStats] = useState<SessionStats>({ correct: 0, incorrect: 0, totalScore: 0, problemCount: 0 });

  const handleSelectSubTopic = (category: string, subTopic: string) => {
    setSelectedTopic({ category, subTopic });
    setScreen('problem');
  };

  const handleShowRecords = () => {
    setScreen('records');
  };

  const handleProblemSessionBack = (stats: SessionStats) => {
    if (selectedTopic && stats.problemCount > 0) {
        saveRecord({
            category: selectedTopic.category,
            subTopic: selectedTopic.subTopic,
            stats: stats
        });
        setOverallStats(prev => ({
            correct: prev.correct + stats.correct,
            incorrect: prev.incorrect + stats.incorrect,
            totalScore: prev.totalScore + stats.totalScore,
            problemCount: prev.problemCount + stats.problemCount,
        }));
        // ランキング送信（ログインユーザーのみ）
        if (db && user && stats.totalScore > 0) {
          submitRanking(db, user, studentProfile, selectedTopic.subTopic, stats.totalScore);
          // usersドキュメントにも練習スコアを反映（RankingBoardで表示するため）
          updateDoc(doc(db, 'users', user.uid), {
            practiceScore: increment(stats.totalScore),
            practiceSessions: increment(1),
          }).catch(() => {});
        }
    }
    setScreen('menu');
    setSelectedTopic(null);
  };

  const handleGoHome = () => {
    onSessionComplete(overallStats.totalScore);
  };

  if (screen === 'problem' && selectedTopic) {
    return (
      <ProblemScreen
        category={selectedTopic.category}
        subTopic={selectedTopic.subTopic}
        onBack={handleProblemSessionBack}
        onHome={handleGoHome}
      />
    );
  }

  if (screen === 'records') {
      return <RecordsScreen onBackToMenu={() => setScreen('menu')} />
  }

  return (
    <MenuScreen
      onSelectSubTopic={handleSelectSubTopic}
      onShowRecords={handleShowRecords}
      onExit={handleGoHome}
      db={db}
    />
  );
};

export default PracticeMode;
