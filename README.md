# babel-preset-proposal-typescript

[![Travis](https://img.shields.io/travis/com/JounQin/babel-preset-proposal-typescript.svg)](https://travis-ci.com/JounQin/babel-preset-proposal-typescript)
[![Codecov](https://img.shields.io/codecov/c/github/JounQin/babel-preset-proposal-typescript.svg)](https://codecov.io/gh/JounQin/babel-preset-proposal-typescript)
[![David Peer](https://img.shields.io/david/peer/JounQin/babel-preset-proposal-typescript.svg)](https://david-dm.org/JounQin/babel-preset-proposal-typescript?type=peer)
[![David](https://img.shields.io/david/JounQin/babel-preset-proposal-typescript.svg)](https://david-dm.org/JounQin/babel-preset-proposal-typescript)
[![David Dev](https://img.shields.io/david/dev/JounQin/babel-preset-proposal-typescript.svg)](https://david-dm.org/JounQin/babel-preset-proposal-typescript?type=dev)

Yet another Babel preset for TypeScript, only transforms proposals which TypeScript does not support now.

So that you can use babel to transform proposals which are current in stage 0-2 and TypeScript team [will not implement them temporarily](https://github.com/Microsoft/TypeScript/issues/19044#event-1293164503).

- [babel-preset-proposal-typescript](#babel-preset-proposal-typescript)
  - [Enabled proposal plugins](#enabled-proposal-plugins)
  - [Install](#install)
  - [Usage](#usage)
    - [Via `.babelrc` (Recommended)](#via-babelrc-recommended)
    - [Via CLI](#via-cli)
    - [Via Node API](#via-node-api)
    - [Via webpack](#via-webpack)
  - [Options](#options)

## Enabled proposal plugins

1. [class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)
2. [do-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-do-expressions)
3. [function-bind](https://www.npmjs.com/package/@babel/plugin-proposal-function-bind)
4. [function-sent](https://www.npmjs.com/package/@babel/plugin-proposal-function-sent)
5. [json-strings](https://www.npmjs.com/package/@babel/plugin-proposal-json-strings)
6. [logical-assignment-operators](https://www.npmjs.com/package/@babel/plugin-proposal-logical-assignment-operators)
7. [nullish-coalescing-operator](https://www.npmjs.com/package/@babel/plugin-proposal-nullish-coalescing-operator)
8. [optional-chaining](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)
9. [partial-application](https://www.npmjs.com/package/@babel/plugin-proposal-partial-application)
10. [pipeline-operator](https://www.npmjs.com/package/@babel/plugin-proposal-pipeline-operator)
11. [private-methods](https://www.npmjs.com/package/@babel/plugin-proposal-private-methods)
12. [throw-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-throw-expressions)

## Install

```sh
# yarn
yarn add -D babel-preset-proposal-typescript

# npm
npm i -D babel-preset-proposal-typescript
```

## Usage

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

Pipe codes through `babel-loader` to `ts-loader` or `awesome-typescript-loader`.

```js
loader = {
  test: /\.ts$/,
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

## Options

| option             | description                         | defaults                         |
| ------------------ | ----------------------------------- | -------------------------------- |
| `legacyDecorators` | use legacy decorators semantic      | `true`                           |
| `isTsx`            | enable `jsx` syntax for typescript  | `['.jsx', '.tsx'].includes(ext)` |
| `pipelineOperator` | implementation of pipeline operator | `minimal`                        |
