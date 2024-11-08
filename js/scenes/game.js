class Game {
  constructor() {
    this.index = 0
    this.maps = tape.maps
  }

  setup() {
    this.layers = []
    for (let i = parallaxImages.length - 1; i >= 0; i--) {
      this.layers[i] = new Scenario(parallaxImages[i], parallaxTimes[i])
    }

    this.score = new Score()
    this.life = new Life(tape.config.maximumLife, tape.config.initialLife)

    this.character = new Character({
      image: characterImage,
      _width: 110,
      _height: 135,
      widthSprites: 4,
      heightSprites: 4,
    }, 0, 25, soundJump)

    const enemy = new Enemy({
      image: enemyImage,
      _width: 52,
      _height: 52,
      widthSprites: 4,
      heightSprites: 7
    }, width - 52, 25, 10)

    const troll = new Enemy({
      image: trollImage,
      _width: 200,
      _height: 200,
      widthSprites: 5,
      heightSprites: 6,
      numberFrames: 28
    }, 2 * width, 0, 10)

    const flying = new Enemy({
      image: flyingImage,
      _width: 100,
      _height: 75,
      widthSprites: 3,
      heightSprites: 6,
      numberFrames: 16
    }, 3 * width, 200, 10)

    this.enemies = [enemy, troll, flying]
  }

  keyPressed(key) {
    if ((key === 'ArrowUp' || key === ' ') && this.life.lives > 0) {
      this.character.jump()
    } else if (this.life.lives <= 0 && key === 'Enter') {
      this.restart()
    }
  }

  draw() {
    for (let i = this.layers.length - 1; i >= 0; i--) {
      this.layers[i].display()
      this.layers[i].movement()
    }

    this.character.display()
    this.character.applyGravity()

    const currentLine = this.maps[this.index]
    const enemy = this.enemies[currentLine.enemy]

    enemy.display()
    enemy.movement()

    if (enemy.alreadyPassed()) {
      this.index = ++this.index % this.maps.length
      enemy.speed = currentLine.speed
      enemy.toAppear()
    }

    if (this.character.isColliding(enemy)) {
      this.life.loseLife()

      if (this.life.lives <= 0) {
        this.gameOver()
      }

      this.character.becomeInvincible()
    }

    this.life.display()
    this.score.display()
    this.score.addPoint()
  }

  gameOver() {
    image(gameOverImage, (width / 2) - (gameOverImage.width / 2), (height / 2) - (gameOverImage.height / 2))
    noLoop()
  }

  restart() {
    this.index = 0
    this.setup()
    loop()
  }
}
