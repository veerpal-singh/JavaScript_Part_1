// const tinderUser = new Object() // singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "veer"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {   // Nested object
    email: "some@gmail.com",
    fullName : {
        userfullName:{
            firstname: "veer",
            lastName: "singh"
        }
    }
}

console.log(regularUser.fullName.userfullName.firstname);



const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2}
console.log(obj3);


console.log(Object.keys(tinderUser)); // convert to array
console.log(Object.values(tinderUser));


// ********************** Object Destructuring *************************

const course = {
    coursename: "jsj in hitesh",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

console.log(instructor);





