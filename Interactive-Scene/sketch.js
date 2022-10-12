// Interactive-Scene
// Will
// September 20, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = "start";
let mainBg, startBg, targetDummy, uzi1, uzi2, uzi3;
let bX, bY, bW, bH;
let tLength, uLength;
let frameLength;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bX = width / 2 - 150;
  bY = height / 2 - 75;
  bW = 300;
  bH = 150;
  tLength = 300, uLength = 350;
  frameLength = 100;
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
    shootGun();
  }
}

function mousePressed() {
  if (state === "start" && mouseInBox(bX, bX + 300, bY, bY + 150)) {
    state = "main";
  }
  else if (state === "main") {
    state === "shoot";
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
  image(targetDummy, width / 2, height - tLength, tLength, tLength);
  image(targetDummy, width / 2 - tLength, height - tLength, tLength, tLength);
  image(targetDummy, width / 2 - tLength * 2, height - tLength, tLength, tLength);
  image(targetDummy, width / 2 + tLength, height - tLength, tLength, tLength);
}


function shootGun(){
  state = "main";
}