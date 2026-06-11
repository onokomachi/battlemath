import type { ProblemSet } from '../types';
import { geometryAngleProblems } from './geometryAngleProblems';
import { geometryDynamicAngleProblems } from './geometryDynamicAngleProblems';
import { geometryQuadrilateralsProblems } from './geometryQuadrilateralsProblems';
import { geometry2Problems } from './geometry2';
import { geometry1ProofProblems } from './geometry1ProofProblems';

export const geometryProblems: ProblemSet = {
  ...geometryAngleProblems,
  ...geometryDynamicAngleProblems,
  ...geometry1ProofProblems,
  ...geometry2Problems,
  ...geometryQuadrilateralsProblems,
};
