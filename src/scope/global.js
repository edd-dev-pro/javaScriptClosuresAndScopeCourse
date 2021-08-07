// Scope Global

var hello = 'Hello'
var hello = 'Hello +' // mala practica
// let wolrd = 'Hello World' Con let y const no se puede reasignar un valor
let wolrd = 'Hello'
const helloWorld = 'Hello World!'

const anotherFunction = () => {
    console.log(hello)
    console.log(wolrd)
    console.log(helloWorld)
}

anotherFunction()

const helloWorld = () => {
    globalVar = "I'm global" // mala practica
}

helloWorld()
console.log(globalVar)

const anotherFunctionTwo = () => {
    var localVar = globalVar = "I'm global"
}

anotherFunctionTwo()
console.log(globalVar)