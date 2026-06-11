/**
 * dataAnalysisProblems.ts — データの活用（中2）
 *
 * 学習指導要領: 中学2年「データの活用」
 *   四分位数・四分位範囲・箱ひげ図
 *   度数分布表・ヒストグラム・代表値
 */
import type { ProblemSet } from '../types';

export const dataAnalysisProblems: ProblemSet = {
  // ============================
  // 四分位数（基礎）
  // ============================
  "四分位数(基)": [
    { type: 'text', data: { question: 'データ: 2, 5, 7, 8, 10, 12, 15 の中央値（第2四分位数）を求めなさい。' }, answer: '8' },
    { type: 'text', data: { question: 'データ: 2, 5, 7, 8, 10, 12, 15 の第1四分位数を求めなさい。' }, answer: '5' },
    { type: 'text', data: { question: 'データ: 2, 5, 7, 8, 10, 12, 15 の第3四分位数を求めなさい。' }, answer: '12' },
    { type: 'text', data: { question: 'データ: 3, 4, 6, 8, 9, 11 の中央値を求めなさい。' }, answer: '7' },
    { type: 'text', data: { question: 'データ: 3, 4, 6, 8, 9, 11 の第1四分位数を求めなさい。' }, answer: '4' },
    { type: 'text', data: { question: 'データ: 3, 4, 6, 8, 9, 11 の第3四分位数を求めなさい。' }, answer: '9' },
    { type: 'text', data: { question: 'データ: 1, 3, 5, 7, 9 の中央値を求めなさい。' }, answer: '5' },
    { type: 'text', data: { question: 'データ: 1, 3, 5, 7, 9 の第1四分位数を求めなさい。' }, answer: '2' },
    { type: 'text', data: { question: 'データ: 1, 3, 5, 7, 9 の第3四分位数を求めなさい。' }, answer: '8' },
    { type: 'text', data: { question: 'データ: 10, 20, 30, 40, 50, 60, 70, 80 の中央値を求めなさい。' }, answer: '45' },
    { type: 'text', data: { question: 'データ: 10, 20, 30, 40, 50, 60, 70, 80 の第1四分位数を求めなさい。' }, answer: '25' },
    { type: 'text', data: { question: 'データ: 10, 20, 30, 40, 50, 60, 70, 80 の第3四分位数を求めなさい。' }, answer: '65' },
    { type: 'text', data: { question: '8個のデータ: 4, 5, 7, 9, 11, 13, 15, 20 の第1四分位数を求めなさい。' }, answer: '6' },
    { type: 'text', data: { question: '8個のデータ: 4, 5, 7, 9, 11, 13, 15, 20 の第3四分位数を求めなさい。' }, answer: '14' },
    { type: 'text', data: { question: 'データ: 5, 5, 8, 10, 12, 15, 18 の第2四分位数（中央値）を求めなさい。' }, answer: '10' },
  ],

  // ============================
  // 四分位範囲（基礎）
  // ============================
  "四分位範囲(基)": [
    { type: 'text', data: { question: '第1四分位数が5、第3四分位数が12のとき、四分位範囲を求めなさい。' }, answer: '7' },
    { type: 'text', data: { question: 'データ: 2, 5, 7, 8, 10, 12, 15 の四分位範囲を求めなさい。（Q1=5, Q3=12）' }, answer: '7' },
    { type: 'text', data: { question: 'データ: 3, 4, 6, 8, 9, 11 の四分位範囲を求めなさい。（Q1=4, Q3=9）' }, answer: '5' },
    { type: 'text', data: { question: '第1四分位数が20、第3四分位数が50のとき、四分位範囲を求めなさい。' }, answer: '30' },
    { type: 'text', data: { question: 'データ: 10, 20, 30, 40, 50, 60, 70, 80 の四分位範囲を求めなさい。（Q1=25, Q3=65）' }, answer: '40' },
    { type: 'text', data: { question: '第1四分位数が8、第3四分位数が16のとき、四分位範囲を求めなさい。' }, answer: '8' },
    { type: 'text', data: { question: 'データ: 1, 3, 5, 7, 9 の四分位範囲を求めなさい。（Q1=2, Q3=8）' }, answer: '6' },
    { type: 'text', data: { question: '四分位範囲が大きいほど、データの散らばりはどうなりますか？', options: ['大きい', '小さい', '変わらない'] }, answer: '大きい' },
    { type: 'text', data: { question: '第1四分位数が15、第3四分位数が15のとき、四分位範囲を求めなさい。' }, answer: '0' },
    { type: 'text', data: { question: 'データ: 4, 5, 7, 9, 11, 13, 15, 20 の四分位範囲を求めなさい。（Q1=6, Q3=14）' }, answer: '8' },
  ],

  // ============================
  // 箱ひげ図の読み取り（基礎）— 箱ひげ図SVG付き
  // ============================
  "箱ひげ図の読み取り(基)": [
    // 1: 箱の左端 → Q1を読む
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図で、箱の左端が表す値の名前を答えなさい。',
        datasets: [{ min: 5, q1: 15, median: 25, q3: 35, max: 50 }],
        options: ['第1四分位数', '中央値', '第3四分位数', '最小値'],
      },
      answer: '第1四分位数',
    },
    // 2: 箱の中の線 → 中央値を読む
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図で、箱の中の線が表す値の名前を答えなさい。',
        datasets: [{ min: 10, q1: 20, median: 30, q3: 45, max: 55 }],
        options: ['第1四分位数', '中央値', '第3四分位数', '最大値'],
      },
      answer: '中央値',
    },
    // 3: 箱の右端 → Q3を読む
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図で、箱の右端が表す値の名前を答えなさい。',
        datasets: [{ min: 3, q1: 12, median: 18, q3: 28, max: 40 }],
        options: ['第1四分位数', '中央値', '第3四分位数', '最小値'],
      },
      answer: '第3四分位数',
    },
    // 4: 最小値を読み取る
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から最小値を読み取りなさい。',
        datasets: [{ min: 5, q1: 10, median: 18, q3: 25, max: 35 }],
        hideValue: 'min',
      },
      answer: '5',
    },
    // 5: 四分位範囲を求める
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から四分位範囲を求めなさい。',
        datasets: [{ min: 8, q1: 20, median: 30, q3: 40, max: 52 }],
      },
      answer: '20',
    },
    // 6: Q1を読み取る
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から第1四分位数（Q1）を読み取りなさい。',
        datasets: [{ min: 2, q1: 10, median: 15, q3: 25, max: 38 }],
        hideValue: 'q1',
      },
      answer: '10',
    },
    // 7: 範囲（レンジ）を求める
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から範囲（レンジ = 最大値 − 最小値）を求めなさい。',
        datasets: [{ min: 3, q1: 8, median: 12, q3: 18, max: 25 }],
      },
      answer: '22',
    },
    // 8: 中央値を読み取る
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から中央値を読み取りなさい。',
        datasets: [{ min: 10, q1: 18, median: 26, q3: 34, max: 45 }],
        hideValue: 'median',
      },
      answer: '26',
    },
    // 9: Q3を読み取る
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から第3四分位数（Q3）を読み取りなさい。',
        datasets: [{ min: 5, q1: 14, median: 22, q3: 30, max: 42 }],
        hideValue: 'q3',
      },
      answer: '30',
    },
    // 10: 箱の中に約何%入るか
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図で、箱の中（Q1からQ3）にデータの約何%が入りますか？',
        datasets: [{ min: 5, q1: 15, median: 25, q3: 35, max: 50 }],
        options: ['25', '50', '75', '100'],
      },
      answer: '50',
    },
  ],

  // ============================
  // 箱ひげ図の読み取り（標準）— 箱ひげ図SVG付き
  // ============================
  "箱ひげ図の読み取り(標)": [
    // 1: 四分位範囲を求める
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から四分位範囲を求めなさい。',
        datasets: [{ min: 10, q1: 20, median: 35, q3: 45, max: 60 }],
      },
      answer: '25',
    },
    // 2: 2つの箱ひげ図比較 — 散らばりが大きいのは？
    {
      type: 'box_plot',
      data: {
        question: '下の2つの箱ひげ図を比べて、散らばりが大きいのはどちらですか？',
        datasets: [
          { min: 20, q1: 40, median: 55, q3: 70, max: 85, label: 'A組' },
          { min: 30, q1: 50, median: 55, q3: 60, max: 75, label: 'B組' },
        ],
        options: ['A組', 'B組', '同じ'],
      },
      answer: 'A組',
    },
    // 3: 中央値を読み取る
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から中央値を読み取りなさい。',
        datasets: [{ min: 5, q1: 8, median: 16.5, q3: 22, max: 30 }],
        hideValue: 'median',
      },
      answer: '16.5',
    },
    // 4: 範囲を求める
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から範囲（レンジ）を求めなさい。',
        datasets: [{ min: 2, q1: 8, median: 12, q3: 16, max: 20 }],
      },
      answer: '18',
    },
    // 5: 40人のテスト — Q1以下の人数
    {
      type: 'box_plot',
      data: {
        question: '40人のテストの箱ひげ図です。Q1=55点以下の人は約何人ですか？',
        datasets: [{ min: 30, q1: 55, median: 65, q3: 80, max: 95 }],
        options: ['5', '10', '20', '30'],
      },
      answer: '10',
    },
    // 6: 40人のテスト — Q3以上の人数
    {
      type: 'box_plot',
      data: {
        question: '40人のテストの箱ひげ図です。Q3=80点以上の人は約何人ですか？',
        datasets: [{ min: 30, q1: 55, median: 65, q3: 80, max: 95 }],
        options: ['5', '10', '20', '30'],
      },
      answer: '10',
    },
    // 7: 箱が大きいほど散らばりは？
    {
      type: 'box_plot',
      data: {
        question: '下の2つの箱ひげ図を比べて、箱が大きいほどデータの散らばりはどうですか？',
        datasets: [
          { min: 10, q1: 20, median: 35, q3: 50, max: 60, label: 'A' },
          { min: 15, q1: 30, median: 35, q3: 40, max: 55, label: 'B' },
        ],
        options: ['大きい', '小さい', '関係ない'],
      },
      answer: '大きい',
    },
    // 8: 20人で中央値より上の人数
    {
      type: 'box_plot',
      data: {
        question: '20人のデータの箱ひげ図です。中央値より上にいる人は約何人ですか？',
        datasets: [{ min: 5, q1: 12, median: 20, q3: 28, max: 40 }],
        options: ['5', '10', '15', '20'],
      },
      answer: '10',
    },
    // 9: Q1から中央値の範囲
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図で、第1四分位数から中央値までの差を求めなさい。',
        datasets: [{ min: 5, q1: 12, median: 20, q3: 28, max: 40 }],
      },
      answer: '8',
    },
    // 10: 最大値を読み取る
    {
      type: 'box_plot',
      data: {
        question: '下の箱ひげ図から最大値を読み取りなさい。',
        datasets: [{ min: 8, q1: 18, median: 25, q3: 35, max: 48 }],
        hideValue: 'max',
      },
      answer: '48',
    },
  ],

  // ============================
  // 度数分布表（基礎）— options化
  // ============================
  "度数分布表(基)": [
    { type: 'text', data: { question: '階級 0〜10: 3人, 10〜20: 5人, 20〜30: 7人, 30〜40: 5人のとき、全体の人数を求めなさい。' }, answer: '20' },
    { type: 'text', data: { question: '階級 0〜10: 3人, 10〜20: 5人, 20〜30: 7人, 30〜40: 5人のとき、最も度数が多い階級の階級値を求めなさい。' }, answer: '25' },
    { type: 'text', data: { question: '度数分布表で「10以上20未満」の階級値を求めなさい。' }, answer: '15' },
    { type: 'text', data: { question: '階級の幅が5cmで、階級が「10以上15未満」のとき、階級値を求めなさい。' }, answer: '12.5' },
    {
      type: 'histogram',
      data: {
        question: '下の度数分布表で、相対度数が最も大きい階級の度数を求めなさい。',
        bars: [
          { from: 0, to: 10, freq: 2 },
          { from: 10, to: 20, freq: 4 },
          { from: 20, to: 30, freq: 6 },
          { from: 30, to: 40, freq: 8 },
        ],
        xLabel: '点数',
      },
      answer: '8',
    },
    { type: 'text', data: { question: '全体が40人で、ある階級の度数が8人のとき、その階級の相対度数を求めなさい。' }, answer: '0.2' },
    { type: 'text', data: { question: '全体が50人で、ある階級の相対度数が0.3のとき、その階級の度数を求めなさい。' }, answer: '15' },
    {
      type: 'histogram',
      data: {
        question: '下のヒストグラムで、30未満の累積度数（人数）を求めなさい。',
        bars: [
          { from: 0, to: 10, freq: 4 },
          { from: 10, to: 20, freq: 6 },
          { from: 20, to: 30, freq: 8 },
          { from: 30, to: 40, freq: 2 },
        ],
        xLabel: '点数',
      },
      answer: '18',
    },
    { type: 'text', data: { question: '度数分布表の全ての相対度数を足すといくつになりますか？' }, answer: '1' },
    { type: 'text', data: { question: '度数分布表で階級の幅が10のとき、「20以上30未満」の次の階級を答えなさい。', options: ['10以上20未満', '30以上40未満', '25以上35未満', '20以上40未満'] }, answer: '30以上40未満' },
  ],

  // ============================
  // ヒストグラム（基礎）— ヒストグラムSVG付き + options化
  // ============================
  "ヒストグラム(基)": [
    {
      type: 'text',
      data: {
        question: 'ヒストグラムの横軸は何を表しますか？',
        options: ['階級', '度数', '平均値', '中央値'],
      },
      answer: '階級',
    },
    {
      type: 'text',
      data: {
        question: 'ヒストグラムの縦軸は何を表しますか？',
        options: ['階級', '度数', '相対度数', '累積度数'],
      },
      answer: '度数',
    },
    {
      type: 'histogram',
      data: {
        question: '下のヒストグラムで、最も高い棒の階級値（階級の真ん中の値）を求めなさい。',
        bars: [
          { from: 0, to: 10, freq: 3 },
          { from: 10, to: 20, freq: 5 },
          { from: 20, to: 30, freq: 9 },
          { from: 30, to: 40, freq: 4 },
          { from: 40, to: 50, freq: 2 },
        ],
        xLabel: '点数',
      },
      answer: '25',
    },
    {
      type: 'text',
      data: {
        question: 'ヒストグラムと棒グラフの最大の違いは、棒と棒の間に隙間があるかないかです。ヒストグラムに隙間はありますか？',
        options: ['ない', 'ある'],
      },
      answer: 'ない',
    },
    {
      type: 'histogram',
      data: {
        question: '下のヒストグラムで、10未満の人は何人ですか？',
        bars: [
          { from: 0, to: 10, freq: 6 },
          { from: 10, to: 20, freq: 8 },
          { from: 20, to: 30, freq: 10 },
          { from: 30, to: 40, freq: 6 },
        ],
        xLabel: '点数',
      },
      answer: '6',
    },
    {
      type: 'text',
      data: {
        question: 'ヒストグラムで全体の棒の面積の合計は何を表しますか？',
        options: ['全体の度数', '平均値', '中央値', '最頻値'],
      },
      answer: '全体の度数',
    },
    {
      type: 'text',
      data: {
        question: '度数折れ線（度数多角形）は、各階級の何を結んだ折れ線ですか？',
        options: ['階級値', '階級の上端', '階級の下端', '度数'],
      },
      answer: '階級値',
    },
    {
      type: 'histogram',
      data: {
        question: '下のヒストグラムで、50点未満の人は何人ですか？（全体20人）',
        bars: [
          { from: 0, to: 25, freq: 4 },
          { from: 25, to: 50, freq: 8 },
          { from: 50, to: 75, freq: 5 },
          { from: 75, to: 100, freq: 3 },
        ],
        xLabel: '点数',
      },
      answer: '12',
    },
    {
      type: 'text',
      data: {
        question: 'ヒストグラムが左右対称に近い場合、平均値と中央値はどのような関係ですか？',
        options: ['ほぼ等しい', '大きく異なる', '平均値が必ず大きい', '中央値が必ず大きい'],
      },
      answer: 'ほぼ等しい',
    },
    {
      type: 'histogram',
      data: {
        question: '下のヒストグラムで、全体の人数を求めなさい。',
        bars: [
          { from: 0, to: 10, freq: 2 },
          { from: 10, to: 20, freq: 7 },
          { from: 20, to: 30, freq: 5 },
          { from: 30, to: 40, freq: 3 },
          { from: 40, to: 50, freq: 1 },
        ],
        xLabel: '点数',
      },
      answer: '18',
    },
  ],

  // ============================
  // 平均値・中央値（基礎）— options化（テキスト回答問題のみ）
  // ============================
  "平均値・中央値(基)": [
    { type: 'text', data: { question: 'データ: 3, 5, 7, 9, 11 の平均値を求めなさい。' }, answer: '7' },
    { type: 'text', data: { question: 'データ: 3, 5, 7, 9, 11 の中央値を求めなさい。' }, answer: '7' },
    { type: 'text', data: { question: 'データ: 2, 4, 6, 8 の平均値を求めなさい。' }, answer: '5' },
    { type: 'text', data: { question: 'データ: 2, 4, 6, 8 の中央値を求めなさい。' }, answer: '5' },
    { type: 'text', data: { question: 'データ: 10, 20, 30 の平均値を求めなさい。' }, answer: '20' },
    { type: 'text', data: { question: 'データ: 1, 1, 2, 3, 100 の中央値を求めなさい。' }, answer: '2' },
    { type: 'text', data: { question: 'データ: 5, 5, 5, 5, 5 の平均値を求めなさい。' }, answer: '5' },
    { type: 'text', data: { question: 'データ: 4, 8, 6, 2, 10 を小さい順に並べたとき、中央値を求めなさい。' }, answer: '6' },
    { type: 'text', data: { question: '5人のテスト: 60, 70, 80, 90, 100 の平均値を求めなさい。' }, answer: '80' },
    { type: 'text', data: { question: '6人のデータ: 3, 5, 7, 9, 11, 13 の中央値を求めなさい。' }, answer: '8' },
    { type: 'text', data: { question: 'データ: 0, 0, 0, 10, 10 の平均値を求めなさい。' }, answer: '4' },
    { type: 'text', data: { question: 'データ: 0, 0, 0, 10, 10 の中央値を求めなさい。' }, answer: '0' },
    { type: 'text', data: { question: 'データ: 15, 20, 25, 30, 35 の平均値を求めなさい。' }, answer: '25' },
    { type: 'text', data: { question: '4人のデータ: 10, 20, 30, 40 の平均値を求めなさい。' }, answer: '25' },
    { type: 'text', data: { question: '平均値が外れ値の影響を受けやすいのはどちらですか？', options: ['平均値', '中央値'] }, answer: '平均値' },
  ],

  // ============================
  // 代表値の比較（標準）— options化（テキスト回答問題のみ）
  // ============================
  "代表値の比較(標)": [
    { type: 'text', data: { question: 'データ: 1, 2, 3, 4, 100 のとき、平均値を求めなさい。' }, answer: '22' },
    { type: 'text', data: { question: 'データ: 1, 2, 3, 4, 100 のとき、中央値を求めなさい。' }, answer: '3' },
    { type: 'text', data: { question: '上のデータで代表値として適切なのはどちらですか？', options: ['平均値', '中央値', '最頻値'] }, answer: '中央値' },
    { type: 'text', data: { question: 'データ: 5, 5, 5, 6, 7, 7, 8 の最頻値を求めなさい。' }, answer: '5' },
    { type: 'text', data: { question: '代表値の3種類は平均値、中央値、あと1つは何ですか？', options: ['最頻値', '四分位範囲', '分散', '範囲'] }, answer: '最頻値' },
    { type: 'text', data: { question: '10人のテスト点数の平均が65点です。全員の合計点を求めなさい。' }, answer: '650' },
    { type: 'text', data: { question: '平均点60点、受験者5人の合計点が300点です。新たに90点の人が加わったとき、6人の平均点を求めなさい。' }, answer: '65' },
    { type: 'text', data: { question: 'データ: 3, 3, 5, 7, 7, 7, 9 の最頻値を求めなさい。' }, answer: '7' },
    { type: 'text', data: { question: 'A組の平均点70点（20人）、B組の平均点80点（30人）のとき、全体の平均点を求めなさい。' }, answer: '76' },
    { type: 'text', data: { question: 'データの範囲（レンジ）とは「最大値 - 最小値」です。データ: 5, 12, 8, 20, 3 の範囲を求めなさい。' }, answer: '17' },
  ],
};
