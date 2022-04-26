var bg
var estadoJogo=0

function preload(){
  bg= loadImage("imagens/fundo do jogo.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(bg);
  if(estadoJogo===0){
    fill("black")
    text("Beach Valley", (windowWidth-500)/2,300)
  }
  drawSprites();
  }