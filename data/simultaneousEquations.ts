import type { ProblemSet } from '../types';
import { simultaneousEquationsPracticeProblems } from './simultaneousEquationsPractice';
import { simultaneousEquationsSolvingProblems } from './simultaneousEquationsSolving';
import { simultaneousEquationsWordProblems } from './simultaneousEquationsWordProblems';


export const simultaneousEquationsProblems: ProblemSet = {
  ...simultaneousEquationsPracticeProblems,
  ...simultaneousEquationsSolvingProblems,
  ...simultaneousEquationsWordProblems,
};