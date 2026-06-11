import { Problem, ProblemSet } from '../types';

const keypadLayout = [
    ['7', '8', '9', 'y'],
    ['4', '5', '6', '≤', '≥'],
    ['1', '2', '3', '<', '>'],
    ['0', '.', '-', ' ']
];

const areaKeypadLayout = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '.'],
    ['0', ' ', ' ', ' '],
];

// FIX: Add explicit return type `Problem` to ensure type safety.
const createRangeProblem = (m: number, c: number, x_min: number, x_max: number, minInclusive = true, maxInclusive = true): Problem => {
    const y1 = m * x_min + c;
    const y2 = m * x_max + c;
    const y_min = Math.min(y1, y2);
    const y_max = Math.max(y1, y2);

    const eqStr = `y = ${m === 1 ? '' : m === -1 ? '-' : m}x ${c === 0 ? '' : (c > 0 ? `+ ${c}`: `- ${Math.abs(c)}`)}`;
    const xRangeStr = `${x_min} ${minInclusive ? '≤' : '<'} x ${maxInclusive ? '≤' : '<'} ${x_max}`;
    const question = `一次関数 ${eqStr} で、xの変域が ${xRangeStr} のとき、yの変域を求めなさい。`;
    
    const yMinIneq = m > 0 ? (minInclusive ? '≤' : '<') : (maxInclusive ? '≤' : '<');
    const yMaxIneq = m > 0 ? (maxInclusive ? '≤' : '<') : (minInclusive ? '≤' : '<');
    const answer = `${y_min}${yMinIneq}y${yMaxIneq}${y_max}`;
    
    return {
        type: 'graph_with_domain',
        data: {
            question,
            equation: { m, c },
            x_range: [x_min, x_max],
            visualHints: [
                { type: 'highlight-rect', x_range: [x_min, x_max], y_range: [-10, 10], color: 'blue' },
                { type: 'highlight-rect', x_range: [-10, 10], y_range: [y_min, y_max], color: 'green' }
            ],
            hint: [
                `まず、変域の両端である x=${x_min} と x=${x_max} のときのyの値をそれぞれ計算します。`,
                `傾きが${m > 0 ? '正' : '負'}なので、xとyの大小関係に注意して変域を組み立てます。`
            ],
            keypadLayout: keypadLayout
        },
        answer
    };
}


