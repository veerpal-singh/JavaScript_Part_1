// // var c = 300

// let  a = 300

// if(true){
//     let a = 10
//     const b = 20
//     // console.log("INNER", a);    
// }

// // console.log(a);
// // console.log(b);
// // console.log(a);


// // ******************************** Lexical Scoping *******************************


// function outer(){

//     let username = "Veer"
//     console.log("OUTER", secret);

//     function inner(){

//         let secret = "my123"
//         console.log("inner", username);        
//     }

//     function innerTwo(){
//         console.log("innerTwo", username);
//         console.log(secret);        
//     }
//     inner()
//     innerTwo()    
// }
// outer()



// *************************** Closure *****************************


// const outerfunc = (a) =>{

//     console.log("Live Viewers " + a);

//     const c = 4

//     return innerFun = (b) =>{
//         return a+b+c
//     }    
// }

// const score = outerfunc(2)

// console.log(score(5));



const outerfunc = (a,b,c) =>{

    return{

        innerOne : () =>{
            return a+b;
        },

        innerTwo : () =>{

            return a+b+c;
        }
    }
}

const scoreFunc = outerfunc(3,4,5)

console.log(scoreFunc.innerOne());

console.log(scoreFunc.innerTwo());




// // ************************** interesting *********************************

// console.log(addone(5)) // Access

// function addone(num){
//     return num + 1
// }

// // addone(5)


// console.log(addTwo(5)); // Can not access (conscept of Hoisting)

// const addTwo = function(num){
//     return num + 2
// }

// // addTwo(5)




