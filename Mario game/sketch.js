// Chess 2d Array
// Will
// October 27, 2022


const ROWS = 10;
const COLS = 10;
let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;
let brickImg, darkBrickImg, skyImg, spikeImg, coinImg;
let lizUp, lizDown, lizLeft, lizRight;
let bgImg;
let lizStatus;
let clangSound, coinSound;
let coinCount;
let state = "start";
let bX, bY, bW, bH;
let startBgImg;


function preload() {
  //images
  brickImg = loadImage("imageBrick.png");
  skyImg = loadImage("imageSky.png");
  lizUp = loadImage("imageLizardUp.png");
  lizDown = loadImage("imageLizardDown.png");
  lizLeft = loadImage("imageLizardLeft.png");
  lizRight = loadImage("imageLizardRight.png");
  spikeImg = loadImage("imageSpike.png");
  coinImg = loadImage("imageCoin.png");
  darkBrickImg = loadImage("imageBrickDark.png");
  bgImg = loadImage("imageBackground.png");
  startBgImg = loadImage("imageBgStart.png");

  //Globals
  lizStatus = lizUp;
  bX = width / 2 - 150;
  bY = height / 2 - 75;
  bW = 300;
  bH = 150;

  //Sounds
  clangSound = loadSound("soundClang.mp3");
  coinSound = loadSound("soundCoin.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = height/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  grid[playerY][playerX] = 9;
}

function draw() {
  noStroke();
  //Title screen
  if (state === "start"){
    startScreen();
  }
  //Main game
  if (state === "main"){
    image(bgImg, 0, 0, width, height);
    displayGrid(grid);
  }
  if (state === "win"){
    startScreen();
  }
}

function keyPressed() {
  //move
  if (keyCode === RIGHT_ARROW) {
    lizStatus = lizRight;
    if (grid[playerY][playerX+1] === 0){
      grid[playerY][playerX] = 0;
      playerX++;
      grid[playerY][playerX] = 9;
    }
    else if (grid[playerY][playerX+1] === 2){
      grid[playerY][playerX+2] = 2;
      grid[playerY][playerX] = 0;
      playerX++;
      grid[playerY][playerX] = 9;
      clangSound.play();
    }
  }

  if (keyCode === LEFT_ARROW) {
    lizStatus = lizLeft;
    if (grid[playerY][playerX-1] === 0){
      grid[playerY][playerX] = 0;
      playerX--;
      grid[playerY][playerX] = 9;
    }
    else if (grid[playerY][playerX-1] === 2){
      grid[playerY][playerX-2] = 2;
      grid[playerY][playerX] = 0;
      playerX--;
      grid[playerY][playerX] = 9;
      clangSound.play();
    }
  }

  if (keyCode === UP_ARROW) {
    lizStatus = lizUp;
    if (grid[playerY-1][playerX] === 0){
      grid[playerY][playerX] = 0;
      playerY--;
      grid[playerY][playerX] = 9;
    }
    else if (grid[playerY-1][playerX] === 2){
      grid[playerY-2][playerX] = 2;
      grid[playerY][playerX] = 0;
      playerY--;
      grid[playerY][playerX] = 9;
      clangSound.play();
    }
  }

  if (keyCode === DOWN_ARROW) {
    lizStatus = lizDown;
    if (grid[playerY+1][playerX] === 0){
      grid[playerY][playerX] = 0;
      playerY++;
      grid[playerY][playerX] = 9;
    }
    else if (grid[playerY+1][playerX] === 2){
      grid[playerY+2][playerX] = 2;
      grid[playerY][playerX] = 0;
      playerY++;
      grid[playerY][playerX] = 9;
      clangSound.play();
    }
  }

  //Shoot spike
  if (keyCode === 32){ // spacebar
    if (lizStatus === lizDown){
      if (grid[playerY+1][playerX] === 0){
        grid[playerY+1][playerX] = 2;
        clangSound.play();
      }
      else if (grid[playerY+1][playerX] === 2){
        grid[playerY+1][playerX] = 0;
        clangSound.play();
      }
      else if (grid[playerY+1][playerX] === 1){
        grid[playerY+1][playerX] = 0;
        coinSound.play();
      }
    }
    if (lizStatus === lizUp){
      if (grid[playerY-1][playerX] === 0){
        grid[playerY-1][playerX] = 2;
        clangSound.play();
      }
      else if (grid[playerY-1][playerX] === 2){
        grid[playerY-1][playerX] = 0;
        clangSound.play();
      }
      else if (grid[playerY-1][playerX] === 1){
        grid[playerY-1][playerX] = 0;
        coinSound.play();
      }
    }
    if (lizStatus === lizRight){
      if (grid[playerY][playerX + 1] === 0){
        grid[playerY][playerX + 1] = 2;
        clangSound.play();
      }
      else if (grid[playerY][playerX+1] === 2){
        grid[playerY][playerX+1] = 0;
        clangSound.play();
      }
      else if (grid[playerY][playerX+1] === 1){
        grid[playerY][playerX+1] = 0;
        coinSound.play();
      }
    }
    if (lizStatus === lizLeft){
      if (grid[playerY][playerX-1] === 0){
        grid[playerY][playerX-1] = 2;
        clangSound.play();
      }
      else if (grid[playerY][playerX-1] === 2){
        grid[playerY][playerX-1] = 0;
        clangSound.play();
      }
      else if (grid[playerY][playerX-1] === 1){
        grid[playerY][playerX-1] = 0;
        coinSound.play();
      }
    }
  }
}

function mousePressed() {
  //Start button logic
  if (state === "start" && mouseInBox(bX, bX + 300, bY, bY + 150)) {
    state = "main";
  }
}

function displayGrid(grid) {
  //putting in images based on grid location
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        image(darkBrickImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        image(brickImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        image(darkBrickImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
        image(lizStatus, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 2){
        image(darkBrickImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
        image(spikeImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function createRandom2dArray(COLS, ROWS) {
  //more empty squares than brick squares but still random
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 70) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function mouseInBox(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function startScreen() {
  image(startBgImg, 0, 0, width, height);
  if (mouseInBox(bX, bX + 300, bY, bY + 150)) {
    fill("white");
  }
  else {
    fill("black");
  }
  rect(bX, bY, bW, bH);
}

