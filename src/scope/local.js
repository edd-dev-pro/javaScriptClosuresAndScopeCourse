// Scope Local

const helloWorld = () => {
    const hello = 'Hello World'
    console.log(hello)
}

helloWorld()
console.log(hello)

// Ambito lexico, se trabaja con la variable local 
var scope = "I'm global"

const functionScope = () => {
    var scope = "I'm just a local"
    const func = () => {
        return scope
    }
    console.log(func())
}

functionScope()
console.log(scope)