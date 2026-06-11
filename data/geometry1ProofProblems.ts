import { ProblemSet } from '../types';

const CONGRUENCE_CONDITIONS = ["1組の辺とその両端の角がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "3組の辺がそれぞれ等しい"];
const RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS = ["斜辺と1つの鋭角がそれぞれ等しい", "斜辺と他の1辺がそれぞれ等しい"];

export const geometry1ProofProblems: ProblemSet = {
  "合同条件(基)": [
    {
      type: 'text',
      data: {
        question: "三角形の合同条件を3つすべて選びなさい。",
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい", "3つの角がそれぞれ等しい", "2組の辺と1つの角がそれぞれ等しい", "斜辺と他の一辺がそれぞれ等しい"],
        multiple: true
      },
      answer: "1組の辺とその両端の角がそれぞれ等しい,2組の辺とその間の角がそれぞれ等しい,3組の辺がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "図の中から、△DEFと合同な三角形を選びなさい。",
        imageUrl: '/Image/66.jpg',
        options: ["△GHI", "△MNO", "△VXW", "△UTS"]
      },
      answer: "△VXW"
    },
    {
      type: 'text',
      data: {
        question: "△DEFと△VXWの合同条件を選びなさい。",
        imageUrl: '/Image/66.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"]
      },
      answer: "1組の辺とその両端の角がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "図の中から、△GHIと合同な三角形を選びなさい。",
        imageUrl: '/Image/66.jpg',
        options: ["△MNO", "△QPR", "△UTS", "△VXW"]
      },
      answer: "△QPR"
    },
    {
      type: 'text',
      data: {
        question: "△GHIと△QPRの合同条件を選びなさい。",
        imageUrl: '/Image/66.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"]
      },
      answer: "3組の辺がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "図の中から、△MNOと合同な三角形を選びなさい。",
        imageUrl: '/Image/66.jpg',
        options: ["△GHI", "△QPR", "△UTS", "△VXW"]
      },
      answer: "△UTS"
    },
    {
      type: 'text',
      data: {
        question: "△MNOと△UTSの合同条件を選びなさい。",
        imageUrl: '/Image/66.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"]
      },
      answer: "2組の辺とその間の角がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "△ABC≡△FEDのとき、辺ABに対応する辺はどれですか？",
        imageUrl: '/Image/3.jpg',
        options: ["辺FE", "辺ED", "辺DF"]
      },
      answer: "辺FE"
    },
    {
      type: 'text',
      data: {
        question: "△ABC≡△FEDのとき、辺ACに対応する辺はどれですか？",
        imageUrl: '/Image/3.jpg',
        options: ["辺FE", "辺ED", "辺FD"]
      },
      answer: "辺FD"
    },
    {
      type: 'text',
      data: {
        question: "△ABC≡△FEDのとき、∠BACに対応する角はどれですか？",
        imageUrl: '/Image/3.jpg',
        options: ["∠FED", "∠EFD", "∠FDE"],
      },
      answer: "∠EFD"
    },
    {
      type: 'text',
      data: {
        question: "△ABC≡△FEDのとき、∠ACBに対応する角はどれですか？",
        imageUrl: '/Image/3.jpg',
        options: ["∠FED", "∠EFD", "∠FDE"],
      },
      answer: "∠FDE"
    },
    {
      type: 'text',
      data: {
        question: "図で合同となる三角形の組を答えなさい。",
        imageUrl: '/Image/3.jpg',
        options: ["△ACB≡△DCE", "△ABC≡△DCE", "△ACB≡△DEC"],
      },
      answer: "△ACB≡△DCE"
    },
    {
      type: 'text',
      data: {
        question: "前の問題で使った合同条件を答えなさい。",
        imageUrl: '/Image/3.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"],
      },
      answer: "1組の辺とその両端の角がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "図で合同となる三角形の組を答えなさい。",
        imageUrl: '/Image/5.jpg',
        options: ["△ABC≡△DCB", "△ABC≡△DBC", "△ACB≡△DCB"],
      },
      answer: "△ABC≡△DCB"
    },
    {
      type: 'text',
      data: {
        question: "前の問題で使った合同条件を答えなさい。",
        imageUrl: '/Image/5.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"],
      },
      answer: "2組の辺とその間の角がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "図で合同となる三角形の組を答えなさい。",
        imageUrl: '/Image/9.jpg',
        options: ["△ABC≡△EDC", "△ACB≡△ECD", "△ABC≡△DEC"],
      },
      answer: "△ABC≡△EDC"
    },
    {
      type: 'text',
      data: {
        question: "前の問題で使った合同条件を答えなさい。",
        imageUrl: '/Image/9.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"],
      },
      answer: "2組の辺とその間の角がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "図で合同となる三角形の組を答えなさい。",
        imageUrl: '/Image/8.jpg',
        options: ["△ABD≡△CBD", "△ADB≡△CDB", "△ABD≡△CDB"],
      },
      answer: "△ABD≡△CBD"
    },
    {
      type: 'text',
      data: {
        question: "前の問題で使った合同条件を答えなさい。",
        imageUrl: '/Image/8.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"],
      },
      answer: "3組の辺がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "図で合同となる三角形の組を答えなさい。",
        imageUrl: '/Image/7.jpg',
        options: ["△ABD≡△CDB", "△ABD≡△CBD", "△ADB≡△CDB"],
      },
      answer: "△ABD≡△CDB"
    },
    {
      type: 'text',
      data: {
        question: "前の問題で使った合同条件を答えなさい。",
        imageUrl: '/Image/7.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"],
      },
      answer: "1組の辺とその両端の角がそれぞれ等しい"
    },
    {
      type: 'text',
      data: {
        question: "図で合同となる三角形の組を答えなさい。",
        imageUrl: '/Image/6.jpg',
        options: ["△ABE≡△CBD", "△ABE≡△CDB", "△AEB≡△CDB"],
      },
      answer: "△ABE≡△CBD"
    },
    {
      type: 'text',
      data: {
        question: "前の問題で使った合同条件を答えなさい。",
        imageUrl: '/Image/6.jpg',
        options: ["3組の辺がそれぞれ等しい", "2組の辺とその間の角がそれぞれ等しい", "1組の辺とその両端の角がそれぞれ等しい"],
      },
      answer: "2組の辺とその間の角がそれぞれ等しい"
    },
  ],
  "合同の証明(基)": [
    {
        type: 'fill_in_proof',
        data: {
            question: '図でAC=DB, ∠ACB=∠DBCのとき, △ABC≡△DCBを証明せよ。',
            imageUrl: '/Image/5.jpg',
            steps: [
                { parts: ['△ABCと', null, 'において'] },
                { parts: ['仮定から AC =', null, '...①'] },
                { parts: ['仮定から ∠ACB =', null, '...②'] },
                { parts: [null, 'は共通 ...③'] },
                { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
                { parts: ['△ABC ≡', null] },
            ]
        },
        answer: '△DCB;DB;∠DBC;BC;2組の辺とその間の角がそれぞれ等しい;△DCB'
    },
    {
        type: 'fill_in_proof',
        data: {
            question: '図でAB=DC, AC=DBのとき,△ABC≡△DCBを証明せよ。',
            imageUrl: '/Image/10.jpg',
            steps: [
                { parts: ['△ABCと', null, 'において'] },
                { parts: ['仮定から AB =', null, '...①'] },
                { parts: ['仮定から AC =', null, '...②'] },
                { parts: [null, 'は共通 ...③'] },
                { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
                { parts: ['△ABC ≡', null] },
            ]
        },
        answer: '△DCB;DC;DB;BC;3組の辺がそれぞれ等しい;△DCB'
    },
    {
        type: 'fill_in_proof',
        data: {
            question: '右の図でAC//BD, AD//BCのとき, △ABC≡△BADとなることを証明せよ。',
            imageUrl: '/Image/26.jpg',
            steps: [
                { parts: ['△ABCと', null, 'において'] },
                { parts: ['平行線の錯角は等しいから ∠BCA =', null, '...①'] },
                { parts: ['平行線の錯角は等しいから ∠BAC =', null, '...②'] },
                { parts: [null, 'は共通 ...③'] },
                { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
                { parts: ['△ABC ≡', null] },
            ]
        },
        answer: '△BAD;∠CBD;∠ABD;AB;1組の辺とその両端の角がそれぞれ等しい;△BAD'
    },
    {
        type: 'fill_in_proof',
        data: {
            question: '右の図でAC=BD、AD=BCのとき △ABC≡△BADとなることを証明せよ。',
            imageUrl: '/Image/25.jpg',
            steps: [
                { parts: ['△ABCと', null, 'において'] },
                { parts: ['仮定から AC =', null, '...①'] },
                { parts: ['仮定から BC =', null, '...②'] },
                { parts: [null, 'は共通 ...③'] },
                { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
                { parts: ['△ABC ≡', null] },
            ]
        },
        answer: '△BAD;BD;AD;AB;3組の辺がそれぞれ等しい;△BAD'
    },
    {
        type: 'fill_in_proof',
        data: {
            question: '右の図で、AB//DC, AB=DCならば、 △ABO≡△DCOとなることを証明せよ。',
            imageUrl: '/Image/27.jpg',
            steps: [
                { parts: ['△ABOと', null, 'において'] },
                { parts: ['仮定から AB =', null, '...①'] },
                { parts: ['平行線の錯角は等しいから ∠OAB =', null, '...②'] },
                { parts: ['平行線の錯角は等しいから ∠OBA =', null, '...③'] },
                { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
                { parts: ['△ABO ≡', null] },
            ]
        },
        answer: '△DCO;DC;∠OCD;∠ODC;1組の辺とその両端の角がそれぞれ等しい;△DCO'
    },
    {
        type: 'fill_in_proof',
        data: {
            question: 'AB=AC, AD=AEのとき △ABE≡△ACDとなることを証明しなさい。',
            imageUrl: '/Image/15.jpg',
            steps: [
                { parts: ['△ABEと', null, 'において'] },
                { parts: ['仮定から AB =', null, '...①'] },
                { parts: ['仮定から AE =', null, '...②'] },
                { parts: ['∠BAEと∠CADは', null, 'の角なので ∠BAE = ∠CAD ...③'] },
                { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
                { parts: ['△ABE ≡', null] },
            ]
        },
        answer: '△ACD;AC;AD;共通;2組の辺とその間の角がそれぞれ等しい;△ACD'
    },
    {
        type: 'fill_in_proof',
        data: {
            question: '図でACが∠BADの二等分線,AB=ADである。△ABC≡△ADCを証明せよ。',
            imageUrl: '/Image/16.jpg',
            steps: [
                { parts: ['△ABCと', null, 'において'] },
                { parts: ['ACが∠BADの二等分線なので ∠BAC =', null, '...①'] },
                { parts: ['仮定から AB =', null, '...②'] },
                { parts: [null, 'は共通 ...③'] },
                { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
                { parts: ['△ABC ≡', null] },
            ]
        },
        answer: '△ADC;∠DAC;AD;AC;2組の辺とその間の角がそれぞれ等しい;△ADC'
    }
  ],
  "合同の証明(標)": [
    {
      type: 'fill_in_proof',
      data: {
        question: '図でAB=DC, AC=DBのとき, ∠ABC=∠DCBを証明せよ。',
        imageUrl: '/Image/5.jpg',
        steps: [
          { parts: ['△ABCと', null, 'において'] },
          { parts: ['仮定から AB =', null, '...①'] },
          { parts: ['仮定から AC =', null, '...②'] },
          { parts: [null, 'は共通 ...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABC ≡', null] },
          { parts: ['合同な図形の対応する角は等しいので、'] },
          { parts: ['∠ABC =', null] },
        ]
      },
      answer: '△DCB;DC;DB;BC;3組の辺がそれぞれ等しい;△DCB;∠DCB'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '図でOはACの中点, AB//DCのとき, OはBDの中点であることを証明せよ。',
        imageUrl: '/Image/27.jpg',
        steps: [
          { parts: ['△ABOと', null, 'において'] },
          { parts: ['OはACの中点なので AO =', null, '...①'] },
          { parts: ['対頂角は等しいから ∠AOB =', null, '...②'] },
          { parts: ['AB//DCより、錯角は等しいので ∠BAO =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABO ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので BO =', null] },
          { parts: ['よってOはBDの中点である。'] },
        ]
      },
      answer: '△CDO;CO;∠COD;∠DCO;1組の辺とその両端の角がそれぞれ等しい;△CDO;DO'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '図でAB=AC, AD=AEのとき, BE=CDを証明せよ。',
        imageUrl: '/Image/15.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['仮定から AB =', null, '...①'] },
          { parts: ['仮定から AE =', null, '...②'] },
          { parts: ['共通な角だから ∠BAE =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABE ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので BE =', null] },
        ]
      },
      answer: '△ACD;AC;AD;∠CAD;2組の辺とその間の角がそれぞれ等しい;△ACD;CD'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '図でAD//EC, MがABの中点のとき, AD=BEを証明せよ。',
        imageUrl: '/Image/61.jpg',
        steps: [
          { parts: ['△ADMと', null, 'において'] },
          { parts: ['MはABの中点なので AM =', null, '...①'] },
          { parts: ['対頂角は等しいから ∠AMD =', null, '...②'] },
          { parts: ['AD//ECより、錯角は等しいので ∠DAM =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ADM ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので AD =', null] },
        ]
      },
      answer: '△BEM;BM;∠BME;∠EBM;1組の辺とその両端の角がそれぞれ等しい;△BEM;BE'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '図でAB=CD, ∠BAC=∠DCAのとき, AD=CBを証明せよ。',
        imageUrl: '/Image/26.jpg',
        steps: [
          { parts: ['△ABCと', null, 'において'] },
          { parts: ['仮定から AB =', null, '...①'] },
          { parts: ['仮定から ∠BAC =', null, '...②'] },
          { parts: [null, 'は共通 ...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABC ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので BC =', null] },
        ]
      },
      answer: '△CDA;CD;∠DCA;AC;2組の辺とその間の角がそれぞれ等しい;△CDA;DA'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '図で∠C=∠F=90°, AB=DE, AC=DFのとき, BC=EFを証明せよ。',
        imageUrl: '/Image/68.jpg',
        steps: [
          { parts: ['△ABCと', null, 'において'] },
          { parts: ['仮定から ∠ACB =', null, '= 90°'] },
          { parts: ['仮定から (斜辺) AB =', null, '...①'] },
          { parts: ['仮定から (他の1辺) AC =', null, '...②'] },
          { parts: ['①,②より、直角三角形の', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABC ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので BC =', null] },
        ]
      },
      answer: '△DEF;∠DFE;DE;DF;斜辺と他の1辺がそれぞれ等しい;△DEF;EF'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '長方形ABCDでMがBCの中点のとき, AM=DMを証明しなさい。',
        imageUrl: '/Image/80.jpg',
        steps: [
          { parts: ['△ABMと', null, 'において'] },
          { parts: ['長方形の対辺は等しいので AB =', null, '...①'] },
          { parts: ['MはBCの中点なので BM =', null, '...②'] },
          { parts: ['長方形の角は90°なので ∠B =', null, '= 90° ...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABM ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので AM =', null] },
        ]
      },
      answer: '△DCM;DC;CM;∠C;2組の辺とその間の角がそれぞれ等しい;△DCM;DM'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '正方形ABCDと正三角形PBCから, △APDが二等辺三角形になることを証明せよ。',
        imageUrl: '/Image/78.jpg',
        steps: [
          { parts: ['△ABPと', null, 'において'] },
          { parts: ['正方形の辺より AB =', null, ', 正三角形の辺より PB = PC。'] },
          { parts: ['∠ABP = ∠DCP = 90° -', null, '° = 30°'] },
          { parts: ['2辺とその間の角がそれぞれ等しいので'] },
          { parts: ['△ABP ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので', null, '=', null] },
          { parts: ['よって、2辺が等しいので△APDは二等辺三角形である。'] },
        ]
      },
      answer: '△DCP;DC;60;△DCP;AP;DP'
    },
  ],
  "証明（応用）": [
    {
      type: 'fill_in_proof',
      data: {
        question: '図で、∠XOYの二等分線上の点Pから、辺OX, OYに垂線PA, PBをひくとき、PA=PBであることを証明しなさい。',
        imageUrl: '/Image/11.jpg',
        steps: [
          { parts: ['△PAOと', null, 'において'] },
          { parts: ['仮定から ∠PAO =', null, '= 90°'] },
          { parts: ['(斜辺) ', null, 'は共通 ...①'] },
          { parts: ['仮定から ∠AOP =', null, '...②'] },
          { parts: ['①,②より、直角三角形の', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△PAO ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので PA =', null] },
        ]
      },
      answer: '△PBO;∠PBO;OP;∠BOP;斜辺と1つの鋭角がそれぞれ等しい;△PBO;PB'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '図で、lは線分ABの垂直二等分線です。l上の点PとA,Bを結ぶとき、PA=PBであることを証明しなさい。',
        imageUrl: '/Image/82.jpg',
        steps: [
          { parts: ['lとABの交点をMとする。'] },
          { parts: ['△PMAと', null, 'において'] },
          { parts: ['lはABの垂直二等分線なので AM =', null, '...①'] },
          { parts: ['∠PMA =', null, '= 90° ...②'] },
          { parts: [null, 'は共通 ...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△PMA ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので PA =', null] },
        ]
      },
      answer: '△PMB;BM;∠PMB;PM;2組の辺とその間の角がそれぞれ等しい;△PMB;PB'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: 'AB=ACの直角二等辺三角形ABCの頂点Aから辺BCに垂線ADをひくとき、BD=CDであることを証明しなさい。',
        imageUrl: '/Image/85.jpg',
        steps: [
          { parts: ['△ABDと', null, 'において'] },
          { parts: ['仮定から ∠ADB =', null, '= 90°'] },
          { parts: ['仮定から (斜辺) AB =', null, '...①'] },
          { parts: ['(他の1辺)', null, 'は共通 ...②'] },
          { parts: ['①,②より、直角三角形の', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABD ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので BD =', null] },
        ]
      },
      answer: '△ACD;∠ADC;AC;AD;斜辺と他の1辺がそれぞれ等しい;△ACD;CD'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '∠C=∠D=90°でAC=BDのとき、AD=BCであることを証明しなさい。',
        imageUrl: '/Image/87.jpg',
        steps: [
          { parts: ['△ADCと', null, 'において'] },
          { parts: ['仮定から ∠D =', null, '= 90°'] },
          { parts: ['仮定から (斜辺) AC =', null, '...①'] },
          { parts: ['(他の1辺)', null, 'は共通 ...②'] },
          { parts: ['①,②より、直角三角形の', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ADC ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので AD =', null] },
        ]
      },
      answer: '△BCD;∠C;BD;CD;斜辺と他の1辺がそれぞれ等しい;△BCD;BC'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '平行四辺形ABCDで、対角線ACに頂点B, Dから垂線BE, DFをひくとき、BE=DFであることを証明しなさい。',
        imageUrl: '/Image/110.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['仮定から ∠AEB =', null, '= 90°'] },
          { parts: ['平行四辺形の対辺は等しいので AB =', null, '...①'] },
          { parts: ['AB//DCより錯角は等しいので ∠BAE =', null, '...②'] },
          { parts: ['①,②と、直角三角形であることから、', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABE ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので BE =', null] },
        ]
      },
      answer: '△CDF;∠CFD;CD;∠DCF;斜辺と1つの鋭角がそれぞれ等しい;△CDF;DF'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '∠C=90°の直角二等辺三角形ABCの頂点Cを通る直線lに、頂点A, Bから垂線AD, BEをひくとき、△ADC≡△CEBを証明しなさい。',
        imageUrl: '/Image/77.jpg',
        steps: [
          { parts: ['△ADCと', null, 'において'] },
          { parts: ['仮定から ∠ADC =', null, '= 90°'] },
          { parts: ['仮定から (斜辺) AC =', null, '...①'] },
          { parts: ['∠ACD = 90° - ∠BCE, ∠CBE = 90° - ∠BCE より'] },
          { parts: ['∠ACD =', null, '...②'] },
          { parts: ['①,②より、直角三角形の', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ADC ≡', null] },
        ]
      },
      answer: '△CEB;∠CEB;CB;∠CBE;斜辺と1つの鋭角がそれぞれ等しい;△CEB'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '前の問題の図で、DE = AD + BE となることを証明しなさい。',
        imageUrl: '/Image/77.jpg',
        steps: [
          { parts: ['前の証明より △ADC ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので'] },
          { parts: ['AD =', null, ', DC =', null] },
          { parts: ['DE = DC + CE なので'] },
          { parts: ['DE =', null, '+', null, 'となる。'] },
        ]
      },
      answer: '△CEB;CE;BE;BE;AD'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '円Oの外部の点Pから円Oに2本の接線PA, PBをひくとき、PA=PBであることを証明しなさい。(A, Bは接点)',
        imageUrl: '/Image/76.jpg',
        steps: [
          { parts: ['△PAOと', null, 'において'] },
          { parts: ['接線は接点を通る半径に垂直なので ∠PAO =', null, '= 90°'] },
          { parts: ['(斜辺)', null, 'は共通 ...①'] },
          { parts: ['円の半径は等しいので (他の1辺) OA =', null, '...②'] },
          { parts: ['①,②より、直角三角形の', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△PAO ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので PA =', null] },
        ]
      },
      answer: '△PBO;∠PBO;PO;OB;斜辺と他の1辺がそれぞれ等しい;△PBO;PB'
    }
  ],
  "証明（EX）": [
    {
      type: 'fill_in_proof',
      data: {
        question: '正方形ABCDで、BE=CFのとき、AE=BFであることを証明しなさい。',
        imageUrl: '/Image/89.jpg',
        steps: [
          { parts: ['△ABEと', null, 'において'] },
          { parts: ['正方形の辺は等しいので AB =', null, '...①'] },
          { parts: ['正方形の角は等しいので ∠ABE =', null, '= 90° ...②'] },
          { parts: ['仮定から BE =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABE ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので AE =', null] },
        ]
      },
      answer: '△BCF;BC;∠BCF;CF;2組の辺とその間の角がそれぞれ等しい;△BCF;BF'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '正方形ABCDで、∠EAF=45°のとき、EF = BE + DF を証明しなさい。',
        imageUrl: '/Image/92.jpg',
        steps: [
          { parts: ['△ADFを、点Aを中心に時計回りに90°回転させたものを△ABGとする。'] },
          { parts: ['△AEFと△AGFにおいて'] },
          { parts: ['△ADF≡△ABGより、AF =', null, '...①'] },
          { parts: ['∠GAF = ∠GAB + ∠BAE =', null, '+ ∠BAE'] },
          { parts: ['∠DAF + ∠BAE = 90° - 45° = 45°なので'] },
          { parts: ['∠GAF =', null, '° ...②'] },
          { parts: ['AEは共通 ...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△AEF ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので EF =', null, '= GB + BE'] },
          { parts: ['△ADF≡△ABGより、DF=', null, 'なので、EF = BE + DF'] },
        ]
      },
      answer: 'AG;∠DAF;45;AE;2組の辺とその間の角がそれぞれ等しい;△AGF;GF;BG'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '△ABCで、∠B,∠Cの二等分線の交点をIとする。Iを通りBCに平行な直線とAB,ACとの交点をD,Eとするとき、DE=BD+CEを証明せよ。',
        imageUrl: '/Image/86.jpg',
        steps: [
          { parts: ['DI//BCより錯角は等しいので ∠DIB =', null, ''] },
          { parts: ['仮定から ∠DBI =', null, 'なので、'] },
          { parts: ['∠DIB = ∠DBI となり、△DBIは', null, '三角形である。'] },
          { parts: ['よって DI =', null, '...①'] },
          { parts: ['同様に、EI//BCより錯角は等しいので ∠EIC =', null, ''] },
          { parts: ['仮定から ∠ECI =', null, 'なので、'] },
          { parts: ['△ECIは二等辺三角形となり、EI =', null, '...②'] },
          { parts: ['DE = DI + IE なので、①,②より DE =', null, '+', null] },
        ]
      },
      answer: '∠IBC;∠IBC;二等辺;DB;∠ICB;∠ICB;CE;BD;CE'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: 'AB=ACの直角二等辺三角形ABCの頂点Aを通る直線lに、B,Cから垂線BD,CEをひく。このとき、DE = BD+CE を証明せよ。',
        imageUrl: '/Image/12.jpg',
        steps: [
          { parts: ['△ABDと', null, 'において'] },
          { parts: ['仮定から ∠BDA =', null, '= 90°'] },
          { parts: ['仮定から AB =', null, '...①'] },
          { parts: ['∠BAD = 90° - ∠CAE, ∠ACE = 90° - ∠CAE より'] },
          { parts: ['∠BAD =', null, '...②'] },
          { parts: ['①,②より、直角三角形の', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABD ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので'] },
          { parts: ['BD = AE, AD =', null, ''] },
          { parts: ['DE = AD + AE なので、DE =', null, '+', null] },
        ]
      },
      answer: '△CAE;∠AEC;CA;∠ACE;斜辺と1つの鋭角がそれぞれ等しい;△CAE;CE;CE;BD'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '平行四辺形ABCDで、辺CDの中点をMとし、BMの延長とADの延長との交点をEとするとき、AD=DEであることを証明しなさい。',
        imageUrl: '/Image/109.jpg',
        steps: [
          { parts: ['△BCMと', null, 'において'] },
          { parts: ['MはCDの中点なので CM =', null, '...①'] },
          { parts: ['対頂角は等しいので ∠BMC =', null, '...②'] },
          { parts: ['BC//AEより錯角は等しいので ∠BCM =', null, '...③'] },
          { parts: ['①,②,③より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△BCM ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので BC =', null] },
          { parts: ['平行四辺形の対辺は等しいので BC =', null] },
          { parts: ['よって AD = DE である。'] },
        ]
      },
      answer: '△EDM;DM;∠EMD;∠EDM;1組の辺とその両端の角がそれぞれ等しい;△EDM;ED;AD'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '正方形ABCDの辺BC上に点P、辺CD上に点Qをとり、AP=AQのとき、BP=DQであることを証明しなさい。',
        imageUrl: '/Image/91.jpg',
        steps: [
          { parts: ['△ABPと', null, 'において'] },
          { parts: ['正方形の辺より AB =', null, '...①'] },
          { parts: ['正方形の角より ∠B =', null, '= 90° ...②'] },
          { parts: ['仮定から (斜辺) AP =', null, '...③'] },
          { parts: ['①,②,③より、直角三角形の', { options: RIGHT_TRIANGLE_CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABP ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので BP =', null] },
        ]
      },
      answer: '△ADQ;AD;∠D;AQ;斜辺と他の1辺がそれぞれ等しい;△ADQ;DQ'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: 'AD//BCの台形ABCDで、対角線の交点をOとする。△AOBの面積=△DOCの面積であることを証明せよ。',
        imageUrl: '/Image/106.jpg',
        steps: [
          { parts: ['AD//BCなので、底辺が共通で高さが等しいから'] },
          { parts: ['△ABCの面積 =', null, 'の面積'] },
          { parts: ['両方の三角形から共通の部分である', null, 'をひくと、'] },
          { parts: ['△ABC - △OBC =', null, '- △OBC'] },
          { parts: ['したがって、△AOB =', null] },
        ]
      },
      answer: '△DBC;△OBC;△DBC;△DOC'
    },
    {
      type: 'fill_in_proof',
      data: {
        question: '正五角形ABCDEで、AC=ADであることを証明しなさい。',
        imageUrl: '/Image/88.jpg',
        steps: [
          { parts: ['△ABCと', null, 'において'] },
          { parts: ['正五角形の辺は等しいので AB = AE, BC =', null, '...①'] },
          { parts: ['正五角形の内角は等しいので ∠ABC =', null, '...②'] },
          { parts: ['①,②より、', { options: CONGRUENCE_CONDITIONS }, 'ので'] },
          { parts: ['△ABC ≡', null] },
          { parts: ['合同な図形の対応する辺は等しいので AC =', null] },
        ]
      },
      answer: '△AED;ED;∠AED;2組の辺とその間の角がそれぞれ等しい;△AED;AD'
    }
  ],
// FIX: Remove duplicate "証明（応用）" and "証明（EX）" sections
  "三・四角形(証明)": [
    {
        type: 'fill_in_proof',
        data: {
            question: "図の▱ABCDでAB=AEとなるように辺BC上に点Eをとる。このとき△ABC≡△EADとなることを証明しなさい。",
            imageUrl: "/Image/99.jpg",
            steps: [
                { parts: ['△ABCと', null, 'において'] },
                { parts: ['仮定から AB =', null, '...①'] },
                { parts: ['平行四辺形の対辺は等しいので BC =', null, '...②'] },
                { parts: ['AB=AEより△ABEは二等辺三角形なので、底角は等しいから ∠ABC =', null, '...③'] },
                { parts: ['AD//BCより、錯角は等しいから ∠EAD =', null, '...④'] },
                { parts: ['③,④より ∠ABC =', null, '...⑤'] },
                { parts: ['①,②,⑤より、「', { options: CONGRUENCE_CONDITIONS }, '」ので'] },
                { parts: ['△ABC ≡', null] },
            ]
        },
        answer: "△EAD;EA;AD;∠AEB;∠AEB;∠EAD;2組の辺とその間の角がそれぞれ等しい;△EAD"
    }
  ]
};