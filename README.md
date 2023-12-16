# babel-preset-proposal-typescript

[![GitHub Actions](https://github.com/un-ts/babel-preset-proposal-typescript/workflows/CI/badge.svg)](https://github.com/un-ts/babel-preset-proposal-typescript/actions/workflows/ci.yml)
[![Codecov](https://img.shields.io/codecov/c/github/un-ts/babel-preset-proposal-typescript.svg)](https://codecov.io/gh/un-ts/babel-preset-proposal-typescript)
[![npm](https://img.shields.io/npm/v/babel-preset-proposal-typescript.svg)](https://www.npmjs.com/package/babel-preset-proposal-typescript)
[![GitHub Release](https://img.shields.io/github/release/un-ts/babel-preset-proposal-typescript)](https://github.com/un-ts/babel-preset-proposal-typescript/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/atlassian/changesets)

Yet another Babel preset for TypeScript, only transforms proposals which TypeScript does not support now.

So that you can use babel to transform proposals which are current in stage 0-2 and TypeScript team [will not implement them temporarily](https://github.com/Microsoft/TypeScript/issues/19044#event-1293164503).

## TOC <!-- omit in toc -->

- [Enabled proposal plugins](#enabled-proposal-plugins)
- [Install](#install)
- [Options](#options)
- [Usage](#usage)
  - [Via `.babelrc` (Recommended)](#via-babelrc-recommended)
  - [Via CLI](#via-cli)
  - [Via Node API](#via-node-api)
  - [Via webpack](#via-webpack)
- [References](#references)
- [Sponsors](#sponsors)
- [Backers](#backers)
- [Changelog](#changelog)
- [License](#license)

## Enabled proposal plugins

1.  [async-do-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-async-do-expressions)
2.  [destructuring-private](https://www.npmjs.com/package/@babel/plugin-proposal-destructuring-private)
3.  [do-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-do-expressions)
4.  [duplicate-named-capturing-groups-regex](https://www.npmjs.com/package/@babel/plugin-proposal-duplicate-named-capturing-groups-regex)
5.  [function-bind](https://www.npmjs.com/package/@babel/plugin-proposal-function-bind)
6.  [function-sent](https://www.npmjs.com/package/@babel/plugin-proposal-function-sent)
7.  [import-defer](https://www.npmjs.com/package/@babel/plugin-proposal-import-defer)
8.  [import-wasm-source](https://www.npmjs.com/package/@babel/plugin-proposal-import-wasm-source)
9.  [optional-chaining-assign](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining-assign)
10. [partial-application](https://www.npmjs.com/package/@babel/plugin-proposal-partial-application)
11. [pipeline-operator](https://www.npmjs.com/package/@babel/plugin-proposal-pipeline-operator)
12. [record-and-tuple](https://www.npmjs.com/package/@babel/plugin-proposal-record-and-tuple)
13. [regexp-modifiers](https://www.npmjs.com/package/@babel/plugin-proposal-regexp-modifiers)
14. [throw-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-throw-expressions)
15. [v8intrinsic](./src/v8intrinsic.ts) - [Further Detail](https://babeljs.io/blog/2019/09/05/7.6.0#v8-intrinsic-runtime-functions-parsing-10148httpsgithubcombabelbabelpull10148)

## Install

```sh
# yarn
yarn add -D babel-preset-proposal-typescript

# npm
npm i -D babel-preset-proposal-typescript
```

## Options

| option                          | description                                                                                                  | defaults                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `decoratorsBeforeExport`        | See [Babel Document](https://babeljs.io/docs/en/babel-plugin-proposal-decorators#decoratorsbeforeexport)     | `undefined`                                                             |
| `decoratorsLegacy`              | Whether to use legacy decorators semantic                                                                    | `true`                                                                  |
| `importDefer`                   | Whether to enabled `import-defer` plugin, if true `transform-modules-commonjs` will be enabled automatically | `false`                                                                 |
| `isTSX`                         | Whether to enable `jsx` plugin with `typescript`                                                             | `false`, but `true` for `/\.[jt]sx$/`                                   |
| `optionalChainingAssignVersion` | Version for `optional-chaining-assign` plugin, only `'2023-07'` allowed for now                              | `'2023-07'`                                                             |
| `pipelineOperator`              | Implementation of pipeline operator, `minimal`, `smart` or `fsharp`                                          | `minimal`                                                               |
| `recordTuplePolyfill`           | Whether to enable import `record-tuple` plugin and polyfill, or specific the polyfill module name            | `true` for Node>=14.6, it represents `@bloomberg/record-tuple-polyfill` |
| `recordTupleSyntaxType`         | `record-tuple` syntax, `hash` or `bar`                                                                       | `hash`                                                                  |

## Usage

Note that unlike plugins, the presets are applied in an order of last to first (<https://babeljs.io/docs/en/presets/#preset-ordering>), so please make sure `proposal-typescript` is used at the last.

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["proposal-typescript"]
}
```

### Via CLI

```sh
babel input.ts --presets proposal-typescript > output.ts
```

### Via Node API

```js
require('@babel/core').transform('code', {
  presets: ['proposal-typescript'],
})
```

### Via webpack

Pipe codes through `babel-loader`.

```js
loader = {
  test: /\.[jt]sx?$/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/typescript', 'proposal-typescript'],
  },
}

// if you prefer `ts-loader` or `awesome-typescript-loader`
loader = {
  test: /\.tsx?$/,
  use: [
    {
      loader: 'ts-loader',
    },
    {
      loader: 'babel-loader',
      options: {
        presets: ['proposal-typescript'],
      },
    },
  ],
}
```

## References

- [TC39 Proposals](https://github.com/tc39/proposals)
- [Babel Proposals](https://github.com/babel/proposals)

## Sponsors

| 1stG                                                                                                                               | RxTS                                                                                                                               | UnTS                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

## Backers

[![Backers](https://raw.githubusercontent.com/1stG/static/master/sponsors.svg)](https://github.com/sponsors/JounQin)

| 1stG                                                                                                                             | RxTS                                                                                                                             | UnTS                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
