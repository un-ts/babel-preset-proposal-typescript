import { Counter } from './class-properties'
import { execute } from './helpers'

const proposal = 'class-properties'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  const counter = new Counter()
  expect(counter.getCount()).toEqual(0)
  expect(counter.increment().getCount()).toEqual(1)
})
