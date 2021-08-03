class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.bullets =15;
        this.health = 5;
        this.cannon 
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
            health:this.health
        })
 
     }
     static get_PlayerInfo(){
        var playerInfoRef= database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}
