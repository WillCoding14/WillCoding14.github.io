// Walker OOP Demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color;
    this.speed = 10;
    this.radius = 7;
  }

  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);

    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //right
      this.x += this.speed;
    }
    else {
      //left
      this.x -= this.speed;
    }

  }
}

let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnWalker();
}

function draw() {
  for (let i=0; i < walkerArray.length; i++){
    walkerArray[i].move();
    walkerArray[i].display();
  }
}

function spawnWalker(){
  let newWalker = new Walker(random(width), random(height));
  let someColor = color(random(255), random(255), random(255));
  newWalker.color = someColor;
  walkerArray.push(newWalker);
}

function keyPressed(){
  for (let i = 0; i < 1000; i++){
    spawnWalker();
  }
}