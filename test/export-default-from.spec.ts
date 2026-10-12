import { Test } from './export-default-from.js'
import { execute } from './helpers.js'

const proposal = 'export-default-from'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(new Test(2).a).toBe(1)
})
