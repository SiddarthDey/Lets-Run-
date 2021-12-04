var path,boy,edges
var pathImg,boyImage

function preload(){

  pathImg=loadImage("path.png")
  boyImage=loadAnimation("Runner-1.png","Runner-2.png")
 
}

function setup(){

  createCanvas(400,400);

 path=createSprite(200,200)
 path.addImage(pathImg)
 path.velocityY=4
 path.scale=1.2;

 boy=createSprite(200,200)
  boy.addAnimation("running",boyImage)
  boy.scale=0.1

  edges=createEdgeSprites()

}

function draw() {
  background(0);

  if(path.y > 400 ){
    path.y= height/2;
  }

  boy.x=mouseX
  boy.collide(edges)

  drawSprites()

}
