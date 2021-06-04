const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var soldire2
var soldire1
var soldires = []

var sol1,solimg
function preload() {
  bgimg = loadImage("images/bg.png");
  solimg = loadImage("images/gunplayer.png")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
 
  engine = Engine.create();
   world = engine.world;
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bgimg)
  Engine.update(engine);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
