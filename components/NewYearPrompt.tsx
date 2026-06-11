/**
 * NewYearPrompt.tsx — 新年度プロフィール更新プロンプト
 *
 * 年度が変わった際に学年・組・番号の更新を促す。
 * - 進級パス: 学年+1、組と番号を選択して更新
 * - 卒業パス: grade=4 で登録（ランキング除外マーカー）
 * - スキップ: 3日後に再表示
 */
import React, { useState } from 'react';
import type { StudentProfile } from '../types';
import { DEFAULT_SCHOOL_YEAR } from '../constants';

interface NewYearPromptProps {
  profile: StudentProfile;
  currentSchoolYear: number;
  onConfirm: (updated: StudentProfile) => void;
  onSkip: () => void;
}

const NewYearPrompt: React.FC<NewYearPromptProps> = ({
  profile,
  currentSchoolYear,
  onConfirm,
  onSkip,
}) => {
  const yearDiff = currentSchoolYear - (profile.schoolYear ?? DEFAULT_SCHOOL_YEAR);
  const newGrade = profile.grade + yearDiff;
  const isGraduated = newGrade > 3;

  const [classNum, setClassNum] = useState(profile.classNum);
  const [number, setNumber] = useState(profile.number);

  const handleConfirm = () => {
    if (isGraduated) {
      onConfirm({
        ...profile,
        grade: 4,
        schoolYear: currentSchoolYear,
        displayLabel: `${profile.school} 卒業生`,
      });
    } else {
      onConfirm({
        ...profile,
        grade: newGrade,
        classNum,
        number,
        schoolYear: currentSchoolYear,
        displayLabel: `${profile.school} ${newGrade}年${classNum}組${number}番`,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/40 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.15)] max-w-md w-full p-6 text-white animate-math-fade-in">
        <h2 className="text-2xl font-bold text-cyan-300 text-center mb-4">
          {isGraduated ? '卒業おめでとう！' : '新年度が始まりました！'}
        </h2>

        {isGraduated ? (
          <div className="text-center space-y-4">
            <p className="text-gray-300">
              {profile.school} を卒業しましたね。<br />
              これまでの戦いお疲れさまでした！
            </p>
            <p className="text-sm text-gray-500">
              ※卒業生としてプロフィールが更新されます
            </p>
            <button
              onClick={handleConfirm}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg transition-all"
            >
              了解！
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-300 text-center">
              {profile.grade}年生 → <span className="text-cyan-400 font-bold">{newGrade}年生</span> に進級！
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-400 mb-1">組</label>
                <select
                  value={classNum}
                  onChange={e => setClassNum(Number(e.target.value))}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                    <option key={n} value={n}>{n}組</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">出席番号</label>
                <select
                  value={number}
                  onChange={e => setNumber(Number(e.target.value))}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  {Array.from({ length: 45 }, (_, i) => i + 1).map(n => (
                    <option key={n} value={n}>{n}番</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg transition-all"
            >
              更新する
            </button>
          </div>
        )}

        {!isGraduated && (
          <button
            onClick={onSkip}
            className="w-full mt-3 py-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            後で
          </button>
        )}
      </div>
    </div>
  );
};

export default NewYearPrompt;
