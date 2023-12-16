const isRecordTupleSupported = require('./scripts/is-record-tuple-supported.cjs')

module.exports = {
  sourceType: 'module',
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: true,
        },
      },
    ],
    [
      '@babel/typescript',
      {
        allowDeclareFields: true,
      },
    ],
    'proposal-typescript',
  ],
  plugins: isRecordTupleSupported()
    ? undefined
    : [
        [
          '@babel/syntax-record-and-tuple',
          {
            syntaxType: 'hash',
          },
        ],
      ],
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
