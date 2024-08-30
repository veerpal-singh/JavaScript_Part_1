function sayMyName(){
    console.log("V");

    console.log("E");

    console.log("E");

    console.log("R"); 

}

// sayMyName => function Referance

// sayMyName()  // function exicution

function addTwoNumbers(number1, number2){  // Parametars
    
    // console.log("veer"); // Before return value exicute

    return number1 + number2    

    // console.log("veer"); // After return value not exicute
    
}

// addTwoNumbers(3,4)  // Arguments

const result = addTwoNumbers(3,5)

console.log("Result", result); // result => undefined


function loginUserMessage(username = "sam"){  // Default value

    if(username === undefined){  // (!username)

        console.log("Please enter a username");

        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("veer"))

console.log(loginUserMessage()); // undefined


// ******************************** Rest Operator **********************

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,500));


// *********************** Object in Function ******************************


const user = {
    username: "veer",
    price: 199
}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


// ******************************* Array in Function ***********************


const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([10,20,30,40]));