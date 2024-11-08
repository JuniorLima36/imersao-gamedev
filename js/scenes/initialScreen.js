class InitialScreen {
  keyPressed(key) {
    if (key == 'Enter') {
      currentScene = 'game'
    }
  }

  draw() {
    this.backgroundImage()
    this.text()
  }

  backgroundImage() {
    image(homeScreenImage, 0, 0, width, height)
  }

  text() {
    textAlign(CENTER)
    textFont(fontInitialScreen)

    textSize(45)
    text('As aventuras de', width / 2, 110)

    textSize(75)
    text('Hipsta', width / 2, 160)

    textSize(30)
    text('aperte enter para iniciar o jogo', width / 2, 210)
  }
}
