class Score {
  constructor() {
    this.points = 0
  }

  display() {
    textAlign(RIGHT)
    textSize(50)
    stroke("#000")

    fill("#000")
    text(parseInt(this.points), width - 28, 52)

    fill("#fff")
    text(parseInt(this.points), width - 30, 50)
  }

  addPoint() {
    this.points += 0.2
  }
}
