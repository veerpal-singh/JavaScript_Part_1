// array

const myArray = [0,1,2,3,4,5]

const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArray[1]);


// Array methods

myArray.push(6) // add to last
myArray.push(7)
myArray.pop()  // delete to last

myArray.unshift(9) // add to start
myArray.shift() // delete to start


console.log(myArray.includes(9)); // boolean value => true, false
console.log(myArray.indexOf(3)); // index of 3 is = 3

const newArray = myArray.join() // change in string 1,2,3,4,5,6
console.log(newArray);
console.log(myArray);


// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3) // last range not included and original array not change

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3) // last range include and original array change
console.log("C",myArray);

console.log(myn2);








