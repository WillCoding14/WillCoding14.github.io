// Interactive-Scene
// Will
// September 20, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spr;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  drawSpr;
}
function mousePressed() {
  spr.position.x = mouseX;
  spr.position.y = mouseY;
}

function drawSpr(){
  spr = rect(width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
  spr.velocity.y = 0.5;
}

