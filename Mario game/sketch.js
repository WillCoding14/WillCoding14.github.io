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
let brickImg, skyImg, lizardImg;

function preload() {
  brickImg = loadImage("imageBrick.png");
  skyImg = loadImage("imageSky.png");
  lizardImg = loadImage("imageSpike.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = height/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  //place player in grid
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid(grid);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }
}

function mousePressed() {
  if (mouseInBox(width/4, width / 4 * 3, 0, height)){
    let xPos = Math.floor(mouseX/cellWidth - ROWS/2);
    let yPos = Math.floor(mouseY/cellHeight);
    if (grid[yPos][xPos] === 0) {
      grid[yPos][xPos] = 1;
    }
    else if (grid[yPos][xPos] === 1) {
      grid[yPos][xPos] = 0;
    }
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        image(skyImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        image(skyImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
        image(brickImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        image(skyImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
        image(lizardImg, x*cellWidth + width/4, y*cellHeight, cellWidth, cellHeight);
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
      if (random(100) < 50) {
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