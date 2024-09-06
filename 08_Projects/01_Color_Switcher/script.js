const btns = document.querySelectorAll(".button")

const body = document.querySelector("body")

btns.forEach((btns) =>{

    console.log(btns);  
       

    btns.addEventListener("click", (e) =>{ 
        
        console.log(e);

        console.log(e.target);       
                

        if(e.target.id === "grey"){

            body.style.backgroundColor = e.target.id       
        }

        if(e.target.id === "aqua"){

            body.style.backgroundColor = e.target.id       
        }

        if(e.target.id === "blue"){

            body.style.backgroundColor = e.target.id       
        }

        if(e.target.id === "yellow"){

            body.style.backgroundColor = e.target.id       
        }
        
        
    })
})