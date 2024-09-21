const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) =>{

    console.log(item);

    return item   // undefined => forEach is not return value
    
})

console.log(values);  // undefined



 // ****************************** Filter ***************************


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((value) =>{

    return value > 4
})
console.log(newNums);


