var eship,ship,ecannon,cannon,ob,ship_array,cannon_array
var database;
var Gamestate = 0;
var playerCount = 0;
var form,game,player
var allPlayers
var bg,shipr_img,shipl_img,eshipr_img,eshipl_img,cannon_img,ecannon_img,ob_img

function preload(){
  bg = loadImage("images/bg.png");
  shipr_img = loadImage("images/ship r.png");
  shipl_img = loadImage("images/ship l.png");
  eshipr_img = loadImage("images/eship r.png");
  eshipl_img = loadImage("images/eship l.png");
  cannon_img = loadImage("images/cannonball.png");
  ecannon_img = loadImage("images/ecannon1.png");
  ob_img= loadImage("images/obstacle.png");

}
function setup() {
  createCanvas(400,600);
  database= firebase.database();

  game = new Game();
  game.getState();
  game.start();

  


}

function draw() {
  background("blue");  

  

  if(playerCount===2){
    game.update(1);
}
if(Gamestate===1){
  clear();
  game.play();
}
}