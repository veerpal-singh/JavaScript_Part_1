// if

const temperature = 41

if(temperature === 40){
    console.log("less then 50");    
}else{
    console.log("temperature is greater than 50");    
}


// <, >, >=, ==, !=, ===


// const balance = 1000

// if(balance < 500){
//     console.log("Less than 500");    
// }else if(balance < 750){
//     console.log("Less than 750");    
// }else if(balance < 900){
//     console.log("less than 900");    
// }else{
//     console.log("less than 1200");    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");    
}


// Terniary Operator

const  iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



