const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "veer singh", password: '123' })
        } else {
            reject("ERROR: js went wrong")
        }
    }, 1000)
})

const consumePromiseONe = async () => {
    try {
        const response = await promiseOne
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }

}
consumePromiseONe()