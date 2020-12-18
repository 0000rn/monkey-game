
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4
ground.x=ground.width/2;
console.log(ground.x)

  
}


function draw() {
if (keyDown("SPACE")){
  monkey.velocityX=-2
}
  
monkey.velocityX=monkey.velocityX+0.8;
monkey.collide(ground);
  drawSprites();
}


function food() {
  if(framecount % 80 === 0) {
    var banana = createSprite (600,250,40,10);
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-5
    banana.lifetime=300;
    player.depth=banana.depth+1;
    FoodGroup.add(banana);
  }
}
  
  
 function rock(){
   if (framecount % 300 ===0){
var obstacle = createSprite (800,350,10,40)
obstacle.velocityX=-6;
obstacle.addImage(obstacleImage)
obstacle.scale=0.2;
obstacle.lifetime=300;
obstacle
   }
 }