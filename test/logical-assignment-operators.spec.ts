import { case1, case2, case3 } from './logical-assignment-operators'
import { execute } from './helpers'

const proposal = 'logical-assignment-operators'

test(proposal, () => {
  expect(() => execute(proposal)).toThrowErrorMatchingSnapshot()
  expect(case1(0, 2)).toEqual([0, 2])
  expect(case1(2, 0)).toEqual([2, 2])
  expect(case2(0, 2)).toEqual([0, 0])
  expect(case2(2, 0)).toEqual([2, 0])
  expect(case3(0, 2)).toEqual([0, 2])
  expect(case3(2, 0)).toEqual([2, 0])
})
