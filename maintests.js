
var x = 1;
console.assert((x === 1), "assert message: x != 1");


var isEven = function(number) {
  if(number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.assert((isEven(3)), "that was not an even number!");
console.assert((isEven(2)), "that was not an even number!");


var new_arr = [];
new_arr.length = 5;
new_arr = [1, 2, 3];

console.assert((new_arr.length > 4), "Your array is garbage!");
console.log(new_arr);


var car = {
  avgSpeed: 71
}

console.assert((car.avgSpeed < 45 || car.avgSpeed > 70), "You should change your driving habits!");


var next_arr = [ 'nope', 'yack', 'anything', 'shave' ];

console.assert((next_arr[1] === 'yack' && next_arr[3] === 'shave'), "Cool array bro");


var trick_arr = [];
trick_arr.length = 35;
trick_arr.splice(34, 0, 11);

console.assert((trick_arr[34]%2===1), "No hints!");
