import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'

import ts from 'typescript'

/* istanbul ignore next */
const _dirname =
  typeof __dirname === 'undefined'
    ? path.dirname(fileURLToPath(import.meta.url))
    : __dirname

export const resolve = (...args: string[]): string =>
  path.resolve(_dirname, ...args)

export const read = (file: string): string =>
  fs
    .readFileSync(resolve(file) + (/\.[cm]?[jt]s$/.test(file) ? '' : '.ts'))
    .toString()

export const execute = (file: string, ...args: number[] | string[]) =>
  vm.runInNewContext(ts.transpile(read(file)), { exports: {} })(...args)
