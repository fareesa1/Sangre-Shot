var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distanceY = 0;
var distanceX = 0;
var database;
var ground, groundImage;
var ground2, groundImage;
var door, doorImg;
var form, player, game;
var grass_up, grass_down, grass_left,grass_right;
var users, user1, user2, user3, user4;
var bricks, bricks2, brickImg;
var brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10;
var track, user1_img, user2_img, user3_img, user4_img;

function preload(){
  track = loadImage("../images/ground.png");
  grass_down = loadImage("../images/grass.jpg");
  grass_up = loadImage("../images/grass.jpg");
  user1_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user2_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user3_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user4_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  groundImage = loadImage("../images/block.jpg");
  groundImage2 = loadImage("../images/block.jpg");
  brickImg = loadImage("../images/brick.png");
  fencesImg = loadImage("../images/fences.png");
  doorImg = loadImage("../images/gate.png");

}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  ground = createSprite(400, displayHeight - 350)
  ground.addImage(groundImage)
  ground.visible = false;

  ground2 = createSprite(2200, displayHeight - 350)
  ground2.addImage(groundImage2)
  ground2.visible = false;

  
 // fences2 = new Fence(displayWidth - 580, displayHeight + 300)

  bricks = new Brick(displayWidth + 550, displayHeight + 100);

  bricks2 = new Brick(displayWidth - 1100, displayHeight + 100)
  
  door =  createSprite(displayWidth - 300, displayHeight - 80, 10, 200);
  door.addImage(doorImg);

  brick3 = new Brick(displayWidth - 1100, displayHeight + 320);
  brick4 = new Brick(displayWidth + 550, displayHeight + 320);
  brick5 = new Brick(displayWidth + 550, displayHeight + 320);
  // brick6 = new Brick(displayWidth, displayHeight + 0);
  // brick7 = new Brick(displayWidth - 990, displayHeight + 120);
  // brick8 = new Brick(displayWidth + 990, displayHeight + 120);
  // brick9 = new Brick(displayWidth - 1980, displayHeight+ 120);
  // brick10 = new Brick(displayWidth + 1980, displayHeight+120);
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  

   brick3.display();
   brick4.display();
   brick5.display();
  //  brick6.display();
   drawSprites();
}