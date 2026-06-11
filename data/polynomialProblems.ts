import type { ProblemSet } from '../types';
import { polynomialsAdditionSubtractionProblems } from './polynomialsAdditionSubtraction';
import { polynomialsMultiplicationDivisionProblems } from './polynomialsMultiplicationDivision';
import { polynomialsApplicationProblems } from './polynomialsApplication';
import { polynomialsSummaryProblems } from './polynomialsSummary';

export const polynomialProblems: ProblemSet = {
  ...polynomialsAdditionSubtractionProblems,
  ...polynomialsMultiplicationDivisionProblems,
  ...polynomialsApplicationProblems,
  ...polynomialsSummaryProblems,
};
