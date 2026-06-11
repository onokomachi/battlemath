import type { ProblemSet } from '../types';

// ============================================================
// 動的ダイアグラムコンポーネントを使った角度問題
// angle_diagram: 平行線と1本の横断線
// bent_transversal_diagram: 折れ曲がった横断線
// triangle_in_parallel_lines: 平行線の間の三角形
// multi_transversal_angle: 複数の横断線
// ============================================================

export const geometryDynamicAngleProblems: ProblemSet = {

  // ----------------------------------------------------------
  // 平行線の錯角・同位角（基本） - angle_diagram 使用
  // 位置: 1=上左, 2=上右, 3=下左(lの下), 4=下右(lの下)
  //       5=上左(mの上), 6=上右(mの上), 7=下左, 8=下右
  // ----------------------------------------------------------
  "平行線と角①": [
    // --- 同位角（corresponding angles） ---
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 2, value: 65 }],
          unknown: { position: 6, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '65'
    },
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 1, value: 110 }],
          unknown: { position: 5, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '110'
    },
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 3, value: 72 }],
          unknown: { position: 7, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '72'
    },
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 4, value: 48 }],
          unknown: { position: 8, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '48'
    },
    // --- 錯角（alternate interior angles） ---
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 4, value: 55 }],
          unknown: { position: 5, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。（錯角）'
      },
      answer: '55'
    },
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 3, value: 130 }],
          unknown: { position: 6, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。（錯角）'
      },
      answer: '130'
    },
    // --- 対頂角と同位角の複合 ---
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 1, value: 125 }],
          unknown: { position: 8, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '55'
    },
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 2, value: 38 }],
          unknown: { position: 7, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '142'
    },
    // --- 同側内角（supplementary） ---
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 3, value: 115 }],
          unknown: { position: 5, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '65'
    },
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 4, value: 62 }],
          unknown: { position: 6, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '118'
    },
    // --- 複数の既知角 ---
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 1, value: 70 }, { position: 6, value: 70 }],
          unknown: { position: 5, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '110'
    },
    {
      type: 'angle_diagram',
      data: {
        config: {
          known: [{ position: 2, value: 45 }],
          unknown: { position: 5, name: 'x' }
        },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '135'
    },
  ],

  // ----------------------------------------------------------
  // 折れ曲がった横断線 - bent_transversal_diagram 使用
  // ----------------------------------------------------------
  "平行線と角②": [
    {
      type: 'bent_transversal_diagram',
      data: {
        topAngle: { value: 50, placement: 'interior_right' },
        bottomAngle: { value: 70, placement: 'interior_left' },
        unknownAngle: { label: 'x' },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '120'
    },
    {
      type: 'bent_transversal_diagram',
      data: {
        topAngle: { value: 65, placement: 'interior_right' },
        bottomAngle: { value: 45, placement: 'interior_left' },
        unknownAngle: { label: 'x' },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '110'
    },
    {
      type: 'bent_transversal_diagram',
      data: {
        topAngle: { value: 40, placement: 'interior_right' },
        bottomAngle: { value: 80, placement: 'interior_left' },
        unknownAngle: { label: 'x' },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '120'
    },
    {
      type: 'bent_transversal_diagram',
      data: {
        topAngle: { value: 35, placement: 'interior_right' },
        bottomAngle: { value: 55, placement: 'interior_left' },
        unknownAngle: { label: 'x' },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '90'
    },
    {
      type: 'bent_transversal_diagram',
      data: {
        topAngle: { value: 120, placement: 'exterior_right' },
        bottomAngle: { value: 140, placement: 'exterior_left' },
        unknownAngle: { label: 'x' },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '100'
    },
    {
      type: 'bent_transversal_diagram',
      data: {
        topAngle: { value: 75, placement: 'interior_right' },
        bottomAngle: { value: 60, placement: 'interior_left' },
        unknownAngle: { label: 'x' },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '135'
    },
    {
      type: 'bent_transversal_diagram',
      data: {
        topAngle: { value: 110, placement: 'exterior_right' },
        bottomAngle: { value: 55, placement: 'interior_left' },
        unknownAngle: { label: 'x' },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '125'
    },
    {
      type: 'bent_transversal_diagram',
      data: {
        topAngle: { value: 30, placement: 'interior_right' },
        bottomAngle: { value: 45, placement: 'interior_left' },
        unknownAngle: { label: 'x' },
        question: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '75'
    },
  ],

  // ----------------------------------------------------------
  // 平行線間の三角形 - triangle_in_parallel_lines 使用
  // ----------------------------------------------------------
  "三角形と角（標）": [
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 50, position: 'base_left' },
          { value: 65, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '65'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 70, position: 'base_left' },
          { value: 40, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '70'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 35, position: 'base_left' },
          { value: 80, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '65'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 55, position: 'base_left' },
          { value: 110, position: 'base_right_exterior' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '55'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 45, position: 'base_left' },
          { value: 60, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '75'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 30, position: 'base_left' },
          { value: 50, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '100'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 40, position: 'base_left' },
          { value: 130, position: 'base_right_exterior' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '90'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 75, position: 'base_left' },
          { value: 65, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '40'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 55, position: 'base_left' },
          { value: 70, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '55'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 25, position: 'base_left' },
          { value: 85, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '70'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 60, position: 'base_left' },
          { value: 120, position: 'base_right_exterior' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '60'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 80, position: 'base_left' },
          { value: 45, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '55'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 35, position: 'base_left' },
          { value: 145, position: 'base_right_exterior' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '110'
    },
    {
      type: 'triangle_in_parallel_lines',
      data: {
        angles: [
          { value: 42, position: 'base_left' },
          { value: 68, position: 'base_right' }
        ],
        unknown: { label: 'x', position: 'top_vertex' },
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '70'
    },
  ],

  // ----------------------------------------------------------
  // 複数横断線 - multi_transversal_angle 使用
  // ----------------------------------------------------------
  "角度（応用2）": [
    {
      type: 'multi_transversal_angle',
      data: {
        parallelLines: [
          { y: 50, label: 'l' },
          { y: 150, label: 'm' }
        ],
        transversals: [
          { p1: { x: 80, y: 0 }, p2: { x: 120, y: 200 } },
          { p1: { x: 180, y: 0 }, p2: { x: 140, y: 200 } }
        ],
        angles: [
          { value: '55°', transversalIndex: 0, parallelLineIndex: 0, position: 'top-right', isUnknown: false },
          { value: 'x', transversalIndex: 1, parallelLineIndex: 1, position: 'top-left', isUnknown: true }
        ],
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '55'
    },
    {
      type: 'multi_transversal_angle',
      data: {
        parallelLines: [
          { y: 50, label: 'l' },
          { y: 150, label: 'm' }
        ],
        transversals: [
          { p1: { x: 60, y: 0 }, p2: { x: 100, y: 200 } },
          { p1: { x: 200, y: 0 }, p2: { x: 160, y: 200 } }
        ],
        angles: [
          { value: '70°', transversalIndex: 0, parallelLineIndex: 0, position: 'bottom-right', isUnknown: false },
          { value: '45°', transversalIndex: 1, parallelLineIndex: 0, position: 'bottom-left', isUnknown: false },
          { value: 'x', transversalIndex: 0, parallelLineIndex: 0, position: 'bottom-right', isUnknown: true, isIntersectionAngle: true }
        ],
        questionText: '2直線が交わる点の角∠x を求めよ。'
      },
      answer: '65'
    },
    {
      type: 'multi_transversal_angle',
      data: {
        parallelLines: [
          { y: 40, label: 'l' },
          { y: 120, label: 'm' },
          { y: 200, label: 'n' }
        ],
        transversals: [
          { p1: { x: 100, y: 0 }, p2: { x: 130, y: 240 } }
        ],
        angles: [
          { value: '68°', transversalIndex: 0, parallelLineIndex: 0, position: 'top-right', isUnknown: false },
          { value: 'x', transversalIndex: 0, parallelLineIndex: 2, position: 'bottom-left', isUnknown: true }
        ],
        questionText: 'l // m // n のとき、∠x の大きさを求めよ。'
      },
      answer: '112'
    },
    {
      type: 'multi_transversal_angle',
      data: {
        parallelLines: [
          { y: 50, label: 'l' },
          { y: 150, label: 'm' }
        ],
        transversals: [
          { p1: { x: 70, y: 0 }, p2: { x: 110, y: 200 } },
          { p1: { x: 190, y: 0 }, p2: { x: 150, y: 200 } }
        ],
        angles: [
          { value: '60°', transversalIndex: 0, parallelLineIndex: 1, position: 'top-right', isUnknown: false },
          { value: '50°', transversalIndex: 1, parallelLineIndex: 1, position: 'top-left', isUnknown: false },
          { value: 'x', transversalIndex: 0, parallelLineIndex: 0, position: 'bottom-right', isUnknown: true }
        ],
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '60'
    },
    {
      type: 'multi_transversal_angle',
      data: {
        parallelLines: [
          { y: 50, label: 'l' },
          { y: 150, label: 'm' }
        ],
        transversals: [
          { p1: { x: 80, y: 0 }, p2: { x: 120, y: 200 } },
          { p1: { x: 200, y: 0 }, p2: { x: 160, y: 200 } }
        ],
        angles: [
          { value: '40°', transversalIndex: 0, parallelLineIndex: 0, position: 'top-right', isUnknown: false },
          { value: '35°', transversalIndex: 1, parallelLineIndex: 0, position: 'top-left', isUnknown: false },
          { value: 'x', transversalIndex: 0, parallelLineIndex: 1, position: 'top-left', isUnknown: true }
        ],
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '140'
    },
    {
      type: 'multi_transversal_angle',
      data: {
        parallelLines: [
          { y: 50, label: 'l' },
          { y: 150, label: 'm' }
        ],
        transversals: [
          { p1: { x: 90, y: 0 }, p2: { x: 110, y: 200 } },
          { p1: { x: 170, y: 0 }, p2: { x: 150, y: 200 } }
        ],
        angles: [
          { value: '75°', transversalIndex: 0, parallelLineIndex: 0, position: 'bottom-right', isUnknown: false },
          { value: '80°', transversalIndex: 1, parallelLineIndex: 1, position: 'top-left', isUnknown: false },
          { value: 'x', transversalIndex: 1, parallelLineIndex: 0, position: 'bottom-left', isUnknown: true }
        ],
        questionText: 'l // m のとき、∠x の大きさを求めよ。'
      },
      answer: '80'
    },
  ],
};
