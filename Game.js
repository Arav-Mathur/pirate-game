class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gamestate');
        gameStateRef.on("value", function (data) {
            Gamestate = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            Gamestate: state
        });
    }

    start(){
        if(Gamestate===0){
            player= new Player();
            player.getCount();
                
            form=new Form();
            form.display();
        }
    eship = createSprite(200, 50, 50, 50);
  ship = createSprite(200, 550, 50, 50);
  ecannon = createSprite(200, 200, 20, 20);
  cannon = createSprite(200, 400, 20, 20);
  ob = createSprite(100, 300, 80, 30);
    }
    play(){
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

}