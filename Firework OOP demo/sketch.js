// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let particleNumber = 100;

class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = 255;
    this.color = color(this.r, this.g, this.b, this.alpha);
    this.width = 10;
  }

  update(){
    //move
    this.x += this.dx;
    this.y += this.dy;

    //make more transparent
    this.alpha--;
    this.color = color(this.r, this.g, this.b, this.alpha);
  }

  display(){
    noStroke();
    fill(this.color);
    square(this.x, this.y, this.width);
  }

  isDead(){
    return this.alpha <= 0;
  }
}

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < theFireworks.length; i++){
    theFireworks[i].update();
    if (theFireworks[i].isDead()){
      //remove from array
      theFireworks.splice(i, 1);
    }
    else{
      theFireworks[i].display();
    }
  }
}

function mousePressed(){
  for (let i = 0; i < particleNumber; i++){
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
  }
}
