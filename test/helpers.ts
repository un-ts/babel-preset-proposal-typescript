import * as fs from 'fs'
import * as path from 'path'
import * as vm from 'vm'

import * as ts from 'typescript'
import * as babel from '@babel/core'

import proposalTypescript from '../lib'

const resolve = (...args: string[]): string => path.resolve(__dirname, ...args)

const read = (file: string): string => fs.readFileSync(resolve(file) + '.ts').toString()

const babelTranspile = (content: string) => babel.transform(content, {
  presets: [proposalTypescript]
}).code

const tsTranspile = (content: string) => ts.transpile(content, null)

export const babelExecute = (file: string, ...args?: string[] = []) =>
  vm.runInNewContext(`${tsTranspile(babelTranspile(read(file)))}`, { exports: {} })(...args)

export const tsExecute = (file: string) => vm.runInNewContext(tsTranspile(read(file)))
