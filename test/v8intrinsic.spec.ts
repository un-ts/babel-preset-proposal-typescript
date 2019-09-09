import { execSync } from 'child_process'

import { execute, resolve } from './helpers'

const proposal = 'v8intrinsic'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(() => require('./v8intrinsic')).toThrowErrorMatchingSnapshot()
  expect(
    execSync(`node --allow-natives-syntax ${resolve(proposal)}.ts`).toString(),
  ).toBe('1')
})
