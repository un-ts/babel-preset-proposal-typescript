module.exports = {
  presets: [
    'proposal-typescript',
    '@babel/typescript',
    [
      '@babel/env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],
}
