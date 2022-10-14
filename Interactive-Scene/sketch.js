// Interactive-Scene
// Will
// September 20, 2022
//
// Extra for Experts:
// Added in some sound for shooting and hit effects 


let state = "start";
let mainBg, startBg, targetDummy, uzi1, uzi2, uzi3;
let bX, bY, bW, bH;
let tLength, uLength;
let s;
let img;
let frameWait, lastTimeSwitched;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bX = width / 2 - 150;
  bY = height / 2 - 75;
  bW = 300;
  bH = 150;
  tLength = 300, uLength = 350;
  img = "one";
  frameWait = 5000;
  lastTimeSwitched = 0;
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main"){
    image(mainBg, 0, 0, width, height);
    drawDummies();
    drawGunMain();
  }
  if (state === "shoot") {
    if (mouseIsPressed){
      image(mainBg, 0, 0, width, height);
      drawDummies();
      shootGun();
    }
    state = "main";
  }
}

function mousePressed() {
  if (state === "start" && mouseInBox(bX, bX + 300, bY, bY + 150)) {
    state = "main";
  }
  else if (state === "main"){
    state = "shoot";
  }
}

function startScreen() {
  if (mouseInBox(bX, bX + 300, bY, bY + 150)) {
    fill("grey");
  }
  else {
    fill("black");
  }
  rect(bX, bY, bW, bH);
}

function mouseInBox(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;

}

function preload() {
  mainBg = loadImage("background.png");
  targetDummy = loadImage("target.png");
  uzi1 = loadImage("tile000.png");
  uzi2 = loadImage("tile001.png");
  uzi3 = loadImage("tile002.png");
}

function drawGunMain(){
  image(uzi1, mouseX, height - uLength + 50, uLength, uLength);
}

function drawDummies(){
  image(targetDummy, width / 2, height - tLength - 100, tLength, tLength);
  image(targetDummy, width / 2 - tLength, height - tLength, tLength, tLength);
  image(targetDummy, width / 2 - tLength * 2, height - tLength - 50, tLength, tLength);
  image(targetDummy, width / 2 + tLength, height - tLength, tLength, tLength);
}

function shootGun(){
  animateCalc();
  animateGun();
}

function animateGun(){
  if (img === "one"){
    image(uzi1, mouseX, height - uLength + 50, uLength, uLength);
  }
  else if (img === "two"){
    image(uzi2, mouseX, height - uLength + 50, uLength, uLength);
  }
  else if (img === "three"){
    image(uzi3, mouseX, height - uLength + 50, uLength, uLength);
  }
  
}

function animateCalc(){
  if (img === "one" && millis() < frameWait + lastTimeSwitched){
    img = "two";
    lastTimeSwitched = millis();
  }
  else if (img === "two" && millis() < frameWait + lastTimeSwitched){
    img = "three";
    lastTimeSwitched = millis(); 
  }
  else if (img === "three" && millis() < frameWait + lastTimeSwitched){
    img = "one";
    lastTimeSwitched = millis();
  }
  
}

function resetBg(){
  image(mainBg, 0, 0, width, height);
  drawDummies;
}
