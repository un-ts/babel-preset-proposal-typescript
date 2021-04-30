const BIG = 'big'
const SMALL = 'small'

export default (num: number): typeof BIG | typeof SMALL => do {
  if (num > 10) {
    BIG
  } else {
    SMALL
  }
}
