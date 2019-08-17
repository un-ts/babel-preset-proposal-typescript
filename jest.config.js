module.exports = {
  transform: {
    '^.+\\.ts$': '<rootDir>/test/preprocessor.js',
  },
  collectCoverage: true,
}
