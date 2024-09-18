//  *************************** Scop **********************************

var c = 300

// let  a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER", a);
}

console.log(a);
console.log(b);
console.log(a);


// ******************************** Lexical Scoping *******************************


function outer() {

    let a = "Veer"
    console.log("OUTER", secret);

    function inner() {

        let secret = "my123"
        console.log("inner", a);
    }

    function innerTwo() {
        console.log("innerTwo", a);
        console.log(secret);
    }
    inner()
    innerTwo()
}
outer()



// *************************** Closure *****************************


const outerfunc = (a) => {

    console.log("Live Viewers " + a);

    const c = 4

    return innerFun = (b) => {  // return to Lexical Scop
        return a + b + c
    }
}

const score = outerfunc(2)

console.log(score(5));



const outerfun = (a, b, c) => {

    return {    // return to Lexical Scop

        innerOne: () => {
            return a + b;
        },

        innerTwo: () => {

            return a + b + c;
        }
    }
}

const scoreFunc = outerfun(3, 4, 5)

console.log(scoreFunc.innerOne());

console.log(scoreFunc.innerTwo());



// ***************************** Hoisting ****************************


console.log(a); // undefined

var a = "veer"

console.log(b); // Error


const b = "JavaScript"





// ************************** interesting *********************************


console.log(addone(5)) // Access

function addone(num) {

    return num + 1
}

// addone(5)


console.log(addTwo(5)); // Can not access (conscept of Hoisting)

const addTwo = function (num) {
    return num + 2
}


// addTwo(5)




