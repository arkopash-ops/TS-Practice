"use strict";
// Practice 3 — Object and Optional Properties
// Task:
//     Create a type Book with these properties
//         title (string) ✅ required
//         author (string) ✅ required
//         publishedYear (number) ✅ optional
//     Create a few objects of type Book
//     Write a function printBook that prints "Title: <title>, Author: <author>" and includes the year if available
Object.defineProperty(exports, "__esModule", { value: true });
const book = [
    { title: "Hobbit", author: "Mr. A", publishedYear: 2016 },
    { title: "Spider-Man", author: "Ms. J" },
    { title: "One Piece", author: "Mr. B", publishedYear: 2009 },
    { title: "Sherlock Holms", author: "Mr. M" },
    { title: "Big Bang Theory", author: "Ms. I" },
];
function printBook(books) {
    let result = "";
    for (const b of book) {
        result += `${b.title} by ${b.author}`;
        if (b.publishedYear) {
            result += `, published in ${b.publishedYear}`;
        }
        result += "\n";
    }
    return result;
}
console.log(printBook(book));
//# sourceMappingURL=q03.js.map