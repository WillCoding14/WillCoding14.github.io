// Start Screen demo
// Will
// 10/3/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "start";
let cat;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(cat, 0, 0, width, height);
  }
}

function mousePressed() {
  if (state === "start" && mouseInBox(400, 700, 400, 550)) {
    state = "main";
  }
}

function startScreen() {
  if (mouseInBox(400, 700, 400, 550)) {
    fill("grey");
  }
  else {
    fill("black");
  }
  rect(400, 400, 300, 150);
}

function mouseInBox(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;

}

function preload() {
  cat = loadImage("cat.jpg");
}