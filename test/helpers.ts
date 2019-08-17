import * as fs from 'fs'
import * as path from 'path'
import * as vm from 'vm'

import * as ts from 'typescript'

const resolve = (...args: string[]): string => path.resolve(__dirname, ...args)

const read = (file: string): string =>
  fs.readFileSync(resolve(file) + '.ts').toString()

// eslint-disable-next-line import/namespace
const transpile = (content: string) => ts.transpile(content)

export const execute = (file: string, ...args: number[] | string[]) =>
  vm.runInNewContext(transpile(read(file)), { exports: {} })(...args)
