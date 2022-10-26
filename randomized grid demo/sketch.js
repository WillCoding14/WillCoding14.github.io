// randomized grid
// Will
// October 26, 2022

let grid = create2dArray(10, 10);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function create2dArray(cols, rows){
  let newArray = [];
  for (let y = 0; y < rows; y++){
    newArray.push([]);
    for (let x = 0; x < cols; x++){
      newArray[y].push(0);
    }
  }
  return newArray;
}
