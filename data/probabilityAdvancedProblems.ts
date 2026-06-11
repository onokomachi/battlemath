import { ProblemSet } from '../types';

export const probabilityAdvancedProblems: ProblemSet = {
  "サイコロ2個の確率(応)": [
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、目の和が平方数になる確率を求めなさい。", hint: "和が4または9になる場合を考えます。" }, answer: "7/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、目の積が平方数になる確率を求めなさい。" }, answer: "8/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、目の差が素数になる確率を求めなさい。", hint: "差が2, 3, 5になる場合を考えます。" }, answer: "16/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、少なくとも一方が素数（2,3,5）の目である確率を求めなさい。" }, answer: "27/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、出た目の組(大,小)が、直線 y=x+2 上の点である確率を求めなさい。" }, answer: "4/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、出た目の組(大,小)が、直線 y=2x 上の点である確率を求めなさい。" }, answer: "3/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、目の和が4の倍数になる確率を求めなさい。" }, answer: "9/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、目の積が6の倍数になる確率を求めなさい。" }, answer: "15/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、一方の目がもう一方の目の倍数になっている確率を求めなさい。" }, answer: "22/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、大きい方の目が小さい方の目よりちょうど2大きい確率を求めなさい。" }, answer: "8/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、目の和が5未満になる確率を求めなさい。" }, answer: "6/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、両方とも偶数の目が出る確率を求めなさい。" }, answer: "9/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、両方とも奇数の目が出る確率を求めなさい。" }, answer: "9/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、一方が偶数で一方が奇数である確率を求めなさい。" }, answer: "18/36" },
    { type: 'text', data: { question: "大小2個のサイコロを同時に投げるとき、目の和が7か11になる確率を求めなさい。" }, answer: "8/36" }
  ]
};
