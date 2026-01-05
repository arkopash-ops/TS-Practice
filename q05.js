"use strict";
// Practice 5 — Union Types
// Task:
//     Write a function formatInput that:
//     Accepts input: string | number
//     If it’s a string → return it in uppercase
//     If it’s a number → return it with 2 decimal places
//     Add the correct return type
Object.defineProperty(exports, "__esModule", { value: true });
function formatInput(input) {
    if (typeof input === "number")
        return input.toFixed(2);
    else
        return input.toUpperCase();
}
console.log(formatInput(10));
console.log(formatInput("ten"));
//# sourceMappingURL=q05.js.map