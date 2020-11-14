class Fence{
  constructor(x, y){
      this.body = createSprite(x,y, displayWidth, 10)
      this.image = loadImage("../images/fences.png")
      this.body.addImage(this.image)
  }
    display(){

    drawSprites();
    }
}