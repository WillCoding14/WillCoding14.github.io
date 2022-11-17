// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bulletImg;
let shooterImg;
let theBullets = [];

class Bullet{
  constructor(){
    this.x = 200;
    this.y = 500;
    this.dx = 10;
    this.w = 200;
    this.h = 100;
    this.Bullet = loadImage("imageBullet.png");
  }

  move(){
    this.x += this.dx;
  }

  display(){
    image(this.Bullet, this.x, this.y, this.w, this.h);
  }

  isDead(){
    return this.x >= width;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preLoad(){
  shooterImg = loadImage("imageShooter.png");
}

function draw() {
  background(0);
  for (let i = 0; i < theBullets.length; i++){
    theBullets[i].move();
    if (theBullets[i].isDead()){
      //kill 
      theBullets.splice(i, 1);
    }
    else{
      theBullets[i].display();
    }
  }
}

function keyPressed(){
  if (keyCode === 32){
    let someBullet = new Bullet(mouseX, mouseY);
    theBullets.push(someBullet);
  }
}
