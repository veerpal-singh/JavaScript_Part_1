// Insert Elements

let el = document.createElement("div")

// node.append(el) => adds at end of node (inside)

// node.prepend(el) => adds at the start of node (inside)

// node.before(el) => adds before the node (outside)

// node.after(el) => adds after the node (outside)


// Delete Element ...........

// Node.remove() => remmoves the node


// ***************************** Let's Practice ***************************


// Question: => Create a new button Element. Give it a text "click me", background color of red and text color of white

// Insert the button first element inside the body tag.


let newbtn = document.createElement("button")

newbtn.innerText = "Click Me"

newbtn.style.backgroundColor = "red"

newbtn.style.color = "white"

let body = document.querySelector("body")

body.prepend(newbtn)


// Question: => Create a <p> tag in HTML, give it a class & some styling
// Now create a new class in CSS and try to append this class to the <p> element.

// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList


let para = document.querySelector("p")

para.getAttribute("class")

para.setAttribute("class", "newClass") // overwrite

// Write way

para.classList

para.classList.add("newClass")

para.classList.remove("newClass")
