// var c = 300

let  a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("INNER", a);    
}

// console.log(a);
// console.log(b);
// console.log(a);


// ******************************** Closer *******************************


function one(){
    const username = "veer"

    function two(){
        const website = "youtube"
        // console.log(username);        
    }
    // console.log(website);

    two()
    
}

// one()



// *************************** Closer if else *****************************


if(true){
    const username = "veer"
    if(username === "veer"){
        const website = "youtube"
        // console.log(username + website);        
    }
    // console.log(website);    
}
// console.log(username);



// ************************** interesting *********************************

console.log(addone(5)) // Access

function addone(num){
    return num + 1
}

// addone(5)


console.log(addTwo(5)); // Can not access (conscept of Hoisting)

const addTwo = function(num){
    return num + 2
}

// addTwo(5)