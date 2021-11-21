var background
var cash
var thief
var player1,player_running;

function preload(){
player_running=loadAnimation("sprites/player2_2_-removebg-preview(1).png","sprites/player2_4_-removebg-preview.png")
thief=loadImage("sprites/thief1.png.png")

}

function setup() {
  createCanvas(800,400);
  player1=createSprite(400, 200, 50, 50);
  player1.addAnimation("running",player_running)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}