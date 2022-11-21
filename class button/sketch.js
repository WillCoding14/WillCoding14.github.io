// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "start";
let theButtons = [];

class Button{
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = "green";
  }

  display() {
    rectMode(CENTER);
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }

  interact(){
    if (mouseInBox){
      this.color = "black";
    }

  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let b = new Button(width/2, height*0.75, 200, 100);
  let p = new Button(width/2, height*0.25, 200, 100);
  theButtons.push(b);
  theButtons.push(p);
  for (let i = 0; i < theButtons.length; i++){
    theButtons[i].display();
    theButtons[i].interact();
  }
  
}

function mouseInBox(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}