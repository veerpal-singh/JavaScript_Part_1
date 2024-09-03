// For Array 

// for of

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);    
}

const greetings = "Hello world"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);    
}


// Map

const map = new Map()  // Unique Value
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for(const key of map){     // Array
//     console.log(key);
    
// }


// for(const [key, value] of map){      // key, value
//     console.log(key, ':-', value);    
// }
