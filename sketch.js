var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
fixedrect=createSprite(400, 100, 50, 80);
fixedrect.shapeColor="green"
movingrect=createSprite(400, 400, 80, 30);
movingrect.shapeColor="green"
movingrect.velocityY=-5
fixedrect.velocityY=5
}

function draw() {
  background(0);
 // movingrect.x=World.mouseX;
//movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
     movingrect.velocityX= movingrect.velocityX*-1
     fixedrect.velocityX= fixedrect.velocityX*-1 
    }
    
    if(movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2 
    && fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2){
    movingrect.velocityY=movingrect.velocityY*-1
    fixedrect.velocityY=fixedrect.velocityY*-1    
      //movingrect.shapeColor="red"
    //fixedrect.shapeColor="red"
  }
  //else{
    //fixedrect.shapeColor="green"
    //movingrect.shapeColor="green"
  //}
  drawSprites();
}