import type { ProblemSet } from '../types';

// ============================================================
// 三平方の定理（中学3年）
// ============================================================

export const geometryPythagoreanProblems: ProblemSet = {

  // ----------------------------------------------------------
  // 三平方の定理(基) - 基本計算
  // ----------------------------------------------------------
  "三平方の定理(基)": [
    {
      type: 'text',
      data: {
        question: '直角三角形で、直角をはさむ2辺の長さをa, b、斜辺の長さをcとするとき、a² + b² = c² が成り立つ。この定理を何というか。',
        options: ['三平方の定理', '余弦定理', '正弦定理', '中点連結定理']
      },
      answer: '三平方の定理'
    },
    {
      type: 'text',
      data: {
        question: '直角三角形の直角をはさむ2辺が3cmと4cmのとき、斜辺の長さを求めよ。',
        svg: '<svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet"><polygon points="40,170 200,170 40,50" fill="none" stroke="white" stroke-width="1.5"/><rect x="40" y="160" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><text x="25" y="120" font-size="13" fill="white">3</text><text x="110" y="190" font-size="13" fill="white">4</text><text x="125" y="100" font-size="13" fill="#f87171">?</text></svg>'
      },
      answer: '5cm'
    },
    {
      type: 'text',
      data: {
        question: '直角三角形の斜辺が13cm、一方の辺が5cmのとき、もう一方の辺の長さを求めよ。',
      },
      answer: '12cm'
    },
    {
      type: 'text',
      data: {
        question: '直角三角形の直角をはさむ2辺が6cmと8cmのとき、斜辺の長さを求めよ。',
      },
      answer: '10cm'
    },
    {
      type: 'text',
      data: {
        question: '直角三角形の斜辺が10cm、一方の辺が6cmのとき、もう一方の辺の長さを求めよ。',
      },
      answer: '8cm'
    },
    {
      type: 'text',
      data: {
        question: '直角三角形の直角をはさむ2辺が1cmと1cmのとき、斜辺の長さを求めよ。',
      },
      answer: '√2cm'
    },
    {
      type: 'text',
      data: {
        question: '直角三角形の直角をはさむ2辺が5cmと12cmのとき、斜辺の長さを求めよ。',
      },
      answer: '13cm'
    },
    {
      type: 'text',
      data: {
        question: '直角三角形の斜辺が√10cm、一方の辺が1cmのとき、もう一方の辺の長さを求めよ。',
      },
      answer: '3cm'
    },
  ],

  // ----------------------------------------------------------
  // 特別な直角三角形 - 1:1:√2 と 1:2:√3
  // ----------------------------------------------------------
  "特別な直角三角形": [
    {
      type: 'text',
      data: {
        question: '直角二等辺三角形（45°-45°-90°）の3辺の比を答えよ。',
        options: ['1:1:√2', '1:2:√3', '1:1:2', '1:√3:2']
      },
      answer: '1:1:√2'
    },
    {
      type: 'text',
      data: {
        question: '30°, 60°, 90°の直角三角形の3辺の比を答えよ。',
        options: ['1:2:√3', '1:1:√2', '1:√3:2', '2:3:√5']
      },
      answer: '1:2:√3'
    },
    {
      type: 'text',
      data: {
        question: '直角二等辺三角形の等辺が6cmのとき、斜辺の長さを求めよ。',
        svg: '<svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet"><polygon points="40,170 200,170 40,10" fill="none" stroke="white" stroke-width="1.5"/><rect x="40" y="160" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><text x="25" y="95" font-size="13" fill="white">6</text><text x="110" y="190" font-size="13" fill="white">6</text><text x="130" y="85" font-size="13" fill="#f87171">?</text><text x="42" y="8" font-size="11" fill="white">45°</text><text x="175" y="167" font-size="11" fill="white">45°</text></svg>'
      },
      answer: '6√2cm'
    },
    {
      type: 'text',
      data: {
        question: '30°-60°-90°の直角三角形で、最も短い辺が4cmのとき、斜辺の長さを求めよ。',
      },
      answer: '8cm'
    },
    {
      type: 'text',
      data: {
        question: '30°-60°-90°の直角三角形で、最も短い辺が4cmのとき、残りの辺（60°に向かい合う辺）の長さを求めよ。',
      },
      answer: '4√3cm'
    },
    {
      type: 'text',
      data: {
        question: '正三角形の1辺が8cmのとき、高さを求めよ。',
        svg: '<svg viewBox="0 0 260 220" preserveAspectRatio="xMidYMid meet"><polygon points="130,20 30,200 230,200" fill="none" stroke="white" stroke-width="1.5"/><line x1="130" y1="20" x2="130" y2="200" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/><rect x="125" y="190" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><text x="120" y="218" font-size="13" fill="white">8</text><text x="135" y="120" font-size="13" fill="#f87171">?</text></svg>',
        hint: '正三角形を半分にすると30°-60°-90°の直角三角形ができる。底辺の半分=4。'
      },
      answer: '4√3cm'
    },
    {
      type: 'text',
      data: {
        question: '直角二等辺三角形の斜辺が10cmのとき、等辺の長さを求めよ。',
      },
      answer: '5√2cm'
    },
    {
      type: 'text',
      data: {
        question: '30°-60°-90°の直角三角形で、斜辺が12cmのとき、最も短い辺の長さを求めよ。',
      },
      answer: '6cm'
    },
  ],

  // ----------------------------------------------------------
  // 三平方の定理(標) - 座標平面と応用
  // ----------------------------------------------------------
  "三平方の定理(標)": [
    {
      type: 'text',
      data: {
        question: '座標平面上の2点A(1, 2), B(4, 6)間の距離を求めよ。',
        hint: 'AB = √{(4-1)²+(6-2)²} = √{9+16}'
      },
      answer: '5'
    },
    {
      type: 'text',
      data: {
        question: '座標平面上の2点A(-1, 3), B(5, -1)間の距離を求めよ。',
      },
      answer: '2√13'
    },
    {
      type: 'text',
      data: {
        question: '長方形ABCDで、AB=8cm, BC=6cmのとき、対角線ACの長さを求めよ。',
        svg: '<svg viewBox="0 0 280 200" preserveAspectRatio="xMidYMid meet"><rect x="40" y="30" width="200" height="140" fill="none" stroke="white" stroke-width="1.5"/><line x1="40" y1="170" x2="240" y2="30" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4,3"/><text x="28" y="28" font-size="14" fill="white">A</text><text x="242" y="28" font-size="14" fill="white">D</text><text x="28" y="182" font-size="14" fill="white">B</text><text x="242" y="182" font-size="14" fill="white">C</text><text x="22" y="110" font-size="13" fill="white">8</text><text x="125" y="190" font-size="13" fill="white">6</text><text x="150" y="110" font-size="13" fill="#f87171">?</text></svg>'
      },
      answer: '10cm'
    },
    {
      type: 'text',
      data: {
        question: '1辺が6cmの正方形の対角線の長さを求めよ。',
      },
      answer: '6√2cm'
    },
    {
      type: 'text',
      data: {
        question: '二等辺三角形ABCで、AB=AC=10cm, BC=12cmのとき、頂点Aから底辺BCに下ろした垂線の長さ（高さ）を求めよ。',
        svg: '<svg viewBox="0 0 260 220" preserveAspectRatio="xMidYMid meet"><polygon points="130,20 30,200 230,200" fill="none" stroke="white" stroke-width="1.5"/><line x1="130" y1="20" x2="130" y2="200" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/><rect x="125" y="190" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><text x="120" y="15" font-size="14" fill="white">A</text><text x="15" y="215" font-size="14" fill="white">B</text><text x="232" y="215" font-size="14" fill="white">C</text><text x="55" y="110" font-size="12" fill="white">10</text><text x="190" y="110" font-size="12" fill="white">10</text><text x="115" y="218" font-size="12" fill="white">12</text><text x="135" y="120" font-size="12" fill="#f87171">h=?</text></svg>',
        hint: '垂線は底辺を二等分する。半分=6, 斜辺=10'
      },
      answer: '8cm'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで、AB=7cm, BC=8cm, CA=9cmのとき、頂点Aから辺BCに垂線AHを下ろす。BHの長さを求めよ。',
        hint: 'BH=xとすると、AH²=7²-x²=9²-(8-x)². 49-x²=81-64+16x-x²'
      },
      answer: '2cm'
    },
  ],

  // ----------------------------------------------------------
  // 三平方の定理(応用) - 空間図形と入試レベル
  // ----------------------------------------------------------
  "三平方の定理(応用)": [
    {
      type: 'text',
      data: {
        question: '1辺が4cmの立方体の対角線の長さを求めよ。',
        hint: '底面の対角線=4√2, 立体の対角線=√{(4√2)²+4²}=√{32+16}'
      },
      answer: '4√3cm'
    },
    {
      type: 'text',
      data: {
        question: '底面の半径が3cm、高さが4cmの円錐の母線の長さを求めよ。',
        svg: '<svg viewBox="0 0 240 220" preserveAspectRatio="xMidYMid meet"><ellipse cx="120" cy="180" rx="80" ry="20" fill="none" stroke="white" stroke-width="1.5"/><line x1="40" y1="180" x2="120" y2="30" stroke="white" stroke-width="1.5"/><line x1="200" y1="180" x2="120" y2="30" stroke="white" stroke-width="1.5"/><line x1="120" y1="30" x2="120" y2="180" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/><line x1="120" y1="180" x2="200" y2="180" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/><text x="150" y="195" font-size="12" fill="white">3</text><text x="105" y="115" font-size="12" fill="white">4</text><text x="165" y="100" font-size="12" fill="#f87171">?</text></svg>'
      },
      answer: '5cm'
    },
    {
      type: 'text',
      data: {
        question: '底面が1辺6cmの正方形、高さが4cmの正四角錐がある。体積を求めよ。',
        hint: '底面積=36cm², 体積=(1/3)×底面積×高さ'
      },
      answer: '48cm³'
    },
    {
      type: 'text',
      data: {
        question: '底面が1辺6cmの正方形で、側面がすべて二等辺三角形の正四角錐がある。側辺（頂点から底面の頂点までの距離）が5cmのとき、この四角錐の高さを求めよ。',
        hint: '底面の対角線=6√2, 底面の中心から頂点までの距離=3√2. h²+(3√2)²=5²'
      },
      answer: '√7cm'
    },
    {
      type: 'text',
      data: {
        question: '直方体で、縦3cm, 横4cm, 高さ12cmのとき、空間の対角線の長さを求めよ。',
      },
      answer: '13cm'
    },
    {
      type: 'text',
      data: {
        question: '右の図のような直角三角形ABCで、∠C=90°, AC=6cm, BC=8cmである。CからABに垂線CHを下ろすとき、CHの長さを求めよ。',
        svg: '<svg viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet"><polygon points="30,170 230,170 30,30" fill="none" stroke="white" stroke-width="1.5"/><rect x="30" y="160" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><line x1="30" y1="170" x2="94" y2="82" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/><text x="18" y="28" font-size="14" fill="white">A</text><text x="232" y="182" font-size="14" fill="white">B</text><text x="18" y="182" font-size="14" fill="white">C</text><text x="82" y="78" font-size="14" fill="#60a5fa">H</text><text x="12" y="110" font-size="12" fill="white">6</text><text x="120" y="190" font-size="12" fill="white">8</text></svg>',
        hint: 'AB=10. △ABCの面積=(1/2)×6×8=24=(1/2)×10×CH'
      },
      answer: '4.8cm'
    },
    {
      type: 'text',
      data: {
        question: '半径6cmの球に内接する立方体の1辺の長さを求めよ。',
        hint: '立方体の対角線=球の直径=12. a√3=12より a=12/√3=4√3'
      },
      answer: '4√3cm'
    },
    {
      type: 'text',
      data: {
        question: '底面の半径が6cm、母線の長さが10cmの円錐の側面積を求めよ。',
        hint: '側面積=πrl (r=半径, l=母線)'
      },
      answer: '60πcm²'
    },
  ],
};
