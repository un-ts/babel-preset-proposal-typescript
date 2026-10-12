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

export const execute = (
  file: string,
  ...args: Array<number | string>
): unknown => {
  const script = ts.transpileModule(read(file), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2019,
    },
  }).outputText
  // eslint-disable-next-line sonarjs/code-eval -- the transpiled fixtures are executed on purpose
  const run = vm.runInNewContext(script, { exports: {} }) as (
    ...args: Array<number | string>
  ) => unknown
  return run(...args)
}
