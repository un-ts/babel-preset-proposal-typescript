# babel-preset-proposal-typescript

[![GitHub Actions](https://github.com/rx-ts/babel-preset-proposal-typescript/workflows/CI/badge.svg)](https://github.com/rx-ts/babel-preset-proposal-typescript/actions/workflows/ci.yml)
[![Codecov](https://img.shields.io/codecov/c/github/rx-ts/babel-preset-proposal-typescript.svg)](https://codecov.io/gh/rx-ts/babel-preset-proposal-typescript)
[![Codacy Grade](https://img.shields.io/codacy/grade/bb554fe914d64b4b87cadb8a48b2a97b)](https://www.codacy.com/gh/rx-ts/babel-preset-proposal-typescript)
[![npm](https://img.shields.io/npm/v/babel-preset-proposal-typescript.svg)](https://www.npmjs.com/package/babel-preset-proposal-typescript)
[![GitHub Release](https://img.shields.io/github/release/rx-ts/babel-preset-proposal-typescript)](https://github.com/rx-ts/babel-preset-proposal-typescript/releases)

[![David Peer](https://img.shields.io/david/peer/rx-ts/babel-preset-proposal-typescript.svg)](https://david-dm.org/rx-ts/babel-preset-proposal-typescript?type=peer)
[![David](https://img.shields.io/david/rx-ts/babel-preset-proposal-typescript.svg)](https://david-dm.org/rx-ts/babel-preset-proposal-typescript)
[![David Dev](https://img.shields.io/david/dev/rx-ts/babel-preset-proposal-typescript.svg)](https://david-dm.org/rx-ts/babel-preset-proposal-typescript?type=dev)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![codechecks.io](https://raw.githubusercontent.com/codechecks/docs/master/images/badges/badge-default.svg?sanitize=true)](https://codechecks.io)

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
- [Changelog](#changelog)
- [License](#license)

## Enabled proposal plugins

1.  [async-do-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-async-do-expressions)
2.  [class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)
3.  [class-static-block](https://www.npmjs.com/package/@babel/plugin-proposal-class-static-block)
4.  [do-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-do-expressions)
5.  [function-bind](https://www.npmjs.com/package/@babel/plugin-proposal-function-bind)
6.  [function-sent](https://www.npmjs.com/package/@babel/plugin-proposal-function-sent)
7.  [json-strings](https://www.npmjs.com/package/@babel/plugin-proposal-json-strings)
8.  [partial-application](https://www.npmjs.com/package/@babel/plugin-proposal-partial-application)
9.  [pipeline-operator](https://www.npmjs.com/package/@babel/plugin-proposal-pipeline-operator)
10. [private-methods](https://www.npmjs.com/package/@babel/plugin-proposal-private-methods)
11. [private-property-in-object](https://www.npmjs.com/package/@babel/plugin-proposal-private-property-in-object)
12. [record-and-tuple](https://www.npmjs.com/package/@babel/plugin-proposal-record-and-tuple)
13. [throw-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-throw-expressions)
14. [v8intrinsic](./src/v8intrinsic.ts) - [Further Detail](https://babeljs.io/blog/2019/09/05/7.6.0#v8-intrinsic-runtime-functions-parsing-10148-https-githubcom-babel-babel-pull-10148)

## Install

```sh
# yarn
yarn add -D babel-preset-proposal-typescript

# npm
npm i -D babel-preset-proposal-typescript
```

## Options

| option                   | description                                                                                              | defaults                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `classLoose`             | whether to use loose mode for `class-static-block`, `class-properties` and `private-methods`             | `undefined`                                                             |
| `decoratorsBeforeExport` | See [Babel Document](https://babeljs.io/docs/en/babel-plugin-proposal-decorators#decoratorsbeforeexport) | `undefined`                                                             |
| `decoratorsLegacy`       | whether to use legacy decorators semantic                                                                | `true`                                                                  |
| `isTSX`                  | whether to enable `jsx` plugin with `typescript`                                                         | `false`, but `true` for `/\.[jt]sx$/`                                   |
| `pipelineOperator`       | implementation of pipeline operator, `minimal`, `smart` or `fsharp`                                      | `minimal`                                                               |
| `recordTuplePolyfill`    | whether to enable import `record-tuple` plugin and polyfill, or specific the polyfill module name        | `true` for Node>=14.6, it represents `@bloomberg/record-tuple-polyfill` |
| `recordTupleSyntaxType`  | record-tuple syntax, `hash` or `bar`                                                                     | `hash`                                                                  |

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
babel input.ts --presets proposal-typescript >output.ts
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

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
