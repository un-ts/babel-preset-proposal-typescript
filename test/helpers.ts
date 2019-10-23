import * as fs from 'fs'
import * as path from 'path'
import * as vm from 'vm'

import ts from 'typescript'

export const resolve = (...args: string[]): string =>
  path.resolve(__dirname, ...args)

export const read = (file: string): string =>
  fs.readFileSync(resolve(file) + '.ts').toString()

export const execute = (file: string, ...args: number[] | string[]) =>
  vm.runInNewContext(ts.transpile(read(file)), { exports: {} })(...args)
