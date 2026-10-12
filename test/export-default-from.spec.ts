import { Test } from './export-default-from.js'
import { execute } from './helpers.js'

const proposal = 'export-default-from'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access -- `export v from` cannot be typed by TypeScript
  expect(new Test(2).a).toBe(1)
})
