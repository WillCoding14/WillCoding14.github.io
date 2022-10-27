// randomized grid
// Will
// October 26, 2022

const ROWS = 100;
const COLS = 10;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
}

function draw() {
  noStroke();
  background(0);
  displayGrid(grid);
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("pink");
      }
      else if (grid[y][x] === 1) {
        fill("purple");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
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

function mousePressed(){
  let posX = Math.floor(mouseX / cellWidth);
  let posY = Math.floor(mouseY / cellHeight);

  if (grid[posY][posX] === 0){
    grid[posY][posX] = 1;
  }
  else if (grid[posY][posX] === 1){
    grid[posY][posX] = 0;
  }
}
