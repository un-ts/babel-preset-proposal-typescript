import { Counter, Resource } from './private-methods'
import { execute } from './helpers'

const proposal = 'private-methods'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  const counter = new Counter()
  expect(counter.getCount()).toBe(0)
  expect(counter.increment().getCount()).toBe(1)
  expect(new Resource('test').status).toBe('test_loaded')
  expect(new Resource('test2').status).toBe('test2_loaded')
})
