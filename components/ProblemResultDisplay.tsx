
import React from 'react';
import { Problem } from '../types';
import { ClockIcon, TrophyIcon, CheckCircleIcon, XCircleIcon } from './Icons';

interface ProblemResultDisplayProps {
  showAnswer: boolean;
  problemData: Problem | null;
  result: 'correct' | 'incorrect' | 'proof' | null;
  userAnswer: string;
  timeTaken: number | null;
  score: number | null;
  getResultRingColor: () => string;
}

const ProblemResultDisplay: React.FC<ProblemResultDisplayProps> = ({
  showAnswer,
  problemData,
  result,
  userAnswer,
  timeTaken,
  score,
  getResultRingColor,
}) => {
  if (!showAnswer || !problemData) return null;

  const isCorrect = result === 'correct';
  const isProof = result === 'proof';

  const statusLabel = isCorrect ? '正解！' : isProof ? '確認完了' : '不正解';
  const statusColor = isCorrect ? 'text-cyan-400' : isProof ? 'text-blue-300' : 'text-red-400';
  const bgColor = isCorrect ? 'bg-cyan-500/5' : isProof ? 'bg-blue-500/5' : 'bg-red-500/5';
  const borderColor = isCorrect ? 'border-cyan-400' : isProof ? 'border-blue-400' : 'border-red-500';

  return (
    <div className={`mt-2 rounded-xl overflow-hidden border-l-4 ${borderColor} ${bgColor} animate-math-fade-in shadow-xl relative`}>
      <div className="p-2.5 sm:p-3 flex flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className={`p-1.5 sm:p-2 rounded-lg bg-black/40 border border-white/10 ${statusColor}`}>
            {isCorrect ? <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : isProof ? <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <XCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
          </div>
          <div>
            <h3 className={`text-base sm:text-lg font-bold ${statusColor}`}>
              {statusLabel}
            </h3>
            {!isCorrect && !isProof && (
              <p className="text-white/50 text-[10px] sm:text-xs">間違いは成長のチャンス。正解を確認しよう！</p>
            )}
            {isCorrect && (
              <p className="text-cyan-300/50 text-[10px] sm:text-xs">よくできました！</p>
            )}
          </div>
        </div>

        <div className='flex items-center gap-3 sm:gap-4 bg-black/30 px-3 py-2 rounded-lg border border-white/5 flex-shrink-0'>
          {result !== 'proof' && timeTaken !== null && (
            <div className='flex flex-col items-center'>
              <span className='text-[9px] sm:text-[10px] text-cyan-500 font-bold'>時間</span>
              <span className="text-sm sm:text-base font-bold font-mono text-white">{timeTaken.toFixed(1)}<span className="text-[10px] ml-0.5 text-white/40">秒</span></span>
            </div>
          )}
          {isCorrect && score !== null && (
            <>
              <div className="w-[1px] h-6 bg-white/10"></div>
              <div className='flex flex-col items-center'>
                <span className='text-[9px] sm:text-[10px] text-cyan-500 font-bold'>獲得</span>
                <span className="text-sm sm:text-base font-bold font-mono text-amber-400">+{score}<span className="text-[10px] ml-0.5 text-amber-500/60">MP</span></span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="px-3 py-2 sm:px-4 sm:py-2.5 bg-black/40 border-t border-white/5">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div>
            <p className="text-[10px] sm:text-xs text-cyan-400 mb-1 font-bold">あなたの解答</p>
            <p className="text-white/80 bg-slate-950/60 p-2 rounded-lg border border-white/5 break-all font-mono text-xs sm:text-sm">
              {problemData.type === 'graphing' ? userAnswer : (userAnswer || '未入力').replace(/;/g, ' | ')}
            </p>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-cyan-400 mb-1 font-bold">正解</p>
            <p className="text-cyan-300 bg-slate-950/60 p-2 rounded-lg border border-cyan-400/20 break-all font-mono text-xs sm:text-sm">
              {problemData.answer.replace(/;/g, ' | ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemResultDisplay;
