import _ from './numeric-separator'

import { execute } from './helpers'

const proposal = 'numeric-separator'

test(proposal, () => {
  const expectResult = [10 ** 12, true, 'a0', 160, 'b0', 176, 'c0', 192]
  expect(execute(proposal)).not.toEqual(expectResult)
  expect(_()).toEqual(expectResult)
})
