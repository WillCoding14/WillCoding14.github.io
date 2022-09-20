// Interactive-Scene
// Will
// September 20,
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let charX = 30;
let charY = 30;
let startX = windowWidth / 2;
let startY = windowHeight - windowHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  character();
}

function character() {
  rect(startX, startY, charX, charY);
}
