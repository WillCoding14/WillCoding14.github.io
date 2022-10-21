// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let allCircles = [];

function keyPressed(){
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(5000),
    color: color(random(255), random(255), random(255))
  };
  allCircles.push(theBall);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < allCircles.length; i++){
    allCircles[i].x = noise(allCircles[i].time) * width;
    allCircles[i].y = noise(allCircles[i].time + 1000000) * height;

    
    //increase time along noise
    fill(allCircles[i].color);

    allCircles[i].time += 0.005;
    circle(allCircles[i].x, allCircles[i].y , allCircles[i].radius * 2);
  }
}
