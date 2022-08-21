const { compare } = require('compare-versions')

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: true,
        },
      },
    ],
    '@babel/typescript',
    'proposal-typescript',
  ],
  plugins: compare(process.versions.node, '14.6', '<')
    ? [
        [
          '@babel/syntax-record-and-tuple',
          {
            syntaxType: 'hash',
          },
        ],
      ]
    : undefined,
}
