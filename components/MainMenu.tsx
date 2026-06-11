import React from 'react';
import type { GameState, DailyQuestDef } from '../types';
import type { User } from 'firebase/auth';

interface MainMenuProps {
  onSelectMode: (mode: GameState) => void;
  playerLevel: number;
  playerExp: number;
  expForNextLevel: number;
  user?: User | null;
  mathPoints?: number;
  onLogout?: () => void;
  onOpenRanking?: () => void;
  loginStreak?: number;
  onOpenQuests?: () => void;
  onOpenLoginBonus?: () => void;
  canAccessGameMaster?: boolean;
  onOpenGameMaster?: () => void;
  dailyQuestDefs?: DailyQuestDef[];
  dailyQuestProgress?: Record<string, number>;
  dailyQuestDone?: Set<string>;
  onOpenClassBattle?: () => void;
  hasStudentProfile?: boolean;
  srsReviewCount?: number;
  onOpenWeakness?: () => void;
  onOpenItemShop?: () => void;
  equippedTitleName?: string | null;
}

const PlayerStatus: React.FC<Omit<MainMenuProps, 'onSelectMode'>> = ({
  playerLevel, playerExp, expForNextLevel, user, mathPoints, onLogout, loginStreak, onOpenLoginBonus, equippedTitleName,
}) => {
  const expPercentage = (playerExp / expForNextLevel) * 100;

  return (
    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-64 sm:w-72 md:w-80 hud-panel rounded-xl p-3 sm:p-5 shadow-2xl border-l-4 border-l-cyan-500 z-10">
      <div className="corner-accent rt" />
      <div className="corner-accent rb" />
      {/* User info */}
      {user && (
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-cyan-900/40">
          {user.photoURL && (
            <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full border border-cyan-700/50" />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-white font-bold truncate">
              {user.displayName}
              {equippedTitleName && (
                <span className="ml-1 text-[9px] text-amber-400/80 font-bold">【{equippedTitleName}】</span>
              )}
            </p>
            <p className="text-[10px] text-amber-400">MP: {mathPoints?.toLocaleString()}</p>
          </div>
          {loginStreak !== undefined && loginStreak >= 1 && (
            <button
              onClick={onOpenLoginBonus}
              className="flex items-center gap-1 bg-amber-900/30 border border-amber-700/40 px-2 py-0.5 rounded-full hover:bg-amber-800/40 transition-colors cursor-pointer"
              title="ログインボーナス"
            >
              <span className="text-sm">🔥</span>
              <span className="text-[10px] text-amber-400 font-black">{loginStreak}日</span>
            </button>
          )}
          {onLogout && (
            <button
              onClick={onLogout}
              className="text-[10px] text-gray-500 border border-gray-700 px-2 py-0.5 rounded hover:text-white transition-colors"
            >
              OUT
            </button>
          )}
        </div>
      )}
      <div className="flex justify-between items-end mb-3">
        <div>
          <span className="text-[10px] text-cyan-400 font-bold tracking-wide block mb-1">
            プレイヤーレベル
          </span>
          <span className="font-bold text-3xl text-white">
            Lv. {playerLevel}
          </span>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-mono text-cyan-500/70 block">経験値</span>
          <span className="text-xs font-mono text-gray-300">{playerExp} / {expForNextLevel}</span>
        </div>
      </div>
      <div className="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden border border-cyan-900/50">
        <div
          className="bg-gradient-to-r from-blue-600 via-cyan-400 to-white h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_cyan]"
          style={{ width: `${expPercentage}%` }}
        />
      </div>
    </div>
  );
};

const DailyMissionPreview: React.FC<{
  defs: DailyQuestDef[];
  progress: Record<string, number>;
  done: Set<string>;
  onOpenQuests?: () => void;
}> = ({ defs, progress, done, onOpenQuests }) => {
  if (!defs || defs.length === 0) return null;

  const completedCount = defs.filter(q => done.has(q.id)).length;
  const allDone = completedCount === defs.length;

  return (
    <button
      onClick={onOpenQuests}
      className="absolute bottom-6 left-4 sm:left-6 w-64 sm:w-72 md:w-80 hud-panel rounded-xl p-3 shadow-xl border-l-4 border-l-amber-500/60 z-10 cursor-pointer hover:border-l-amber-400 transition-all group text-left"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase">
          デイリーミッション
        </span>
        <span className={`text-[10px] font-bold ${allDone ? 'text-green-400' : 'text-gray-500'}`}>
          {completedCount}/{defs.length}
        </span>
      </div>
      <div className="space-y-1.5">
        {defs.map(q => {
          const prog = progress[q.id] || 0;
          const isDone = done.has(q.id);
          const pct = Math.min(100, (prog / q.target) * 100);
          return (
            <div key={q.id} className="flex items-center gap-2">
              <span className="text-xs">{isDone ? '✅' : q.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-bold truncate ${isDone ? 'text-green-400 line-through' : 'text-gray-300'}`}>
                    {q.title}
                  </span>
                  <span className="text-[9px] text-gray-500 ml-1 flex-shrink-0">
                    {isDone ? '' : `${prog}/${q.target}`}
                  </span>
                </div>
                {!isDone && (
                  <div className="w-full bg-slate-900/80 rounded-full h-0.5 mt-0.5">
                    <div
                      className="bg-amber-500/60 h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[9px] text-gray-600 mt-2 group-hover:text-gray-400 transition-colors">
        タップして詳細を確認
      </p>
    </button>
  );
};

const MainMenu: React.FC<MainMenuProps> = ({
  onSelectMode, playerLevel, playerExp, expForNextLevel,
  user, mathPoints, onLogout, onOpenRanking,
  loginStreak, onOpenQuests, onOpenLoginBonus,
  canAccessGameMaster, onOpenGameMaster,
  dailyQuestDefs, dailyQuestProgress, dailyQuestDone,
  onOpenClassBattle, hasStudentProfile, srsReviewCount, onOpenWeakness, onOpenItemShop, equippedTitleName,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start sm:justify-center p-4 pt-20 sm:pt-4 text-white relative overflow-y-auto">
      <PlayerStatus
        playerLevel={playerLevel}
        playerExp={playerExp}
        expForNextLevel={expForNextLevel}
        user={user}
        mathPoints={mathPoints}
        onLogout={onLogout}
        onOpenRanking={onOpenRanking}
        loginStreak={loginStreak}
        onOpenLoginBonus={onOpenLoginBonus}
        equippedTitleName={equippedTitleName}
      />

      {/* Top-right buttons: RANKING / QUEST / ADMIN */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col gap-2 items-end z-10">
        {onOpenRanking && (
          <button
            onClick={onOpenRanking}
            className="btn-tactical px-5 py-2 rounded-lg text-sm font-bold"
          >
            ランキング
          </button>
        )}
        {onOpenQuests && user && (
          <button
            onClick={onOpenQuests}
            className="btn-tactical px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
          >
            クエスト
          </button>
        )}
        {onOpenWeakness && (
          <button
            onClick={onOpenWeakness}
            className="btn-tactical px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
          >
            弱点分析
          </button>
        )}
        {onOpenItemShop && (
          <button
            onClick={onOpenItemShop}
            className="btn-tactical px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
          >
            アイテム
          </button>
        )}
        {onOpenClassBattle && user && hasStudentProfile && (
          <button
            onClick={onOpenClassBattle}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold border border-amber-500/30 text-amber-400 hover:bg-amber-900/20 transition-colors"
          >
            学校対抗
          </button>
        )}
        {onOpenGameMaster && (
          <button
            onClick={onOpenGameMaster}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold border border-gray-700/50 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
            title="管理画面"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            管理
          </button>
        )}
      </div>

      <div className="text-center mb-8 md:mb-16 relative">
        <div className="absolute -inset-20 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-hologram mb-4 tracking-[0.1em] sm:tracking-[0.2em]">
          BATTLE-MATH
        </h1>
        <div className="flex items-center justify-center gap-6">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <p className="text-xs md:text-sm text-cyan-300 font-bold tracking-[0.6em] uppercase opacity-80">
            Universal Protocol v3.0
          </p>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-cyan-500 to-transparent" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 w-full max-w-5xl px-4 sm:px-6">
        {[
          { mode: 'deck_building' as GameState, label: 'バトル', desc: 'デッキを組んでCPUやプレイヤーと対戦', icon: '⚔', badge: 0 },
          { mode: 'speed_duel_setup' as GameState, label: 'スピード', desc: 'デッキ不要！早押し勝負', icon: '⚡', badge: 0 },
          { mode: 'practice_mode' as GameState, label: '練習', desc: '分野別に問題を解いて実力アップ', icon: '📖', badge: srsReviewCount },
          { mode: 'card_shop' as GameState, label: 'ショップ', desc: 'MPでカードパックを購入', icon: '🎴', badge: 0 },
        ].map((item, i) => (
          <button
            key={item.mode}
            onClick={() => onSelectMode(item.mode)}
            className="flex-1 btn-tactical p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col items-center gap-2 sm:gap-3 group relative overflow-hidden"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="corner-accent lt" />
            <div className="corner-accent rb" />
            {/* SRS復習バッジ */}
            {(item.badge || 0) > 0 && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse z-10">
                {item.badge}
              </div>
            )}
            <div className="absolute -right-4 -bottom-4 text-6xl opacity-[0.08] group-hover:opacity-[0.15] group-hover:scale-125 transition-all duration-500">
              {item.icon}
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold group-hover:text-cyan-300 transition-colors tracking-wide">
              {item.label}
            </span>
            <span className="text-xs text-blue-300 font-bold opacity-70">
              {item.desc}
            </span>
          </button>
        ))}
      </div>

      {/* Guest notice */}
      {!user && (
        <div className="mt-8">
          <button
            onClick={() => onSelectMode('login_screen')}
            className="text-xs text-amber-400 border border-amber-800/50 px-4 py-2 rounded-lg hover:bg-amber-900/20 transition-colors font-mono tracking-widest"
          >
            ログインしてランキングや対戦に参加
          </button>
        </div>
      )}

      {/* Daily Mission Preview (bottom-left, subtle) */}
      {user && dailyQuestDefs && dailyQuestProgress && dailyQuestDone && (
        <DailyMissionPreview
          defs={dailyQuestDefs}
          progress={dailyQuestProgress}
          done={dailyQuestDone}
          onOpenQuests={onOpenQuests}
        />
      )}

      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
      </div>

      {/* Presented by */}
      <div className="absolute bottom-3 right-4 text-[10px] text-gray-500 font-mono tracking-wider opacity-60">
        presented by onokomachi
      </div>
    </div>
  );
};

export default MainMenu;
