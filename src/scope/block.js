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