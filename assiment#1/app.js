// Assiment 1 Question 1

const name = "John Doe";
let age = 30;
const occupation = "Software Developer";
const email = "john.doe@example.com";
const phone = "123-456-7890";
const institute = "Jawan Pakistan";
const education = "ABC";

document.write(`
    Name: ${name} <br>
    Age: ${age} <br>
    Occupation: ${occupation} <br>
    Email: ${email} <br>
    Phone Number: ${phone} <br>
    Institute Name: ${institute} <br>
    Education: ${education}
`);


// Assiment 1 Question 2

console.log("---- var example ----");

// Hoisting with var
console.log(a);
var a = "faraz";

// Redeclare & reassign
var a = "Mohammad";
var a = "Faraz"; // Redeclaration allowed
a = "Ali"; // Reassignment allowed
console.log(a);

// Block scope check
if (true) {
    var a = "faraz";
}
console.log(a);

// Function scope
function varExample() {
    var a = "faraz"; 
    console.log(a);
}
varExample();


console.log("---- let example ----");

// Hoisting with let
// console.log(b); // Error: Cannot access 'b' before initialization
// let b = "faraz";

// Redeclare & reassign
let b = "Mohammad";
// let b = "Faraz"; // Redeclaration not allowed
b = "Ali"; // Reassignment allowed
console.log(b);

// Block scope check
if (true) {
    let b = "faraz";
    console.log(b); 
}
console.log(b);

// Function scope
function letExample() {
    let b = "Ali ";
    console.log(b);
}
letExample();


console.log("---- const example ----");

// Hoisting with const
// console.log(c); // Error: Cannot access 'c' before initialization
// const c = "faraz";

// Redeclare & reassign
const c = "Mohammad";
// const c = "Faraz"; // Redeclaration not allowed
// c = "Ali"; // Reassignment not allowed
console.log(c);

// Block scope check
if (true) {
    const c = "faraz";
    console.log(c);
}
console.log(c);

// Function scope
function constExample() {
    const c = "faraz";
    console.log(c);
}
constExample();


// Assiment 2 Question 1

// Total Marks
const totalMarks = 300;

// Marks for subjects
let english = 85;
let math = 90;
let urdu = 75;

// Calculate total and percentage
const totalObtained = english + math + urdu;
const percentage = (totalObtained / totalMarks) * 100;

// Calculate grade based on percentage
let grade;
if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

document.write(`
    <h2 style="color: green;">Mark Sheet</h2>
    English : ${english} <br>
    Math : ${math} <br>
    urdu : ${urdu} <br>
    <hr style="width: 13%; margin-left: 0; ">
    Total Marks : ${totalMarks} <br>
    Obtained Marks : ${totalObtained} <br>
    Percentage : ${percentage}% <br>
    Grade : ${grade}
`);
