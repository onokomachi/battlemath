import type { ProblemSet } from '../types';
import { linearFunctionsDeriveEquationProblems } from './linearFunctionsDeriveEquation';
import { linearFunctionsFeaturesProblems } from './linearFunctionsFeatures';
import { linearFunctionsFindEquationProblems } from './linearFunctionsFindEquation';
import { linearFunctionsGraphingProblems } from './linearFunctionsGraphing';

export const linearFunctionsProblems: ProblemSet = {
    ...linearFunctionsDeriveEquationProblems,
    ...linearFunctionsFeaturesProblems,
    ...linearFunctionsFindEquationProblems,
    ...linearFunctionsGraphingProblems,
};
