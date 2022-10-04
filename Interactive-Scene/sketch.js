// Interactive-Scene
// Will
// September 20, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = "start";
let backdrop;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(backdrop, 0, 0, width, height);
  }
}

function mousePressed() {
  if (state === "start" && mouseInBox(width / 2 - 150, width / 2 + 150, height / 2 - 75, height / 2 + 75)) {
    state = "main";
  }
}

function startScreen() {
  if (mouseInBox(width / 2 - 150, width / 2 + 150, height / 2 - 75, height / 2 + 75)) {
    fill("grey");
  }
  else {
    fill("black");
  }
  rect(width / 2 - 150, height / 2 - 75, 300, 150);
}

function mouseInBox(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;

}

function preload() {
  backdrop = loadImage("background.png");
}