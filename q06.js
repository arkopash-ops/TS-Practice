"use strict";
// Practice 5 — Discriminated Union
// Task:
//     Create two interfaces:
//         LoadingState → { status: "loading" }
//         SuccessState → { status: "success"; users: User[] }
//         ErrorState → { status: "error"; message: string; }
//     Create a union type UserState
//     Write a function render(state: UserState) that:
//         If "loading" → log "Loading users..."
//         If "success" → log number of users
//         If "error" → log error message
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: 1, username: "abhi" },
    { id: 2, username: "mohit" },
    { id: 3, username: "ayush" },
    { id: 4, username: "pranav" },
    { id: 5, username: "isha" },
];
function render(state) {
    if (state.status === "loading")
        console.log("Loading users...");
    else if (state.status === "success")
        console.log(`Total User are: ${state.users.length}`);
    else
        console.log(state.message);
}
render({ status: "loading" });
render({ status: "success", users });
render({ status: "error", message: "Failed to fetch users" });
//# sourceMappingURL=q06.js.map