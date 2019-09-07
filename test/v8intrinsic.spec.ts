import { execSync } from 'child_process'
import fs from 'fs'

import tempy from 'tempy'

import { execute, read, resolve } from './helpers'

import { transform } from '@babel/core'

const proposal = 'v8intrinsic'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  const transformed = transform(read(proposal), {
    filename: resolve(proposal),
  }).code
  expect(transformed).toContain('%GetOptimizationStatus(fn)')
  const tempFile = tempy.file({ extension: 'js' })
  fs.writeFileSync(tempFile, transformed)
  const output = execSync('node --allow-natives-syntax ' + tempFile).toString()
  fs.unlinkSync(tempFile)
  expect(output).toBe('1')
})
