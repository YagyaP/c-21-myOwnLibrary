var fixedRect, movingRect;
var rect1,rect2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(1000,100,50,50);
  rect1.shapeColor="green";
  rect1.debug=true;
  rect1.velocityY=5;

  rect2=createSprite(1000,800,50,50);
  rect2.shapeColor="green";
  rect2.debug=true;
  rect2.velocityY=-5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

bounceOff(rect1,rect2);


if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}


  drawSprites();
}

