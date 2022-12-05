const input = require("fs").readFileSync("./input.txt", "utf8");
const sum = (prev, curr) => prev + curr;

const splitedElves = input.trim().split(/\r?\n\r?\n/);

// console.log(splitedElves)

const sortedElves = splitedElves
  .map((e) =>
    e
      .split(/\r?\n/)
      .map((x) => parseInt(x))
      .reduce(sum, 0)
  )
  .sort((a, b) => a - b);

// console.log(sortedElves);

console.log("-----------");
console.log(`Part 1: ${sortedElves.at(-1)}`);
console.log(`Part 1: ${sortedElves.slice(-3).reduce(sum, 0)}`);
console.log("-----------");
