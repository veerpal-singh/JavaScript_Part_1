// Event Listeners

// node.addEventListener(event, callback)

// node.removeEventListener(event, callback)

// Note => the callback reference should be same to remove


let btn1 = document.querySelector("#btn")

btn1.addEventListener("click", (event) =>{
    console.log("button1 was clicked - handler1");    
})


btn1.addEventListener("click", () =>{
    console.log("button1 was clicked - handler2");    
})

const handler3 = () =>{
    console.log("button1 was clicked - handler3");
}


btn1.addEventListener("click", handler3)

btn1.removeEventListener("click", handler3)


btn1.addEventListener("click", () =>{
    console.log("button1 was clicked - handler4");    
})



// ************************************************************************



// Question: => Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again


let modeBtn = document.querySelector("#mode")

let currMode = "light" // dark

modeBtn.addEventListener("click", () =>{

    if(currMode === "light"){
        currMode = "dark"
        document.querySelector("body").style.backgroundColor = "black"
    }else{
        currMode = "light"
        document.querySelector("body").style.backgroundColor = "white"
    }
       
})