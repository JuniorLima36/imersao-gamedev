function preload() {
  homeScreenImage = loadImage('./assets/initialScreen.png')
  fontInitialScreen = loadFont('./assets/font-initial-screen.otf')

  characterImage = loadImage('./assets/running.png')

  enemyImage = loadImage('./assets/droplet.png')
  trollImage = loadImage('./assets/troll.png')
  flyingImage = loadImage('./assets/droplet-flying.png')

  lifeImage = loadImage('./assets/heart.png')

  soundGame = loadSound('./assets/sounds/gameTrail.mp3')
  soundJump = loadSound('./assets/sounds/soundJump.mp3')

  for (let i = 0; i < 10; i++) {
    parallaxImages[i] = loadImage(`./assets/paralax/${i + 1}.png`)
  }

  gameOverImage = loadImage('./assets/game-over.png')
  tape = loadJSON('./js/tape.json')
}
