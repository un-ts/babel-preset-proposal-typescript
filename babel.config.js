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
}
