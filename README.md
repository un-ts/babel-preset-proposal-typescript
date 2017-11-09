# babel-preset-ts

[![Greenkeeper badge](https://badges.greenkeeper.io/JounQin/babel-preset-ts.svg)](https://greenkeeper.io/)

Yet another Babel preset for TypeScript, only transforms proposals which TypeScript does not support now.

So that you can use babel to transform proposals which are current in stage 0-2 and TypeScript team [will not implement them temporarily](https://github.com/Microsoft/TypeScript/issues/19044#event-1293164503).

For now only [babel-plugin-transform-do-expressions](https://www.npmjs.com/package/babel-plugin-transform-do-expressions) is included.

## Install

```sh
npm install --save-dev babel-preset-ts # npm
yarn add -D babel-preset-ts # yarn
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["ts"]
}
```

### Via CLI

```sh
babel input.ts --presets ts > output.ts
```

### Via Node API

```js
require("@babel/core").transform("code", {
  presets: ["ts"]
});
```

### Via webpack

Pipe codes through `babel-loader` to `ts-loader` or `awesome-typescript-loader`.

```js
loader = {
  test: /\.ts$/,
  use: [{
    loader: 'ts-loader'
  }, {
    loader: 'babel-loader',
    options: {
      presets: ['ts']
    }
  }]
}
```
