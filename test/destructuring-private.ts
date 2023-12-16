class Point {
  x: number
  #y = 0

  constructor(x: number, y: number) {
    this.x = x
    this.#y = y
  }

  equalsTo({ x, #y: y }: this) {
    return this.x === x && this.#y === y
  }
}

export default (x: number, y: number) =>
  new Point(x, y).equalsTo(new Point(1, 0))
