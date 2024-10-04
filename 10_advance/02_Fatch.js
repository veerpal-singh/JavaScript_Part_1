const getAllUsers = async () =>{

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()

        console.log(data);
        
    }catch(error){

        console.log(error);
        
    }
}

getAllUsers()




// VS Code extensions

// GitHub Theme

// Auto Rename Tag

// Cobalt2 Theme

// Console Ninja

// ES7 + React/Redux/Native

// indent-rainbow

// Live Server

// Material icon Them

// One Dark Pro

// Bracket Pair Color

// Code Runner

// colorize

// Git Graph

// Prettier - Code formatter

// Tailwind CSS  intelliSense

// VScode-styled-components