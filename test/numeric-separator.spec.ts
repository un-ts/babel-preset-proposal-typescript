import { babelExecute, tsExecute } from './helpers'

const proposal = 'numeric-separator'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal)).toEqual([10 ** 12, true, 'a0', 160, 'b0', 176, 'c0', 192])
})
