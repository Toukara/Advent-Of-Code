const input = require("fs").readFileSync("input.txt", "utf8").split("\r\n");

function getAssignments(elf) {
  const [start, end] = elf.split("-").map(Number);
  return [...Array(end - start + 1).keys()].map((i) => start + i);
}

const getPairs = (pairs) => {
  return pairs.reduce((count, pair) => {
    const [elf1, elf2] = pair.split(",");
    const e1Assignments = getAssignments(elf1);
    const e2Assignments = getAssignments(elf2);

    if (e1Assignments.every((assignment) => e2Assignments.includes(assignment)) || e2Assignments.every((assignment) => e1Assignments.includes(assignment))) {
      count++;
    }

    return count;
  }, 0);
};

let resultPartOne = getPairs(input);

console.log("Part One: ", resultPartOne);
