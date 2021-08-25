var road, trail;
var jaxonrun, jaxon_running;
function preload(){
  //pre-load images
  trail = loadImage("path.png");
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("road", trail);
  path.velocityY = 4;
  path.scale=1.2;

  jaxon = createSprite(200,350);
  jaxon.addAnimation("jaxonrun", jaxon_running);
  jaxon.scale = 0.1;
  
}

function draw() {
  background(0);
 
  if(path.y > 400){
    path.y = height/2;
  }
  jaxon.x = World.mouseX;
  drawSprites();
}
