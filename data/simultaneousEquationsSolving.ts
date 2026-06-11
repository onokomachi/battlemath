import { ProblemSet } from '../types';

export const simultaneousEquationsSolvingProblems: ProblemSet = {
  "加減法（ガイド付き）": [
    {
      type: 'guided_equation',
      data: {
        question: '次の連立方程式を解きなさい。',
        initial_equations: ["2x + y = 7", "x - y = 2"],
        steps: [
          { parts: ["① + ② より", null, "x = ", null] },
          { parts: ["x = ", null] },
          { parts: ["これを②に代入して", null, " - y = 2"] },
          { parts: ["-y = ", null, ",  y = ", null] }
        ],
        final_answer_prompt: "答え:"
      },
      answer: "3;9;3;3;-1;1"
    },
    // from 加減法(基礎1)
    { type: 'guided_equation', data: { initial_equations: ["x+y=5", "x-y=1"], steps: [{ parts: ["① + ② より、", "(x+y)+(x-y)", "=", "5+1"] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを①に代入して、", null, "+y=5"] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:", hint: "2つの式をそのまま足すと y が消去できます。" }, answer: "2;6;3;3;2" },
    { type: 'guided_equation', data: { initial_equations: ["2x+y=7", "x+y=5"], steps: [{ parts: ["① - ② より、", "(2x+y)-(x+y)", "=", "7-5"] }, { parts: ["x", "=", null] }, { parts: ["これを②に代入して、", null, "+y=5"] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:", hint: "式①から式②を引くと y が消去できます。" }, answer: "2;2;3" },
    { type: 'guided_equation', data: { initial_equations: ["3x+2y=8", "3x+y=7"], steps: [{ parts: ["① - ② より、", "(3x+2y)-(3x+y)", "=", "8-7"] }, { parts: ["y", "=", null] }, { parts: ["これを②に代入して、", "3x+", null, "=7"] }, { parts: ["3x", "=", null] }, { parts: ["x", "=", null] }], final_answer_prompt: "答:" }, answer: "1;1;6;2" },
    { type: 'guided_equation', data: { initial_equations: ["-x+2y=4", "x+y=5"], steps: [{ parts: ["① + ② より、", "(-x+2y)+(x+y)", "=", "4+5"] }, { parts: [null, "y", "=", null] }, { parts: ["y", "=", null] }, { parts: ["これを②に代入して、", "x+", null, "=5"] }, { parts: ["x", "=", null] }], final_answer_prompt: "答:" }, answer: "3;9;3;3;2" },
    { type: 'guided_equation', data: { initial_equations: ["5x-2y=11", "3x-2y=7"], steps: [{ parts: ["① - ② より、", "(5x-2y)-(3x-2y)", "=", "11-7"] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを②に代入して、", "3(", null, ")-2y=7"] }, { parts: [null, "-2y=7"] }, { parts: ["-2y", "=", null] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:" }, answer: "2;4;2;2;6;1;-0.5" },
    // from 加減法(基礎2)
    { type: 'guided_equation', data: { initial_equations: ["x+2y=4", "2x-y=3"], steps: [{ parts: ["① + ②×", null, "より"] }, { parts: ["x+2y", "=", "4"] }, { parts: ["+", " ", null, "x - ", null, "y", "=", null] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを①に代入すると、", null, "+2y=4"] }, { parts: ["2y", "=", null] }, { parts: ["y", "=", null] } ], final_answer_prompt: "答:", hint: "式②を2倍するとyの係数が揃います。" }, answer: "2;4;2;6;5;10;2;2;2;1" },
    { type: 'guided_equation', data: { initial_equations: ["3x+y=10", "x-2y=-1"], steps: [{ parts: ["①×", null, " + ② より"] }, { parts: [null, "x+", null, "y", "=", null] }, { parts: ["+", " ", "x-2y", "=", "-1"] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを②に代入して、", null, "-2y=-1"] }, { parts: ["-2y", "=", null] }, { parts: ["y", "=", null] } ], final_answer_prompt: "答:" }, answer: "2;6;2;20;7;19;19/7;19/7;-26/7;13/7" },
    { type: 'guided_equation', data: { initial_equations: ["2x-3y=1", "x+y=3"], steps: [{ parts: ["① + ②×", null, "より"] }, { parts: ["2x-3y", "=", "1"] }, { parts: ["+", " ", null, "x+", null, "y", "=", null] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを②に代入して、", null, "+y=3"] }, { parts: ["y", "=", null] } ], final_answer_prompt: "答:" }, answer: "3;3;3;9;5;10;2;2;1" },
    { type: 'guided_equation', data: { initial_equations: ["4x-5y=3", "2x+y=9"], steps: [{ parts: ["① + ②×", null, "より"] }, { parts: ["4x-5y", "=", "3"] }, { parts: ["+", " ", null, "x+", null, "y", "=", null] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを②に代入して、", "2(", null, ")+y=9"] }, { parts: ["y", "=", null] } ], final_answer_prompt: "答:" }, answer: "5;10;5;45;14;48;24/7;24/7;15/7" },
    // from 加減法(標準1)
    { type: 'guided_equation', data: { initial_equations: ["2x+3y=5", "3x+2y=5"], steps: [{ parts: ["①×", null, " - ②×", null, "より"] }, { parts: [null, "x+", null, "y", "=", null] }, { parts: ["- (", null, "x+", null, "y", "=", null, ")"] }, { parts: [null, "y", "=", null] }, { parts: ["y", "=", null] }, { parts: ["これを①に代入してxを求める", "x", "=", null] } ], final_answer_prompt: "答:", hint: "xかy、どちらかの係数を最小公倍数に揃えましょう。" }, answer: "3;2;6;9;15;6;4;10;5;5;1;1" },
    { type: 'guided_equation', data: { initial_equations: ["3x-2y=4", "4x-3y=5"], steps: [{ parts: ["①×", null, " - ②×", null, "より"] }, { parts: [null, "x-", null, "y", "=", null] }, { parts: ["- (", null, "x-", null, "y", "=", null, ")"] }, { parts: [null, "y", "=", null] }, { parts: ["y", "=", null] }, { parts: ["これを①に代入してxを求める", "x", "=", null] } ], final_answer_prompt: "答:" }, answer: "4;3;12;8;16;12;9;15;1;1;1;2" },
    { type: 'guided_equation', data: { initial_equations: ["5x+2y=12", "2x+3y=7"], steps: [{ parts: ["①×", null, " - ②×", null, "より"] }, { parts: [null, "x+", null, "y", "=", null] }, { parts: ["- (", null, "x+", null, "y", "=", null, ")"] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを②に代入してyを求める", "y", "=", null] } ], final_answer_prompt: "答:" }, answer: "3;2;15;6;36;4;6;14;11;22;2;1" },
    // from 加減法(標準2)
    { type: 'guided_equation', data: { initial_equations: ["4x-3y=-10", "3x+2y=-2"], steps: [{ parts: ["①×", null, " + ②×", null, "より"] }, { parts: [null, "x-", null, "y", "=", null] }, { parts: ["+", " ", null, "x+", null, "y", "=", null] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを②に代入してyを求める", "y", "=", null] } ], final_answer_prompt: "答:" }, answer: "2;3;8;6;-20;9;6;-6;17;-26;-2;2" },
    { type: 'guided_equation', data: { initial_equations: ["-2x+5y=1", "3x-4y=5"], steps: [{ parts: ["①×", null, " + ②×", null, "より"] }, { parts: [null, "x+", null, "y", "=", null] }, { parts: ["+", " ", null, "x-", null, "y", "=", null] }, { parts: [null, "y", "=", null] }, { parts: ["y", "=", null] }, { parts: ["これを①に代入してxを求める", "x", "=", null] } ], final_answer_prompt: "答:" }, answer: "3;2;-6;15;3;6;8;10;7;13;13/7;26/7" },
  ],
  "代入法（ガイド付き）": [
    {
      type: 'guided_equation',
      data: {
        question: '次の連立方程式を解きなさい。',
        initial_equations: ["y = x + 1", "3x + 2y = 12"],
        steps: [
          { parts: ["①を②に代入して", "3x + 2(", null, ") = 12"] },
          { parts: ["3x + ", null, " + 2 = 12"] },
          { parts: [null, "x = ", null] },
          { parts: ["x = ", null] },
          { parts: ["これを①に代入して", "y = ", null, " + 1 = ", null] }
        ],
        final_answer_prompt: "答え:"
      },
      answer: "x+1;2x;5;10;2;2;3"
    },
    {
      type: 'guided_equation',
      data: {
        question: '次の連立方程式を解きなさい。',
        initial_equations: ["y = 2x - 1", "5x + 3y = 19"],
        steps: [
          { parts: ["①を②に代入して", "5x + 3(", null, ") = 19"] },
          { parts: ["5x + ", null, " - 3 = 19"] },
          { parts: [null, "x = ", null] },
          { parts: ["x = ", null] },
          { parts: ["これを①に代入して", "y = 2(", null, ") - 1 = ", null] }
        ],
        final_answer_prompt: "答え:"
      },
      answer: "2x-1;6x;11;22;2;2;3"
    },
    {
      type: 'guided_equation',
      data: {
        question: '次の連立方程式を解きなさい。',
        initial_equations: ["y = -2x + 2", "3x + 2y = 5"],
        steps: [
          { parts: ["①を②に代入して", "3x + 2(", null, ") = 5"] },
          { parts: ["3x ", null, " + 4 = 5"] },
          { parts: [null, "x = ", null] },
          { parts: ["x = ", null] },
          { parts: ["これを①に代入して", "y = -2(", null, ") + 2 = ", null] }
        ],
        final_answer_prompt: "答え:"
      },
      answer: "-2x+2;-4x;-1;1;-1;-1;4"
    },
    {
      type: 'guided_equation',
      data: {
        question: '次の連立方程式を解きなさい。',
        initial_equations: ["y = x - 5", "4x - y = 14"],
        steps: [
          { parts: ["①を②に代入して", "4x - (", null, ") = 14"] },
          { parts: ["4x ", null, " + 5 = 14"] },
          { parts: [null, "x = ", null] },
          { parts: ["x = ", null] },
          { parts: ["これを①に代入して", "y = (", null, ") - 5 = ", null] }
        ],
        final_answer_prompt: "答え:"
      },
      answer: "x-5;-x;3;9;3;3;-2"
    },
    {
      type: 'guided_equation',
      data: {
        question: '次の連立方程式を解きなさい。',
        initial_equations: ["y = -3x - 7", "2x + 3y = -7"],
        steps: [
          { parts: ["①を②に代入して", "2x + 3(", null, ") = -7"] },
          { parts: ["2x ", null, " - 21 = -7"] },
          { parts: [null, "x = ", null] },
          { parts: ["x = ", null] },
          { parts: ["これを①に代入して", "y = -3(", null, ") - 7 = ", null] }
        ],
        final_answer_prompt: "答え:"
      },
      answer: "-3x-7;-9x;-7;14;-2;-2;-1"
    },
    // from 代入法(標準1)
    { type: 'guided_equation', data: { initial_equations: ["y=2x+1", "3x+2y=9"], steps: [{ parts: ["①を②に代入して、", "3x+2(", null, ")", "=", "9"] }, { parts: ["3x+", null, "+", null, "=", "9"] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを①に代入して、", "y=2×", null, "+1"] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:", hint: "式①はすでに y=... の形になっています。これを式②のyに代入しましょう。" }, answer: "2x+1;4x;2;7;7;1;1;3" },
    { type: 'guided_equation', data: { initial_equations: ["x=y-3", "2x+3y=11"], steps: [{ parts: ["①を②に代入して、", "2(", null, ")+3y", "=", "11"] }, { parts: [null, "y-", null, "+3y", "=", "11"] }, { parts: [null, "y", "=", null] }, { parts: ["y", "=", null] }, { parts: ["これを①に代入して、", "x=", null, "-3"] }, { parts: ["x", "=", null] }], final_answer_prompt: "答:" }, answer: "y-3;2;6;5;17;17/5;17/5;2/5" },
    { type: 'guided_equation', data: { initial_equations: ["y=x-2", "y=-x+4"], steps: [{ parts: ["①を②に代入して、", null, "=", "-x+4"] }, { parts: [null, "x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["これを①に代入して、", "y=", null, "-2"] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:" }, answer: "x-2;2;6;3;3;1" },
  ],
  "()付きの方程式": [
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["2(x+y) - y = 7", "x+y = 5"],
        steps: [
          { parts: ["①の()をはずすと: 2x + 2y - y = 7"] },
          { parts: ["①を整理して: ", null, " ...③"] },
          { parts: ["③ - ② より: ", "(2x+y) - (x+y)", "=", "7 - 5"] },
          { parts: ["x", "=", null] },
          { parts: ["これを②に代入して: ", null, "+ y = 5"] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "2x+y=7;2;2;3"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["x - (y-2) = 0", "3(x-1) + 2y = 5"],
        steps: [
          { parts: ["①を整理して: ", null, " ...③"] },
          { parts: ["②を整理して: ", null, " ...④"] },
          { parts: ["③から x = ", null, " ...⑤"] },
          { parts: ["⑤を④に代入して: 3(", null, ") + 2y = 8"] },
          { parts: ["3y - 6 + 2y = 8"] },
          { parts: ["5y", "=", null] },
          { parts: ["y", "=", null] },
          { parts: ["これを⑤に代入して: x = ", null, "- 2"] },
          { parts: ["x", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "x-y=-2;3x+2y=8;y-2;y-2;14;14/5;14/5;4/5"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["4x + 3y = 10", "2(x - y) = x + 2"],
        steps: [
          { parts: ["②の()をはずすと: 2x - 2y = x + 2"] },
          { parts: ["②を整理して: ", null, " ...③"] },
          { parts: ["① - ③×", null, " より:"] },
          { parts: ["(4x+3y) - 4(x-2y) = 10 - 4×2"] },
          { parts: ["4x+3y - 4x+8y = 10 - 8"] },
          { parts: ["11y", "=", null] },
          { parts: ["y", "=", null] },
          { parts: ["これを③に代入して: x-2(", null, ")=2"] },
          { parts: ["x - 4/11 = 2"] },
          { parts: ["x", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "x-2y=2;4;2;2/11;2/11;26/11"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["3(x+1) = 2(y-1)", "5x - 4y = 1"],
        steps: [
          { parts: ["①の()をはずすと: 3x+3 = 2y-2"] },
          { parts: ["①を整理して: ", null, " ...③"] },
          { parts: ["③×", null, " - ② より:"] },
          { parts: ["2(3x-2y) - (5x-4y) = 2×(-5)-1"] },
          { parts: ["6x-4y - 5x+4y = -10-1"] },
          { parts: ["x", "=", null] },
          { parts: ["これを③に代入して: 3(", null, ")-2y=-5"] },
          { parts: ["-33 - 2y = -5"] },
          { parts: ["-2y", "=", null] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "3x-2y=-5;2;-11;-11;28;-14"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["x + 2(x+y) = 14", "3x - y = 5"],
        steps: [
          { parts: ["①を整理して: ", null, " ...③"] },
          { parts: ["③ - ② より:"] },
          { parts: ["(3x+2y) - (3x-y) = 14-5"] },
          { parts: ["3y", "=", null] },
          { parts: ["y", "=", null] },
          { parts: ["これを②に代入して: 3x-(", null, ")=5"] },
          { parts: ["3x", "=", null] },
          { parts: ["x", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "3x+2y=14;9;3;3;8;8/3"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["2(x+y) + y = 11", "x + 2y = 6"],
        steps: [
          { parts: ["①の()をはずすと: 2x + 2y + y = 11"] },
          { parts: ["①を整理して: ", null, " ...③"] },
          { parts: ["③ - ②×2 より:"] },
          { parts: ["(2x+3y) - 2(x+2y) = 11 - 12"] },
          { parts: ["-y", "=", null] },
          { parts: ["y", "=", null] },
          { parts: ["これを②に代入して: x + 2(", null, ") = 6"] },
          { parts: ["x", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "2x+3y=11;-1;1;1;4"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["5x + 2(-x+y) = 13", "x + 2y = 11"],
        steps: [
          { parts: ["①の()をはずすと: 5x - 2x + 2y = 13"] },
          { parts: ["①を整理して: ", null, " ...③"] },
          { parts: ["③ - ② より:"] },
          { parts: ["(3x+2y) - (x+2y) = 13 - 11"] },
          { parts: ["2x", "=", null] },
          { parts: ["x", "=", null] },
          { parts: ["これを②に代入して: (", null, ") + 2y = 11"] },
          { parts: ["2y", "=", null] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "3x+2y=13;2;1;1;10;5"
    }
  ],
  "分数係数の方程式": [
     { type: 'guided_equation', data: { initial_equations: ["(1/2)x+(1/3)y=2", "x-y=1"], steps: [{ parts: ["①の両辺に", null, "をかけて"] }, { parts: [null, "=12"] }, { parts: ["これと②で連立方程式を解く"] }, { parts: ["x", "=", null] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:" }, answer: "6;3x+2y;14/5;9/5" },
     { type: 'guided_equation', data: { initial_equations: ["(3/4)x+(1/2)y=4", "x+y=6"], steps: [{ parts: ["①の両辺に", null, "をかけて"] }, { parts: [null, "=16"] }, { parts: ["これと②で連立方程式を解く"] }, { parts: ["x", "=", null] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:" }, answer: "4;3x+2y;4;2" },
     { type: 'guided_equation', data: { initial_equations: ["(1/6)x+(5/6)y=13/3", "x-y=-4"], steps: [{ parts: ["①の両辺に", null, "をかけて"] }, { parts: [null, "=26"] }, { parts: ["これと②で連立方程式を解く"] }, { parts: ["x", "=", null] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:" }, answer: "6;x+5y;1;5" },
     { type: 'guided_equation', data: { initial_equations: ["(3/10)x-(1/10)y=-9/10", "2x+y=-1"], steps: [{ parts: ["①の両辺に", null, "をかけて"] }, { parts: [null, "=-9"] }, { parts: ["これと②で連立方程式を解く"] }, { parts: ["x", "=", null] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:" }, answer: "10;3x-y;-2;3" },
     { type: 'guided_equation', data: { initial_equations: ["(5/12)x+(1/4)y=19/12", "x+2y=1"], steps: [{ parts: ["①の両辺に", null, "をかけて"] }, { parts: [null, "=19"] }, { parts: ["これと②で連立方程式を解く"] }, { parts: ["x", "=", null] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:" }, answer: "12;5x+3y;5;-2" },
     { type: 'guided_equation', data: { initial_equations: ["(2/5)x+(1/5)y=2", "y=3x"], steps: [{ parts: ["①の両辺に", null, "をかけて"] }, { parts: [null, "=10"] }, { parts: ["これと②で連立方程式を解く"] }, { parts: ["x", "=", null] }, { parts: ["y", "=", null] }], final_answer_prompt: "答:" }, answer: "5;2x+y;2;6" }
  ],
  "小数係数の方程式": [
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["0.2x-0.5y=1.6", "x+y=-2"],
        steps: [
          { parts: ["①の両辺に", null, "をかけて"] },
          { parts: [null, "=16"] },
          { parts: ["これと②で連立方程式を解く"] },
          { parts: ["x", "=", null] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "10;2x-5y;6/7;-20/7"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["0.2x-0.3y=0.5", "x+y=5"],
        steps: [
          { parts: ["①の両辺に", null, "をかけて"] },
          { parts: [null, "=5"] },
          { parts: ["これと②で連立方程式を解く"] },
          { parts: ["x", "=", null] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "10;2x-3y;4;1"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["0.3x+0.2y=0.4", "x+y=3"],
        steps: [
          { parts: ["①の両辺に", null, "をかけて"] },
          { parts: [null, "=4"] },
          { parts: ["これと②で連立方程式を解く"] },
          { parts: ["x", "=", null] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "10;3x+2y;-2;5"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["0.01x+0.03y=-0.05", "2x+5y=-5"],
        steps: [
          { parts: ["①の両辺に", null, "をかけて"] },
          { parts: [null, "=-5"] },
          { parts: ["これと②で連立方程式を解く"] },
          { parts: ["x", "=", null] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "100;x+3y;10;-5"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["0.5x-0.2y=-0.1", "x-y=-5"],
        steps: [
          { parts: ["①の両辺に", null, "をかけて"] },
          { parts: [null, "=-1"] },
          { parts: ["これと②で連立方程式を解く"] },
          { parts: ["x", "=", null] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "10;5x-2y;3;8"
    },
    {
      type: 'guided_equation',
      data: {
        initial_equations: ["0.1x+0.4y=0.1", "2x-y=11"],
        steps: [
          { parts: ["①の両辺に", null, "をかけて"] },
          { parts: [null, "=1"] },
          { parts: ["これと②で連立方程式を解く"] },
          { parts: ["x", "=", null] },
          { parts: ["y", "=", null] }
        ],
        final_answer_prompt: "答:"
      },
      answer: "10;x+4y;5;-1"
    }
  ],
};