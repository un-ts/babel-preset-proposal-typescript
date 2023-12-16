// @ts-check

import isRecordTupleSupported from './scripts/is-record-tuple-supported.cjs'

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
    '^.+\\.([c|m]?[j|t])s$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    `<rootDir>/test/**/!(${
      isRecordTupleSupported() ? '' : 'record-and-tuple|'
    }v8intrinsic).ts`,
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
