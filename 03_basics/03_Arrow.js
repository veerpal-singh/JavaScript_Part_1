const user = {

    userName: "veer",
    price: 999,

    welcomeMessage: function () {

        console.log(`${this.userName}, welcome to website`);  // this => refer to current context

        console.log(this);

    }
}

user.welcomeMessage()

user.userName = "sam"

user.welcomeMessage()

console.log(this); // empty object And Browser => Window Object



function chai() {

    console.log(this);
}

chai()


function chai2() {

    let user = "veer"

    console.log(this.username); // undefined

}

chai2()



// ***************************** Arrow Function ***********************


const chai3 = () => {

    console.log(this); // empty object

}

chai3()


const chai4 = () => {

    let name = "veer"

    console.log(this.name);   // undefined 

}

chai4()


const addTwo = (num1, num2) => {

    return num1 + num2
}

console.log(addTwo(3, 4))


const addThree = (a, b) => (a, b)

console.log(addThree(10, 20));



const addFour = (a, b) => ({ username: "veer" })

console.log(addFour(20, 30));


// Note1 => use to {Braces} => use return keyword

// Note2 => use to (paranthises) => not use to return keyword


