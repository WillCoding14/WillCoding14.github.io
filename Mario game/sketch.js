// Chess 2d Array
// Will
// October 27, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const ROWS = 10;
const COLS = 10;
let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;
let brickImg, darkBrickImg, skyImg, spikeImg, coinImg;
let lizUp, lizDown, lizLeft, lizRight;
let lizStatus;


function preload() {
  brickImg = loadImage("imageBrick.png");
  skyImg = loadImage("imageSky.png");
  lizUp = loadImage("imageLizardUp.png");
  lizDown = loadImage("imageLizardDown.png");
  lizLeft = loadImage("imageLizardLeft.png");
  lizRight = loadImage("imageLizardRight.png");
  spikeImg = loadImage("imageSpike.png");
  coinImg = loadImage("imageCoin.png");
  darkBrickImg = loadImage("imageBrickDark.png");
  lizStatus = lizUp;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = height/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid(grid);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    lizStatus = lizRight;
    if (grid[playerY][playerX+1] === 0) {
      grid[playerY][playerX] = 0;
      playerX++;
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === LEFT_ARROW) {
    lizStatus = lizLeft;
    if (grid[playerY][playerX-1] === 0) {
      grid[playerY][playerX] = 0;
      playerX--;
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === UP_ARROW) {
    lizStatus = lizUp;
    if (grid[playerY-1][playerX] === 0) {
      grid[playerY][playerX] = 0;
      playerY--;
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === DOWN_ARROW) {
    lizStatus = lizDown;
    if (grid[playerY+1][playerX] === 0) {
      grid[playerY][playerX] = 0;
      playerY++;
      grid[playerY][playerX] = 9;
    }
  }
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth - ROWS/2);
  let yPos = Math.floor(mouseY/cellHeight);
  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        image(skyImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
        image(darkBrickImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        image(skyImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
        image(brickImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        image(skyImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
        image(darkBrickImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
        image(lizStatus, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
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