// Practice 4 — Functions + Interfaces + Arrays
// Task:
//     Create a interface User with these properties
//        id (number) required
//        username (string) required
//        dob (Date) required
//        password (string) optional
//        isAdmin (boolean) required
//     Write a function called getUsernames
//        It takes an array of User
//        It returns an array of strings (usernames)
//     Create a function for password
//        username + @ + day from dob

interface User {
  id: number;
  username: string;
  dob: Date;
  password?: string;
  isAdmin: boolean;
}

const users: User[] = [
  { id: 1, username: "abhi", dob: new Date("2002-05-18"), isAdmin: true },
  { id: 2, username: "mohit", dob: new Date("2005-07-23"), isAdmin: false },
  { id: 3, username: "ayush", dob: new Date("2004-10-14"), isAdmin: false },
  { id: 4, username: "pranav", dob: new Date("2005-05-20"), isAdmin: false },
  { id: 5, username: "isha", dob: new Date("2002-11-07"), isAdmin: true },
];

function getUsernames(users: User[]): string[] {
  return users.map((u) => u.username);
}

function generatePassword(users: User): void {
  const day = users.dob.getDate();
  users.password = `${users.username.toUpperCase()}@${day}`;
}

users.forEach((u) => {
  generatePassword(u);
});

users.forEach((u) => {
  console.log(`${u.username} - ${u.password}`);
});

console.log(getUsernames(users));
