import { ProblemSet } from '../types';

const CONGRUENCE_CONDITIONS = ["1組の辺とその両端の角がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "3組の辺がそれぞれ等しい"];
const RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS = ["斜辺と1つの鋭角がそれぞれ等しい", "斜辺と他の1辺がそれぞれ等しい"];

const rightTriangleKeypadLayout = [
    ['斜', '辺', '鋭', '角'],
    ['直', '三', '角', '形'],
    ['そ', 'の', '間', '１'],
    ['他', '両', '端', '３'],
];

const parallelogramKeypadLayout = [
    ['平', '行', '対', '辺'],
    ['角', '線', '中', '点'],
    ['等', 'し', 'い', '垂'],
    ['直', '錯', '同', '位']
];


export const geometry2Problems: ProblemSet = {
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
  ],
  "二等辺三角形(証)": [
    {
      type: 'fill_in_proof',
      data: {
        question: "「二等辺三角形の底角はひとしい。」という性質を証明したい。図のようにAB=ACの二等辺三角形がある。辺BCの中点をDとするとき∠ABD=∠ACDとなることを証明せよ。",
        svg: '<svg viewBox="0 0 100 100" fill="white"><polygon points="50,10 10,90 90,90" stroke="white" fill="none" stroke-width="2"/><line x1="50" y1="10" x2="50" y2="90" stroke="white" stroke-width="2"/><text x="45" y="8" font-size="10">A</text><text x="2" y="98" font-size="10">B</text><text x="92" y="98" font-size="10">C</text><text x="45" y="98" font-size="10">D</text></svg>',
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
        svg: '<svg viewBox="0 0 100 100" fill="white"><polygon points="50,10 10,90 90,90" stroke="white" fill="none" stroke-width="2"/><line x1="50" y1="10" x2="50" y2="90" stroke="white" stroke-width="2"/><text x="45" y="8" font-size="10">A</text><text x="2" y="98" font-size="10">B</text><text x="92" y="98" font-size="10">C</text><text x="45" y="98" font-size="10">D</text></svg>',
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
        svg: '<svg viewBox="0 0 100 100" fill="white"><polygon points="50,10 10,90 90,90" stroke="white" fill="none" stroke-width="2"/><line x1="50" y1="10" x2="50" y2="90" stroke="white" stroke-width="2"/><text x="45" y="8" font-size="10">A</text><text x="2" y="98" font-size="10">B</text><text x="92" y="98" font-size="10">C</text><text x="45" y="98" font-size="10">D</text></svg>',
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
        question: "図の△ABCはAB=ACの二等辺三角形である。BD=CEならば、AD=AEとなることを証明せよ。",
        svg: '<svg viewBox="0 0 120 100" fill="white"><polygon points="60,10 10,90 110,90" stroke="white" fill="none" stroke-width="2"/><line x1="60" y1="10" x2="30" y2="90" stroke="white" stroke-width="2"/><line x1="60" y1="10" x2="90" y2="90" stroke="white" stroke-width="2"/><text x="55" y="8" font-size="10">A</text><text x="2" y="98" font-size="10">B</text><text x="112" y="98" font-size="10">C</text><text x="25" y="98" font-size="10">D</text><text x="85" y="98" font-size="10">E</text></svg>',
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
        imageUrl: '/Image/69.jpg',
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
    }
  ],
  "直角三角形(準)": [
    { type: 'fill_in_proof', data: { question: '『三角形』の合同条件をのべよ。', steps: [{ parts: ['＜合同条件①＞', null, 'がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "３辺" },
    { type: 'fill_in_proof', data: { question: '『三角形』の合同条件をのべよ。', steps: [{ parts: ['＜合同条件②＞', '２辺と', null, 'の角がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "その間" },
    { type: 'fill_in_proof', data: { question: '『三角形』の合同条件をのべよ。', steps: [{ parts: ['＜合同条件③＞', '１辺とその', null, 'がそれぞれ等しい。'] }], keypadLayout: rightTriangleKeypadLayout }, answer: "両端の角" },
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
  ],
  "平行四辺形(準)": [
    { type: 'fill_in_proof', data: { question: '『平行四辺形になるための条件』をのべよ。', imageUrl: '/Image/93.jpg', steps: [{ parts: ['＜条件①＞\n２組の対辺がそれぞれ', null, 'である(定義)。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "平行" },
    { type: 'fill_in_proof', data: { question: '『平行四辺形になるための条件』をのべよ。', imageUrl: '/Image/94.jpg', steps: [{ parts: ['＜条件②＞\n２組の対辺がそれぞれ', null, '。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "等しい" },
    { type: 'fill_in_proof', data: { question: '『平行四辺形になるための条件』をのべよ。', imageUrl: '/Image/95.jpg', steps: [{ parts: ['＜条件③＞\n２組の', null, 'がそれぞれ等しい。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "対角" },
    { type: 'fill_in_proof', data: { question: '『平行四辺形になるための条件』をのべよ。', imageUrl: '/Image/96.jpg', steps: [{ parts: ['＜条件④＞\n対角線がそれぞれ', null, 'で交わる。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "中点" },
    { type: 'fill_in_proof', data: { question: '『平行四辺形になるための条件』をのべよ。', imageUrl: '/Image/97.jpg', steps: [{ parts: ['＜条件⑤＞\n１組の', null, 'が平行でその長さが等しい。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "対辺" },
    { type: 'fill_in_proof', data: { question: '『平行四辺形の定義』をのべよ。', imageUrl: '/Image/93.jpg', steps: [{ parts: ['＜定義＞\n２組の対辺がそれぞれ', null, 'な四辺形を平行四辺形という。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "平行" },
    { type: 'fill_in_proof', data: { question: '『平行四辺形の定理』をのべよ。', imageUrl: '/Image/94.jpg', steps: [{ parts: ['＜定理①＞\n平行四辺形では、２組の', null, 'はそれぞれ等しい。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "対辺" },
    { type: 'fill_in_proof', data: { question: '『平行四辺形の定理』をのべよ。', imageUrl: '/Image/95.jpg', steps: [{ parts: ['＜定理②＞\n平行四辺形では、２組の', null, 'はそれぞれ等しい。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "対角" },
    { type: 'fill_in_proof', data: { question: '『平行四辺形の定理』をのべよ。', imageUrl: '/Image/96.jpg', steps: [{ parts: ['＜定理③＞\n平行四辺形では、', null, 'はそれぞれ中点で交わる。'] }], keypadLayout: parallelogramKeypadLayout }, answer: "対角線" }
  ],
  "平行四辺形(証)": [
    { type: 'proof', data: { assumption: "四角形ABCDで、AD//BC, AD=BCである。", conclusion: "この四角形は平行四辺形である。", hint: "対角線BDを引き、△ABDと△CDBの合同を証明し、AB//DCを示します。" }, answer: "対角線BDを引く。\n△ABDと△CDBにおいて、\n仮定よりAD=CB…①\nAD//BCより錯角は等しいので∠ADB=∠CBD…②\nBDは共通…③\n①,②,③より2辺とその間の角が等しいので△ABD≡△CDB。\nよって∠ABD=∠CDB。錯角が等しいのでAB//DC。\n2組の対辺がそれぞれ平行なので、四角形ABCDは平行四辺形である。" },
    { type: 'proof', data: { assumption: "四角形ABCDで、AB=DC, AD=BCである。", conclusion: "この四角形は平行四辺形である。" }, answer: "対角線ACを引く。\n△ABCと△CDAにおいて、\n仮定よりAB=CD, BC=DA。\nACは共通。\n3辺がそれぞれ等しいので△ABC≡△CDA。\nよって∠BAC=∠DCA(錯角), ∠BCA=∠DAC(錯角)。\nしたがってAB//DC, AD//BC。\n2組の対辺がそれぞれ平行なので、四角形ABCDは平行四辺形である。" },
    { type: 'proof', data: { assumption: "四角形ABCDで、∠A=∠C, ∠B=∠Dである。", conclusion: "この四角形は平行四辺形である。" }, answer: "四角形の内角の和は360°なので、2∠A+2∠B=360°。よって∠A+∠B=180°。\nADを延長した線上の点をEとすると、∠A+∠B=180°より、同側内角の和が180°なのでAD//BC。\n同様にAB//DC。よって平行四辺形である。" },
    { type: 'proof', data: { assumption: "四角形ABCDで、対角線がそれぞれの中点Oで交わる。", conclusion: "この四角形は平行四辺形である。" }, answer: "△OABと△OCDにおいて、\n仮定よりOA=OC, OB=OD。\n対頂角は等しいので∠AOB=∠COD。\n2辺とその間の角が等しいので合同。\nよってAB=CD, ∠OAB=∠OCD。錯角が等しいのでAB//DC。\n1組の対辺が平行でその長さが等しいので、四角形ABCDは平行四辺形である。" },
  ],
  "平行四辺形(証2)": [
    { type: 'proof', data: { assumption: "平行四辺形ABCDで、対角線ACをひき、AC上にAE=CFとなるように点E,Fをとる。", conclusion: "四角形EBFDは平行四辺形であることを証明しなさい。" }, answer: "対角線BDとの交点をOとする。\n平行四辺形ABCDの対角線は中点で交わるのでOA=OC, OB=OD。\n仮定よりAE=CFなので、OE=OA-AE, OF=OC-CF。よってOE=OF。\n四角形EBFDの対角線BD,EFは中点Oで交わるので平行四辺形である。" },
    { type: 'proof', data: { assumption: "平行四辺形ABCDで、辺AD,BCの中点をそれぞれM,Nとする。", conclusion: "四角形ANCMは平行四辺形であることを証明しなさい。" }, answer: "平行四辺形ABCDよりAD=BC, AD//BC。\n仮定よりAM=1/2AD, NC=1/2BC。よってAM=NC。\nAD//BCなのでAM//NC。\n1組の対辺が平行でその長さが等しいので四角形ANCMは平行四辺形である。" },
    { type: 'proof', data: { assumption: "△ABCで、辺AB,ACの中点をD,Eとし、DEの延長上にDE=EFとなる点Fをとる。", conclusion: "四角形ADCFは平行四辺形であることを証明しなさい。" }, answer: "対角線DF,ACがそれぞれの中点Eで交わっているので、四角形ADCFは平行四辺形である。" },
  ],
  "二等辺三角形(角度)": [
    { type: 'text', data: { question: "AB=ACの二等辺三角形ABCで、∠A=50°のとき、∠Bは何度ですか？" }, answer: "65°" },
    { type: 'text', data: { question: "AB=ACの二等辺三角形ABCで、∠B=70°のとき、∠Aは何度ですか？" }, answer: "40°" },
    { type: 'text', data: { question: "AB=ACの二等辺三角形ABCで、頂角Aの外角が100°のとき、底角Cは何度ですか？" }, answer: "50°" },
  ],
  "三・四角形(角度)": [
    { type: 'text', data: { question: "平行四辺形ABCDで、∠A=80°のとき、∠Bは何度ですか？" }, answer: "100°" },
    { type: 'text', data: { question: "ひし形ABCDで、∠A=120°のとき、∠ABDは何度ですか？" }, answer: "30°" },
  ],
  "四角形の性質(基)": [
    { type: 'text', data: { question: "平行四辺形の定義を述べよ。" }, answer: "2組の対辺がそれぞれ平行な四角形" },
    { type: 'text', data: { question: "長方形の定義を述べよ。" }, answer: "4つの角がすべて等しい四角形" },
    { type: 'text', data: { question: "ひし形の定義を述べよ。" }, answer: "4つの辺がすべて等しい四角形" },
  ],
  "四角形の関係": [
    { type: 'text', data: { question: "平行四辺形に「1つの角が直角」という条件を加えると、何になりますか？" }, answer: "長方形" },
    { type: 'text', data: { question: "平行四辺形に「隣り合う辺が等しい」という条件を加えると、何になりますか？" }, answer: "ひし形" },
  ],
  "四角形の性質": [
    { type: 'text', data: { question: "平行四辺形の面積を二等分する直線は、必ずある1つの点を通ります。その点とはどこですか？" }, answer: "対角線の交点" },
    { type: 'text', data: { question: "長方形の対角線は等しく、それぞれの中点で交わります。このことから、対角線の交点は何心といえますか？" }, answer: "外心" },
  ]
};