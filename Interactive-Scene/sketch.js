// Interactive-Scene
// Will
// September 20,
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  character();
}

function character() {
  let startX = width / 2;
  let startY = height - characterHeight;
  let characterWidth = width / 10;
  let characterHeight = height / 10;
  rect(startX, startY, characterWidth, characterHeight);
  fill("black");            
}
