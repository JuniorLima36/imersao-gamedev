class Animation {
  constructor(
    {
      image,
      _width,
      _height,
      widthSprites,
      heightSprites,
      numberFrames
    },
    x,
    deltaY
  ) {
    this.image = image

    this._width = _width
    this._height = _height

    this.widthSprites = widthSprites
    this.heightSprites = heightSprites

    this.x = x

    this.deltaY = deltaY
    this.y = height - this._height - this.deltaY

    this.widthSprite = Math.ceil(this.image.width / this.widthSprites)
    this.heightSprite = Math.ceil(this.image.height / this.heightSprites)

    this.currentFrame = 0;
    this.numberFrames = numberFrames || (this.widthSprites * this.heightSprites)
  }

  display() {
    const positionSprite = this.positionSprite(this.currentFrame)

    image(this.image, this.x, this.y, this._width, this._height,
      positionSprite.x, positionSprite.y, this.widthSprite, this.heightSprite)

    this.animate()
  }

  animate() {
    this.currentFrame = (this.currentFrame + 1) % this.numberFrames
  }

  positionSprite(frame) {
    const x = (frame % this.widthSprites) * this.widthSprite
    const y = parseInt(frame / this.widthSprites) * this.heightSprite

    return { x, y }
  }
}
