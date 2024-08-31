const user = {
    username: "veer",
    price: 999,

    welcomeMessage: function(){

        console.log(`${this.username}, welcome to website`); // this(Key Word) => Refer to corrent context 

        // console.log(this);       

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); // Current Context => Empty Object And in Browser => this => Window object 


function chai(){
    let username = 'veer'
    // console.log(this.username); // undefind use to Object not function   
}
// chai()  



// ***************************** Arrow Function ***********************


const addd = (num11, num22) =>{
    return num11 + num22
}
// console.log(addd);


// const adddTwo = (num1 , num2) => num1 + num2  // Implicit return

// const adddTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "veer"})

