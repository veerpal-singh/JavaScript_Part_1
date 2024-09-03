const coding = ["js", "HTML", 'CSS', "Python", "React"]

const values = coding.forEach((item) =>{

    // console.log(item);

    return item  // ForEach is not return vlaue  
})

//console.log(values);


const myNums = [1,2,3,4,5,6]

const newNums = myNums.filter((num) =>{
    return num > 4    
})

console.log(newNums);

