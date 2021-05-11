import _ from './async-do-expressions'
import { execute } from './helpers'

const proposal = 'async-do-expressions'

test(proposal, async () => {
  expect(() => execute(proposal)).toThrow(
    'await is only valid in async function',
  )
  expect(await _()).toEqual([2, 6])
})
