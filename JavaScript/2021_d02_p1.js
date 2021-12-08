const { testInput, puzzleInput } = require("./2021_d02_input.js");

const calculateDestination = (input) => {
  let coordinates = input
    .split(/\n/)
    .map((coordinate) => coordinate.split(" "))
    .map((coordinate) => [coordinate[0], Number(coordinate[1])]);

  let horizontalPosition = 0;
  let depth = 0;

  coordinates.map(([direction, value]) => {
    if (direction === "forward") horizontalPosition += value;
    if (direction === "down") depth += value;
    if (direction === "up") depth -= value;
  });

  return horizontalPosition * depth;
};

console.log(calculateDestination(testInput)); // 150
console.log(calculateDestination(puzzleInput)); // 2036120
