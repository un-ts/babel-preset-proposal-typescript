import compareVersions from 'compare-versions'

const NODE_VERSION = process.versions.node

const IS_RECORD_TUPLE_SUPPORTED = compareVersions.compare(
  NODE_VERSION,
  '14.6',
  '>=',
)

export default {
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
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
