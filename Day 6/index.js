const input = require("fs").readFileSync("input.txt", "utf8");

const markers = [4, 14]; // 4 and 14 are the markers from the puzzle , but you can change them to any number

let result = [];

markers.forEach((marker) => {
  let minCharsNecessary = marker - 1;

  for (let i = minCharsNecessary; i < input.length; i++) {
    const current = input[i];
    const lookback = input.slice(i - minCharsNecessary, i).split("");
    const chars = new Set([...lookback, current]);

    if (chars.size === marker) {
      result.push(i + 1);
      break;
    }
  }
  return;
});

console.log("-----------");
console.log(`Part 1: ${result[0]}`);
console.log(`Part 2: ${result[1]}`);
console.log("-----------");
