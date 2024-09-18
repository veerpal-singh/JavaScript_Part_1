// Immediately Invoked Function Expressions (IIFE)

(function chai() {  // Global Scope Poluction
    console.log("DB CONNECTED");    // Named IIFe
})();

((name) => {  // UnNamed IIFE (Arrow function)
    console.log(`DB CONNECTED TWO ${name}`);
})("veer")


