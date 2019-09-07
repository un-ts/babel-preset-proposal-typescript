module.exports = {
  transform: {
    '^.+\\.[jt]s$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['test'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
