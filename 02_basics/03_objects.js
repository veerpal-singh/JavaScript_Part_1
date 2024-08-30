// singleton
// object.create


// object literals


const mySym = Symbol("key1")

const JsUser = {

    name: "Veer", // byDefault name => "name"
    "full name": "veerpal singh", // not access => (.) access is => [""]
    [mySym]: "myKey1",
    age: 18,
    location: "Lucknow",
    email: "veer.veeru@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "yash@gmain.com" // change value

// Object.freeze(JsUser) // freeze object

JsUser.greeting = () =>{
    console.log("Hello JS user");    
}


JsUser.greetingTwo = () =>{
    console.log(`Hello JS user,${this.name}`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


