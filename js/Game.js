class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

    soldire1 = createSprite(550,550,30,30)
    soldire1.addImage(solimg)
    soldire2 = createSprite(750,550,30,30)
    

    soldires = [soldire2,soldire1]

    }
  }

  play(){
    form.hide();
    
    var index = 0;

    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index = 0
      var x=0
      var y;

      var display_position = 130;
      for(var plr in allPlayers){
        index = index+1
        x = x+200
        y = displayHeight - allPlayers[plr].distance
      
        
        soldires[index-1].x = x;
        soldires[index-1].y = y;
        
        
        }
        

    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
  }
   drawSprites();
  }
  
}
