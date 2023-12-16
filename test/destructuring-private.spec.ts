import _ from './destructuring-private.js'
import { execute } from './helpers.js'

const proposal = 'destructuring-private'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot(
    `"Unexpected token ';'"`,
  )
  expect(_(1, 0)).toEqual(true)
  expect(_(0, 1)).toEqual(false)
})
