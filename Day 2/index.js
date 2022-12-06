var input = require("fs").readFileSync("input.txt", "utf8").split("\r\n");

// Part 1 --------------------------------------------

const chars = { X: "A", Y: "B", Z: "C" };

const inputPartOne = input.map((line) => {
  line = line.replace(/X|Y|Z/g, (matched) => chars[matched]);

  return line;
});

// Rock , Paper , Scissors
// A = Rock ( + 1 points )
// B = Paper ( + 2 Points )
// C = Scissors ( + 3 Points )
// ===============
// Lose = 0 Points
// Draw = 3 Point
// Win = 6 Points
// ===============

// Test
// ----------------
// A Y - Win 6 Points + 2 cause of Paper = 8 Points
// B X - Loose 0 Points + 1 cause of Rock = 1 Point
// C Z - Draw 3 Points + 3 cause of Scissors = 6 Points
// ----------------

let totalPartOne = 0;

inputPartOne.forEach((line) => {
  const [opponent, me] = line.split(" ");

  if (me === "A") {
    // Rock ( + 1 points )
    totalPartOne += 1;
    if (opponent === "A") totalPartOne += 3;
    else if (opponent === "B") totalPartOne += 0;
    else totalPartOne += 6;
  } else if (me === "B") {
    // Paper ( + 2 Points )
    totalPartOne += 2;
    if (opponent === "A") totalPartOne += 6;
    else if (opponent === "B") totalPartOne += 3;
    else totalPartOne += 0;
  } else if (me === "C") {
    // Scissors ( + 3 Points )
    totalPartOne += 3;
    if (opponent === "A") totalPartOne += 0;
    else if (opponent === "B") totalPartOne += 6;
    else totalPartOne += 3;
  }
  return totalPartOne;
});

// Part 2 --------------------------------------------

let totalPartTwo = 0;

// Rock , Paper , Scissors
// X means loose (1 point cause of Rock)
// Y means draw (2 points cause of Paper)
// Z means win  (3 points cause of Scissors)
// ===============
// Lose = 0 Points
// Draw = 3 Point
// Win = 6 Points
// ===============

input.forEach((line) => {
  const [opponent, me] = line.split(" ");

  if (me === "Y") {
    totalPartTwo += 3;
    if (opponent === "A") totalPartTwo += 1;
    else if (opponent === "B") totalPartTwo += 2;
    else totalPartTwo += 3;
  } else if (me === "X") {
    totalPartTwo += 0;
    if (opponent === "B") totalPartTwo += 1;
    else if (opponent === "C") totalPartTwo += 2;
    else totalPartTwo += 3;
  } else {
    totalPartTwo += 6;
    if (opponent === "C") totalPartTwo += 1;
    else if (opponent === "A") totalPartTwo += 2;
    else totalPartTwo += 3;
  }

  return totalPartTwo;
});

console.log("-----------");
console.log(`Part 1: ${totalPartOne}`);
console.log(`Part 2: ${totalPartTwo}`);
console.log("-----------");
