// Interactive-Scene
// Will
// September 20, 2022
//
// Extra for Experts:
// Did not do any extra for experts this time.


let state = "start";
let mainBg, startBg, targetDummy, uzi1, uzi2, uzi3, hitmarker;
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
  if (state === "main") {
    image(mainBg, 0, 0, width, height);
    drawDummies();
    drawGunMain();
  }
  if (state === "shoot") {
    if (mouseIsPressed) {
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
  else if (state === "main") {
    state = "shoot";
  }
}

function startScreen() {
  image(startBg, 0, 0, width, height);
  if (mouseInBox(bX, bX + 300, bY, bY + 150)) {
    fill("red");
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
  startBg = loadImage("backgroundstart.png");
  hitmarker = loadImage("hitmarker.png");
}

function drawGunMain() {
  image(uzi1, mouseX, height - uLength + 50, uLength, uLength);
}

function drawDummies() {
  image(targetDummy, width / 2, height - tLength - 100, tLength, tLength);
  image(targetDummy, width / 2 - tLength, height - tLength, tLength, tLength);
  image(targetDummy, width / 2 - tLength * 2, height - tLength - 50, tLength, tLength);
  image(targetDummy, width / 2 + tLength, height - tLength, tLength, tLength);
}

function shootGun() {
  image(uzi1, mouseX, height - uLength + 50, uLength, uLength);
  image(uzi2, mouseX, height - uLength + 50, uLength, uLength);
  image(uzi3, mouseX, height - uLength + 50, uLength, uLength);
  image(hitmarker, mouseX - 25, mouseY -25, 50, 50);
}

function resetBg() {
  image(mainBg, 0, 0, width, height);
  drawDummies;
}
