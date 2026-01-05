"use strict";
// Practice 2 — Array
// Task:
//     Create a variable scores that can hold numbers only
//     Add at least 3 numbers to it
//     Write a function averageScore that calculates the average of the numbers
Object.defineProperty(exports, "__esModule", { value: true });
let scores = [10, 5, 7];
function calculateAvg(num) {
    return num.reduce((a, b) => a + b, 0) / num.length;
}
console.log(calculateAvg(scores));
//# sourceMappingURL=q02.js.map