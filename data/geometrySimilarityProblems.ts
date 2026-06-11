import type { ProblemSet } from '../types';

// ============================================================
// 相似（中学3年）
// ============================================================

export const geometrySimilarityProblems: ProblemSet = {

  // ----------------------------------------------------------
  // 相似条件(基) - 相似の基本概念と条件の判定
  // ----------------------------------------------------------
  "相似条件(基)": [
    {
      type: 'text',
      data: {
        question: '2つの図形が相似であるとき、対応する辺の比はすべて等しい。この比を何というか。',
        options: ['相似比', '対応比', '拡大率', '倍率']
      },
      answer: '相似比'
    },
    {
      type: 'text',
      data: {
        question: '三角形の相似条件は3つある。「3組の辺の比がすべて等しい」はそのうちの1つである。残り2つのうち、角に関する条件を1つ答えよ。',
        options: [
          '2組の角がそれぞれ等しい',
          '1組の角が等しい',
          '3組の角がすべて等しい',
          '1組の辺とその両端の角がそれぞれ等しい'
        ]
      },
      answer: '2組の角がそれぞれ等しい'
    },
    {
      type: 'text',
      data: {
        question: '△ABCと△DEFが相似で、相似比が2:3であるとき、記号で表せ。',
        options: ['△ABC∽△DEF', '△ABC≡△DEF', '△ABC≅△DEF', '△ABC=△DEF']
      },
      answer: '△ABC∽△DEF'
    },
    {
      type: 'text',
      data: {
        question: '△ABCと△DEFが相似で、AB=4cm, DE=6cmである。相似比を最も簡単な比で答えよ。',
      },
      answer: '2:3'
    },
    {
      type: 'text',
      data: {
        question: '△ABC∽△DEFで相似比が3:5、BC=9cmのとき、EFの長さを求めよ。',
      },
      answer: '15cm'
    },
    {
      type: 'text',
      data: {
        question: '三角形の相似条件のうち「2組の辺の比とその間の角がそれぞれ等しい」を使うとき、「間の角」とはどのような角か。',
        options: [
          '比が等しい2組の辺にはさまれた角',
          '最も大きい角',
          '対応する任意の角',
          '最も小さい角'
        ]
      },
      answer: '比が等しい2組の辺にはさまれた角'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで∠A=50°, ∠B=70°, △DEFで∠D=50°, ∠E=70°のとき、この2つの三角形は相似であるか。',
        options: ['相似である', '相似でない', '条件が足りない']
      },
      answer: '相似である'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで AB=6, BC=8, CA=10, △DEFで DE=9, EF=12, FD=15のとき、△ABC∽△DEFの相似比を求めよ。',
      },
      answer: '2:3'
    },
  ],

  // ----------------------------------------------------------
  // 相似の計算(基) - 対応する辺の長さの計算
  // ----------------------------------------------------------
  "相似の計算(基)": [
    {
      type: 'text',
      data: {
        question: '△ABC∽△DEFで相似比が4:7である。AB=8cmのとき、DEの長さを求めよ。',
      },
      answer: '14cm'
    },
    {
      type: 'text',
      data: {
        question: '△ABC∽△DEFで AB=6cm, BC=9cm, DE=10cmのとき、EFの長さを求めよ。',
      },
      answer: '15cm'
    },
    {
      type: 'text',
      data: {
        question: '△ABC∽△DEFで、BC=12cm, EF=8cmである。△ABCの周の長さが36cmのとき、△DEFの周の長さを求めよ。',
      },
      answer: '24cm'
    },
    {
      type: 'text',
      data: {
        question: '相似比が3:5の2つの三角形がある。小さい方の三角形の最も長い辺が12cmのとき、大きい方の対応する辺の長さを求めよ。',
      },
      answer: '20cm'
    },
    {
      type: 'text',
      data: {
        question: '△ABC∽△DEFで、AB=5cm, AC=7cm, DE=15cmである。DFの長さを求めよ。',
      },
      answer: '21cm'
    },
    {
      type: 'text',
      data: {
        question: '△ABC∽△PQRで、AB:PQ=2:5, BC=6cm, AC=8cmである。△PQRの周の長さを求めよ。',
        hint: 'AB:PQ=2:5だから、△ABCの周の長さに5/2をかける。まずABを求める必要はなく、周の長さの比も2:5。'
      },
      answer: '45cm'
    },
  ],

  // ----------------------------------------------------------
  // 平行線と比(基) - 平行線による線分の比
  // ----------------------------------------------------------
  "平行線と比(基)": [
    {
      type: 'text',
      data: {
        question: '△ABCで、辺AB上に点Dをとり、DCに平行な線をAから引いたとする。ではなく、BC//DEとなる点EがAC上にあるとき、AD:DB=AE:ECが成り立つ。この定理の名前を答えよ。',
        options: ['平行線と比の定理', '中点連結定理', '相似条件', 'メネラウスの定理']
      },
      answer: '平行線と比の定理'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで、DE//BCかつAD=4cm, DB=6cm, AE=3cmのとき、ECの長さを求めよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><polygon points="150,20 40,200 260,200" fill="none" stroke="white" stroke-width="1.5"/><line x1="106" y1="92" x2="216" y2="92" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><text x="140" y="15" font-size="14" fill="white">A</text><text x="25" y="215" font-size="14" fill="white">B</text><text x="258" y="215" font-size="14" fill="white">C</text><text x="90" y="90" font-size="14" fill="#60a5fa">D</text><text x="220" y="90" font-size="14" fill="#60a5fa">E</text><text x="60" y="60" font-size="12" fill="white">4</text><text x="55" y="155" font-size="12" fill="white">6</text><text x="210" y="60" font-size="12" fill="white">3</text><text x="243" y="155" font-size="12" fill="#f87171">?</text></svg>'
      },
      answer: '4.5cm'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで、DE//BC, AD:DB=3:2のとき、AE:ACを最も簡単な比で答えよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><polygon points="150,20 40,200 260,200" fill="none" stroke="white" stroke-width="1.5"/><line x1="116" y1="92" x2="216" y2="92" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><text x="140" y="15" font-size="14" fill="white">A</text><text x="25" y="215" font-size="14" fill="white">B</text><text x="258" y="215" font-size="14" fill="white">C</text><text x="100" y="90" font-size="14" fill="#60a5fa">D</text><text x="220" y="90" font-size="14" fill="#60a5fa">E</text><text x="65" y="60" font-size="12" fill="white">3</text><text x="55" y="155" font-size="12" fill="white">2</text></svg>'
      },
      answer: '3:5'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで、DE//BC, AD=6cm, AB=10cm, DE=9cmのとき、BCの長さを求めよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><polygon points="150,20 40,200 260,200" fill="none" stroke="white" stroke-width="1.5"/><line x1="106" y1="92" x2="216" y2="92" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><text x="140" y="15" font-size="14" fill="white">A</text><text x="25" y="215" font-size="14" fill="white">B</text><text x="258" y="215" font-size="14" fill="white">C</text><text x="90" y="90" font-size="14" fill="#60a5fa">D</text><text x="220" y="90" font-size="14" fill="#60a5fa">E</text><text x="60" y="105" font-size="12" fill="white">6</text><text x="55" y="160" font-size="12" fill="white">10</text><text x="155" y="85" font-size="12" fill="#60a5fa">9</text></svg>'
      },
      answer: '15cm'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、l // m // n のとき、AB:BC=3:4, DE=6cmである。EFの長さを求めよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><line x1="20" y1="40" x2="280" y2="40" stroke="white" stroke-width="1.5"/><line x1="20" y1="120" x2="280" y2="120" stroke="white" stroke-width="1.5"/><line x1="20" y1="200" x2="280" y2="200" stroke="white" stroke-width="1.5"/><line x1="60" y1="20" x2="90" y2="220" stroke="white" stroke-width="1.5"/><line x1="190" y1="20" x2="220" y2="220" stroke="white" stroke-width="1.5"/><text x="5" y="38" font-size="12" fill="white">l</text><text x="5" y="118" font-size="12" fill="white">m</text><text x="5" y="198" font-size="12" fill="white">n</text><text x="55" y="35" font-size="13" fill="white">A</text><text x="68" y="115" font-size="13" fill="white">B</text><text x="78" y="195" font-size="13" fill="white">C</text><text x="183" y="35" font-size="13" fill="white">D</text><text x="198" y="115" font-size="13" fill="white">E</text><text x="210" y="195" font-size="13" fill="white">F</text><text x="42" y="82" font-size="12" fill="white">3</text><text x="58" y="162" font-size="12" fill="white">4</text><text x="180" y="82" font-size="12" fill="#60a5fa">6</text><text x="205" y="162" font-size="12" fill="#f87171">?</text></svg>'
      },
      answer: '8cm'
    },
    {
      type: 'text',
      data: {
        question: '右の図で、l // m // n のとき、AB=5cm, BC=3cm, DF=12cmである。DEの長さを求めよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><line x1="20" y1="40" x2="280" y2="40" stroke="white" stroke-width="1.5"/><line x1="20" y1="120" x2="280" y2="120" stroke="white" stroke-width="1.5"/><line x1="20" y1="200" x2="280" y2="200" stroke="white" stroke-width="1.5"/><line x1="60" y1="20" x2="90" y2="220" stroke="white" stroke-width="1.5"/><line x1="190" y1="20" x2="220" y2="220" stroke="white" stroke-width="1.5"/><text x="5" y="38" font-size="12" fill="white">l</text><text x="5" y="118" font-size="12" fill="white">m</text><text x="5" y="198" font-size="12" fill="white">n</text><text x="55" y="35" font-size="13" fill="white">A</text><text x="68" y="115" font-size="13" fill="white">B</text><text x="78" y="195" font-size="13" fill="white">C</text><text x="183" y="35" font-size="13" fill="white">D</text><text x="198" y="115" font-size="13" fill="white">E</text><text x="210" y="195" font-size="13" fill="white">F</text><text x="42" y="82" font-size="12" fill="white">5</text><text x="58" y="162" font-size="12" fill="white">3</text></svg>'
      },
      answer: '7.5cm'
    },
  ],

  // ----------------------------------------------------------
  // 中点連結定理
  // ----------------------------------------------------------
  "中点連結定理": [
    {
      type: 'text',
      data: {
        question: '△ABCで、辺ABの中点をM、辺ACの中点をNとする。このとき、MN//BCかつMN=□BCである。□に入る数を答えよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><polygon points="150,20 40,200 260,200" fill="none" stroke="white" stroke-width="1.5"/><line x1="95" y1="110" x2="205" y2="110" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="95" cy="110" r="3" fill="#60a5fa"/><circle cx="205" cy="110" r="3" fill="#60a5fa"/><text x="140" y="15" font-size="14" fill="white">A</text><text x="25" y="215" font-size="14" fill="white">B</text><text x="258" y="215" font-size="14" fill="white">C</text><text x="78" y="108" font-size="14" fill="#60a5fa">M</text><text x="210" y="108" font-size="14" fill="#60a5fa">N</text></svg>'
      },
      answer: '1/2'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで、M, NはそれぞれAB, ACの中点である。BC=14cmのとき、MNの長さを求めよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><polygon points="150,20 40,200 260,200" fill="none" stroke="white" stroke-width="1.5"/><line x1="95" y1="110" x2="205" y2="110" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="95" cy="110" r="3" fill="#60a5fa"/><circle cx="205" cy="110" r="3" fill="#60a5fa"/><text x="140" y="15" font-size="14" fill="white">A</text><text x="25" y="215" font-size="14" fill="white">B</text><text x="258" y="215" font-size="14" fill="white">C</text><text x="78" y="108" font-size="14" fill="#60a5fa">M</text><text x="210" y="108" font-size="14" fill="#60a5fa">N</text><text x="130" y="218" font-size="12" fill="white">14cm</text></svg>'
      },
      answer: '7cm'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで、M, NはそれぞれAB, ACの中点で、MN=5cmである。BCの長さを求めよ。',
      },
      answer: '10cm'
    },
    {
      type: 'text',
      data: {
        question: '四角形ABCDで、各辺AB, BC, CD, DAの中点をそれぞれP, Q, R, Sとする。四角形PQRSはどのような四角形になるか。',
        options: ['平行四辺形', '長方形', '正方形', 'ひし形']
      },
      answer: '平行四辺形'
    },
    {
      type: 'text',
      data: {
        question: '台形ABCDで、AD//BC, AD=6cm, BC=14cmである。辺AB, DCの中点をそれぞれM, Nとするとき、MNの長さを求めよ。',
        svg: '<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet"><polygon points="100,40 200,40 260,170 40,170" fill="none" stroke="white" stroke-width="1.5"/><line x1="70" y1="105" x2="230" y2="105" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="70" cy="105" r="3" fill="#60a5fa"/><circle cx="230" cy="105" r="3" fill="#60a5fa"/><text x="90" y="33" font-size="14" fill="white">A</text><text x="200" y="33" font-size="14" fill="white">D</text><text x="25" y="185" font-size="14" fill="white">B</text><text x="260" y="185" font-size="14" fill="white">C</text><text x="53" y="103" font-size="14" fill="#60a5fa">M</text><text x="235" y="103" font-size="14" fill="#60a5fa">N</text><text x="133" y="33" font-size="12" fill="white">6</text><text x="133" y="188" font-size="12" fill="white">14</text></svg>'
      },
      answer: '10cm'
    },
  ],

  // ----------------------------------------------------------
  // 面積比・体積比
  // ----------------------------------------------------------
  "面積比と体積比": [
    {
      type: 'text',
      data: {
        question: '相似比が2:3の2つの三角形がある。面積比を求めよ。',
      },
      answer: '4:9'
    },
    {
      type: 'text',
      data: {
        question: '相似比が1:4の2つの三角形がある。面積比を求めよ。',
      },
      answer: '1:16'
    },
    {
      type: 'text',
      data: {
        question: '相似比が3:5の2つの相似な立体がある。体積比を求めよ。',
      },
      answer: '27:125'
    },
    {
      type: 'text',
      data: {
        question: '△ABCと△DEFは相似で、面積比が9:25である。相似比を求めよ。',
      },
      answer: '3:5'
    },
    {
      type: 'text',
      data: {
        question: '△ABCの面積は48cm²で、△ABC∽△DEFの相似比が2:3である。△DEFの面積を求めよ。',
      },
      answer: '108cm²'
    },
    {
      type: 'text',
      data: {
        question: '相似な2つの円錐がある。相似比が2:3で、小さい方の体積が16πcm³のとき、大きい方の体積を求めよ。',
      },
      answer: '54πcm³'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで、DE//BC, AD:DB=1:2のとき、△ADEと△ABCの面積比を求めよ。',
        svg: '<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid meet"><polygon points="150,20 40,200 260,200" fill="none" stroke="white" stroke-width="1.5"/><line x1="113" y1="80" x2="213" y2="80" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/><text x="140" y="15" font-size="14" fill="white">A</text><text x="25" y="215" font-size="14" fill="white">B</text><text x="258" y="215" font-size="14" fill="white">C</text><text x="97" y="78" font-size="14" fill="#60a5fa">D</text><text x="217" y="78" font-size="14" fill="#60a5fa">E</text><text x="63" y="52" font-size="12" fill="white">1</text><text x="48" y="142" font-size="12" fill="white">2</text></svg>'
      },
      answer: '1:9'
    },
    {
      type: 'text',
      data: {
        question: '△ABCで、DE//BC, AD:DB=2:1のとき、台形DBCEと△ABCの面積比を求めよ。',
        hint: '△ADE:△ABC=4:9 なので、台形=△ABC−△ADE'
      },
      answer: '5:9'
    },
  ],
};
