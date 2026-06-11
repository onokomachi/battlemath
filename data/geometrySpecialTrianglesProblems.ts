
import { ProblemSet } from '../types';

const CONGRUENCE_CONDITIONS = ["1組の辺とその両端の角がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "3組の辺がそれぞれ等しい"];
const RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS = ["斜辺と1つの鋭角がそれぞれ等しい", "斜辺と他の1辺がそれぞれ等しい"];

const rightTriangleKeypadLayout = [
    ['斜', '辺', '鋭', '角'],
    ['直', '三', '角', '形'],
    ['そ', 'の', '間', '１'],
    ['他', '両', '端', '３'],
];

const proofKeypadLayout = [
  ['△', '∠', '≡', '仮定', '結論'],
  ['対応', '辺', '角', '共通', '錯角'],
  ['合同', '等しい', '平行', '垂直', '対頂角'],
  ['二等辺', '正', '直角', 'π', '²']
];

export const geometrySpecialTrianglesProblems: ProblemSet = {
  "二等辺三角形(準)": [
    { type: 'text', data: { question: "頂角が40°の二等辺三角形の一つの底角は何度ですか？", hint: "二等辺三角形の2つの底角は等しいです。また、三角形の内角の和は180°です。", svg: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="58" y1="88" x2="68" y2="74" stroke="white" stroke-width="2"/><line x1="142" y1="88" x2="132" y2="74" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><path d="M 91,34 A 14 14 0 0 1 109,34" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="85" y="52" font-size="12" fill="#f87171">頂角</text></svg>' }, answer: "70°" },
    { type: 'text', data: { question: "一つの底角が50°の二等辺三角形の頂角は何度ですか？", svg: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="58" y1="88" x2="68" y2="74" stroke="white" stroke-width="2"/><line x1="142" y1="88" x2="132" y2="74" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><path d="M 44,132 A 17 17 0 0 1 58,130" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="46" y="125" font-size="12" fill="#60a5fa">底角</text></svg>' }, answer: "80°" },
    { type: 'text', data: { question: "二等辺三角形の底辺の両端の角を何といいますか？" }, answer: "底角" },
    { type: 'text', data: { question: "二等辺三角形の頂角の二等分線は、底辺をどのように分けますか？", svg: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="100" y1="20" x2="100" y2="145" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="100" cy="145" r="3" fill="white"/><path d="M 94,36 A 8 8 0 0 1 100,32" fill="none" stroke="#f87171" stroke-width="1.2"/><path d="M 100,32 A 8 8 0 0 1 106,36" fill="none" stroke="#f87171" stroke-width="1.2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><text x="103" y="140" font-size="12" fill="#60a5fa">D</text></svg>' }, answer: "垂直に二等分する" },
    { type: 'text', data: { question: "AB=ACの二等辺三角形ABCがあります。∠Bが65°のとき、∠Aは何度ですか？", svg: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="58" y1="88" x2="68" y2="74" stroke="white" stroke-width="2"/><line x1="142" y1="88" x2="132" y2="74" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><path d="M 44,132 A 17 17 0 0 1 58,130" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="43" y="126" font-size="11" fill="#60a5fa">65°</text></svg>' }, answer: "50°" },
    { type: 'text', data: { question: "二等辺三角形の定義を答えなさい。" }, answer: "2つの辺が等しい三角形" },
    { type: 'text', data: { question: "二等辺三角形の底角が等しいことは、定義ですか、定理ですか？" }, answer: "定理" },
    { type: 'text', data: { question: "頂角が120°の二等辺三角形の一つの底角は何度ですか？", svg: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="58" y1="88" x2="68" y2="74" stroke="white" stroke-width="2"/><line x1="142" y1="88" x2="132" y2="74" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><path d="M 86,36 A 18 18 0 0 1 114,36" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="80" y="54" font-size="11" fill="#f87171">120°</text></svg>' }, answer: "30°" },
    { type: 'text', data: { question: "一つの底角が45°の二等辺三角形は、特に何三角形といいますか？" }, answer: "直角二等辺三角形" },
    { type: 'text', data: { question: "二等辺三角形で、等しい2辺の間の角を何といいますか？" }, answer: "頂角" },
    { type: 'text', data: { question: "二等辺三角形で、頂角に対する辺を何といいますか？" }, answer: "底辺" },
    { type: 'text', data: { question: "頂角の外角が100°の二等辺三角形の底角は何度ですか？", svg: '<svg viewBox="0 0 240 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="58" y1="88" x2="68" y2="74" stroke="white" stroke-width="2"/><line x1="142" y1="88" x2="132" y2="74" stroke="white" stroke-width="2"/><line x1="100" y1="20" x2="205" y2="20" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 135,20 A 35 35 0 0 1 100,55" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="136" y="44" font-size="11" fill="#f87171">外角 100°</text><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text></svg>' }, answer: "50°" },
    { type: 'text', data: { question: "底角の一つの外角が110°の二等辺三角形の頂角は何度ですか？", svg: '<svg viewBox="0 0 230 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="58" y1="88" x2="68" y2="74" stroke="white" stroke-width="2"/><line x1="142" y1="88" x2="132" y2="74" stroke="white" stroke-width="2"/><line x1="30" y1="145" x2="0" y2="145" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 12,145 A 22 22 0 0 0 28,128" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="1" y="127" font-size="11" fill="#f87171">110°</text><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text></svg>' }, answer: "40°" },
    { type: 'text', data: { question: "AB=ACの二等辺三角形ABCで、頂点Aから辺BCに垂線を引くと、その線は∠Aをどうしますか？", svg: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="100" y1="20" x2="100" y2="145" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="95" y="140" width="8" height="8" fill="none" stroke="white" stroke-width="1"/><line x1="58" y1="88" x2="68" y2="74" stroke="white" stroke-width="2"/><line x1="142" y1="88" x2="132" y2="74" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><text x="103" y="140" font-size="12" fill="#60a5fa">D</text></svg>' }, answer: "二等分する" },
    { type: 'text', data: { question: "2つの角が等しい三角形は、どんな三角形ですか？" }, answer: "二等辺三角形" },
    {
        type: 'text',
        data: { question: "図の△ABC は AB=AC の二等辺三角形である。\n頂角とはどの角のことか、答えよ。", imageUrl: "/Image/79.jpg" },
        answer: "∠BAC"
    },
    {
        type: 'text',
        data: { question: "図の△ABC は AB=AC の二等辺三角形である。\n底角とはどの角のことか、すべて答えよ。", imageUrl: "/Image/79.jpg", multiple: true },
        answer: "∠ABC,∠ACB"
    },
    {
        type: 'text',
        data: { question: "次の文は二等辺三角形の定義である。( )に適切な語句を入れよ。\n「( )が等しい三角形を二等辺三角形という」", imageUrl: "/Image/79.jpg" },
        answer: "2辺"
    },
    {
        type: 'text',
        data: { question: "次の文は二等辺三角形の性質の定理である。( )に適切な語句を入れよ。\n「二等辺三角形の( )は等しい。」", imageUrl: "/Image/79.jpg" },
        answer: "底角"
    },
    {
        type: 'text',
        data: { question: "二等辺三角形の頂角の二等分線は、(1)を(2)に(3)する。\n空欄(1)(2)(3)に当てはまる語句をカンマ区切りで順に答えよ。", imageUrl: "/Image/79.jpg", multiple: true },
        answer: "底辺,垂直,二等分"
    },
    {
        type: 'text',
        data: { question: "正三角形の一つの内角は何度になるか。", imageUrl: "/Image/79.jpg" },
        answer: "60°"
    },
    {
        type: 'text',
        data: { question: "0°より大きく、90°より小さい角を何というか。" },
        answer: "鋭角"
    },
    {
        type: 'text',
        data: { question: "90°より大きく、180°より小さい角を何というか。" },
        answer: "鈍角"
    }
  ],
  "二等辺三角形(証)": [
    {
      type: 'fill_in_proof',
      data: {
        question: "「二等辺三角形の底角はひとしい。」という性質を証明したい。図のようにAB=ACの二等辺三角形がある。辺BCの中点をDとするとき∠ABD=∠ACDとなることを証明せよ。",
        imageUrl: '/Image/68.jpg',
        steps: [
          { parts: ['△ABDと', null, 'において'] },
          { parts: ['仮定から AB =', null] },
          { parts: ['DはBCの中点なので BD =', null] },
          { parts: ['ADは', null, 'な辺'] },
          { parts: ['よって、「', { options: CONGRUENCE_CONDITIONS }, '」ので'] },
          { parts: ['△ABD ≡', null] },
          { parts: ['合同な図形の対応する角は等しいから'] },
          { parts: ['∠ABD =', null] }
        ]
      },
      answer: "△ACD;AC;CD;共通;3組の辺がそれぞれ等しい;△ACD;∠ACD"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "図のAB=ACの二等辺三角形でADが頂角∠BACの二等分線であるとき、△ABD≡△ACDを証明せよ。",
        imageUrl: '/Image/22.jpg',
        steps: [
          { parts: ['△ABDと', null, 'において'] },
          { parts: ['仮定から AB =', null] },
          { parts: ['ADは∠BACの二等分線なので ∠BAD =', null] },
          { parts: ['ADは', null, 'な辺'] },
          { parts: ['よって、「', { options: CONGRUENCE_CONDITIONS }, '」ので'] },
          { parts: ['△ABD ≡', null] },
        ]
      },
      answer: "△ACD;AC;∠CAD;共通;2組の辺とその間の角がそれぞれ等しい;△ACD"
    },
     {
      type: 'fill_in_proof',
      data: {
        question: "前の問題の結果からADが底辺BCを垂直に二等分することを証明した。カッコに適切な記号を入れよ。",
        imageUrl: '/Image/22.jpg',
        steps: [
          { parts: ['合同な三角形の対応する辺や角は等しいので'] },
          { parts: [null, '=', null, '...①'] },
          { parts: ['∠', null, '= ∠', null, '...②'] },
          { parts: ['直線は180°なので ∠', null, '+ ∠', null, '= 180° ...③'] },
          { parts: ['②③より 2∠', null, '= 180° なので ∠', null, '= 90°'] },
          { parts: ['よって AD ⊥ BC ...④'] },
          { parts: ['①,④よりADは底辺BCを垂直に二等分する。'] },
        ]
      },
      answer: "BD;CD;ADB;ADC;ADB;ADC;ADB;ADB"
    },
     {
      type: 'fill_in_proof',
      data: {
        question: "図の△ABCはAB=ACの二等辺三角形である。BD=CEならば、AD=AEとなることを証明しなさい。",
        imageUrl: '/Image/14.jpg',
        steps: [
          { parts: ['△ABDと', null, 'において'] },
          { parts: ['仮定から AB =', null] },
          { parts: ['二等辺三角形の底角は等しいので ∠ABD =', null] },
          { parts: ['仮定から BD =', null] },
          { parts: ['よって、「', { options: CONGRUENCE_CONDITIONS }, '」ので'] },
          { parts: ['△ABD ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいから AD =', null] },
        ]
      },
      answer: "△ACE;AC;∠ACE;CE;2組の辺とその間の角がそれぞれ等しい;△ACE;AE"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "図の三角形ABCにおいて∠B=∠Cならば、AB=ACであることを証明しなさい。",
        imageUrl: '/Image/85.jpg',
        steps: [
          { parts: ['△ABHと', null, 'において'] },
          { parts: ['∠B', '＝', null, '(仮定より)', '･････①'] },
          { parts: ['∠AHB', '＝', null, '(=90°)', '･････②'] },
          { parts: ['∠BAH', '＝', null, '(①②より)', '･････③'] },
          { parts: ['AH', '＝', null, '(共通)', '･････④'] },
          { parts: ['②③④より「', { options: CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△ABH', '≡', null] },
          { parts: ['', null, 'する辺は等しいから'] },
          { parts: ['AB', '＝', null] }
        ]
      },
      answer: "△ACH;∠C;∠AHC;∠CAH;AH;1組の辺とその両端の角がそれぞれ等しい;△ACH;対応;AC"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "図のように、二等辺三角形ABCの頂角Aの二等分線を引いて、底角が等しいことを証明しなさい。",
        imageUrl: '/Image/22.jpg',
        steps: [
          { parts: ['△ABDと', null, 'において'] },
          { parts: ['AB', '＝', null, '(仮定より)', '･････①'] },
          { parts: ['AD', '＝', null, '(共通)', '･････②'] },
          { parts: ['∠BAD', '＝', null, '(仮定より)', '･････③'] },
          { parts: ['①②③より「', { options: CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△ABD', '≡', null] },
          { parts: ['', null, 'する角は等しいから'] },
          { parts: ['∠ABD', '＝', null] },
        ]
      },
      answer: "△ACD;AC;AD;∠CAD;2組の辺とその間の角がそれぞれ等しい;△ACD;対応;∠ACD"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "図の二等辺三角形ABCにおいて、BD=CEならば、辺BEと辺CDが等しいことを証明しなさい。",
        imageUrl: '/Image/81.jpg',
        steps: [
          { parts: ['△BCDと', null, 'において'] },
          { parts: ['BD', '＝', null, '(仮定より)', '･････①'] },
          { parts: ['BC', '＝', null, '(共通)', '･････②'] },
          { parts: ['∠CBD', '＝', null, '(二等辺三角形)', '･････③'] },
          { parts: ['①②③より「', { options: CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△BCD', '≡', null] },
          { parts: ['', null, 'する辺は等しいから'] },
          { parts: ['BE', '＝', null] },
        ]
      },
      answer: "△CBE;CE;CB;∠BCE;2組の辺とその間の角がそれぞれ等しい;△CBE;対応;CD"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "図の二等辺三角形ABCにおいて、BD=CEならば、△BCFは二等辺三角形であることを証明しなさい。",
        imageUrl: '/Image/81.jpg',
        steps: [
          { parts: ['△BCDと', null, 'において'] },
          { parts: ['BD', '＝', null, '(仮定より)', '･････①'] },
          { parts: ['BC', '＝', null, '(共通)', '･････②'] },
          { parts: ['∠CBD', '＝', null, '(二等辺三角形)', '･････③'] },
          { parts: ['①②③より「', { options: CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△BCD', '≡', null] },
          { parts: ['', null, 'する角は等しいから'] },
          { parts: ['∠BCD', '＝', null] },
          { parts: ['したがって、∠FBCと∠FCBが等しく\n△BCFは二等辺三角形である。'] }
        ]
      },
      answer: "△CBE;CE;CB;∠BCE;2組の辺とその間の角がそれぞれ等しい;△CBE;対応;∠CBE"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "図の二等辺三角形ABCにおいて、AD=AEならば、辺BEと辺CDが等しいことを証明しなさい。",
        imageUrl: '/Image/81.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['AE', '＝', null, '(仮定より)', '･････①'] },
          { parts: ['AB', '＝', null, '(二等辺三角形)', '･････②'] },
          { parts: ['∠BAE', '＝', null, '(共通)', '･････③'] },
          { parts: ['①②③より「', { options: CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△ABE', '≡', null] },
          { parts: ['', null, 'する辺は等しいから'] },
          { parts: ['BE', '＝', null] },
        ]
      },
      answer: "△ACD;AD;AC;∠CAD;2組の辺とその間の角がそれぞれ等しい;△ACD;対応;CD"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "△ABCで辺BCの中点をMとする。MD=ME、DB=ECであれば△ABCは二等辺三角形になることを証明しなさい。",
        imageUrl: "/Image/80.jpg",
        keypadLayout: proofKeypadLayout,
        steps: [
          { parts: ['△DBMと', null, 'において'] },
          { parts: ['仮定から MD =', null, '...①'] },
          { parts: ['仮定から DB =', null, '...②'] },
          { parts: ['MはBCの中点なので BM =', null, '...③'] },
          { parts: ['①②③より「', { options: CONGRUENCE_CONDITIONS }, '」ので'] },
          { parts: ['△DBM ≡', null] },
          { parts: ['合同な図形の対応する角は等しいので、', null, ' = ∠ECM'] },
          { parts: ['よって、2つの角が等しいので△ABCは', null, 'である。'] }
        ]
      },
      answer: "△ECM;ME;EC;CM;3組の辺がそれぞれ等しい;△ECM;∠DBM;二等辺三角形"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "△ABCはAB=ACの二等辺三角形で、BD=CEである。CDとBEの交点をFとするとき△FBCは二等辺三角形になることを証明しなさい。",
        imageUrl: '/Image/81.jpg',
        keypadLayout: proofKeypadLayout,
        steps: [
          { parts: ['△DBCと', null, 'において'] },
          { parts: ['二等辺三角形の底角は等しいので ∠DBC =', null, '...①'] },
          { parts: [null, 'な辺なので BC = CB ...②'] },
          { parts: ['仮定から BD =', null, '...③'] },
          { parts: ['①②③より「', { options: CONGRUENCE_CONDITIONS }, '」ので'] },
          { parts: ['△DBC ≡', null] },
          { parts: ['合同な図形の対応する角は等しいので、∠FCB =', null] },
          { parts: ['よって、2つの角が等しいので△FBCは', null, 'である。'] }
        ]
      },
      answer: "△ECB;∠ECB;共通;CE;2組の辺とその間の角がそれぞれ等しい;△ECB;∠FBC;二等辺三角形"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "m//nでBCは∠ABFの二等分線、BDは∠ABEの二等分線である。このときAD=ACとなることを証明しなさい。",
        imageUrl: '/Image/82.jpg',
        keypadLayout: proofKeypadLayout,
        steps: [
          { parts: ['△ADBにおいて'] },
          { parts: ['m//nより、錯角は等しいので ∠DBE =', null, ''] },
          { parts: ['仮定から ∠ABD = ∠DBE なので ∠ADB =', null] },
          { parts: ['よって△ADBは', null, 'である。'] },
          { parts: ['したがって、AD =', null, '...①'] },
          { parts: ['△ABCにおいて'] },
          { parts: ['m//nより、錯角は等しいので ∠ACB =', null, ''] },
          { parts: ['仮定から ∠ABC = ∠CBF なので ∠ABC =', null] },
          { parts: ['よって△ACBは', null, 'である。'] },
          { parts: ['したがって、AC =', null, '...②'] },
          { parts: ['①, ②より、AD =', null] },
        ]
      },
      answer: "∠ADB;∠ABD;二等辺三角形;AB;∠CBF;∠ACB;二等辺三角形;AB;AC"
    }
  ],
  "直角三角形(準)": [
    { type: 'fill_in_proof', data: { question: '『三角形』の合同条件をのべよ', steps: [{ parts: ['＜合同条件①＞', null, 'がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "３辺" },
    { type: 'fill_in_proof', data: { question: '『三角形』の合同条件をのべよ', steps: [{ parts: ['＜合同条件②＞', '２辺と', null, 'の角がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "その間" },
    { type: 'fill_in_proof', data: { question: '『三角形』の合同条件をのべよ', steps: [{ parts: ['＜合同条件③＞', '１辺とその', null, 'がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "両端の角" },
    { type: 'fill_in_proof', data: { question: '『直角三角形』の合同条件を述べよ。', imageUrl: '/Image/67.jpg', steps: [{ parts: ['＜合同条件①＞', '斜辺と1つの', null, 'がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "鋭角" },
    { type: 'fill_in_proof', data: { question: '『直角三角形』の合同条件を述べよ。', imageUrl: '/Image/68.jpg', steps: [{ parts: ['＜合同条件②＞', null, 'と他の１辺がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "斜辺" },
    { type: 'fill_in_proof', data: { question: '『直角三角形』の合同条件を述べよ。', imageUrl: '/Image/67.jpg', steps: [{ parts: ['＜合同条件①＞', '斜辺と', null, '鋭角がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "1つの" },
    { type: 'fill_in_proof', data: { question: '『直角三角形』の合同条件を述べよ。', imageUrl: '/Image/68.jpg', steps: [{ parts: ['＜合同条件②＞', '斜辺と', null, 'がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "他の１辺" },
    { type: 'text', data: { question: '１つの角が90°の三角形を何というか。', keypadLayout: rightTriangleKeypadLayout }, answer: "直角三角形" },
    { type: 'text', data: { question: '直角三角形で直角に対する辺を何というか。', keypadLayout: rightTriangleKeypadLayout }, answer: "斜辺" },
    { type: 'text', data: { question: '０°より大きく90°より小さい角を何というか。', keypadLayout: rightTriangleKeypadLayout }, answer: "鋭角" }
  ],
  "直角三角形(証)": [
    {
      type: 'fill_in_proof',
      data: {
        question: '△ABCの頂点A,Cからそれぞれ辺BC,ABに垂線AE,CDを引くとAE=CDとなった。このとき、△ABCが二等辺三角形であることを証明しなさい。',
        imageUrl: '/Image/70.jpg',
        steps: [
          { parts: ['△ADCと', null, 'において'] },
          { parts: ['仮定から AE =', null, '...①'] },
          { parts: ['ACは', null, '...②'] },
          { parts: ['仮定から ∠ADC =', null, '= 90° ...③'] },
          { parts: ['①,②,③より直角三角形で「', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△ADC ≡', null] },
          { parts: ['', null, 'する角は等しいから'] },
          { parts: ['∠ACD =', null] },
          { parts: ['よって、△ABCはBA=BCの二等辺三角形である。'] }
        ]
      },
      answer: "△CEA;CD;共通;∠CEA;斜辺と他の１辺がそれぞれ等しい;△CEA;対応;∠CAE"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '△ABCの頂点B,Cからそれぞれ辺AC,ABに垂線BD,CEを引くとBD=CEとなった。このとき、△ABCが二等辺三角形であることを証明しなさい。',
        imageUrl: '/Image/69.jpg',
        steps: [
          { parts: ['△BCDと', null, 'において'] },
          { parts: ['仮定から BD =', null, '...①'] },
          { parts: ['BCは', null, '...②'] },
          { parts: ['仮定から ∠BDC =', null, '= 90° ...③'] },
          { parts: ['①,②,③より直角三角形で「', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△BCD ≡', null] },
          { parts: ['', null, 'する角は等しいから'] },
          { parts: ['∠CBD =', null] },
          { parts: ['よって、△ABCはAB=ACの二等辺三角形である。'] }
        ]
      },
      answer: "△CBE;CE;共通;∠CEB;斜辺と他の１辺がそれぞれ等しい;△CBE;対応;∠BCE"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '二等辺三角形ABCの底辺BCの中点Dから、辺AB,ACに垂線DE,DFを引くとき、DE=DFとなることを証明しなさい。',
        imageUrl: '/Image/63.jpg',
        steps: [
          { parts: ['△BDEと', null, 'において'] },
          { parts: ['仮定から BD =', null, '...①'] },
          { parts: ['二等辺三角形の底角は等しいので ∠DBE =', null, '...②'] },
          { parts: ['仮定から ∠BED =', null, '= 90° ...③'] },
          { parts: ['①,②,③より直角三角形で「', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△BDE ≡', null] },
          { parts: ['', null, 'する辺は等しいから'] },
          { parts: ['DE =', null] }
        ]
      },
      answer: "△CDF;CD;∠DCF;∠CFD;斜辺と1つの鋭角がそれぞれ等しい;△CDF;対応;DF"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '二等辺三角形ABCの頂点Aから底辺BCに垂線AHを引くと、BH=CHとなることを証明しなさい。',
        imageUrl: '/Image/85.jpg',
        steps: [
          { parts: ['△ABHと', null, 'において'] },
          { parts: ['仮定から AB =', null, '...①'] },
          { parts: ['AHは', null, '...②'] },
          { parts: ['仮定から ∠AHB =', null, '= 90° ...③'] },
          { parts: ['①,②,③より直角三角形で「', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, '」から'] },
          { parts: ['△ABH ≡', null] },
          { parts: ['', null, 'する辺は等しいから'] },
          { parts: ['BH =', null] }
        ]
      },
      answer: "△ACH;AC;共通;∠AHC;斜辺と他の１辺がそれぞれ等しい;△ACH;対応;CH"
    }
  ],
  "正三角形(証)": [
    {
      type: 'fill_in_proof',
      data: {
        question: "正三角形ABCにおいて、辺AB,AC上にAD=CEとなるように点D,Eをとると、△ABE≡△BCDとなることを証明しなさい。",
        imageUrl: '/Image/62.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['仮定から AB=', null, '･････①'] },
          { parts: ['また、仮定から ∠BAE=', null, '=60°･････②'] },
          { parts: ['辺AE、BDにおいて AE=AC-CE、BD=AB-', null, '･････③'] },
          { parts: ['仮定よりCE=AD、AC=ABなので③から AE=', null, '･････④'] },
          { parts: ['①,②,④から', { options: CONGRUENCE_CONDITIONS }] },
          { parts: ['したがって', null, '≡△BCD'] },
        ]
      },
      answer: "△BCD;BC;∠CBD;AD;BD;2組の辺とその間の角がそれぞれ等しい;△ABE"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "三角形ABCの辺AB,ACをそれぞれ1辺とする正三角形ABDとACEを外部に描くと、BE=DCとなることを証明しなさい。",
        imageUrl: '/Image/30.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['△ABDと△ACE正三角形であるので AB=AD、AE=', null, '･････①'] },
          { parts: ['∠CAE=60°,∠BAD=60°から'] },
          { parts: ['∠BAE=∠BAC+60°,∠DAC=', null, '+60°･････②'] },
          { parts: ['よって', null, '=∠DAC･････③'] },
          { parts: ['①､③から', { options: CONGRUENCE_CONDITIONS }] },
          { parts: ['したがって △ABE≡', null] },
          { parts: ['対応する辺は等しいので', null, '=DC'] }
        ]
      },
      answer: "△ADC;AC;∠BAC;∠BAE;2組の辺とその間の角がそれぞれ等しい;△ADC;BE"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "△ABCと△CDEは正三角形で、点Aと点D、点Bと点Eを結んでできる△ACDと△BCEが合同になることを証明しなさい。",
        imageUrl: '/Image/33.jpg',
        steps: [
          { parts: ['△ACDと', null, 'において'] },
          { parts: ['△ABCと△CDEは正三角形であるので AC=BC、CD=', null, '･････①'] },
          { parts: ['∠DCE=60°から ∠ACD=', null, '+60°･････②'] },
          { parts: ['同様に∠BCA=60°から', null, '=∠ACE+60°･････③'] },
          { parts: ['②､③から', null, '=∠BCE･････④'] },
          { parts: ['①､④から', { options: CONGRUENCE_CONDITIONS }] },
          { parts: ['したがって', null, '≡△BCE'] },
        ]
      },
      answer: "△BCE;CE;∠ACE;∠BCE;∠ACD;2組の辺とその間の角がそれぞれ等しい;△ACD"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "△ABCと△ADEがともに正三角形であるとき、BD=CEとなることを証明しなさい。",
        imageUrl: '/Image/15.jpg',
        steps: [
          { parts: ['△ABDと', null, 'において'] },
          { parts: ['△ABCと△ADEは正三角形であるので AB=AC、AD=', null, '･････①'] },
          { parts: ['∠BAC=60°,∠DAE=60°から'] },
          { parts: ['∠BAD=60°-∠DAC、', null, '=60°-∠DAC･････②'] },
          { parts: ['よって', null, '=∠CAE･････③'] },
          { parts: ['①､③から', { options: CONGRUENCE_CONDITIONS }] },
          { parts: ['したがって △ABD≡', null] },
          { parts: ['対応する辺は等しいので', null, '=CE'] }
        ]
      },
      answer: "△ACE;AE;∠CAE;∠BAD;2組の辺とその間の角がそれぞれ等しい;△ACE;BD"
    },
    {
      type: 'fill_in_proof',
      data: {
        question: "△ABCと△DEFは正三角形で、頂点D,E,Fは△ABC上にある。△BDE≡△CEFとなることを証明しなさい。",
        imageUrl: '/Image/64.jpg',
        steps: [
          { parts: ['△BDEと', null, 'において'] },
          { parts: ['△DEFは正三角形なので DE=', null, '･････①'] },
          { parts: ['△BDEで、内角の和は180°,∠DBE=60°なので'] },
          { parts: ['∠BDE=180°-60°-', null, '･････②'] },
          { parts: ['∠BEC=180°で、∠DEF=60°から'] },
          { parts: ['∠CEF=180°-60°-', null, '･････③'] },
          { parts: ['②､③から', null, '=∠CEF･････④'] },
          { parts: ['内角の和180°、∠B=∠C=60°と④から ∠BED=', null, '･････⑤'] },
          { parts: ['①④⑤より「', { options: CONGRUENCE_CONDITIONS }, '」ので、△BDE≡△CEF'] },
        ]
      },
      answer: "△CEF;EF;∠BED;∠BED;∠BDE;∠CFE;1組の辺とその両端の角がそれぞれ等しい"
    }
  ]
};
