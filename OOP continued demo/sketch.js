//walker oop

class Walker{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.radius = 1;
  }

  display(){
    noStroke();
    fill(random(255), random(255), random(255));
    circle(this.x, this.y, this.radius*2);
  }

  move(){
    let choice = random(100);

    if (choice < 25){
      //up
      this.y -= this.speed;
    }
    else if (choice < 50){
      //down
      this.y += this.speed;
    }
    else if (choice < 75){
      //right
      this.x += this.speed;
    }
    else{
      //left
      this.x -= this.speed;
    }
  }
}

let alec;
let tom;
let shane;

function setup() {
  createCanvas(windowWidth, windowHeight);
  alec = new Walker(width/2, height/2);
  tom = new Walker(width/2, height/2);
  shane = new Walker(width/2, height/2);
  tom.color = "blue";
  shane.color = "green";
}

function draw() {
  alec.move();
  tom.move();
  shane.move();
  
  alec.display();
  tom.display();
  shane.display();
}
