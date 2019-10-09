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
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
}
