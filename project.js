"use strict";
// Project: Student Grade Tracker
Object.defineProperty(exports, "__esModule", { value: true });
const students = [
    { name: "Aryan", age: 23, marks: [85, 86, 80, 76, 89] },
    { name: "Vaishnavi", age: 21, marks: [90, 81, 70, 74, 79] },
    { name: "Mohit", age: 22, marks: [75, 70, 84, 79, 80] },
    { name: "Pranav", age: 20, marks: [82, 79, 81, 85, 80] },
    { name: "Ayush", age: 21, marks: [45, 38, 60, 55, 50] },
];
function calculateAverage(m) {
    const avg = m.reduce((a, b) => a + b, 0) / m.length;
    return avg;
}
function updateStatus(s) {
    const avg = calculateAverage(s.marks);
    s.average = avg;
    s.status = avg >= 50 ? "pass" : "fail";
}
function assignGrade(s) {
    const avg = s.average;
    if (avg >= 90)
        s.grade = "A";
    else if (avg >= 80)
        s.grade = "B";
    else if (avg >= 70)
        s.grade = "C";
    else if (avg >= 60)
        s.grade = "D";
    else if (avg >= 50)
        s.grade = "E";
    else
        s.grade = "F";
}
function passStudents(students) {
    return students
        .filter((stud) => stud.status === "pass")
        .map((stud) => stud.name);
}
function failStudents(students) {
    return students
        .filter((stud) => stud.status === "fail")
        .map((stud) => stud.name);
}
students.forEach((s) => {
    updateStatus(s);
    assignGrade(s);
});
students.forEach((s) => {
    console.log(`Student ${s.name} got ${s.grade} grade & has ${s.status} with average of ${s.average} marks.`);
});
const topScorer = students.reduce((top, current) => {
    return current.average > top.average ? current : top;
}, students[0]);
console.log(`\nTop scorer is ${topScorer.name} with an average of ${topScorer.average} and grade ${topScorer.grade}.`);
console.log("\nPassed Students are : \n" + passStudents(students));
console.log("\nFailed Students are : \n" + failStudents(students));
//# sourceMappingURL=project.js.map