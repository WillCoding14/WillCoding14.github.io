// Interactive-Scene
// Will
// September 20, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = "start";
let mainBg, startBg;
let bX, bY, bW, bH;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bX = width / 2 - 150;
  bY = height / 2 - 75;
  bW = 300;
  bH = 150;
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(mainBg, 0, 0, width, height);
  }
}

function mousePressed() {
  if (state === "start" && mouseInBox(bX, bX + 300, bY, bY + 150)) {
    state = "main";
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
}