import type { ProblemSet } from '../types';

export const linearFunctionsGraphingProblems: ProblemSet = {
  "表からｸﾞﾗﾌを書く": [
    {
      type: 'graphing_with_table',
      data: {
        question: 'y = x + 3 の表を完成させ、グラフを書きなさい。',
        equation: 'y = x + 3',
        table: [
          { x: -4, y: -1 },
          { x: -2, y: 1 },
          { x: 0, y: 3 },
          { x: 2, y: 5 },
          { x: 4, y: 7 },
        ],
        hint: ["まず表を完成させましょう。xの値を式に代入してyの値を計算します。", "表が完成したら、グラフ上の対応する点を2つクリックして直線を引きます。"]
      },
      answer: 'y=x+3'
    },
    {
      type: 'graphing_with_table',
      data: {
        question: 'y = -2x + 1 の表を完成させ、グラフを書きなさい。',
        equation: 'y = -2x + 1',
        table: [
          { x: -2, y: 5 },
          { x: -1, y: 3 },
          { x: 0, y: 1 },
          { x: 1, y: -1 },
          { x: 2, y: -3 },
        ],
      },
      answer: 'y=-2x+1'
    },
    {
      type: 'graphing_with_table',
      data: {
        question: 'y = 2x - 3 の表を完成させ、グラフを書きなさい。',
        equation: 'y = 2x - 3',
        table: [
          { x: -1, y: -5 },
          { x: 0, y: -3 },
          { x: 1, y: -1 },
          { x: 2, y: 1 },
          { x: 3, y: 3 },
        ],
      },
      answer: 'y=2x-3'
    },
    {
      type: 'graphing_with_table',
      data: {
        question: 'y = (1/2)x + 2 の表を完成させ、グラフを書きなさい。',
        equation: 'y = (1/2)x + 2',
        table: [
          { x: -4, y: 0 },
          { x: -2, y: 1 },
          { x: 0, y: 2 },
          { x: 2, y: 3 },
          { x: 4, y: 4 },
        ],
      },
      answer: 'y=0.5x+2'
    },
    {
      type: 'graphing_with_table',
      data: {
        question: 'y = -x - 1 の表を完成させ、グラフを書きなさい。',
        equation: 'y = -x - 1',
        table: [
          { x: -3, y: 2 },
          { x: -1, y: 0 },
          { x: 0, y: -1 },
          { x: 2, y: -3 },
          { x: 4, y: -5 },
        ],
      },
      answer: 'y=-x-1'
    }
  ],
  "2点でｸﾞﾗﾌを書く": [
    // Corrected existing problems
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=x+3" }, answer: "y=x+3" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=3x-4" }, answer: "y=3x-4" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-x+5" }, answer: "y=-x+5" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=x+1" }, answer: "y=x+1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-2x-2" }, answer: "y=-2x-2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-2x+4" }, answer: "y=-2x+4" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=1" }, answer: "y=1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-2x" }, answer: "y=-2x" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=2x+4" }, answer: "y=2x+4" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-1/2x+4" }, answer: "y=-1/2x+4" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=2x-3" }, answer: "y=2x-3" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=2x-1" }, answer: "y=2x-1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=2x-3" }, answer: "y=2x-3" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-1/2x-2" }, answer: "y=-1/2x-2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\nx=2" }, answer: "x=2" },
    // New problems based on source
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=3x+2" }, answer: "y=3x+2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-3x-2" }, answer: "y=-3x-2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=4x+1" }, answer: "y=4x+1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-4x-1" }, answer: "y=-4x-1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=2/3x-2" }, answer: "y=2/3x-2" },
  ],
  "切片と傾きで書く": [
    // Corrected existing problems
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=2x-1" }, answer: "y=2x-1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-x+3" }, answer: "y=-x+3" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=3x" }, answer: "y=3x" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=1/2x+2" }, answer: "y=1/2x+2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-3x-2" }, answer: "y=-3x-2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=4" }, answer: "y=4" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=x-4" }, answer: "y=x-4" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-2/3x+1" }, answer: "y=-2/3x+1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=4x+1" }, answer: "y=4x+1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-5x" }, answer: "y=-5x" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-x-1" }, answer: "y=-x-1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=2.5x-3" }, answer: "y=2.5x-3" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-1.5x+2.5" }, answer: "y=-1.5x+2.5" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=0" }, answer: "y=0" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=x" }, answer: "y=x" },
    // New problems based on source
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=3x-5" }, answer: "y=3x-5" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-3x+6" }, answer: "y=-3x+6" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=1/4x+2" }, answer: "y=1/4x+2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=-3/2x-1" }, answer: "y=-3/2x-1" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\ny=x+6" }, answer: "y=x+6" },
  ],
  "2点でｸﾞﾗﾌを書く2": [
    // New problems based on source
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\n-x+y-3=0" }, answer: "y=x+3" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\nx=y+2" }, answer: "y=x-2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\nx+y=2" }, answer: "y=-x+2" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\n2x=y+3" }, answer: "y=2x-3" },
    { type: 'graphing', data: { question: "次の一次関数のグラフをかきなさい。\n2x+3y-6=0" }, answer: "y=-2/3x+2" },
  ],
};
