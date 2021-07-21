class Form{
    constructor() {
        this.input= createInput('Anonymous');
        this.button= createButton('Play');
        this.greeting= createElement('h2');
        this.reset= createButton('reset')
    }
    display(){
        var title= createElement('h1');
        title.html("Pirate game");
        title.position(120,10);
        this.input.position(120,200);
        this.button.position(180,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(120,200)

        })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    }
    