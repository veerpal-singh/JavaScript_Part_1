const name = "veer"
const repoCount = 50

// console.log(name  + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("veer-hc")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));


const newString = gameName.substring(0,4) // 4 is not enclude
console.log(newString);

const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const newStringOne = "    veer"
console.log(newStringOne);
console.log(newStringOne.trim());

const url  = "veer.veeru68@gmail.com"

console.log(url.replace("68","69"));

console.log(url.includes("yash"));

console.log(gameName.split("-"));











