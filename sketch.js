
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var background,backgroundImage      


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage=loadImage("jungle.jpg")
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
 ground= createSprite(400,350,900,10);
  
  ground.X=ground.Width/2;
  console.log(ground.X);
  FoodGroup=new Group();
  
  background=createSprite(300,315,100,100)
  background.addImage("backgroundImage")
}


function draw() {
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    
  
   }
  monkey.velocityY=monkey.velocityY+0.8
  
  
  
  monkey.collide(ground)
drawSprites();
  Food();
  obstacles();
}
function Food(){
  if(frameCount%80===0 ){
    Banana=createSprite(200,150,40,40);
    Banana.scale=0.05;
    Banana.y=Math.round(random(120,200));
     Banana.addImage(bananaImage); 
    Banana.velocityX=-4
    Banana.setLifetime=200
    FoodGroup.add(Banana)
  }
}

 function obstacles(){
   if(frameCount%300===0){
     var obstacles=createSprite(600,320,10,40);
     obstacles.velocityX=-6;
     obstacles.scale=0.2;
     
     obstacles.lifetime=400
     obstacles.addImage(obstacleImage)
   }
   
 }



















