// Promise => Object representing

const promiseOne = new Promise((resolve, reject) => {

    // Do an async task

    // DB calls, cryptography, network

    setTimeout(() => {
        console.log("Async task is complete");

        resolve()

    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");

})



new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Async task 2");

        resolve()

    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");

})



const promiseThree = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({ username: "veer", email: "veer.@example.gmail.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})



const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "yash", password: "123" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: "123" })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 2000)
});

async function consumePromseFive(){
    try{
        const response = await promiseFive
        console.log(response);        
    } catch (error){
        console.log(error);        
    }
}

consumePromseFive()


