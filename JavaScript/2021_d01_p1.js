const { testInput, puzzleInput } = require("./2021_d01_input.js");

const countDepthIncrease = (input) => {
  let measurements = input.split(/\n/).map(Number);

  let counter = 0;

  for (let i = 0; i < measurements.length; i++) {
    if (i === 0 && measurements[i + 1] > measurements[i]) counter++;

    if (i !== 0 && measurements[i + 1] > measurements[i]) counter++;
  }

  return counter;
};

console.log(countDepthIncrease(testInput)); // 7
console.log(countDepthIncrease(puzzleInput)); // 1681
