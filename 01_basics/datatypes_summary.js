// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 1264165456435142456312n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let obj = {
    name: "veer",
    age: 18
}

const myFunction = function (){
    console.log("Hello world");    
}

// console.log(typeof heros);



// ****************************************************************

// Stack, Heap Memory

// Stack (Primitive), Heap (Non-Primitive)


let myName = "veerpal-singh"
let anotherName = myName
anotherName = "yash-singh"

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "user@gmail.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "veer@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

