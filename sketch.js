var eship,ship,ecannon,cannon,ob

function preload(){

}
function setup() {
  createCanvas(400,600);

  eship = createSprite(200, 50, 50, 50);
  ship = createSprite(200, 550, 50, 50);
  ecannon = createSprite(200, 200, 20, 20);
  cannon = createSprite(200, 400, 20, 20);
  ob = createSprite(100, 300, 80, 30);


}

function draw() {
  background("blue");  

  if(keyIsDown(LEFT_ARROW)){
    ship.x+=-10;
    eship.x+=-10
  }
  if(keyIsDown(RIGHT_ARROW)){
    ship.x+=10;
    eship.x+=10;
  }

  drawSprites();
}