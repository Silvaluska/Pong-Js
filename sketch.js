let xBolinha = 300;
let yBolinha = 200;
let vxBolinha = 4;
let vyBolinha = -4;
let yBarra1 = 165;
let yBarra2 = 165
let pontos1 = 0;
let pontos2 = 0;
let ponto;
let raquetada;
let trilha;
let chanceDeErrar = 0;

function preload(){
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, 20);
  
  xBolinha += vxBolinha;
  if (xBolinha > 590 || xBolinha < 10){
    vxBolinha *= -1
    ponto.play()
  }
  
  yBolinha += vyBolinha;
  if (yBolinha > 390 || yBolinha < 10){
    vyBolinha *= -1
  }  
  
  rect(10, yBarra1, 10, 70);
  if (xBolinha < 30 && yBolinha >= yBarra1 && yBolinha <= (yBarra1+70)){
    xBolinha = 26
    vxBolinha *= -1
    raquetada.play()
    }
  
  rect(580, yBarra2, 10, 70);
  if (xBolinha > 570 && yBolinha >= yBarra2 && yBolinha <= (yBarra2+70)){
    xBolinha = 574
    vxBolinha *= -1
    raquetada.play()
    }
  
  if (keyIsDown(UP_ARROW)) {
    yBarra1 -= 4;
  }
  else if(keyIsDown(DOWN_ARROW)) {
    yBarra1 += 4;
  }
  
  if (yBolinha > (yBarra2+35)) {
    yBarra2 += 3.5 + chanceDeErrar
  }
  else if (yBolinha < (yBarra2+35)) {
    yBarra2 -= 3.5 + chanceDeErrar
  }
  
  placar()
  gol()
}

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(20)
  fill(color(0,255,0))
  rect(180, 7.5, 40, 25)
  rect(380, 7.5, 40, 25)
  fill(255);
  text(pontos1, 200, 26)
  text(pontos2, 400, 26)
}

function gol(){
  if (xBolinha > 590) {
    xBolinha = 575
    pontos1 += 1
    erroOponente()
    }
  if (xBolinha < 10) {
    xBolinha = 25
    pontos2 += 1
    erroOponente()
  }
}

function erroOponente(){
  if (pontos1 > pontos2){
    chanceDeErrar += 0.2
  }
  else {
    chanceDeErrar -= 0.2
  }
}