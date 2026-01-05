// Practice 2 — Array
// Task:
//     Create a variable scores that can hold numbers only
//     Add at least 3 numbers to it
//     Write a function averageScore that calculates the average of the numbers

let scores: number[] = [10, 5, 7];

function calculateAvg(num: number[]): number {
  return num.reduce((a, b) => a + b, 0) / num.length;
}

console.log(calculateAvg(scores));
