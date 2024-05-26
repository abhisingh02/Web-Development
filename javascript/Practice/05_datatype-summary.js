// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 3553542437567673553n

// ********* Reference (Non Primitive) ***********

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "abhi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);



// +++++++++++++++++ Memory ++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myYoutubeName = "abhisheksinghdotcom"

let anotherName = myYoutubeName
anotherName = "codeabhi"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);