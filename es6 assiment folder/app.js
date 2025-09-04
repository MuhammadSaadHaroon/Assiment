//// Global Scope
// var, let, const ko global scope me declare kiya aur console me print kiya
var globalVar = "Main var hoon";
let globalLet = "Main let hoon";
const globalConst = "Main const hoon";
console.log(globalVar, globalLet, globalConst);
// Haan, ye teeno yahan globally accessible hain (module/environment par depend karta hai)

//// Function Scope
// function ke andar var, let, const declare kiye aur bahar access karke check kiya
function testFunctionScope() {
  var funcVar = "Function ka var";
  let funcLet = "Function ka let";
  const funcConst = "Function ka const";
  console.log(funcVar, funcLet, funcConst);
}
testFunctionScope();
// console.log(funcVar); // ReferenceError
// console.log(funcLet); // ReferenceError
// console.log(funcConst); // ReferenceError
// Observation: function ke variables bahar se accessible nahi

//// Block Scope
// if block ke andar var, let, const declare kiye
if (true) {
  var blockVar = "Block ka var";
  let blockLet = "Block ka let";
  const blockConst = "Block ka const";
}
console.log(blockVar);
// console.log(blockLet); // ReferenceError
// console.log(blockConst); // ReferenceError
// Observation: var block se bahar aata hai, let/const block-scoped hain

//// Hoisting with var
// var ko declare karne se pehle log kiya
console.log(hoistedVar);
var hoistedVar = "Hoisted var value";
// Value undefined milti hai kyunki var hoist hota hai par initialize baad me

//// Hoisting with let and const
// let aur const ko declare karne se pehle log kiya to error aata hai
// console.log(hoistedLet);   // ReferenceError: TDZ
let hoistedLet = "Hoisted let value";
// console.log(hoistedConst); // ReferenceError: TDZ
const hoistedConst = "Hoisted const value";
// Error type: ReferenceError (Temporal Dead Zone)

//// Re-declaration
// var dobara declare ho sakta hai
var reDec = "First";
var reDec = "Second";
console.log(reDec);
// let ya const dobara same scope me declare nahi ho sakte
// let reDecLet = "First"; let reDecLet = "Second"; // SyntaxError
// const reDecConst = "First"; const reDecConst = "Second"; // SyntaxError

//// Re-assignment
// var aur let reassign ho sakte hain
var rVar = 1; rVar = 2; console.log(rVar);
let rLet = 3; rLet = 4; console.log(rLet);
// const reassign nahi hota
const rConst = 5;
// rConst = 6; // TypeError

//// Temporal Dead Zone (TDZ)
// let aur const ko declare se pehle access nahi kar sakte
// console.log(tdzL); // ReferenceError
let tdzL = "TDZ let";
// console.log(tdzC); // ReferenceError
const tdzC = "TDZ const";
// Reason: Declaration se pehle TDZ rehta hai

//// When to use var, let, and const
// var: legacy code ya function-scoped counters
function sumWithVar(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) total += arr[i];
  return total;
}
console.log(sumWithVar([1,2,3]));
// let: block-scoped loop index
for (let i = 0; i < 2; i++) { console.log("loop", i); }
// const: values jo change nahi hongi
const API_BASE = "https://example.com"; console.log(API_BASE);

//// String Interpolation
// first name aur last name se full name banaya
let fName = "John", lName = "Doe";
let fullName = `${fName} ${lName}`;
console.log(fullName);

//// Multi-line Strings
// multi-line address
let address = `House 10
Street ABC
Karachi`;
console.log(address);

//// Simple Expressions
// do numbers ka sum template literal me
let a1 = 7, a2 = 8;
console.log(`Sum is ${a1 + a2}`);

//// Function Calls
// product function call template literal me
function product(x, y) { return x * y; }
console.log(`Product is ${product(6, 7)}`);

//// Creating a Tagged Template
// simple tag function jo strings aur values log kare
function simpleTag(strings, ...values) {
  console.log("Strings:", strings);
  console.log("Values:", values);
}
simpleTag`Hello ${fName} ${lName}`;

//// Formatting
// tag function jo uppercase me format kare
function toUpperTag(strings, ...values) {
  let s = "";
  for (let i = 0; i < strings.length; i++) {
    s += strings[i];
    if (i < values.length) s += values[i];
  }
  return s.toUpperCase();
}
console.log(toUpperTag`hello ${"world"}`);

//// Conditional Logic
// hour ke base par message
let hour = 15;
console.log(`${hour < 12 ? "Good Morning" : "Good Afternoon"}`);

