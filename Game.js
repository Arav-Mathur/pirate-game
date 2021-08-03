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
            gamestate: state
        });
    }

    start(){
        if(Gamestate===0){
            player= new Player();
            player.getCount();
                
            form=new Form();
            form.display();
        }
        
    eship = createSprite(200, 50, 80, 50);
  ship = createSprite(200, 550, 80, 50);
  ship_array = [ship,eship];
  cannon_array = [cannon_img,ecannon_img]
  //ecannon = createSprite(200, 200, 20, 20);
  //cannon = createSprite(200, 400, 20, 20);
        //cannon.addImage(cannon_img);
        //ecannon.addImage(ecannon_img);
    }
    play(){

        Player.get_PlayerInfo();
        background(bg);
        form.hide();

        this.obf();
drawSprites();
        if(allPlayers !== undefined){
            var index = 0

            for(var plr in allPlayers ){
                index+=1;
               
                if(index === player.index){

                    if(keyDown(LEFT_ARROW)){
                        ship_array[index-1].x +=-3;
                    }
                    if(keyDown(RIGHT_ARROW)){
                        ship_array[index-1].x +=3;

                    }
                    
                
                    if(index === 1){
                        text("health: "+allPlayers[plr].health,40,340);
                        
                        ship.addImage(shipr_img);
                        eship.addImage(eshipr_img);
                        
                        

                    }else{
                        text("health: "+allPlayers[plr].health,40,40);
                        eship.addImage(shipr_img);
                        ship.addImage(eshipr_img);
                        
                    
                        
                    }
                }
                console.log(player.index);
                
            }
            if(keyDown("space")){
                cannon = createSprite(200, 550, 20, 20);
                cannon.addImage(cannon_img);
                cannon.velocityY = -5;
            }

        }
         // drawSprites();

    }
    obf(){
    if (World.frameCount % 100 === 0) {
        ob = createSprite(0, 300, 80, 30);
        ob.addImage(ob_img);
        ob.velocityX = 5;
        ob.lifetime = 450;
        }
    }
}