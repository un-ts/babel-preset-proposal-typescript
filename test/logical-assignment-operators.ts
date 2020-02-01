export const case1 = (a: number, b: number) => [a, (b ||= a)]
export const case2 = (a: number, b: number) => [a, (b &&= a)]
export const case3 = (a: number, b: number) => [a, (b ??= a)]
