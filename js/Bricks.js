class Brick{
  constructor(x, y){
      this.body = createSprite(x,y, displayWidth, 10)
      this.image = loadImage("../images/brick.png")
      this.body.addImage(this.image)
  }
    display(){

    drawSprites();
    }
}