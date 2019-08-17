export const case1 = (a, b) => [a, b ||= a]
export const case2 = (a, b) => [a, b &&= a]
export const case3 = (a, b) => [a, b ??= a]
