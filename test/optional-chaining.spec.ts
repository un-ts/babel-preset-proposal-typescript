import { babelExecute, tsExecute } from './helpers'

const proposal = 'optional-chaining'

test(proposal, () => {
  expect(() => tsExecute(proposal)).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal)).toBe(undefined)
  expect(() => babelExecute(proposal, {})).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal, {
    b: [{}]
  })).toBe(undefined)
  expect(() => babelExecute(proposal, {
    b: [{ c() {} }]
  })).toThrowErrorMatchingSnapshot()
  expect(babelExecute(proposal, {
    b: [{ c:()=> ({d: 'd'}) }]
  })).toBe('d')
})
