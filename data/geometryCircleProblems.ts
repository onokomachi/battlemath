import type { ProblemSet } from '../types';

// ============================================================
// 円（中学3年）- 円周角の定理、接線、円に内接する四角形
// ============================================================

export const geometryCircleProblems: ProblemSet = {

  // ----------------------------------------------------------
  // 円周角の定理(基) - 基本概念と定理
  // ----------------------------------------------------------
  "円周角の定理(基)": [
    {
      type: 'text',
      data: {
        question: '円周上の1点から、ある弧の両端に引いた2つの線分がつくる角を何というか。',
        options: ['円周角', '中心角', '弧の角', '接線角']
      },
      answer: '円周角'
    },
    {
      type: 'text',
      data: {
        question: '同じ弧に対する円周角と中心角の関係を述べよ。円周角は中心角の何倍か。',
        options: ['1/2倍', '2倍', '同じ', '1/3倍']
      },
      answer: '1/2倍'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、Oは円の中心、∠AOB=80°のとき、弧ABに対する円周角∠APBの大きさを求めよ。',
        svg: '<svg viewBox="0 0 280 280" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="140" r="110" fill="none" stroke="white" stroke-width="1.5"/><circle cx="140" cy="140" r="3" fill="white"/><line x1="140" y1="140" x2="60" y2="190" stroke="white" stroke-width="1.5"/><line x1="140" y1="140" x2="220" y2="190" stroke="white" stroke-width="1.5"/><line x1="60" y1="190" x2="140" y2="32" stroke="white" stroke-width="1.5"/><line x1="220" y1="190" x2="140" y2="32" stroke="white" stroke-width="1.5"/><text x="133" y="155" font-size="14" fill="white">O</text><text x="42" y="200" font-size="14" fill="white">A</text><text x="222" y="200" font-size="14" fill="white">B</text><text x="133" y="27" font-size="14" fill="#60a5fa">P</text><path d="M 125,148 A 15 15 0 0 1 155,148" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="125" y="172" font-size="12" fill="#f87171">80°</text></svg>'
      },
      answer: '40°'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、円周角∠APB=35°のとき、中心角∠AOBの大きさを求めよ。',
        svg: '<svg viewBox="0 0 280 280" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="140" r="110" fill="none" stroke="white" stroke-width="1.5"/><circle cx="140" cy="140" r="3" fill="white"/><line x1="140" y1="140" x2="50" y2="200" stroke="white" stroke-width="1.5"/><line x1="140" y1="140" x2="230" y2="200" stroke="white" stroke-width="1.5"/><line x1="50" y1="200" x2="140" y2="32" stroke="white" stroke-width="1.5"/><line x1="230" y1="200" x2="140" y2="32" stroke="white" stroke-width="1.5"/><text x="133" y="155" font-size="14" fill="white">O</text><text x="35" y="213" font-size="14" fill="white">A</text><text x="230" y="213" font-size="14" fill="white">B</text><text x="133" y="27" font-size="14" fill="#60a5fa">P</text><text x="120" y="48" font-size="12" fill="#60a5fa">35°</text></svg>'
      },
      answer: '70°'
    },
    {
      type: 'text',
      data: {
        question: '同じ弧に対する円周角の大きさについて正しいものを選べ。',
        options: [
          'すべて等しい',
          '点の位置によって異なる',
          '弧の長さに関係なく一定',
          '中心角の2倍'
        ]
      },
      answer: 'すべて等しい'
    },
    {
      type: 'text',
      data: {
        question: '半円の弧に対する円周角は何度か。',
        options: ['90°', '180°', '45°', '60°']
      },
      answer: '90°'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、ABは円Oの直径である。円周上の点Pについて、∠APBの大きさを求めよ。',
        svg: '<svg viewBox="0 0 280 260" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="130" r="110" fill="none" stroke="white" stroke-width="1.5"/><circle cx="140" cy="130" r="3" fill="white"/><line x1="30" y1="130" x2="250" y2="130" stroke="white" stroke-width="1.5"/><line x1="30" y1="130" x2="190" y2="30" stroke="white" stroke-width="1.5"/><line x1="250" y1="130" x2="190" y2="30" stroke="white" stroke-width="1.5"/><text x="133" y="148" font-size="14" fill="white">O</text><text x="15" y="135" font-size="14" fill="white">A</text><text x="252" y="135" font-size="14" fill="white">B</text><text x="190" y="25" font-size="14" fill="#60a5fa">P</text></svg>'
      },
      answer: '90°'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、∠AOB=140°のとき、弧ABに対する円周角（弧ABの長い方の弧に対する円周角）の大きさを求めよ。',
        svg: '<svg viewBox="0 0 280 280" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="140" r="110" fill="none" stroke="white" stroke-width="1.5"/><circle cx="140" cy="140" r="3" fill="white"/><line x1="140" y1="140" x2="55" y2="80" stroke="white" stroke-width="1.5"/><line x1="140" y1="140" x2="225" y2="80" stroke="white" stroke-width="1.5"/><text x="133" y="155" font-size="14" fill="white">O</text><text x="38" y="75" font-size="14" fill="white">A</text><text x="228" y="75" font-size="14" fill="white">B</text><text x="127" y="260" font-size="14" fill="#60a5fa">P</text><line x1="55" y1="80" x2="140" y2="248" stroke="white" stroke-width="1" stroke-dasharray="3,3"/><line x1="225" y1="80" x2="140" y2="248" stroke="white" stroke-width="1" stroke-dasharray="3,3"/><path d="M 120,135 A 20 20 0 0 1 160,135" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="118" y="130" font-size="11" fill="#f87171">140°</text></svg>',
        hint: '長い方の弧ABに対する中心角は360°-140°=220°'
      },
      answer: '110°'
    },
  ],

  // ----------------------------------------------------------
  // 円周角の定理(標) - 計算と応用
  // ----------------------------------------------------------
  "円周角の定理(標)": [
    {
      type: 'text',
      data: {
        question: '右の図で、4点A, B, C, Dは円周上にあり、∠BAC=28°である。∠BDC の大きさを求めよ。',
        svg: '<svg viewBox="0 0 280 280" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="140" r="110" fill="none" stroke="white" stroke-width="1.5"/><line x1="50" y1="80" x2="100" y2="240" stroke="white" stroke-width="1.5"/><line x1="50" y1="80" x2="230" y2="80" stroke="white" stroke-width="1.5"/><line x1="230" y1="80" x2="230" y2="220" stroke="white" stroke-width="1.5"/><line x1="100" y1="240" x2="230" y2="220" stroke="white" stroke-width="1.5"/><text x="35" y="75" font-size="14" fill="white">A</text><text x="232" y="75" font-size="14" fill="white">B</text><text x="85" y="252" font-size="14" fill="white">C</text><text x="232" y="232" font-size="14" fill="white">D</text><text x="55" y="98" font-size="12" fill="#f87171">28°</text></svg>',
        hint: '同じ弧BCに対する円周角は等しい。'
      },
      answer: '28°'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、∠ACB=50°, ∠ADB=50°である。4点A, B, C, Dは同一円周上にあるか。',
        svg: '<svg viewBox="0 0 280 260" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="130" r="110" fill="none" stroke="white" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="60" y1="60" x2="220" y2="60" stroke="white" stroke-width="1.5"/><line x1="60" y1="60" x2="90" y2="230" stroke="white" stroke-width="1.5"/><line x1="220" y1="60" x2="90" y2="230" stroke="white" stroke-width="1.5"/><line x1="60" y1="60" x2="240" y2="180" stroke="white" stroke-width="1.5"/><line x1="220" y1="60" x2="240" y2="180" stroke="white" stroke-width="1.5"/><text x="45" y="55" font-size="14" fill="white">A</text><text x="222" y="55" font-size="14" fill="white">B</text><text x="75" y="245" font-size="14" fill="white">C</text><text x="243" y="185" font-size="14" fill="white">D</text><text x="72" y="190" font-size="12" fill="#f87171">50°</text><text x="225" y="150" font-size="12" fill="#f87171">50°</text></svg>',
        options: ['同一円周上にある', '同一円周上にない', '条件が足りない']
      },
      answer: '同一円周上にある'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、ABは直径、∠BAC=32°のとき、∠ABCの大きさを求めよ。',
        svg: '<svg viewBox="0 0 280 260" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="120" r="110" fill="none" stroke="white" stroke-width="1.5"/><line x1="30" y1="120" x2="250" y2="120" stroke="white" stroke-width="1.5"/><line x1="30" y1="120" x2="200" y2="22" stroke="white" stroke-width="1.5"/><line x1="250" y1="120" x2="200" y2="22" stroke="white" stroke-width="1.5"/><text x="15" y="125" font-size="14" fill="white">A</text><text x="252" y="125" font-size="14" fill="white">B</text><text x="200" y="17" font-size="14" fill="#60a5fa">C</text><text x="47" y="113" font-size="12" fill="#f87171">32°</text></svg>',
        hint: '直径に対する円周角は90°なので、∠ACB=90°'
      },
      answer: '58°'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、Oは円の中心、∠BAC=25°のとき、∠BOCの大きさを求めよ。',
        svg: '<svg viewBox="0 0 280 280" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="140" r="110" fill="none" stroke="white" stroke-width="1.5"/><circle cx="140" cy="140" r="3" fill="white"/><line x1="140" y1="140" x2="80" y2="230" stroke="white" stroke-width="1.5"/><line x1="140" y1="140" x2="240" y2="190" stroke="white" stroke-width="1.5"/><line x1="100" y1="45" x2="80" y2="230" stroke="white" stroke-width="1.5"/><line x1="100" y1="45" x2="240" y2="190" stroke="white" stroke-width="1.5"/><text x="133" y="137" font-size="14" fill="white">O</text><text x="85" y="42" font-size="14" fill="#60a5fa">A</text><text x="62" y="240" font-size="14" fill="white">B</text><text x="243" y="198" font-size="14" fill="white">C</text><text x="94" y="70" font-size="12" fill="#60a5fa">25°</text></svg>'
      },
      answer: '50°'
    },
    {
      type: 'text',
      data: {
        question: '円Oで、∠AOB=130°のとき、短い方の弧ABに対する円周角を求めよ。',
      },
      answer: '65°'
    },
    {
      type: 'text',
      data: {
        question: '円周上に4点A, B, C, Dがこの順にあり、∠ABC=72°のとき、∠ADCの大きさを求めよ。',
        hint: '円に内接する四角形の対角の和は180°'
      },
      answer: '108°'
    },
  ],

  // ----------------------------------------------------------
  // 円と接線(基)
  // ----------------------------------------------------------
  "円と接線(基)": [
    {
      type: 'text',
      data: {
        question: '円の接線は、接点を通る半径に対してどのような関係にあるか。',
        options: ['垂直', '平行', '45°の角をなす', '60°の角をなす']
      },
      answer: '垂直'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、直線ATは円Oの接線で、Tは接点である。OT=5cm, OA=13cmのとき、ATの長さを求めよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><circle cx="100" cy="110" r="60" fill="none" stroke="white" stroke-width="1.5"/><circle cx="100" cy="110" r="3" fill="white"/><line x1="100" y1="110" x2="160" y2="110" stroke="white" stroke-width="1.5"/><line x1="160" y1="110" x2="260" y2="110" stroke="#60a5fa" stroke-width="1.5"/><line x1="100" y1="110" x2="260" y2="110" stroke="white" stroke-width="1" stroke-dasharray="3,3"/><rect x="155" y="110" width="8" height="8" fill="none" stroke="white" stroke-width="1"/><text x="93" y="105" font-size="14" fill="white">O</text><text x="155" y="130" font-size="14" fill="white">T</text><text x="260" y="105" font-size="14" fill="#60a5fa">A</text><text x="115" y="105" font-size="11" fill="white">5</text><text x="170" y="105" font-size="11" fill="#60a5fa">?</text></svg>',
        hint: '∠OTA=90°だから三平方の定理を使う。'
      },
      answer: '12cm'
    },
    {
      type: 'text',
      data: {
        question: '円の外部の1点から、その円に2本の接線を引くとき、その1点から2つの接点までの距離について正しいものを選べ。',
        options: ['等しい', '一方が長い', '半径に等しい', '直径に等しい']
      },
      answer: '等しい'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、PA, PBは円Oの接線で、A, Bは接点である。∠APB=60°のとき、∠AOBの大きさを求めよ。',
        svg: '<svg viewBox="0 0 320 260" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="130" r="80" fill="none" stroke="white" stroke-width="1.5"/><circle cx="140" cy="130" r="3" fill="white"/><line x1="280" y1="130" x2="180" y2="60" stroke="white" stroke-width="1.5"/><line x1="280" y1="130" x2="180" y2="200" stroke="white" stroke-width="1.5"/><line x1="140" y1="130" x2="180" y2="60" stroke="white" stroke-width="1.5"/><line x1="140" y1="130" x2="180" y2="200" stroke="white" stroke-width="1.5"/><text x="133" y="128" font-size="14" fill="white">O</text><text x="285" y="135" font-size="14" fill="#60a5fa">P</text><text x="172" y="55" font-size="14" fill="white">A</text><text x="172" y="215" font-size="14" fill="white">B</text><text x="255" y="135" font-size="12" fill="#60a5fa">60°</text></svg>',
        hint: '四角形OAPBの内角の和は360°で、∠OAP=∠OBP=90°'
      },
      answer: '120°'
    },
    {
      type: 'text',
      data: {
        question: '半径5cmの円Oの外部の点Pから接線を引く。OP=10cmのとき、接線の長さを求めよ。',
        hint: '接点をTとすると、OT⊥PTで直角三角形'
      },
      answer: '5√3cm'
    },
    {
      type: 'text',
      data: {
        question: '△ABCの内接円の半径をr、△ABCの面積をS、周の長さをlとするとき、S=□が成り立つ。□に入る式を選べ。',
        options: ['(1/2)rl', 'rl', '(1/3)rl', '2rl']
      },
      answer: '(1/2)rl'
    },
  ],

  // ----------------------------------------------------------
  // 円に内接する四角形
  // ----------------------------------------------------------
  "円内接四角形": [
    {
      type: 'text',
      data: {
        question: '円に内接する四角形の対角の和は何度か。',
        options: ['180°', '360°', '90°', '270°']
      },
      answer: '180°'
    },
    {
      type: 'text',
      data: {
        question: '円に内接する四角形ABCDで、∠A=75°のとき、∠Cの大きさを求めよ。',
      },
      answer: '105°'
    },
    {
      type: 'text',
      data: {
        question: '円に内接する四角形ABCDで、∠A=110°, ∠B=70°のとき、∠Dの大きさを求めよ。',
      },
      answer: '110°'
    },
    {
      type: 'text',
      data: {
        question: '円に内接する四角形ABCDで、∠A:∠C=2:3のとき、∠Aの大きさを求めよ。',
        hint: '∠A+∠C=180° で ∠A:∠C=2:3'
      },
      answer: '72°'
    },
    {
      type: 'text',
      data: {
        question: '円に内接する四角形ABCDの辺BCの延長上に点Eをとると、∠DCE=∠Aである。その理由として正しいものを選べ。',
        options: [
          '円に内接する四角形の外角は対角に等しい',
          '同位角が等しい',
          '錯角が等しい',
          '対頂角が等しい'
        ]
      },
      answer: '円に内接する四角形の外角は対角に等しい'
    },
    {
      type: 'text',
      data: {
        question: '円に内接する四角形ABCDで、∠DAB=95°, ∠ABC=80°のとき、∠BCDの大きさを求めよ。',
      },
      answer: '85°'
    },
  ],

  // ----------------------------------------------------------
  // 円周角の応用(入試レベル)
  // ----------------------------------------------------------
  "円周角(応用)": [
    {
      type: 'text',
      data: {
        question: '右の図で、ABは円Oの直径、∠CAB=35°, ∠DBA=40°のとき、∠CPDの大きさを求めよ。ただしC, Dは円周上の点で、P=AC∩BD。',
        svg: '<svg viewBox="0 0 280 280" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="140" r="110" fill="none" stroke="white" stroke-width="1.5"/><line x1="30" y1="140" x2="250" y2="140" stroke="white" stroke-width="1.5"/><line x1="30" y1="140" x2="210" y2="45" stroke="white" stroke-width="1.5"/><line x1="250" y1="140" x2="70" y2="45" stroke="white" stroke-width="1.5"/><text x="15" y="145" font-size="14" fill="white">A</text><text x="252" y="145" font-size="14" fill="white">B</text><text x="210" y="40" font-size="14" fill="white">C</text><text x="52" y="40" font-size="14" fill="white">D</text><text x="130" y="85" font-size="14" fill="#60a5fa">P</text><text x="50" y="135" font-size="11" fill="#f87171">35°</text><text x="210" y="135" font-size="11" fill="#f87171">40°</text></svg>',
        hint: '△APBにおいて∠APB=180°-35°-40°=105°, ∠CPD=∠APB（対頂角）'
      },
      answer: '105°'
    },
    {
      type: 'text',
      data: {
        question: '円に内接する四角形ABCDで、∠BAD=100°, ACとBDの交点をPとする。∠APC=70°のとき、∠ABDの大きさを求めよ。',
        hint: '△APBで∠APB=180°-70°=110° (∠APBと∠APCは補角), ∠PAB+∠ABP=70°'
      },
      answer: '30°'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、円Oの弦ABの延長上に点Pがある。円周上の点Cについて∠ACB=65°, ∠BPC=25°のとき、∠PCAの大きさを求めよ。',
        svg: '<svg viewBox="0 0 320 260" preserveAspectRatio="xMidYMid meet"><circle cx="140" cy="130" r="100" fill="none" stroke="white" stroke-width="1.5"/><line x1="50" y1="170" x2="300" y2="170" stroke="white" stroke-width="1.5"/><line x1="300" y1="170" x2="110" y2="38" stroke="white" stroke-width="1.5"/><line x1="50" y1="170" x2="110" y2="38" stroke="white" stroke-width="1.5"/><text x="35" y="180" font-size="14" fill="white">A</text><text x="228" y="180" font-size="14" fill="white">B</text><text x="100" y="33" font-size="14" fill="white">C</text><text x="300" y="165" font-size="14" fill="#60a5fa">P</text><text x="100" y="65" font-size="11" fill="#f87171">65°</text><text x="270" y="165" font-size="11" fill="#60a5fa">25°</text></svg>',
        hint: '△PCBの外角定理より∠ACB=∠BPC+∠PBC'
      },
      answer: '40°'
    },
    {
      type: 'text',
      data: {
        question: '円Oに内接する△ABCで、∠BAC=40°、弧BC(Aを含まない方)の上に点Dをとる。∠BDCの大きさを求めよ。',
        hint: '同じ弧BCに対する円周角だが、DはAと同じ側にない。反対側の弧に対する円周角は180°-40°。'
      },
      answer: '140°'
    },
    {
      type: 'text',
      data: {
        question: '円の接線ATと弦ABがなす角が50°のとき、弧ABに対する円周角は何度か。（接線と弦の作る角＝弧に対する円周角）',
      },
      answer: '50°'
    },
    {
      type: 'text',
      data: {
        question: '円Oで、2つの弦AB, CDが点Pで交わる。∠APC=80°、弧AC=100°のとき、弧BDの大きさを求めよ。',
        hint: '∠APC=(弧AC+弧BD)/2'
      },
      answer: '60°'
    },
  ],
};
