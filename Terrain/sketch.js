// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theHeights = [];
let startingLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = generateHeights(10000);
}

function draw() {
  background(220);
  for (let i = startingLocation; i < startingLocation + width; i++){
    displayRectangle(i - startingLocation, theHeights[i], 1);
  }
  //move when key is pressed
  if (keyIsPressed){
    startingLocation+= 5000;
  }
  console.log(0 % 10);
}


function displayRectangle(x, rectHeight, rectWidth){
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}

function generateHeights(howMany){
  let tempArray = [];
  let time = random(100000);
  for (let i = 0; i < howMany; i++){
    tempArray.push(noise(time) * height);
    time += 0.01;
  }
  return tempArray; 
}
