class Character extends Animation {
  constructor({ image, _width, _height, widthSprites, heightSprites, numberFrames }, x, deltaY, soundJump) {

    super({ image, _width, _height, widthSprites, heightSprites, numberFrames }, x, deltaY)

    this.yInitial = this.y

    this.soundJump = soundJump

    this.jumpSpeed = 0
    this.jumpHeight = 50
    this.gravity = 6
    this.maxJumps = 2
    this.jumpsHappening = 0

    this.isInvincible = false
  }

  jump() {
    if (this.jumpsHappening < this.maxJumps) {
      this.jumpSpeed = - this.jumpHeight
      this.soundJump.play()
      this.jumpsHappening++
    }
  }

  applyGravity() {
    this.y = this.y + this.jumpSpeed
    this.jumpSpeed = this.jumpSpeed + this.gravity

    if (this.y > this.yInitial) {
      this.y = this.yInitial
      this.jumpsHappening = 0
    }
  }

  becomeInvincible() {
    this.isInvincible = true

    setTimeout(() => {
      this.isInvincible = false
    }, 1000)
  }

  isColliding(enemy) {
    if (this.isInvincible) {
      return false
    }

    const precision = 0.7

    if (debugMode) {
      noFill()
      stroke("red")
      circle(this.x + (this._width / 2), this.y + (this._height / 2), Math.max(this._width, this._height) * precision)
      circle(enemy.x + (enemy._width / 2), enemy.y + (enemy._height / 2), Math.min(enemy._width, enemy._height) * precision)
    }

    const collision = collideCircleCircle(
      this.x + (this._width / 2),
      this.y + (this._height / 2),
      Math.max(this._width, this._height) * precision,

      enemy.x + (enemy._width / 2),
      enemy.y + (enemy._height / 2),
      Math.min(enemy._width, enemy._height) * precision
    )

    return collision
  }
}
