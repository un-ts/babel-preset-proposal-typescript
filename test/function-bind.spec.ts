import { babelExecute, tsExecute } from './helpers'

const proposal = 'function-bind'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal)).toEqual([2, 10, 15])
})
