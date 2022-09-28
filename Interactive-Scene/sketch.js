// Interactive-Scene
// Will
// September 20, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y, rectHeight, rectWidth, pressLength, state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeight = 150;
  rectWidth = 150;
  pressLength = 0;
  x = width / 2 - rectWidth / 2;
  y = height - rectHeight;
  color = 0;
  state = "walk";
}

function draw() {
  background(220);
  drawRectangle();
  rectJump();
}

function drawRectangle() {

  fill(color);
  rect(x, y, rectWidth, rectHeight);
}

function rectJump() {
  pressLength = 0;
  if (keyIsDown(32)) { // 32 is spacebar
    if (rectHeight > 50) {
      rectHeight -= 2;
      color += 10;
      pressLength += 5;
    }
    else {
      pressLength = 100;
    }
  }
}

function keyReleased() {
  for (let i = 0; i < pressLength; i++){
    y -= 10;
    color -= 20;
  }
  rectHeight = 150;
}



