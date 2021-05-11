import { IS_RECORD_TUPLE_SUPPORTED } from './src/utils'

export default {
  transform: {
    '^.+\\.(m?j|t)s$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    `<rootDir>/test/**/!(${
      IS_RECORD_TUPLE_SUPPORTED ? '' : 'record-and-tuple|'
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
