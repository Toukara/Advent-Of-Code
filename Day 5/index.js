const input = require("fs").readFileSync("input.txt", "utf8").replace(/\r/g, "").trimEnd().split("\n\n");

const [rawStacks, rawMoves] = input.map((x) => x.split("\n"));

const StacksMapped = rawStacks.map((line) => [...line].filter((value, index) => index % 4 === 1));
const index = StacksMapped.pop();

const stacks = {};
const moves = [];

for (const line of StacksMapped) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      if (!stacks[index[i]]) {
        stacks[index[i]] = [];
      }
      stacks[index[i]].unshift(line[i]);
    }
  }
}

for (const move of rawMoves) {
  const regex = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  const [_, count, from, to] = [...regex];

  moves.push({
    count: parseInt(count),
    from: parseInt(from),
    to: parseInt(to),
  });
}

const ls = Object.fromEntries(Object.entries(stacks).map(([key, value]) => [key, [...value]]));
const ls2 = Object.fromEntries(Object.entries(stacks).map(([key, value]) => [key, [...value]]));

for (const move of moves) {
  for (let i = 0; i < move.count; i++) {
    const crate = ls[move.from].pop();
    ls[move.to].push(crate);
  }

  const crates = ls2[move.from].splice(-move.count, move.count);
  ls2[move.to] = ls2[move.to].concat(crates);
}

const result1 = index.map((value) => ls[value].pop()).join("");
const result2 = index.map((value) => ls2[value].pop()).join("");

console.log("-----------");
console.log(`Part 1: ${result1}`);
console.log(`Part 2: ${result2}`);
console.log("-----------");
