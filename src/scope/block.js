const fruits = () => {
    if (true) {
        var fruits1 = 'appel'
        let fruits2 = 'banana' // let Establecia dentro del bloque no en la funcion
        const fruits3 = 'kiwi' // cons tEstablecia dentro del bloque no en la funcion
        console.log(fruits2)
        console.log(fruits3)
    }
    console.log(fruits1)
}

fruits()

// ---------------------

let x = 1
{
    let x = 2
    console.log(x)
}
console.log(x)

// -------------------

var x = 1
{
    var x = 2
    console.log(x)
}
console.log(x)

// -------------------

const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}

anotherFunction()

// ==== Output
// => 10
// => 10
// => 10
// => 10
// => 10
// => 10
// => 10
// => 10
// => 10
// => 10

// -------------------

const anotherFunctionTwo = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}

anotherFunctionTwo()

// ==== Output
// => 0
// => 1
// => 2
// => 3
// => 4
// => 5
// => 6
// => 7
// => 8
// => 9

// Con let, como saben, no se puede sobreescribir la variable, y tenemos un “let” diferente por cada iteración (Imaginen que cada iteración es un bloque de código totalmente diferente), 
// entonces, cada setTimeout agarra el “let” que está dentro de su propio bloque de código, y como es único gracias al scope, ahí si que se imprimen del 1 al 9:D!