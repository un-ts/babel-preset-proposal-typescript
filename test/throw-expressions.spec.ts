import { execute } from './helpers.js'
import _ from './throw-expressions.js'

const proposal = 'throw-expressions'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return -- `throw` expressions cannot be typed by TypeScript
  expect(() => _()).toThrow('Argument required')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- `throw` expressions cannot be typed by TypeScript
  expect(_(proposal)).toBe(proposal)
})
