import { execSync } from 'node:child_process'

import { execute, resolve } from './helpers.js'

const proposal = 'v8intrinsic'

test(proposal, async () => {
  expect(() => execute(proposal + '.cjs')).toThrowErrorMatchingSnapshot()
  await expect(
    // @ts-expect-error -- the v8intrinsic syntax is intentionally invalid for TypeScript
    import('./v8intrinsic.cjs'),
  ).rejects.toThrowErrorMatchingSnapshot()
  expect(
    execSync(
      `node --allow-natives-syntax ${resolve(
        proposal,
        // note: the `.ts` extension is not supported by the V8 loader yet
      )}.cjs`,
    ).toString(),
  ).toBeDefined()
})
