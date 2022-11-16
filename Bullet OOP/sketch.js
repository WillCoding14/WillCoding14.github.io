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
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = 10;
    this.width = 20;
    this.height = 10;
  }

  move(){
    this.x += this.dx;
  }

  display(){
    image(bulletImg, this.x, this.y, this.width, this.height);
  }

  isDead(){
    return this.x >= 10000;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preLoad(){
  bulletImg = loadImage("imageBullet.png");
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

function mousePressed(){
  let someBullet = new Bullet(mouseX, mouseY);
  theBullets.push(someBullet);
}
