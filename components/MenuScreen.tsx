
import React, { useState, useEffect } from 'react';
import { Category, SubCategoryGroup } from '../types';
import { MATH_CATEGORIES } from '../constants';
import { ArchiveIcon, TrophyIcon } from './Icons';
import type { Firestore } from 'firebase/firestore';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

interface MenuScreenProps {
  onSelectSubTopic: (category: string, subTopic: string) => void;
  onShowRecords: () => void;
  onExit: () => void;
  db?: Firestore | null;
}

/** 単元別ランキングモーダル */
const TopicRankingModal: React.FC<{
  subTopic: string;
  db: Firestore;
  onClose: () => void;
}> = ({ subTopic, db, onClose }) => {
  const [entries, setEntries] = useState<Array<{ displayName: string; studentLabel: string | null; score: number }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const month = new Date().toISOString().slice(0, 7);
    const fetchRanking = async () => {
      try {
        // Firestore最適化: limit(20)で読取を最小化（最大21読取/クエリ）
        const q = query(
          collection(db, 'rankings'),
          where('month', '==', month),
          where('subTopic', '==', subTopic),
          orderBy('score', 'desc'),
          limit(20)
        );
        const snap = await getDocs(q);
        setEntries(snap.docs.map(d => {
          const data = d.data();
          return { displayName: data.displayName, studentLabel: data.studentLabel, score: data.score };
        }));
      } catch (e) {
        console.warn('Ranking fetch failed:', e);
      }
      setLoading(false);
    };
    fetchRanking();
  }, [db, subTopic]);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 backdrop-blur-md">
      <div className="hud-panel rounded-2xl p-6 max-w-lg w-full shadow-2xl animate-math-fade-in max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{subTopic}</h3>
            <p className="text-xs text-cyan-400">{new Date().toISOString().slice(0, 7)} 月間ランキング</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl px-2">×</button>
        </div>

        <div className="flex-grow overflow-y-auto space-y-2">
          {loading ? (
            <div className="text-center text-cyan-600 py-8 animate-pulse">読み込み中...</div>
          ) : entries.length === 0 ? (
            <div className="text-center text-cyan-700 py-8">
              <p className="text-sm">まだ記録がありません</p>
              <p className="text-xs mt-1 text-cyan-800">この単元を練習して1位を目指そう！</p>
            </div>
          ) : (
            entries.map((entry, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                i === 0 ? 'bg-amber-900/20 border-amber-500/30' :
                i === 1 ? 'bg-gray-700/10 border-gray-500/20' :
                i === 2 ? 'bg-amber-800/10 border-amber-700/20' :
                'bg-slate-900/30 border-cyan-500/5'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  i === 0 ? 'bg-amber-500 text-black' :
                  i === 1 ? 'bg-gray-400 text-black' :
                  i === 2 ? 'bg-amber-700 text-white' :
                  'bg-slate-800 text-cyan-400'
                }`}>
                  {i + 1}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-bold text-white text-sm truncate">{entry.displayName}</p>
                  {entry.studentLabel && <p className="text-xs text-cyan-500">{entry.studentLabel}</p>}
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold font-mono text-cyan-300">{entry.score}</p>
                  <p className="text-[10px] text-cyan-600">pts</p>
                </div>
              </div>
            ))
          )}
        </div>

        <button onClick={onClose} className="mt-4 btn-tactical w-full py-3 rounded-lg font-bold text-cyan-400">
          閉じる
        </button>
      </div>
    </div>
  );
};

const MenuScreen: React.FC<MenuScreenProps> = ({ onSelectSubTopic, onShowRecords, onExit, db }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(MATH_CATEGORIES[0]);
  const [rankingTopic, setRankingTopic] = useState<string | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start sm:justify-center p-3 sm:p-6 text-white overflow-y-auto">
      {rankingTopic && db && (
        <TopicRankingModal subTopic={rankingTopic} db={db} onClose={() => setRankingTopic(null)} />
      )}

      <header className="w-full max-w-5xl text-center mb-4 sm:mb-8 flex-shrink-0">
        <h1 className="text-3xl sm:text-6xl md:text-8xl font-black text-hologram tracking-[0.05em] sm:tracking-[0.1em] mb-2 sm:mb-3">
          練習モード
        </h1>
        <p className="text-cyan-400 text-xs sm:text-sm font-bold">分野を選んで問題を解こう</p>
      </header>

      <main className="w-full max-w-7xl hud-panel rounded-2xl p-0 shadow-2xl relative overflow-hidden flex flex-col md:flex-row flex-grow md:flex-grow-0 md:h-[65vh] min-h-0">
        <div className="corner-accent lt"></div>
        <div className="corner-accent rb"></div>

        {/* Left Side: Category Selection */}
        <div className="w-full md:w-1/4 bg-slate-950/60 border-b md:border-b-0 md:border-r border-cyan-500/10 flex md:flex-col p-3 sm:p-4 md:p-6 gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible md:overflow-y-auto flex-shrink-0">
          <h2 className="text-xs font-bold text-cyan-400 mb-1 md:mb-2 hidden md:block">分野を選択</h2>
          {MATH_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat)}
              className={`p-2 sm:p-3 md:p-4 text-left rounded-xl transition-all duration-300 font-bold text-xs sm:text-sm border whitespace-nowrap md:whitespace-normal flex-shrink-0
                ${selectedCategory?.name === cat.name
                  ? 'bg-cyan-500/20 text-white border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                  : 'bg-transparent border-transparent text-cyan-700 hover:text-cyan-400 hover:bg-slate-900/40'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right Side: Grouped Subtopics */}
        {selectedCategory ? (
          <div className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-10 animate-math-fade-in">
            <header className="mb-8 flex justify-between items-end border-b border-cyan-500/10 pb-4">
                <div>
                   <h2 className="text-3xl font-bold text-white">{selectedCategory.name}</h2>
                </div>
                <p className="text-xs text-cyan-500 font-bold hidden sm:block">{selectedCategory.groups.reduce((acc, g) => acc + g.subtopics.length, 0)} 単元</p>
            </header>

            <div className="space-y-10">
                {selectedCategory.groups.map((group: SubCategoryGroup) => (
                    <section key={group.name} className="animate-math-fade-in">
                        <div className="flex items-center gap-4 mb-5">
                            <h3 className="text-sm font-bold text-cyan-400 whitespace-nowrap">{group.name}</h3>
                            <div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {group.subtopics.map((subTopic: string) => (
                                <div key={subTopic} className="relative group">
                                  <button
                                      onClick={() => onSelectSubTopic(selectedCategory.name, subTopic)}
                                      className="w-full bg-slate-950/40 border border-cyan-500/10 text-cyan-100/90 p-4 rounded-xl text-sm font-bold hover:bg-cyan-500 hover:text-slate-950 hover:border-white transition-all text-left relative overflow-hidden pr-12"
                                  >
                                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500/20 group-hover:bg-white transition-colors"></div>
                                      <span className="relative z-10 block">{subTopic}</span>
                                  </button>
                                  {db && (
                                    <button
                                      onClick={(e) => { e.stopPropagation(); setRankingTopic(subTopic); }}
                                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cyan-600 hover:text-amber-400 transition-colors z-10"
                                      title="ランキングを見る"
                                    >
                                      <TrophyIcon className="w-4 h-4" />
                                    </button>
                                  )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center border-2 border-dashed border-cyan-900/20 rounded-xl m-6">
             <p className="text-cyan-700 animate-pulse text-sm">分野を選択してください</p>
          </div>
        )}
      </main>

      <footer className="mt-8 flex items-center justify-center gap-6 w-full max-w-5xl flex-shrink-0">
         <button
            onClick={onShowRecords}
            className="btn-tactical px-8 py-3 rounded-lg flex items-center gap-3 font-bold text-sm text-cyan-300 border-cyan-500/20"
          >
            <ArchiveIcon className="w-5 h-5" />
            学習記録
          </button>
          <button
            onClick={onExit}
            className="btn-tactical px-10 py-3 rounded-lg font-bold text-white bg-blue-700/20 border-cyan-500/40 hover:bg-blue-600 text-sm"
          >
            メニューに戻る
          </button>
      </footer>
    </div>
  );
};

export default MenuScreen;
