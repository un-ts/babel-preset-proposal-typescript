module.exports = {
  sourceType: 'module',
  targets: {
    node: 'current',
  },
  presets: ['@babel/env', '@babel/typescript', 'proposal-typescript'],
  overrides: [
    {
      test: 'test/import-defer.cts',
      presets: [
        [
          'proposal-typescript',
          {
            importDefer: true,
          },
        ],
      ],
    },
  ],
}
