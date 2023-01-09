//local storage demo

let numberOfClicks = 0;
let highestEver = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highscore") !== null){
    highestEver = getItem("Highscore");
  }
  else{
    storeItem("highscore", 0);
  }
}

function draw() {
  background(220);

  fill("black");
  textSize(100);
  text(numberOfClicks, width/2, height/2);

  fill("red");
  text(highestEver, 50, height-100);
}

function mousePressed(){
  numberOfClicks++;

  if (numberOfClicks > getItem("highscore")){
    storeItem("highscore", numberOfClicks);
    highestEver = numberOfClicks;
  }
}
