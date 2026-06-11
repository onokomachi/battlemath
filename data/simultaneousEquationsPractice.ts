import { ProblemSet } from '../types';

export const simultaneousEquationsPracticeProblems: ProblemSet = {
  "加減法（計算練習）①": [
    // from 連立方程式の計算
    { type: 'simultaneous_equation', data: { eq1: {a: 2, b: 1, c: 7}, eq2: {a: 1, b: -1, c: 2} }, answer: "x=3,y=1" },
    { type: 'simultaneous_equation', data: { eq1: {a: 3, b: 2, c: 12}, eq2: {a: 1, b: -2, c: 4} }, answer: "x=4,y=0" },
    { type: 'simultaneous_equation', data: { eq1: {a: 1, b: 1, c: 5}, eq2: {a: 1, b: -1, c: 1} }, answer: "x=3,y=2" },
    // from 加減法の練習(基)
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 2, c: 7 }, eq2: { a: 1, b: 5, c: 13 } }, answer: 'x=3,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: 1, c: 5 }, eq2: { a: 2, b: 1, c: 3 } }, answer: 'x=2,y=-1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 1, c: 8 }, eq2: { a: 1, b: 1, c: 5 } }, answer: 'x=3,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 4, b: 3, c: 10 }, eq2: { a: 1, b: 3, c: 7 } }, answer: 'x=1,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 5, b: -2, c: 11 }, eq2: { a: 3, b: -2, c: 5 } }, answer: 'x=3,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 4, c: 9 }, eq2: { a: 1, b: -2, c: 3 } }, answer: 'x=5,y=1' },
    { type: 'simultaneous_equation', data: { eq1: { a: -1, b: 3, c: 7 }, eq2: { a: 1, b: 2, c: 8 } }, answer: 'x=2,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 5, c: 12 }, eq2: { a: 2, b: 1, c: 4 } }, answer: 'x=1,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: -1, c: 10 }, eq2: { a: 1, b: -1, c: 4 } }, answer: 'x=3,y=-1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 4, b: 1, c: 15 }, eq2: { a: -1, b: 1, c: 5 } }, answer: 'x=2,y=7' },
    // from 加減法の練習(標1)
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: 2, c: 7 }, eq2: { a: 1, b: 3, c: 7 } }, answer: 'x=1,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 1, c: 5 }, eq2: { a: 3, b: 2, c: 8 } }, answer: 'x=2,y=1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 1, c: 11 }, eq2: { a: 3, b: -2, c: 6 } }, answer: 'x=4,y=3' },
  ],
  "加減法（計算練習）②": [
    // from 加減法の練習(標1)
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 3, c: 10 }, eq2: { a: 2, b: 1, c: 5 } }, answer: 'x=1,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 2, c: 5 }, eq2: { a: 2, b: -1, c: 5 } }, answer: 'x=3,y=1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 2, c: 2 }, eq2: { a: 3, b: -1, c: 13 } }, answer: 'x=4,y=-1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -1, c: 3 }, eq2: { a: 2, b: 3, c: 16 } }, answer: 'x=5,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: -1, c: -1 }, eq2: { a: 1, b: 2, c: 9 } }, answer: 'x=1,y=4' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 1, c: 3 }, eq2: { a: 2, b: -3, c: -19 } }, answer: 'x=-2,y=5' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 1, c: 6 }, eq2: { a: 1, b: -3, c: 6 } }, answer: 'x=6,y=0' },
    // from 加減法の練習(標2)
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 3, c: 8 }, eq2: { a: 3, b: 4, c: 11 } }, answer: 'x=1,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 1, c: 5 }, eq2: { a: 1, b: 2, c: 1 } }, answer: 'x=3,y=-1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 3, c: 12 }, eq2: { a: 3, b: -2, c: 5 } }, answer: 'x=3,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: 2, c: 13 }, eq2: { a: 2, b: -5, c: -23 } }, answer: 'x=1,y=5' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: -3, c: 5 }, eq2: { a: 3, b: 4, c: 16 } }, answer: 'x=4,y=1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 5, b: 3, c: -1 }, eq2: { a: 2, b: 1, c: -1 } }, answer: 'x=-2,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: 4, c: 7 }, eq2: { a: 2, b: 5, c: 0 } }, answer: 'x=5,y=-2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 4, b: 3, c: -4 }, eq2: { a: 3, b: -2, c: 14 } }, answer: 'x=2,y=-4' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: -5, c: 13 }, eq2: { a: 3, b: -2, c: 3 } }, answer: 'x=-1,y=-3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: -4, c: 10 }, eq2: { a: 2, b: 3, c: 18 } }, answer: 'x=6,y=2' }
  ],
  "代入法（計算練習）①": [
    // from 代入法の練習(基)
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -2, c: -4 }, eq2: { a: 1, b: 1, c: 5 } }, answer: 'x=2,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: -2, b: 1, c: -9 }, eq2: { a: 3, b: 1, c: 11 } }, answer: 'x=4,y=-1' },
    { type: 'simultaneous_equation', data: { eq1: { a: -1, b: 1, c: 2 }, eq2: { a: 2, b: 1, c: 8 } }, answer: 'x=2,y=4' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -3, c: -1 }, eq2: { a: 1, b: 2, c: 9 } }, answer: 'x=5,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 1, c: 5 }, eq2: { a: 3, b: -1, c: 5 } }, answer: 'x=2,y=1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -1, c: 6 }, eq2: { a: 2, b: -3, c: 10 } }, answer: 'x=8,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: -4, b: 1, c: 0 }, eq2: { a: 1, b: 1, c: 10 } }, answer: 'x=2,y=8' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 1, c: 0 }, eq2: { a: 3, b: 2, c: -5 } }, answer: 'x=-5,y=5' },
    { type: 'simultaneous_equation', data: { eq1: { a: -2, b: 1, c: -7 }, eq2: { a: -1, b: 3, c: 4 } }, answer: 'x=5,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -2, c: 3 }, eq2: { a: 3, b: -5, c: 10 } }, answer: 'x=5,y=1' },
    // from 代入法の練習(標1)
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -2, c: 7 }, eq2: { a: 1, b: 3, c: -3 } }, answer: 'x=3,y=-2' },
    { type: 'simultaneous_equation', data: { eq1: { a: -3, b: 1, c: -7 }, eq2: { a: 2, b: 1, c: 3 } }, answer: 'x=2,y=-1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 1, c: 10 }, eq2: { a: -2, b: 1, c: 1 } }, answer: 'x=3,y=7' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -1, c: 5 }, eq2: { a: 1, b: -3, c: -1 } }, answer: 'x=8,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 1, c: 9 }, eq2: { a: -1, b: 1, c: 3 } }, answer: 'x=2,y=5' },
  ],
  "代入法（計算練習）②": [
    // from 代入法の練習(標1)
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: -2, c: 1 }, eq2: { a: 1, b: -1, c: -1 } }, answer: 'x=-1,y=-2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 1, c: 8 }, eq2: { a: 2, b: 3, c: 21 } }, answer: 'x=3,y=5' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -4, c: -2 }, eq2: { a: -1, b: 5, c: 4 } }, answer: 'x=6,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: -2, b: 1, c: 0 }, eq2: { a: 3, b: 4, c: 22 } }, answer: 'x=2,y=4' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 3, c: 0 }, eq2: { a: 2, b: -1, c: -14 } }, answer: 'x=-6,y=2' },
    // from 代入法の練習(標2)
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -3, c: -5 }, eq2: { a: 2, b: 1, c: 4 } }, answer: 'x=1,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: -2, b: 1, c: -5 }, eq2: { a: 3, b: 2, c: 11 } }, answer: 'x=3,y=1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: -1, c: 8 }, eq2: { a: 1, b: 3, c: -10 } }, answer: 'x=2,y=-4' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: 1, c: 1 }, eq2: { a: 2, b: -3, c: 8 } }, answer: 'x=1,y=-2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 2, c: 0 }, eq2: { a: 3, b: -1, c: 7 } }, answer: 'x=2,y=-1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 4, b: -1, c: -11 }, eq2: { a: -2, b: 3, c: 13 } }, answer: 'x=-2,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -5, c: 13 }, eq2: { a: 2, b: 3, c: 0 } }, answer: 'x=3,y=-2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: 2, c: 27 }, eq2: { a: 1, b: -1, c: 4 } }, answer: 'x=7,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 3, c: -1 }, eq2: { a: 1, b: -2, c: -4 } }, answer: 'x=-2,y=1' },
    { type: 'simultaneous_equation', data: { eq1: { a: -1, b: 1, c: 5 }, eq2: { a: 4, b: -3, c: -18 } }, answer: 'x=-3,y=2' }
  ],
  "連立方程式（統合）": [
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 1, c: 7 }, eq2: { a: 1, b: -1, c: 1 } }, answer: 'x=4,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: -2, b: 1, c: 3 }, eq2: { a: 1, b: 1, c: 9 } }, answer: 'x=2,y=7' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: 2, c: 13 }, eq2: { a: 1, b: -1, c: 1 } }, answer: 'x=3,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 2, b: 3, c: 1 }, eq2: { a: 3, b: 2, c: -1 } }, answer: 'x=-1,y=1' },
    { type: 'simultaneous_equation', data: { eq1: { a: 4, b: -1, c: 10 }, eq2: { a: 2, b: 3, c: 12 } }, answer: 'x=3,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: 0, c: 5 }, eq2: { a: 2, b: 3, c: 19 } }, answer: 'x=5,y=3' },
    { type: 'simultaneous_equation', data: { eq1: { a: -3, b: 1, c: -8 }, eq2: { a: 5, b: -2, c: 15 } }, answer: 'x=1,y=-5' },
    { type: 'simultaneous_equation', data: { eq1: { a: 5, b: -3, c: 9 }, eq2: { a: 2, b: -3, c: 0 } }, answer: 'x=3,y=2' },
    { type: 'simultaneous_equation', data: { eq1: { a: 1, b: -4, c: 10 }, eq2: { a: 2, b: -3, c: 5 } }, answer: 'x=-2,y=-3' },
    { type: 'simultaneous_equation', data: { eq1: { a: 3, b: 5, c: 1 }, eq2: { a: 2, b: -3, c: 7 } }, answer: 'x=2,y=-1' },
    { type: 'simultaneous_equation', data: { eq1: {a: 1, b: 2, c: 8}, eq2: {a: 3, b: -1, c: 3} }, answer: "x=2,y=3" },
    { type: 'simultaneous_equation', data: { eq1: {a: 2, b: 1, c: 2}, eq2: {a: 1, b: -3, c: -13} }, answer: "x=-1,y=4" },
    { type: 'simultaneous_equation', data: { eq1: {a: 3, b: 2, c: 11}, eq2: {a: 4, b: 1, c: 18} }, answer: "x=5,y=-2" },
    { type: 'simultaneous_equation', data: { eq1: {a: 5, b: 1, c: 6}, eq2: {a: 2, b: 3, c: 18} }, answer: "x=0,y=6" },
    { type: 'simultaneous_equation', data: { eq1: {a: 2, b: -3, c: 1}, eq2: {a: 1, b: 2, c: -10} }, answer: "x=-4,y=-3" },
    { type: 'simultaneous_equation', data: { eq1: {a: 1, b: 5, c: 3}, eq2: {a: -2, b: 3, c: -6} }, answer: "x=3,y=0" },
    { type: 'simultaneous_equation', data: { eq1: {a: 1, b: 1, c: 8}, eq2: {a: 2, b: -5, c: 9} }, answer: "x=7,y=1" },
    { type: 'simultaneous_equation', data: { eq1: {a: 3, b: 1, c: 1}, eq2: {a: 2, b: 2, c: -6} }, answer: "x=2,y=-5" },
    { type: 'simultaneous_equation', data: { eq1: {a: 4, b: 3, c: -6}, eq2: {a: 1, b: -1, c: -5} }, answer: "x=-3,y=2" },
    { type: 'simultaneous_equation', data: { eq1: {a: 1, b: -2, c: -2}, eq2: {a: 3, b: 2, c: 26} }, answer: "x=6,y=4" }
  ],
};