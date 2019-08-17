export class Counter {
  x = 0

  #increment() {
    this.x++
    return this
  }

  increment() {
    return this.#increment()
  }

  getCount() {
    return this.x
  }
}
