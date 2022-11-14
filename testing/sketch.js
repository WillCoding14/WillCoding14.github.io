// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let counter = 0;
let someArray = [[1,0,0,0,1],
                 [0,1,0,0,1],
                 [1,0,0,1,0],
                 [0,1,1,1,1],
                 [0,1,0,1,0]];
for (let i = 2; i < 5; i++) {
  for (let j = 2; j < 5; j++) {
    counter += someArray[i][j-1];
  }
}
console.log(counter);
