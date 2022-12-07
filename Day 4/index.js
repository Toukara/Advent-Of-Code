const input = require("fs").readFileSync("input.txt", "utf8").split("\r\n");

function getAssignments(elf) {
  const [start, end] = elf.split("-").map(Number);
  return [...Array(end - start + 1).keys()].map((i) => start + i);
}

function assignToElf(input) {
  return input.reduce(
    (count, pair) => {
      const [elf1, elf2] = pair.split(",");
      const elf1Assignments = getAssignments(elf1);
      const elf2Assignments = getAssignments(elf2);

      if (
        elf1Assignments.every((assignment) => elf2Assignments.includes(assignment)) ||
        elf2Assignments.every((assignment) => elf1Assignments.includes(assignment))
      ) {
        count[0]++;
      }

      if (
        elf1Assignments.some((assignment) => elf2Assignments.includes(assignment)) ||
        elf2Assignments.some((assignment) => elf1Assignments.includes(assignment))
      ) {
        count[1]++;
      }

      return count;
    },
    [0, 0]
  );
}

const [part1, part2] = assignToElf(input);

console.log("-----------");
console.log(`Part 1: ${part1}`);
console.log(`Part 2: ${part2}`);
console.log("-----------");
