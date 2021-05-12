# Changelog

## 2.1.0

### Minor Changes

- [#115](https://github.com/rx-ts/babel-preset-proposal-typescript/pull/115) Thanks [@JounQin](https://github.com/JounQin)!

  - [`50d6199`](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/50d6199bab3f732f49213cbb0087c6397f82074e) feat: upgrade babel core and plugins
  - [`db510c9`](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/db510c9504506ce2ab73989a03084605e0d3ef7c) feat: enable async-do-expressions and record-and-tuple proposals
  - [`1dd2ff6`](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/1dd2ff608bd86684b852dc6cd1d08e47bd4f3543) feat!: change `classLoose` default valule to `false` and presets order

## 2.0.3

### Patch Changes

- [#118](https://github.com/rx-ts/babel-preset-proposal-typescript/pull/118) [`9330176`](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/93301762311301ed0d86a5153d48a008aa3d5a45) Thanks [@JounQin](https://github.com/JounQin)! - refactor: remove unused optional-chaining plugin

## [2.0.0](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.5.0...v2.0.0) (2021-01-26)

### ⚠ BREAKING CHANGES

- bump babel and typescript, add two proposals

### Features

- bump babel and typescript, add two proposals ([3f18e81](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/3f18e811bc81941b9d8f5285636d44c123fb0afa))

## [1.5.0](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.4.6...v1.5.0) (2019-11-10)

### Features

- drop nullish-coalescing-operator and optional-chaining in favor of typescript 3.7.0 ([0fe0093](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/0fe0093e22c60c8a04846e643c8998ff5c28fc29))

### [1.4.6](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.4.5...v1.4.6) (2019-11-10)

### Features

- better TypeScript support ([66f65c5](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/66f65c51bec7d4c67eb1d3f65438a831b2dfe67d))

### Bug Fixes

- lock rollup-plugin-url@^2.2.4 for node 8 ([d0b7bae](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/d0b7baead76b14384326ad72acf1ee1e51409940))

### [1.4.5](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.4.4...v1.4.5) (2019-10-09)

### [1.4.4](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.4.3...v1.4.4) (2019-10-09)

### Bug Fixes

- check typeof decoratorsBeforeExport ([336dc46](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/336dc4613f188b7a3250ab33acc3bbbddf82f996))

### [1.4.3](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.4.2...v1.4.3) (2019-10-09)

### Bug Fixes

- add decoratorsBeforeExport options for decorators ([1b84269](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/1b84269d54bbf72b10322d2c07155ea8b128a546))

### [1.4.2](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.4.1...v1.4.2) (2019-10-09)

### Bug Fixes

- compatible with decorators + class properties ([11f7ec4](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/11f7ec4cf72e7ba63705cc0d3b297b04ff1a28ec))

### [1.4.1](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.4.0...v1.4.1) (2019-09-09)

### Bug Fixes

- **test:** code coverage issue, remove unnecessary tempy dep ([71b6765](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/71b6765))

## [1.4.0](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.3.0...v1.4.0) (2019-09-07)

### Bug Fixes

- **deps:** bump babel which supports private static accessors ([eb1880d](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/eb1880d))

### Features

- enable v8intrinsic plugin ([7f83401](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/7f83401))

## [1.3.0](https://github.com/rx-ts/babel-preset-proposal-typescript/compare/v1.2.6...v1.3.0) (2019-09-03)

### Features

- add cjs/esm/es2015 bundle via @1stg/rollup-config ([93e4786](https://github.com/rx-ts/babel-preset-proposal-typescript/commit/93e4786))

### [1.2.6](https://github.com/JounQin/babel-preset-proposal-typescript/compare/v1.2.5...v1.2.6) (2019-08-20)

### Bug Fixes

- incorrect type of overrides ([d86062a](https://github.com/JounQin/babel-preset-proposal-typescript/commit/d86062a))

### [1.2.5](https://github.com/JounQin/babel-preset-proposal-typescript/compare/v1.2.4...v1.2.5) (2019-08-20)

### Features

- add back option `isTSX` ([978fa86](https://github.com/JounQin/babel-preset-proposal-typescript/commit/978fa86))

### [1.2.4](https://github.com/JounQin/babel-preset-proposal-typescript/compare/v1.2.3...v1.2.4) (2019-08-18)

### [1.2.3](https://github.com/JounQin/babel-preset-proposal-typescript/compare/v1.2.2...v1.2.3) (2019-08-18)

### Bug Fixes

- determine jsx/tsx automatically ([56a08a2](https://github.com/JounQin/babel-preset-proposal-typescript/commit/56a08a2))

### [1.2.2](https://github.com/JounQin/babel-preset-proposal-typescript/compare/v1.2.1...v1.2.2) (2019-08-18)

### Features

- add options support, import documentation ([e2c2064](https://github.com/JounQin/babel-preset-proposal-typescript/commit/e2c2064))

### [1.2.1](https://github.com/JounQin/babel-preset-proposal-typescript/compare/v1.2.0...v1.2.1) (2019-08-18)

### Bug Fixes

- babel plugins should be dependencies ([1ca379c](https://github.com/JounQin/babel-preset-proposal-typescript/commit/1ca379c))

## [1.2.0](https://github.com/JounQin/babel-preset-proposal-typescript/compare/v1.1.0...v1.2.0) (2019-08-17)

### Features

- add latested proposal plugins ([a7f09da](https://github.com/JounQin/babel-preset-proposal-typescript/commit/a7f09da))

## 1.1.0 (2019-08-17)
