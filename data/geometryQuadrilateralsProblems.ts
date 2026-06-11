import { ProblemSet } from '../types';

const CONGRUENCE_CONDITIONS = ["1組の辺とその両端の角がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "3組の辺がそれぞれ等しい"];
const PARALLELOGRAM_CONDITIONS = ["2組の対辺がそれぞれ平行", "2組の対辺がそれぞれ等しい", "2組の対角がそれぞれ等しい", "対角線がそれぞれの中点で交わる", "1組の対辺が平行でその長さが等しい"];

export const geometryQuadrilateralsProblems: ProblemSet = {
  "平行四辺形(証)": [
    {
      type: 'fill_in_proof',
      data: {
        question: 'AD//BCの台形ABCDがある。辺ABの中点をEとしてDEの延長線とCBの延長線の交点をFとする。このとき四角形AFBDが平行四辺形になることを証明せよ。',
        imageUrl: '/Image/60.jpg',
        steps: [
          { parts: ['△AEDと', null, 'において'] },
          { parts: ['EはABの中点なので AE =', null, '...①'] },
          { parts: ['対頂角は等しいので ∠AED =', null, '...②'] },
          { parts: ['AD//BCより、錯角は等しいので ∠DAE =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△AED ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので AD =', null] },
          { parts: ['仮定より AD//BC なので AD//FB'] },
          { parts: ['よって、', { options: PARALLELOGRAM_CONDITIONS }, 'ので'] },
          { parts: ['四角形AFBDは平行四辺形である。'] },
        ]
      },
      answer: '△BEF;BE;∠BEF;∠FBE;1組の辺とその両端の角がそれぞれ等しい;△BEF;BF;1組の対辺が平行でその長さが等しい'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '図で、△ABCの辺AB上に点Dがあり、辺ACの中点をMとする。DMの延長上にDM=EMとなる点Eを取る。このとき四角形ADCEは平行四辺形となることを証明せよ。',
        imageUrl: '/Image/105.jpg',
        steps: [
          { parts: ['四角形ADCEにおいて'] },
          { parts: ['MはACの中点なので AM =', null, '...①'] },
          { parts: ['仮定から DM =', null, '...②'] },
          { parts: ['①, ②より、', { options: PARALLELOGRAM_CONDITIONS }, 'ので'] },
          { parts: ['四角形ADCEは平行四辺形である。'] },
        ]
      },
      answer: 'CM;EM;対角線がそれぞれの中点で交わる'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '▱ABCDで∠ABE=∠CDFのとき四角形EBFDが平行四辺形になること証明せよ。',
        imageUrl: '/Image/112.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['▱ABCDの対辺なので AB =', null, '...①'] },
          { parts: ['仮定から ∠ABE =', null, '...②'] },
          { parts: ['▱ABCDの対角なので ∠BAE =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので △ABE ≡ △CDF'] },
          { parts: ['合同な図形の対応する辺は等しいので AE =', null, ''] },
          { parts: ['▱ABCDの対辺なので AD = CB'] },
          { parts: ['ED = AD-AE, FB = CB-CF なので ED =', null, '...④'] },
          { parts: ['AD//CBなので ED //', null, '...⑤'] },
          { parts: ['④,⑤より、', { options: PARALLELOGRAM_CONDITIONS }, 'ので四角形EBFDは平行四辺形である。'] },
        ]
      },
      answer: '△CDF;CD;∠CDF;∠DCF;1組の辺とその両端の角がそれぞれ等しい;CF;FB;FB;1組の対辺が平行でその長さが等しい'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '図の▱ABCDで∠BAE=∠DCFのとき四角形AECFが平行四辺形となることを証明せよ。',
        imageUrl: '/Image/111.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['▱ABCDの対辺なので AB =', null, '...①'] },
          { parts: ['平行線の錯角なので ∠ABE =', null, '...②'] },
          { parts: ['仮定から ∠BAE =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので △ABE ≡ △CDF'] },
          { parts: ['合同な図形の対応する辺は等しいので AE =', null, '...④'] },
          { parts: ['合同な図形の対応する角は等しいので ∠AEB =', null, '...⑤'] },
          { parts: ['∠AEF = 180°-∠AEB, ∠CFE = 180°-∠CFD なので、∠AEF =', null, '...⑥'] },
          { parts: ['⑥より、錯角が等しいので AE //', null, '...⑦'] },
          { parts: ['④,⑦より、', { options: PARALLELOGRAM_CONDITIONS }, 'ので四角形AECFは平行四辺形である。'] },
        ]
      },
      answer: '△CDF;CD;∠CDF;∠DCF;1組の辺とその両端の角がそれぞれ等しい;CF;∠CFD;∠CFE;CF;1組の対辺が平行でその長さが等しい'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '平行四辺形ABCDにおいて∠ABCと∠CDAの二等分線が辺AD, BCとそれぞれE, Fで交わっている。このとき四角形BFDEが平行四辺形になることを証明しなさい。',
        imageUrl: '/Image/101.jpg',
        steps: [
          { parts: ['平行四辺形の対角は等しいので ∠ABC = ∠ADC ...①'] },
          { parts: ['仮定より ∠EBF = (1/2)∠ABC, ∠FDE = (1/2)∠ADC'] },
          { parts: ['①より ∠EBF =', null, '...②'] },
          { parts: ['AD//BCより、ED // BF ...③'] },
          { parts: ['②, ③より、', { options: PARALLELOGRAM_CONDITIONS }, 'がそれぞれ等しいので'] },
          { parts: ['四角形BFDEは平行四辺形である。'] },
        ]
      },
      answer: '∠FDE;2組の対辺がそれぞれ平行'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '平行四辺形ABCDでAE=CG, BF=DHのとき四角形EFGHが平行四辺形になることを証明しなさい。',
        imageUrl: '/Image/115.jpg',
        steps: [
          { parts: ['△AEHと', null, 'において'] },
          { parts: ['仮定から AE =', null, '...①'] },
          { parts: ['平行四辺形の対辺は等しいので AD=CB'] },
          { parts: ['仮定から DH=BF なので AH = AD-DH = CB-BF =', null, '...②'] },
          { parts: ['平行四辺形の対角は等しいので ∠HAE =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△AEH ≡', null, 'となり、EH = GF ...④'] },
          { parts: ['同様に△BFE ≡ △DHG となり、FE = HG ...⑤'] },
          { parts: ['④,⑤より、', { options: PARALLELOGRAM_CONDITIONS }, 'ので'] },
          { parts: ['四角形EFGHは平行四辺形である。'] },
        ]
      },
      answer: '△CGF;CG;CF;∠FCG;2組の辺とその間の角がそれぞれ等しい;△CGF;2組の対辺がそれぞれ等しい'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '平行四辺形ABCDの対角線BD上に頂点AとCから垂線を下ろしその交点をE, Fとする。このとき四角形AECFが平行四辺形になることを証明せよ。',
        imageUrl: '/Image/113.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['平行四辺形の対辺は等しいので AB =', null, '...①'] },
          { parts: ['AB//CDより、錯角は等しいので ∠ABE =', null, '...②'] },
          { parts: ['仮定から ∠AEB =', null, '= 90° ...③'] },
          { parts: ['①,②,③より、直角三角形の', { options: ["斜辺と1つの鋭角がそれぞれ等しい", "斜辺と他の1辺がそれぞれ等しい"] }, 'ので'] },
          { parts: ['△ABE ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので AE =', null, '...④'] },
          { parts: ['∠AEB=∠CFD=90°で、錯角が等しいので AE //', null, '...⑤'] },
          { parts: ['④,⑤より、', { options: PARALLELOGRAM_CONDITIONS }, 'ので'] },
          { parts: ['四角形AECFは平行四辺形である。'] },
        ]
      },
      answer: '△CDF;CD;∠CDF;∠CFD;斜辺と1つの鋭角がそれぞれ等しい;△CDF;CF;CF;1組の対辺が平行でその長さが等しい'
    }
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