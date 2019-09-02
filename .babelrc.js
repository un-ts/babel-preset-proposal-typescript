module.exports = {
  presets: [
    'proposal-typescript',
    [
      '@babel/env',
      {
        targets: {
          node: true,
        },
      },
    ],
    '@babel/typescript',
  ],
}
