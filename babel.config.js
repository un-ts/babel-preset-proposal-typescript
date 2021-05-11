const { compare } = require('compare-versions')

module.exports = {
  presets: [
    'proposal-typescript',
    '@babel/typescript',
    [
      '@babel/env',
      {
        loose: true,
        targets: {
          node: true,
        },
      },
    ],
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
