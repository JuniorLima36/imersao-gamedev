class Enemy extends Animation {
  constructor({ image, _width, _height, widthSprites, heightSprites, numberFrames }, x, deltaY, speed ) {
    super({ image, _width, _height, widthSprites, heightSprites, numberFrames }, x, deltaY)

    this.speed = speed
    this.x = width
  }

  movement() {
    this.x -= this.speed
  }

  alreadyPassed() {
    return this.x < - (this._width)
  }

  toAppear() {
    this.x = width
  }
}
