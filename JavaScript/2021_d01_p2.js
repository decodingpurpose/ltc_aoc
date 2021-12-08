const { testInput, puzzleInput } = require("./2021_d01_input.js");

const countTrioIncrease = (input) => {
  let measurements = input.split(/\n/).map(Number);

  let trios = [];

  for (let i = 0; i < measurements.length; i++) {
    if (
      measurements[i] !== undefined &&
      measurements[i + 1] !== undefined &&
      measurements[i + 2] !== undefined
    )
      trios.push([measurements[i], measurements[i + 1], measurements[i + 2]]);
    else break;
  }

  let sumTrios = trios.map((measurement) =>
    measurement.reduce((acc, cv) => acc + cv, 0)
  );

  let counter = 0;

  for (let i = 0; i < sumTrios.length; i++) {
    if (i === 0 && sumTrios[i + 1] > sumTrios[i]) counter++;

    if (i !== 0 && sumTrios[i + 1] > sumTrios[i]) counter++;
  }

  return counter;
};

console.log(countTrioIncrease(testInput)); // 5
console.log(countTrioIncrease(puzzleInput)); // 1704
