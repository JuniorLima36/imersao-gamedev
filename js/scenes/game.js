class Game {
  constructor() {
    this.index = 0
    this.maps = tape.maps
  }

  setup() {
    for (let i = parallaxImages.length - 1; i >= 0; i--) {
      layers[i] = new Scenario(parallaxImages[i], parallaxTimes[i])
    }

    score = new Score()
    life = new Life(tape.config.maximumLife, tape.config.initialLife)

    character = new Character({
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

    enemies.push(enemy, troll, flying)
  }

  keyPressed(key) {
    if (key == 'ArrowUp' || key == ' ') {
      character.jump()
    }
  }

  draw() {
    for (let i = layers.length - 1; i >= 0; i--) {
      layers[i].display()
      layers[i].movement()
    }

    character.display()
    character.applyGravity()

    const currentLine = this.maps[this.index]
    const enemy = enemies[currentLine.enemy]

    enemy.display()
    enemy.movement()

    if (enemy.alreadyPassed()) {
      this.index = ++this.index % this.maps.length

      enemy.speed = currentLine.speed
      enemy.toAppear()
    }

    if (character.isColliding(enemy)) {
      life.loseLife()

      if (life.lives <= 0) {
        this.gameOver()
      }

      character.becomeInvincible()
    }

    life.display()
    score.display()
    score.addPoint()
  }

  gameOver() {
    image(gameOverImage, (width / 2) - (gameOverImage.width / 2), (height / 2) - (gameOverImage.height / 2))

    noLoop()
  }
}
