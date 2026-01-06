"use strict";
// Practice 6 — TypeScript Utility Types (Required, Readonly, Partial, Pick, Omit, Record, Exclude, ReturnType, Parameters)
Object.defineProperty(exports, "__esModule", { value: true });
const requiredUser = {
    id: 1,
    name: "Abhi",
    email: "abhi@mail.com",
    isAdmin: true,
};
console.log("Required: \n", requiredUser);
const readonlyUser = {
    id: 2,
    name: "Mohit",
    isAdmin: false,
};
// readonlyUser.email="mohit@gmail.com";   //show Error
console.log("\nReadonly: \n", readonlyUser);
const partialUser = {
    name: "Ayush",
};
console.log("\nPartial: \n", partialUser);
const pickUser = {
    name: "Vaishnavi",
    isAdmin: false,
};
console.log("\nPick: \n", pickUser);
const omitUser = {
    id: 5,
    name: "Pranav",
};
console.log("\nOmit: \n", omitUser);
const roles = {
    1: "Admin",
    2: "User",
    3: "Guest",
};
console.log("\nRecord: \n", roles);
const role = "Admin";
console.log("\nExclude: \n", role);
// ReturnType - Get function return type
function getUser() {
    return { id: 8, name: "Nidhi" };
}
const user = getUser();
console.log("\nReturnType: ", user);
// Parameter - Get function parameters
function createUser(name, isAdmin) {
    return [name, isAdmin];
}
const params = createUser("ARK", true);
console.log(params);
//# sourceMappingURL=q07.js.map