export const linearFunctionsFeaturesProblems: ProblemSet = {
  "1次関数の変化の割合": [
    { type: 'text', data: { question: "2点(1, 3)と(4, 9)を通る直線の変化の割合を求めなさい。", hint: ["変化の割合は (yの増加量) / (xの増加量) で計算できます。", "この問題では、(9 - 3) / (4 - 1) を計算します。"] }, answer: "2" },
    { type: 'text', data: { question: "2点(-2, 7)と(3, 2)を通る直線の傾きを求めなさい。", hint: ["傾きは変化の割合と同じです。", "yの増加量は 2 - 7 = -5、xの増加量は 3 - (-2) = 5 です。"] }, answer: "-1" },
    { type: 'text', data: { question: "xが1から3まで増加するとき、yは2から8まで増加する一次関数の変化の割合を求めなさい。", hint: ["xの増加量は 3 - 1 = 2 です。", "yの増加量は 8 - 2 = 6 です。変化の割合は 6 / 2 です。"] }, answer: "3" },
    { type: 'text', data: { question: "2点(-1, 6)と(2, 0)を通る直線の変化の割合を求めなさい。", hint: ["変化の割合 = (yの増加量) / (xの増加量)", "(0 - 6) / (2 - (-1)) を計算します。"] }, answer: "-2" },
    { type: 'text', data: { question: "2点(2, 4)と(6, 6)を通る直線の傾きを求めなさい。", hint: ["傾き = (yの増加量) / (xの増加量)", "分数の答えになることもあります。約分を忘れないようにしましょう。"] }, answer: "1/2" },
    { type: 'text', data: { question: "2点(2, -2)と(4, -5)を通る直線の変化の割合を求めなさい。", hint: ["yの増加量は -5 - (-2) = -3 です。", "xの増加量は 4 - 2 = 2 です。"] }, answer: "-3/2" },
    { type: 'text', data: { question: "2点(-3, -3)と(3, 3)を通る直線の傾きを求めなさい。", hint: ["原点を通る直線です。", "(3 - (-3)) / (3 - (-3)) を計算します。"] }, answer: "1" },
    { type: 'text', data: { question: "2点(1, 5)と(4, 5)を通る直線の変化の割合を求めなさい。", hint: ["yの値が変わらない場合、yの増加量は0です。"] }, answer: "0" },
    { type: 'text', data: { question: "xの値が2増加するとyの値が-6減少する一次関数の変化の割合を求めなさい。", hint: ["yの増加量は-6です。xの増加量は2です。"] }, answer: "-3" },
    { type: 'text', data: { question: "2点(1, 6)と(3, 14)を通る直線の傾きを求めなさい。", hint: ["yの増加量は 14 - 6 = 8 です。", "xの増加量は 3 - 1 = 2 です。"] }, answer: "4" },
    { type: 'text', data: { question: "2点(-1, 5)と(1, -3)を通る直線の傾きを求めなさい。", hint: ["変化の割合 = (y2 - y1) / (x2 - x1)", "(-3 - 5) / (1 - (-1)) を計算します。"] }, answer: "-4" },
    { type: 'text', data: { question: "2点(3, 1)と(6, 3)を通る直線の変化の割合を求めなさい。", hint: ["yの増加量は 3 - 1 = 2 です。", "xの増加量は 6 - 3 = 3 です。"] }, answer: "2/3" },
    { type: 'text', data: { question: "2点(3, 1)と(6, 0)を通る直線の変化の割合を求めなさい。", hint: ["(0 - 1) / (6 - 3) を計算します。"] }, answer: "-1/3" },
    { type: 'text', data: { question: "一次関数 y=ax+5 でxが1から4まで増加するときyは6増加します。aの値を求めなさい。", hint: ["aは変化の割合です。", "変化の割合 = (yの増加量) / (xの増加量) = 6 / (4-1) です。"] }, answer: "2" },
    { type: 'text', data: { question: "xの増加量が-2のとき、yの増加量が10になる一次関数の変化の割合を求めなさい。", hint: ["変化の割合 = 10 / (-2) です。"] }, answer: "-5" },
  ],
  "グラフの変域": [
    createRangeProblem(1, -2, -2, 0),
    createRangeProblem(2, 1, -3, 1),
    createRangeProblem(-1, 2, -4, 2),
    createRangeProblem(-2, 3, -1, 3),
    createRangeProblem(0.5, 4, -4, 2),
    createRangeProblem(-0.5, -4, -2, 4),
    createRangeProblem(1, 3, -4, -2),
    createRangeProblem(-1, -3, -4, -2),
    createRangeProblem(2, -3, -1, 2),
    createRangeProblem(-2, -1, -3, 2),
    createRangeProblem(1/3, 2, -3, 3),
    createRangeProblem(-1/3, -2, -6, 3),
    createRangeProblem(1.5, 1, -2, 4),
    createRangeProblem(-1.5, 5, -2, 2),
    createRangeProblem(3, -5, 1, 3),
  ],
  "2直線の交点": [
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: 2, c: 1, label: 'y=2x+1'}, {m: -1, c: 4, label: 'y=-x+4'}], guidedEquation: { initial_equations: ["y=2x+1", "y=-x+4"], steps: [{ parts: ["2x+1", "=", "-x+4"] }, { parts: ["3x", "=", "3"] }, { parts: ["x", "=", null] }, { parts: ["y = 2(", null, ") + 1 =", null] }], final_answer_prompt: "交点:", hint: "2つの式を連立方程式として解きます。代入法を使いましょう。" } }, answer: "1;1;3;(1,3)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: 2, c: 1, color: '#f87171', label: 'y=2x+1'}, {m: -1, c: 7, color: '#60a5fa', label: 'y=-x+7'}], guidedEquation: { initial_equations: ["y=2x+1", "y=-x+7"], steps: [{ parts: ["2x+1", "=", "-x+7"] }, { parts: ["3x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = 2(", null, ") + 1 =", null] }], final_answer_prompt: "交点:", hint: "2つの式を連立方程式として解きます。代入法を使いましょう。" } }, answer: "6;2;2;5;(2,5)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: -2, c: 3, label: 'y=-2x+3'}, {m: -1, c: 1, label: 'y=-x+1'}], guidedEquation: { initial_equations: ["y=-2x+3", "y=-x+1"], steps: [{ parts: ["-2x+3", "=", "-x+1"] }, { parts: ["-x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = -(", null, ") + 1 =", null] }], final_answer_prompt: "交点:", hint: "2つの式を連立方程式として解きます。代入法を使いましょう。" } }, answer: "-2;2;2;-1;(2,-1)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: 4, c: 5, label: 'y=4x+5'}, {m: -2, c: -7, label: 'y=-2x-7'}], guidedEquation: { initial_equations: ["y=4x+5", "y=-2x-7"], steps: [{ parts: ["4x+5", "=", "-2x-7"] }, { parts: ["6x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = 4(", null, ") + 5 =", null] }], final_answer_prompt: "交点:" } }, answer: "-12;-2;-2;-3;(-2,-3)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: 3, c: 2, label: 'y=3x+2'}, {m: -2, c: 7, label: 'y=-2x+7'}], guidedEquation: { initial_equations: ["y=3x+2", "y=-2x+7"], steps: [{ parts: ["3x+2", "=", "-2x+7"] }, { parts: ["5x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = 3(", null, ") + 2 =", null] }], final_answer_prompt: "交点:" } }, answer: "5;1;1;5;(1,5)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: -3, c: -2, label: 'y=-3x-2'}, {m: 1, c: 6, label: 'y=x+6'}], guidedEquation: { initial_equations: ["y=-3x-2", "y=x+6"], steps: [{ parts: ["-3x-2", "=", "x+6"] }, { parts: ["-4x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = (", null, ") + 6 =", null] }], final_answer_prompt: "交点:" } }, answer: "8;-2;-2;4;(-2,4)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: 4, c: 1, label: 'y=4x+1'}, {m: -2, c: -5, label: 'y=-2x-5'}], guidedEquation: { initial_equations: ["y=4x+1", "y=-2x-5"], steps: [{ parts: ["4x+1", "=", "-2x-5"] }, { parts: ["6x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = 4(", null, ") + 1 =", null] }], final_answer_prompt: "交点:" } }, answer: "-6;-1;-1;-3;(-1,-3)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: -4, c: -1, label: 'y=-4x-1'}, {m: -2, c: 1, label: 'y=-2x+1'}], guidedEquation: { initial_equations: ["y=-4x-1", "y=-2x+1"], steps: [{ parts: ["-4x-1", "=", "-2x+1"] }, { parts: ["-2x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = -2(", null, ") + 1 =", null] }], final_answer_prompt: "交点:" } }, answer: "2;-1;-1;3;(-1,3)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: 1, c: 3, label: 'y=x+3'}, {m: -3, c: 7, label: 'y=-3x+7'}], guidedEquation: { initial_equations: ["y=x+3", "y=-3x+7"], steps: [{ parts: ["x+3", "=", "-3x+7"] }, { parts: ["4x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = (", null, ") + 3 =", null] }], final_answer_prompt: "交点:" } }, answer: "4;1;1;4;(1,4)" },
    { type: 'intersection_guided_equation', data: { question: "次の2直線の交点の座標を求めなさい。", graphLines: [{m: 1, c: -2, label: 'y=x-2'}, {m: -1, c: -6, label: 'y=-x-6'}], guidedEquation: { initial_equations: ["y=x-2", "y=-x-6"], steps: [{ parts: ["x-2", "=", "-x-6"] }, { parts: ["2x", "=", null] }, { parts: ["x", "=", null] }, { parts: ["y = (", null, ") - 2 =", null] }], final_answer_prompt: "交点:" } }, answer: "-4;-2;-2;-4;(-2,-4)" }
  ],
 "グラフと面積1": [
    { type: 'graph_with_area', data: { question: "直線 y=-2x+8 とx軸、y軸で囲まれた三角形の面積を求めなさい。", graphLines: [{ m: -2, c: 8, label: 'y=-2x+8' }], polygon: { points: [{x:0, y:0}, {x:4, y:0}, {x:0, y:8}] }, keypadLayout: areaKeypadLayout }, answer: "16" },
    { type: 'graph_with_area', data: { question: "直線 y=3x+6 とx軸、y軸で囲まれた三角形の面積を求めなさい。", graphLines: [{ m: 3, c: 6, label: 'y=3x+6' }], polygon: { points: [{x:0, y:0}, {x:-2, y:0}, {x:0, y:6}] }, keypadLayout: areaKeypadLayout }, answer: "6" },
    { type: 'graph_with_area', data: { question: "直線 y=-x+5 とx軸、y軸で囲まれた三角形の面積を求めなさい。", graphLines: [{ m: -1, c: 5, label: 'y=-x+5' }], polygon: { points: [{x:0, y:0}, {x:5, y:0}, {x:0, y:5}] }, keypadLayout: areaKeypadLayout }, answer: "25/2" },
    { type: 'graph_with_area', data: { question: "直線 y=1/2x-4 とx軸、y軸で囲まれた三角形の面積を求めなさい。", graphLines: [{ m: 0.5, c: -4, label: 'y=1/2x-4' }], polygon: { points: [{x:0, y:0}, {x:8, y:0}, {x:0, y:-4}] }, keypadLayout: areaKeypadLayout }, answer: "16" },
    { type: 'graph_with_area', data: { question: "直線 y=-3/2x+6 とx軸、y軸で囲まれた三角形の面積を求めなさい。", graphLines: [{ m: -1.5, c: 6, label: 'y=-3/2x+6' }], polygon: { points: [{x:0, y:0}, {x:4, y:0}, {x:0, y:6}] }, keypadLayout: areaKeypadLayout }, answer: "12" },
    { type: 'graph_with_area', data: { question: "直線 y=4x-8 とx軸、y軸で囲まれた三角形の面積を求めなさい。", graphLines: [{ m: 4, c: -8, label: 'y=4x-8' }], polygon: { points: [{x:0, y:0}, {x:2, y:0}, {x:0, y:-8}] }, keypadLayout: areaKeypadLayout }, answer: "8" },
    { type: 'graph_with_area', data: { question: "直線 y=-5x+10 とx軸、y軸で囲まれた三角形の面積を求めなさい。", graphLines: [{ m: -5, c: 10, label: 'y=-5x+10' }], polygon: { points: [{x:0, y:0}, {x:2, y:0}, {x:0, y:10}] }, keypadLayout: areaKeypadLayout }, answer: "10" },
  ],
  "グラフと面積2": [
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: -2, c: 8, label: 'y=-2x+8' }, { m: -5, c: 5, label: 'y=-5x+5' }], polygon: { points: [{x:0, y:5}, {x:0, y:8}, {x:-1, y:10}] }, keypadLayout: areaKeypadLayout }, answer: "1.5" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: 2, c: 2, label: 'y=2x+2' }, { m: 5, c: 20, label: 'y=5x+20' }], polygon: { points: [{x:0, y:2}, {x:0, y:20}, {x:-6, y:-10}] }, keypadLayout: areaKeypadLayout }, answer: "54" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: -1, c: 6, label: 'y=-x+6' }, { m: 1, c: 2, label: 'y=x+2' }], polygon: { points: [{x:0, y:2}, {x:0, y:6}, {x:2, y:4}] }, keypadLayout: areaKeypadLayout }, answer: "4" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: 2, c: 6, label: 'y=2x+6' }, { m: 1, c: 2, label: 'y=x+2' }], polygon: { points: [{x:0, y:2}, {x:0, y:6}, {x:-4, y:-2}] }, keypadLayout: areaKeypadLayout }, answer: "8" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: -2, c: 6, label: 'y=-2x+6' }, { m: -1, c: 2, label: 'y=-x+2' }], polygon: { points: [{x:0, y:2}, {x:0, y:6}, {x:4, y:-2}] }, keypadLayout: areaKeypadLayout }, answer: "8" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: -2, c: 4, label: 'y=-2x+4' }, { m: -3, c: 5, label: 'y=-3x+5' }], polygon: { points: [{x:0, y:4}, {x:0, y:5}, {x:1, y:2}] }, keypadLayout: areaKeypadLayout }, answer: "0.5" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: 2, c: 4, label: 'y=2x+4' }, { m: 3, c: 5, label: 'y=3x+5' }], polygon: { points: [{x:0, y:4}, {x:0, y:5}, {x:-1, y:2}] }, keypadLayout: areaKeypadLayout }, answer: "0.5" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: -2, c: 8, label: 'y=-2x+8' }, { m: 1, c: 5, label: 'y=x+5' }], polygon: { points: [{x:0, y:5}, {x:0, y:8}, {x:1, y:6}] }, keypadLayout: areaKeypadLayout }, answer: "1.5" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: -2, c: 8, label: 'y=-2x+8' }, { m: 2, c: 5, label: 'y=2x+5' }], polygon: { points: [{x:0, y:5}, {x:0, y:8}, {x:0.75, y:6.5}] }, keypadLayout: areaKeypadLayout }, answer: "1.125" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: -2, c: 8, label: 'y=-2x+8' }, { m: 3, c: 5, label: 'y=3x+5' }], polygon: { points: [{x:0, y:5}, {x:0, y:8}, {x:0.6, y:6.8}] }, keypadLayout: areaKeypadLayout }, answer: "0.9" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: 5, c: 20, label: 'y=5x+20' }, { m: -2, c: 2, label: 'y=-2x+2' }], polygon: { points: [{x:0, y:2}, {x:0, y:20}, {x:-18/7, y:50/7}] }, keypadLayout: areaKeypadLayout }, answer: "162/7" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: 1, c: 8 }, { m: 5, c: 5 }], polygon: { points: [{ x: 0, y: 5 }, { x: 0, y: 8 }, { x: -0.75, y: 8.75 }] }, keypadLayout: areaKeypadLayout }, answer: "1.125" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: 2, c: 2 }, { m: -5, c: 20 }], polygon: { points: [{ x: 0, y: 2 }, { x: 0, y: 20 }, { x: 18/7, y: 50/7 }] }, keypadLayout: areaKeypadLayout }, answer: "162/7" },
    { type: 'graph_with_area', data: { question: "灰色の部分の面積を求めよ。", graphLines: [{ m: 0, c: 5 }, { m: -2, c: 8 }], polygon: { points: [{ x: 0, y: 5 }, { x: 0, y: 8 }, { x: 1.5, y: 5 }] }, keypadLayout: areaKeypadLayout }, answer: "2.25" }
  ],
  "1次関数の利用(基)": [
    { type: 'text', data: { question: "香奈ちゃんは毎分40mの速さで歩いて、4000mはなれたA町に向かっています。x分間歩いた時、A町までの残りの距離 y(m) は。", hint: "残りの距離 = 全体の距離 - 歩いた距離 で求められます。歩いた距離は 速さ × 時間 です。" }, answer: "y=-40x+4000" },
    { type: 'text', data: { question: "久美ちゃんは毎分50mの速さで、歩いています。久美ちゃんが歩いた時間 x(分)と、歩いたきょり y(m)の関係。", hint: "距離 = 速さ × 時間 の公式を使いましょう。" }, answer: "y=50x" },
    { type: 'text', data: { question: "11度のあぶらを1分間に6度上昇するように加熱する時、加熱をはじめてからの時間 x(分)と、あぶらの温度 y(度)の関係。", hint: "今の温度 = はじめの温度 + 上昇した温度 で求められます。上昇した温度は 1分あたりの上昇温度 × 時間 です。" }, answer: "y=6x+11" },
    { type: 'text', data: { question: "1個120円するなしを、200円するくだもののかごに入れてもらいます。この時の代金 y(円)となしの個数 x との関係を示せ。", hint: "合計代金 = (なし1個の値段 × 個数) + かごの値段 です。" }, answer: "y=120x+200" },
    { type: 'text', data: { question: "12度の水を1分間に3度上昇するように加熱する時、加熱をはじめてからの時間 x(分)と、水の温度 y(度)の関係。", hint: "今の温度 = はじめの温度 + 上昇した温度 で求められます。" }, answer: "y=3x+12" },
    { type: 'text', data: { question: "1個20gするガラス玉を、200gの箱に入れます。この時の全体の重さ y(g)とガラス玉の個数 x との関係を示せ。", hint: "全体の重さ = (ガラス玉1個の重さ × 個数) + 箱の重さ です。" }, answer: "y=20x+200" },
    { type: 'text', data: { question: "ふろの浴槽にはじめ30リットルの水があり、これに毎分3リットルの割合で注水する時、注水をはじめてからの時間 x(分)と、たまった水量 y(リットル)の関係。", hint: "全体の水量 = はじめの水量 + 増えた水量 で求められます。" }, answer: "y=3x+30" },
    { type: 'text', data: { question: "水槽にはじめ300リットルの水が入っている。せんを抜いて毎分5リットルの割合で水をだすとき、x分後に水槽に残っている水量 y(リットル)との関係。", hint: "残りの水量 = はじめの水量 - 出ていった水量 で求められます。" }, answer: "y=-5x+300" }
  ]
};