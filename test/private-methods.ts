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

class Loader {
  load(url) {
    return url + '_loaded'
  }
}

export class Resource {
  static #loaderInstance = null;

  static get #loader() {
    if (!this.#loaderInstance) this.#loaderInstance = new Loader();
    return this.#loaderInstance;
  }

  status = null;
  
  constructor(url) {
    this.status = Resource.#loader.load(url);
  }
}
