const input = require("fs").readFileSync("input.txt", "utf8").split("\r\n");

let inputSliced = input.map((x) => {
  const first = x.slice(0, x.length / 2);
  const second = x.slice(x.length / 2);

  return [first, second];
});

function findCharValue(char) {
  let offset = 96;
  if (char.toUpperCase() === char) {
    offset = 38;
  }
  return char.charCodeAt(0) - offset;
}

let sumPartOne = 0;
for (const [left, second] of inputSliced) {
  for (const char of left) {
    if (second.includes(char)) {
      sumPartOne += findCharValue(char);
      break;
    }
  }
}

let sumPartTwo = 0;

for (let index = 0; index < input.length; index = index + 3) {
  const group = [input[index], input[index + 1], input[index + 2]];
  const array = {};
  for (let index_2 = 0; index_2 < group.length; index_2++) {
    const line = group[index_2];
    for (const char of line) {
      const curr = array[char];
      if (curr) {
        curr.add(index_2);
        array[char] = curr;
      }
      if (!curr) {
        array[char] = new Set().add(index_2);
      }
    }
  }

  for (const key in array) {
    if (array[key].size === 3) {
      sumPartTwo += findCharValue(key);
    }
  }
}

console.log("-----------");
console.log(`Part 1: ${sumPartOne}`);
console.log(`Part 2: ${sumPartTwo}`);
console.log("-----------");
