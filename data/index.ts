import type { Problem, ProblemSet } from '../types';
import { geometryProblems } from './geometryProblems';
import { linearFunctionsProblems } from './linearFunctionsProblems';
import { polynomialProblems } from './polynomialProblems';
import { probabilityProblems } from './probabilityProblems';
import { simultaneousEquationsProblems } from './simultaneousEquations';
import { dataAnalysisProblems } from './dataAnalysisProblems';

export const ALL_PROBLEM_SETS: Record<string, Problem[]> = {
  ...geometryProblems,
  ...linearFunctionsProblems,
  ...polynomialProblems,
  ...simultaneousEquationsProblems,
  ...probabilityProblems,
  ...dataAnalysisProblems,
};