
import { ALL_PROBLEM_SETS } from '../data';
import { Problem } from '../types';
import { SVG_MAP } from '../data/svgDefinitions';
import svgMap from '../data/geometrySvgMap';
import { geometryProofFigures } from '../data/geometryProofFigures';

// Merge all SVG maps (later entries override earlier ones)
const ALL_SVG: Record<string, string> = { ...SVG_MAP, ...svgMap, ...geometryProofFigures };

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

/** Populate svg field from SVG maps when imageUrl matches */
const enrichWithSvg = (problem: Problem): Problem => {
  const data = problem.data as any;
  if (data?.imageUrl && !data.svg && ALL_SVG[data.imageUrl]) {
    return { ...problem, data: { ...data, svg: ALL_SVG[data.imageUrl] } };
  }
  return problem;
};

/**
 * 問題タイプに基づく最適出題数を決定する。
 * エビデンス: 認知負荷理論 (Sweller, 2011) - タスクの複雑さに応じた適切な量の設定
 *
 * - 証明・グラフ作成: 3問（高負荷タスク）
 * - 角度・図形問題: 4問（中負荷タスク）
 * - 計算・方程式: 5問（低〜中負荷タスク）
 */
const getOptimalProblemCount = (problems: Problem[]): number => {
  if (problems.length === 0) return 0;

  // 問題タイプを集計して最も多いタイプで判定
  const typeCounts: Record<string, number> = {};
  for (const p of problems) {
    typeCounts[p.type] = (typeCounts[p.type] || 0) + 1;
  }
  const dominantType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0][0];

  const heavyTypes = ['proof', 'fill_in_proof', 'graphing', 'graphing_with_table'];
  const mediumTypes = ['angle_diagram', 'bent_transversal_diagram', 'triangle_in_parallel_lines',
    'multi_transversal_angle', 'graph_to_equation', 'graph_with_domain', 'graph_with_area'];

  let count: number;
  if (heavyTypes.includes(dominantType)) {
    count = 3;
  } else if (mediumTypes.includes(dominantType)) {
    count = 4;
  } else {
    count = 5;
  }

  // 問題数が少ない場合はその数に制限
  return Math.min(count, problems.length);
};

/**
 * 指定された分野と単元の問題セットをシャッフルし、最適な数に制限して返す。
 */
export const getShuffledProblemSet = (category: string, subTopic: string): Problem[] => {
  const problemSet = ALL_PROBLEM_SETS[subTopic] || [];
  const shuffled = shuffleArray(problemSet).map(enrichWithSvg);
  const count = getOptimalProblemCount(shuffled);
  return shuffled.slice(0, count);
};
