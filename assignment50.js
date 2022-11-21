// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// 1. Coalescing Operator
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

//Optional Chaining Operator. 

//The optional chaining operator (?.) accesses an object's property or calls a function.
// If the object is undefined or null, it returns undefined instead of throwing an error.

const user = {
    dog: {
        name: "Alex"
    }
};

console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
console.log(user.cat.name);  //Error


//Immutability

//Immutability allows us to track the changes that happen to the objects like a chain of events.
// Variables have new references that are easy to track compared to existing variables.
// This helps in debugging the code and building the concurrent application.
