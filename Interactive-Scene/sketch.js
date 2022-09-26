// Interactive-Scene
// Will
// September 20,
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y, rectHeight, rectWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  rectHeight = 150;
  rectWidth = 150;
}

function draw() {
  background(220);
  drawRectangle();
}

function drawRectangle(){
  rect(width/2 - rectWidth/2, height-rectHeight, rectWidth, rectHeight)
  Fill("black")
}
