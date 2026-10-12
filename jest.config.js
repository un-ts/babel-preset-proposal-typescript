// @ts-check

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// Resolve `babel-jest` from this project so that it uses the top-level Babel 8
// instead of the Babel 7 nested inside `jest-config`
const babelJest = require.resolve('babel-jest')

/**
 * @type {import('jest').Config}
 */
export default {
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^(\\.{1,2}/.*)\\.cjs$': ['$1.cts', '$1.cjs'],
  },
  transform: {
    '^.+\\.([c|m]?[j|t])s$': babelJest,
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/test/**/!(v8intrinsic).ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
