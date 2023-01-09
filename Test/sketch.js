// Do not edit the code between these comments. 
// You should only edit the class Particle below.
// -----------------------------------------------
let particleNumber = 100;

class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = 0;
    this.g = random(100, 255);
    this.b = random(100, 255);
    this.alpha = 255;
    this.color = color(this.r, this.g, this.b, this.alpha);
    this.radius = 2;
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
    circle(this.x, this.y, this.radius*2);
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
