import { babelExecute, tsExecute } from './helpers'

const proposal = 'do-expressions'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal, 20)).toBe('big')
  expect(babelExecute(proposal, 0)).toBe('small')
})
