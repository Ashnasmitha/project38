var database;
var gameState=0,playerCount;
var form,player,game,allPlayers;
var cars,car1,car2,car3,car4;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-100,displayHeight-150);

  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
   if(playerCount===4){
     game.update(1);
   }
   if(gameState===1){
     clear();
     game.play();
   }

  
}

