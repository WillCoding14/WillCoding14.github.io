// Interactive-Scene
// Will
// September 20, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y, rectHeight, rectWidth, pressLength, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeight = 150;
  rectWidth = 150;
  pressLength = 0;
  x = width / 2 - rectWidth / 2;
  y = height - rectHeight;
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  background(220);
  drawRectangle();
  rectJump();
}

function drawRectangle() {
  if (y <= height) {
    fill(r, g, b)
    rect(x, y, rectWidth, rectHeight)
  }
}

function rectJump() {
  pressLength = 0;
  if (keyIsDown(32)) { // 32 is spacebar
    if (rectHeight > 50) {
      rectHeight -= 1;
      r += 3;
      g += 5;
      b += 7;
      if (pressLength <= height / 2) {
        pressLength += 10;
      }
    }
    else {
      pressLength = height / 2;
    }
  }
}

function keyReleased() {
  y -= pressLength
  rectHeight = 150;
}



