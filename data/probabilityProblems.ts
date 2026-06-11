import { ProblemSet } from '../types';
import { probabilityBasicProblems } from './probabilityBasicProblems';
import { probabilityStandardProblems } from './probabilityStandardProblems';
import { probabilityAdvancedProblems } from './probabilityAdvancedProblems';

export const probabilityProblems: ProblemSet = {
  ...probabilityBasicProblems,
  ...probabilityStandardProblems,
  ...probabilityAdvancedProblems,
};
