function setup() {
  createCanvas(960, 540)
  frameRate(40)
  soundGame.loop()

  homeScreen = new InitialScreen()
  game = new Game()
  game.setup()

  scenes = { homeScreen, game }
}

function keyPressed() {
  scenes[currentScene].keyPressed(key)
}

function draw() {
  scenes[currentScene].draw()
}
