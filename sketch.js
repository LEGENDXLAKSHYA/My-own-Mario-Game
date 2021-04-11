
function preload(){
    coinsImage=loadAnimation("images/coin1.gif","images/coin2.gif","images/coin3.gif",
    "images/coin4.gif","images/coin5.gif","images/coin6.gif","images/coin7.gif",
    "images/coin8.gif","images/coin9.gif","images/coin10.gif","images/coin11.gif");
    obstacleImage = loadImage("images/obstacle.png");
    playerRunning = loadAnimation("images/playerrunning1.png","images/playerrunning2.png","images/playerrunning3.png",
    "images/playerrunning4.png","images/playerrunning5.png","images/playerrunning6.png","images/playerrunning7.png",
    "images/playerrunning8.png","images/playerrunning9.png","images/playerrunning10.png");
    playerCollided=loadAnimation("images/playerrunning10.png")
}

function setup(){
    createCanvas(600,200);

    player = createSprite(50,160,20,50);
    player.addAnimation("running",playerRunning);
    player.addAnimation("collided",playerCollided);
    player.scale=0.5;
    
    
    ground=createSprite(300,190,600,20);
    ground.shapeColor="#555555";
    
    
}

function draw(){
    background("black");
    player.collide(ground);
    if(keyDown("space")) {
        player.velocityY = -12;
        
    }
   player.velocityY = player.velocityY + 0.8
  
    spawnObstacles();
    drawSprites();
}

function spawnObstacles(){
    if (frameCount % 90 === 0){
      var obstacle = createSprite(600,165,10,40);
      obstacle.velocityX = -5 
      obstacle.addImage(obstacleImage);                
       obstacle.scale = 0.2;
      
      
    }
   }