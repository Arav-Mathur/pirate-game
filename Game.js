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
  
  
  
  //cannon_array = [cannon_img,ecannon_img]
  //cannon = createSprite(200, 400, 20, 20);
     
        
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
               ship_array[index-1].x = allPlayers[plr].distance
               
               
                if(index === player.index){

                    if(keyDown(LEFT_ARROW)){
                        player.distance-=3
                        player.update()
                    }
                    if(keyDown(RIGHT_ARROW)){
                        player.distance+=3
                        player.update()
                    }
                    
                
                    if(index === 1){
                        text("health: "+allPlayers[plr].health,40,340);
                        
                        ship.addImage(shipr_img);
                        eship.addImage(eshipr_img);
                        if(keyDown("space")){
                            cannon = createSprite(200, allPlayers[plr].cannon_y, 20, 20);
                            cannon.addImage(cannon_img);
                            //cannon.y = allPlayers[plr].cannon_y
                            player.cannon_y-=10
                            player.update();
                        }
                        

                    }else{
                        text("health: "+allPlayers[plr].health,40,40);
                        ship.addImage(shipr_img);
                        eship.addImage(eshipr_img);
                        if(keyDown("space")){
                            ecannon = createSprite(200,allPlayers[plr].ecannon_y, 20, 20);
                            ecannon.addImage(ecannon_img);
                            //ecannon.y = allPlayers[plr].ecannon_y;
                            player.ecannon_y+=10;
                            player.update();
                        }
                    
                        
                    }
                    
           
                }
                console.log(player.index);
                
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