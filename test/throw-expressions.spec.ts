import { babelExecute, tsExecute } from './helpers'

const proposal = 'throw-expressions'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(() => babelExecute(proposal)).toThrow('Argument required')
  expect(babelExecute(proposal, proposal)).toBe(proposal)
})
