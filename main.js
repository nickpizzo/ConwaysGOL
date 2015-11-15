// data representation of all dead board
var rows = 5;
var cols = 5;
var Game = matrix(rows, cols, 0);

function matrix(rows, columns, value) {
  var arr = [];
  for(i=0; i<rows; i++){
    arr.push([]);
    arr[i].push( new Array(columns));
    for(var j=0; j<columns; j++){
      arr[i][j] = value;
    }
  }
  console.log(arr);
  return arr;

}

console.log(rows);
console.log(cols);
console.log(Game);


var neighborsLiving = 0;

function checkNeighbors(posX, posY) {
//pseudo-code
  //N1 => (posX-1, posY-1)
  //N2 => (posX, posY-1)
  //N3 => (posX+1, posY-1)
  //N4 => (posX+1, posY)
  //N5 => (posX+1, posY+1)
  //N6 => (posX, posY+1)
  //N7 => (posX-1, posY+1)
  //N8 => (posX-1, posY)

//if N(#) = 1... neighborsLiving + 1

//if currentCell = 1 and neighborsLiving < 2, currentCell = 0;
//if currentCell = 1 and neighborsLiving === (2 || 3), currentCell = 1;
//if currentCell = 1 and neighborsLiving > 3, currentCell = 0;
//if currentCell = 0 and neighborsLiving === 3, currentCell = 1;
}
