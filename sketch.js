var eship,ship,ecannon,cannon,ob
var database;
var Gamestate = 0;
var playerCount = 0;
var form,game,player

function preload(){

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
if(gamestate===1){
  clear();
  game.play();
}
}