const { testInput, puzzleInput } = require("./2021_d02_input.js");

const recalculateDestination = (input) => {
  let coordinates = input
    .split(/\n/)
    .map((coordinate) => coordinate.split(" "))
    .map((coordinate) => [coordinate[0], Number(coordinate[1])]);

  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  coordinates.map(([direction, value]) => {
    if (direction === "forward") {
      horizontalPosition += value;
      depth += aim * value;
    }
    if (direction === "down") aim += value;
    if (direction === "up") aim -= value;
  });

  return horizontalPosition * depth;
};

console.log(recalculateDestination(testInput)); // 900
console.log(recalculateDestination(puzzleInput)); // 2015547716
