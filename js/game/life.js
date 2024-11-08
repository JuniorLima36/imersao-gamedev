class Life {
  constructor(maximum, initial) {
    this.maximum = maximum
    this.initial = initial
    this.lives = initial

    this._width = 50
    this._height = 50

    this.xInicial = 20
    this.y = 20
  }

  display() {
    for (let i = 0; i < this.lives; i++) {
      const margin = 10
      const position = this.xInicial + (i * (this._width + margin))
      image(lifeImage, position, this.y, this._width, this._height)
    }
  }

  gainLife() {
    if (this.lives < this.maximum) {
      this.lives++
    }
  }

  loseLife() {
    this.lives--
  }
}
