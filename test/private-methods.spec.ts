import { Counter } from './private-methods'
import { execute } from './helpers'

const proposal = 'private-methods'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  const counter = new Counter()
  expect(counter.getCount()).toEqual(0)
  expect(counter.increment().getCount()).toEqual(1)
})
