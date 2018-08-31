import _ from './optional-chaining'

import { execute } from './helpers'

const proposal = 'optional-chaining'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(_()).toBe(undefined)
  expect(() => _({})).toThrowErrorMatchingSnapshot()
  expect(
    _({
      b: [{}],
    }),
  ).toBe(undefined)
  expect(() =>
    _({
      b: [{ c() {} }],
    }),
  ).toThrowErrorMatchingSnapshot()
  expect(
    _({
      b: [{ c: () => ({ d: 'd' }) }],
    }),
  ).toBe('d')
})
