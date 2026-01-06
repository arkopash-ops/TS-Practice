// Practice 7 — TypeScript Utility Types (Required, Readonly, Partial, Pick, Omit, Record, Exclude, ReturnType, Parameters)

interface User {
  id: number;
  name: string;
  email?: string;
  isAdmin: boolean;
}

// Required - Make everything mandatory
type RequiredUser = Required<User>;
const requiredUser: RequiredUser = {
  id: 1,
  name: "Abhi",
  email: "abhi@mail.com",
  isAdmin: true,
};
console.log("Required: \n", requiredUser);

// Readonly - Prevent modification
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = {
  id: 2,
  name: "Mohit",
  isAdmin: false,
};
// readonlyUser.email="mohit@gmail.com";   //show Error
console.log("\nReadonly: \n", readonlyUser);

// Partial - Make everything optional
type PartialUser = Partial<User>;
const partialUser: PartialUser = {
  name: "Ayush",
};
console.log("\nPartial: \n", partialUser);

// Pick - Select specific fields
type PickUser = Pick<User, "name" | "email" | "isAdmin">;
const pickUser: PickUser = {
  name: "Vaishnavi",
  isAdmin: false,
};
console.log("\nPick: \n", pickUser);

// Omit - Remove specific fields
type OmitUser = Omit<User, "isAdmin">;
const omitUser: OmitUser = {
  id: 5,
  name: "Pranav",
};
console.log("\nOmit: \n", omitUser);

// Record - Key-value object
type UserRole = Record<number, string>;
const roles: UserRole = {
  1: "Admin",
  2: "User",
  3: "Guest",
};
console.log("\nRecord: \n", roles);

// exclude - Remove types from a union
type Role = "Admin" | "User" | "Guest";
const role: Exclude<Role, "Guest"> = "Admin";
console.log("\nExclude: \n", role);

// ReturnType - Get function return type
function getUser() {
  return { id: 8, name: "Nidhi" };
}

type GetUserReturn = ReturnType<typeof getUser>;
const user: GetUserReturn = getUser();
console.log("\nReturnType: ", user);

// Parameter - Get function parameters
function createUser(name: string, isAdmin: boolean): [string, boolean] {
  return [name, isAdmin];
}

const params = createUser("ARK", true);
console.log(params);
