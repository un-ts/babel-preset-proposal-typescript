const BIG = 'big'
const SMALL = 'small'

export default (num: number): typeof BIG | typeof SMALL => do {
  if (num > 10) {
    // eslint-disable-next-line no-unused-expressions
    BIG
  } else {
    // eslint-disable-next-line no-unused-expressions
    SMALL
  }
}
