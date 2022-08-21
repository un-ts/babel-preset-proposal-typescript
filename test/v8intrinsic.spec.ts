import { execSync } from 'node:child_process'

import { execute, resolve } from './helpers.js'

const proposal = 'v8intrinsic'

test(proposal, async () => {
  expect(() => execute(proposal + '.cjs')).toThrowErrorMatchingSnapshot()
  await expect(
    // @ts-expect-error
    import('./v8intrinsic.cjs'),
  ).rejects.toThrowErrorMatchingSnapshot()
  expect(
    execSync(
      `node --allow-natives-syntax ${resolve(
        proposal,
        // TODO: make `.ts` working again
      )}.cjs`,
    ).toString(),
  ).toBe('1')
})
