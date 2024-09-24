// Promise => Object representing

const promiseOne = new Promise((resolve, reject) => {

    setTimeout(() => {

        console.log("Async task is complete");

        resolve()

    }, 1000)
})

promiseOne.then(() =>{
    console.log("Promise consumed");

})



new Promise((resolve, reject) =>{

    setTimeout(() =>{

        console.log("Async task 2");

        resolve()

    }, 1000)

}).then(() =>{
    console.log("Async 2 resolved");

})



const promiseThree = new Promise((resolve, reject) =>{

    setTimeout(() =>{

        resolve({username: "chai", email: "chai@example.com"})

    }, 1000)
})

promiseThree.then((user) =>{
    console.log(user);

})


const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = false

        if (!error) {

            resolve({ username: 'veer', password: "123" })

        } else {
            reject("ERROR: SOMETHING WRONG")
        }

    }, 1000)
})

promiseFour.then((user) => {

    console.log(user);

    return user.username

}).then((username) => {
    console.log(username);

}).catch((error) => {
    console.log(error);

}).finally(() => console.log("promises is either resolved or rejected"))



