//CLOSURES - YOU KEEP THE SCOPE THAT YOU ARE IN-THE SCOPE THAT THE FUNCTION IS IN
//HOLD ON TO AND REMEMBERS THE INFO SO CAN BE USED OUTSIDE OF THE SCOPE
//TYPICALLY YOU CANNOT CALL A VARIABLE OUTSIDE OF THE FUNCTION, BUT IT WILL WITH CLOSURES
function greet(name) {
    return function greet(greeting) {
        console.log(`${greeting} ${name}`)
    }
}
let myGreet = greeting()

myGreet("")
console.log(greeting)

//SAME THING AS THIS
const greeting = () => {return 1}
//functions are just variables so you should be able to return them
//function are called first called function.
//you can use a function in the same way you can use a variable

//Currying - NO ONE CURRY'S - IT'S HARD TO FOLLOW (IT'S WACKY)
function greet(name) {
    return function greet(greeting) {
        console.log(`${greeting} ${name}`)
    }
}

const greetCory = greeting("Cory")
greetCory("Oh hi")

greeting("Devan")("Hello")