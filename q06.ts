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

interface User {
  id: number;
  username: string;
}

const users: User[] = [
  { id: 1, username: "abhi" },
  { id: 2, username: "mohit" },
  { id: 3, username: "ayush" },
  { id: 4, username: "pranav" },
  { id: 5, username: "isha" },
];

interface LoadingState {
  status: "loading";
}

interface SuccessState {
  status: "success";
  users: User[];
}

interface ErrorState {
  status: "error";
  message: string;
}

type UserState = LoadingState | SuccessState | ErrorState;

function render(state: UserState): void {
  if (state.status === "loading") console.log("Loading users...");
  else if (state.status === "success")
    console.log(`Total User are: ${state.users.length}`);
  else console.log(state.message);
}

render({ status: "loading" });
render({ status: "success", users });
render({ status: "error", message: "Failed to fetch users" });