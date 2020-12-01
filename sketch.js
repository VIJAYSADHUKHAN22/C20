var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600,400,80,30);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  
}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.y-movingRect.y< movingRect.height/2+fixedRect.height/2 &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){

    movingRect.shapeColor="green";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  
  drawSprites();
}