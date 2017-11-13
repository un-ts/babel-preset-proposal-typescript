import * as fs from 'fs'
import * as path from 'path'
import * as vm from 'vm'

import * as ts from 'typescript'

const resolve = (...args: string[]): string => path.resolve(__dirname, ...args)

const read = (file: string): string => fs.readFileSync(resolve(file) + '.ts').toString()

const transpile = (content: string) => ts.transpile(content, null)

export const execute = (file: string) => vm.runInNewContext(transpile(read(file)))
