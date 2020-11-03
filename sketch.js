var movingrect;
var standingrect;

function setup() {
  createCanvas(800,400);

  movingrect=createSprite(400, 200, 50, 50);
  standingrect=createSprite(200,200,50,50)
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(standingrect.x-movingrect.x < (movingrect.width+standingrect.width)/2&&
  standingrect.y-movingrect.y<(movingrect.height+standingrect.height)/2
  &&
  movingrect.y-standingrect.y<(movingrect.height+standingrect.height)/2
&&
movingrect.x-standingrect.x < (movingrect.width+standingrect.width)/2
  ){
    standingrect.shapeColor="blue"
    movingrect.shapeColor="green"
  }
  else {
    standingrect.shapeColor="pink"
    movingrect.shapeColor=rgb(255, 0, 229)
  }

  drawSprites();
}