//// Loops within Template Literals
// items se HTML list banayi
let list = ["Milk", "Eggs", "Bread"];
let html = `<ul>${list.map(item => `<li>${item}</li>`).join('')}</ul>`;
console.log(html);

//// Escaping Backticks
// backtick include kiya string me
let withBacktick = `Ye backtick hai: \``;
console.log(withBacktick);

//// Nested Template Literals
// nested HTML structure
let rows = [ ["A1","B1"], ["A2","B2"] ];
let table = `<table>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;
console.log(table);

//// Simple Condition
// age based canVote
let age = 19;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

//// Even or Odd
// number even ya odd
let number = 9;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

//// Grade Evaluation
// score se grade nikaala
let score = 83;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade);

//// Login Status
// isLoggedIn par message
let isLoggedIn = false;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

//// Discount Eligibility
// isMember aur purchaseAmount par 10 percent discount
let isMember = true;
let purchaseAmount = 150;
let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;
console.log(discount);

//// Determine Max Value
// ternary se max of two
function maxValue(a, b) { return a > b ? a : b; }
console.log(maxValue(10, 20));

//// Greeting Message
// greet function with default guest
function greet(name) { return name ? `Hello, ${name}!` : "Hello, guest!"; }
console.log(greet("Ali"));
console.log(greet(""));

//// Mapping Values
// numbers ko even par double, odd par triple
let mapNums = [1,2,3,4,5];
let mapped = mapNums.map(n => n % 2 === 0 ? n * 2 : n * 3);
console.log(mapped);

//// Filtering Values
// strings length > 3
let strArr = ["hi", "no", "cake", "door", "a"];
let filteredStrings = strArr.filter(s => s.length > 3 ? true : false);
console.log(filteredStrings);

//// Copying an Array
// spread se shallow copy
let originalArray = [1,2,3];
let copiedArray = [...originalArray];
console.log(originalArray, copiedArray, originalArray === copiedArray);

//// Merging Arrays
// do arrays ko merge kiya
let array1 = [1,2], array2 = [3,4];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

//// Adding Elements to an Array
// beginning aur end me element add kiya
let numsAdd = [2,3,4];
numsAdd = [1, ...numsAdd, 5];
console.log(numsAdd);

//// Copying an Object
// object copy with spread
let originalObject = {a:1, b:2};
let copiedObject = {...originalObject};
console.log(originalObject, copiedObject, originalObject === copiedObject);

//// Merging Objects
// overlapping keys ke sath merge
let object1 = {x:1, y:2};
let object2 = {y:99, z:3};
let mergedObject = {...object1, ...object2};
console.log(mergedObject);
// overlapping keys me right-most object2 ki value aati hai

//// Updating Object Properties
// spread se email update aur address add
let user = {name:"Ali", age:22, email:"old@mail.com"};
let updatedUser = {...user, email:"new@mail.com", address:"Karachi"};
console.log(updatedUser);

//// Passing Array Elements as Arguments
// sum function me spread se values pass ki
function sum(a,b,c){ return a+b+c; }
let nums3 = [3,4,5];
console.log(sum(...nums3));

//// Combining Multiple Arrays
// function combineArrays jo multiple arrays ko combine kare
function combineArrays(...arrays){ return arrays.flat(); }
console.log(combineArrays([1,2],[3,4],[5]));

//// Rest Parameter with Spread Operator
// multiply function jo first arg se baqi args ko multiply kare
function multiply(multiplier, ...values){ return values.map(v => v * multiplier); }
console.log(multiply(3, 1,2,3,4));

//// Spread Operator with Nested Structures
// shallow copy demo
let nestedArray = [[1,2],[3,4]];
let shallowCopy = [...nestedArray];
shallowCopy[0][0] = 999;
console.log("original", nestedArray, "copy", shallowCopy);
// shallow copy me inner arrays reference share hotay hain

//// Sum Function
// rest se sum
function sumRest(...nums){ return nums.reduce((acc,n)=>acc+n,0); }
console.log(sumRest(1,2,3), sumRest(10,20,30,40));

//// Average Function
// rest se average
function average(...nums){ return nums.length ? nums.reduce((a,n)=>a+n,0)/nums.length : 0; }
console.log(average(2,4,6), average());

//// First and Rest
// array destructuring with rest
let arrNums = [10,20,30,40,50];
let [first, ...rest] = arrNums;
console.log(first, rest);

//// Skip and Rest
// first two skip karke baqi
let colors = ["red","green","blue","yellow","purple"];
let [ , , ...remainingColors] = colors;
console.log(remainingColors);

//// Basic Destructuring (object with rest)
// name, email alag; baqi rest me
let person = {name:"Sara", age:25, email:"sara@mail.com", address:"Lahore"};
let {name: pName, email: pEmail, ...pRest} = person;
console.log(pName, pEmail, pRest);

//// Nested Destructuring (object)
// student me nested info
let student = {id:1, name:"Hamza", grades:[90,85], info:{age:20, major:"CS"}};
let {id, name: sName, info:{major}, ...sRest} = student;
console.log(id, sName, major, sRest);

//// Filter Even Numbers (rest args)
// sirf even numbers return
function filterEven(...nums){ return nums.filter(n => n % 2 === 0); }
console.log(filterEven(1,2,3,4,5,6));

//// Combine and Sort Arrays
// multiple arrays ko combine karke sort kiya
function combineAndSort(...arrays){ return arrays.flat().sort((x,y)=>x-y); }
console.log(combineAndSort([3,1],[4,2],[10,7]));

//// Basic Destructuring (arrays)
// fruits ke elements variables me
let fruits = ["apple","banana","cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

//// Skipping Elements (arrays)
// pehla primary, teesra tertiary
let colors2 = ["red","green","blue","yellow"];
let [primaryColor, , tertiaryColor] = colors2;
console.log(primaryColor, tertiaryColor);

//// Rest Operator (arrays)
// pehla element alag, baqi remainingNumbers
let numbers12345 = [1,2,3,4,5];
let [firstNumber, ...remainingNumbers] = numbers12345;
console.log(firstNumber, remainingNumbers);

//// Basic Destructuring (object simple)
// person2 ke name, age, city
let person2 = {name:"Bilal", age:28, city:"Karachi"};
let {name, age: age2, city} = person2;
console.log(name, age2, city);

//// Renaming Variables (object)
// car properties rename ki
let car = {make:"Toyota", model:"Corolla", year:2020};
let {make: carMake, model: carModel, year: carYear} = car;
console.log(carMake, carModel, carYear);

//// Default Values (object)
// language ka default English
let settings = {theme:"dark"};
let {theme, language = "English"} = settings;
console.log(theme, language);

//// Array of Arrays (nested destructuring)
// sub-arrays ke pehle elements a,b,c
let nestedArray2 = [[1,2],[3,4],[5,6]];
let [[a],[b],[c]] = nestedArray2;
console.log(a,b,c);

//// Object within an Object (nested)
// profile me details se email aur address
let profile = {username:"user1", details:{email:"u@mail.com", address:"PK"}};
let {username, details:{email, address: addr}} = profile;
console.log(username, email, addr);

//// Mix of Arrays and Objects
// data.info ke objects se name aur age
let data = {id:42, info:[{name:"Alice"}, {age:25}]};
let {id: dataId, info:[{name: dataName}, {age: dataAge}]} = data;
console.log(dataId, dataName, dataAge);

//// Array Parameters
// printCoordinates function me destructuring
function printCoordinates([x,y]) { console.log("x:", x, "y:", y); }
printCoordinates([5,10]);
printCoordinates([15,20]);

//// Object Parameters
// displayUser function me destructuring
function displayUser({name, age}) { console.log("name:", name, "age:", age); }
displayUser({name:"Sara", age:21});
displayUser({name:"Usman", age:30});

//// List Property Names
// Object.keys se book ke keys
let book = {title:"Book A", author:"Author A", year:2020};
console.log(Object.keys(book));

//// Count Properties
// student2 ke properties count
let student2 = {name:"Ali", age:20, grade:"A", school:"ABC"};
console.log(Object.keys(student2).length);

//// Iterate Over Keys
// product ke keys aur values print kiye
let product = {name:"Phone", price:50000, category:"Electronics"};
Object.keys(product).forEach(k => console.log(k, product[k]));

//// List Property Values
// Object.values se array of values
let movie = {title:"Inception", director:"Nolan", year:2010, genre:"Sci-Fi"};
console.log(Object.values(movie));

//// Sum Values
// scores ke values ka total
let scores = {math:80, science:90, english:85};
let totalScore = Object.values(scores).reduce((a,n)=>a+n,0);
console.log(totalScore);

//// Iterate Over Values
// user values ko print kiya
let userVals = {username:"abc", email:"a@b.com", location:"PK"};
Object.values(userVals).forEach(v => console.log(v));

//// List Entries
// car entries
let car2 = {make:"Honda", model:"Civic", year:2019};
console.log(Object.entries(car2));

//// Convert Object to Array
// person3 ko entries array me badla
let person3 = {firstName:"Imran", lastName:"Khan", age:30};
console.log(Object.entries(person3));

//// Iterate Over Entries
// settings2 ke key aur value log
let settings2 = {theme:"light", notifications:true, privacy:"high"};
Object.entries(settings2).forEach(([k,v]) => console.log(k, v));

//// Filter Keys
// inventory me value > 10 ke keys
let inventory = {apples:5, bananas:12, oranges:20, grapes:8};
let bigStockKeys = Object.keys(inventory).filter(k => inventory[k] > 10);
console.log(bigStockKeys);

//// Transform Values
// Celsius se Fahrenheit conversion using entries
let temperatures = {morning:20, afternoon:30, evening:25};
let fahrenheitEntries = Object.entries(temperatures).map(([k,c]) => [k, c*9/5 + 32]);
let temperaturesF = Object.fromEntries(fahrenheitEntries);
console.log(temperaturesF);

//// Key-Value Swap
// roles me keys aur values swap kiye
let roles = {admin:"a1", editor:"e1", viewer:"v1"};
let swapped = Object.fromEntries(Object.entries(roles).map(([k,v]) => [v,k]));
console.log(swapped);

//// Filter and Map (HOF)
// even numbers hata ke remaining ko square kiya
function filterAndMap(arr, filterFn, mapFn){ return arr.filter(filterFn).map(mapFn); }
let hofNums = [1,2,3,4,5,6,7,8,9,10];
let resultHOF = filterAndMap(hofNums, n => n % 2 !== 0, n => n*n);
console.log(resultHOF);

//// Sort and Reduce (HOF)
// words ko sort karke single string banayi
function sortAndReduce(arr, sortFn, reduceFn){ return arr.sort(sortFn).reduce(reduceFn); }
let words = ["apple","banana","cherry","date"];
let sortedConcat = sortAndReduce([...words], (a,b)=>a.localeCompare(b), (acc,w)=> acc ? acc + " " + w : w);
console.log(sortedConcat);

//// Simple Callback
// greet callback ke sath
function greetCb(name, callback){ callback(`Hello, ${name}!`); }
function printGreeting(msg){ console.log(msg); }
greetCb("Ayesha", printGreeting);

//// Asynchronous Callback
// fetchData simulate kiya setTimeout se
function fetchData(callback){
  setTimeout(() => callback({id:1, title:"Data"}), 500);
}
function displayData(data){ console.log("Received:", data); }
fetchData(displayData);

//// Simple Arrow Function
// add function ko arrow me convert kiya
const add = (a,b) => a + b;
console.log(add(3,5));

//// Arrow Function with Array Methods
// numbers ko square kiya map se
let arrSquare = [1,2,3,4,5].map(n => n*n);
console.log(arrSquare);

//// Variable Scope
// inner function outer ke x ko access karta hai
function outer(){
  let x = 10;
  function inner(){ console.log("x =", x); }
  inner();
}
outer();

//// Closure
// createCounter closure jo independent state rakhta hai
function createCounter(){
  let c = 0;
  return function(){ c++; console.log(c); };
}
let counter1 = createCounter();
let counter2 = createCounter();
counter1(); counter1(); counter2(); counter1(); counter2();

//// Simple Default Parameters
// greetDefault me default greeting Hello
function greetDefault(name, greeting = "Hello"){ console.log(`${greeting}, ${name}`); }
greetDefault("Ali");
greetDefault("Ali", "Salam");

//// Default Parameters with Other Arguments
// calculateArea with defaults
function calculateArea(width = 10, height = 5){ return width * height; }
console.log(calculateArea(), calculateArea(4,7));

//// Square Numbers (map)
let sqNums = [1,2,3,4,5].map(n => n*n);
console.log(sqNums);

//// Convert to Uppercase (map)
let upperWords = ["apple","banana","cherry"].map(w => w.toUpperCase());
console.log(upperWords);

//// Filter Even Numbers (filter)
let onlyEven = [1,2,3,4,5,6,7,8,9,10].filter(n => n % 2 === 0);
console.log(onlyEven);

//// Filter Long Words (filter)
// words length > 5
let longWords = ["apple","banana","cherry","date"].filter(w => w.length > 5);
console.log(longWords);

//// Log Numbers (forEach)
[1,2,3,4,5].forEach(n => console.log(n));

//// Log Word Lengths (forEach)
["apple","banana","cherry"].forEach(w => console.log(w.length));

//// Sum of Numbers (reduce)
let sumReduced = [1,2,3,4,5].reduce((a,n)=>a+n,0);
console.log(sumReduced);

//// Concatenate Strings (reduce)
let sentence = ["Hello","world","this","is","JavaScript"].reduce((a,w)=> a ? a + " " + w : w, "");
console.log(sentence);

//// Check for Even Number (some)
let hasEven = [1,3,5,7,8].some(n => n % 2 === 0);
console.log(hasEven);

//// Check for Long Word (some)
let hasLongWord = ["apple","banana","cherry","date"].some(w => w.length > 5);
console.log(hasLongWord);

//// Check All Even Numbers (every)
let allEven = [2,4,6,8,10].every(n => n % 2 === 0);
console.log(allEven);

//// Check All Long Words (every)
let allLong = ["elephant","giraffe","hippopotamus"].every(w => w.length > 5);
console.log(allLong);

//// Find First Even Number (find)
let firstEven = [1,3,5,7,8].find(n => n % 2 === 0);
console.log(firstEven);

//// Find Long Word (find)
let firstLong = ["apple","banana","cherry","date"].find(w => w.length > 5);
console.log(firstLong);

//// Find Index of First Even Number (findIndex)
let idxEven = [1,3,5,7,8].findIndex(n => n % 2 === 0);
console.log(idxEven);

//// Find Index of Long Word (findIndex)
let idxLong = ["apple","banana","cherry","date"].findIndex(w => w.length > 5);
console.log(idxLong);

//// Simple Promise
// delay promise jo ms ke baad resolve karta hai
function delay(ms){ return new Promise(res => setTimeout(res, ms)); }
delay(2000).then(() => console.log("Hello, world!"));

//// Promise Chain
// fetchDataPromise resolve karta hai data ke sath
function fetchDataPromise(){
  return new Promise(res => setTimeout(() => res({ok:true, data:{id:1}}), 300));
}
fetchDataPromise().then(d => console.log("Data:", d));

//// Error Handling (Promise)
// fetchUserData missing age par reject kare
function fetchUserData(user){
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (user.age == null) rej(new Error("Age missing"));
      else res(user);
    }, 300);
  });
}
fetchUserData({name:"Ali", age:22}).then(u => console.log("User ok:", u)).catch(e => console.log("Err:", e.message));
fetchUserData({name:"NoAge"}).then(u => console.log("User ok:", u)).catch(e => console.log("Err:", e.message));

//// Simulate Network Request
// getWeather success aur error dono simulate
function getWeather(shouldFail = false){
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldFail) rej(new Error("Network error"));
      else res({city:"Karachi", temp:34});
    }, 1000);
  });
}
getWeather().then(w => console.log("Weather:", w)).catch(e => console.log("Fail:", e.message));
getWeather(true).then(w => console.log("Weather:", w)).catch(e => console.log("Fail:", e.message));

//// Simple async Function
// sayHello await delay ke sath
async function sayHello(){
  await delay(2000);
  console.log("Hello, world!");
}
sayHello();

//// Fetch Data with async/await
// getUserData try/catch ke sath
async function getUserData(){
  try {
    const u = await fetchUserData({name:"Sara", age:23});
    console.log("await user:", u);
  } catch (e) {
    console.log("await error:", e.message);
  }
}
getUserData();

//// Fetch and Process Data
// fetchUser aur fetchPosts ke sath getUserAndPosts
function fetchUser(){
  return new Promise(res => setTimeout(()=>res({id:7, name:"Ahmed"}), 300));
}
function fetchPosts(userId){
  return new Promise(res => setTimeout(()=>res([{id:1, userId, title:"Post 1"}]), 300));
}
async function getUserAndPosts(){
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  console.log("user", user, "posts", posts);
}
getUserAndPosts();

//// Error Handling in async/await
// fetchUser2 not found par reject
function fetchUser2(found = true){
  return new Promise((res, rej) => setTimeout(()=> found ? res({id:1}) : rej(new Error("User not found")), 300));
}
async function getUserInfo(){
  try {
    const u = await fetchUser2(false);
    console.log("User:", u);
  } catch (e) {
    console.log("Error:", e.message);
  }
}
getUserInfo();

//// Simulate API Calls
// apiCall random delay ke baad resolve, kabhi kabhi reject
function apiCall(label){
  return new Promise((res, rej) => {
    const delayMs = Math.floor(Math.random()*500)+200;
    setTimeout(() => {
      if (Math.random() < 0.9) res(`${label} done in ${delayMs}ms`);
      else rej(new Error(`${label} failed`));
    }, delayMs);
  });
}
async function getData(){
  try {
    const r1 = await apiCall("Call 1"); console.log(r1);
    const r2 = await apiCall("Call 2"); console.log(r2);
    const r3 = await apiCall("Call 3"); console.log(r3);
  } catch (e) {
    console.log("API error:", e.message);
  }
}
getData();
