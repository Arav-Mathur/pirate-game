class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.bullets =15;
        this.health = 5;
        this.distance = 200;
        this.cannon_y = 550;
        this.ecannon_y = 50;
    }
    getCount(){
        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount= data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(){
        var playerIndex= "players/player"+this.index; 
        database.ref(playerIndex).set({
            name: this.name,
            bullets: this.bullets,
            health: this.health,
            distance: this.distance,
            cannon_y: this.cannon_y,
            ecannon_y: this.ecannon_y
        })
 
     }
     static get_PlayerInfo(){
        var playerInfoRef= database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}
