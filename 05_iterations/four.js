// forEach loop

// Most use of Array

const coding = ["js", "HTML", 'CSS', "Python", "React"]

coding.forEach((val)=>{
    // console.log(val);    
})

const printMe = (item) =>{
    // console.log(item);    
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) =>{
    // console.log(item, index, arr);    
})


const myCoding = [
    
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((value) =>{
    console.log(value.languageName);    
})
