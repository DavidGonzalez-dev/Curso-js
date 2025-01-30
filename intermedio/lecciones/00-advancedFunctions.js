// Funciones Avanzadas

// ---------------------------------
// Ciudadanos de primera clase
// ---------------------------------

// Asigar a Variables
const greet = function (name) {
    console.log(`Hola ${name}`)
}

greet('David')

// Pasar como argumentos
function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "Felipe")

// Retornar Funcion
function returnGreeting() {
    return greet
}

const greet2 = returnGreeting()
greet2("David Felipe")

// ---------------------------------
// Arrow Functions Avanzadas
// ---------------------------------

// Retorno implicito
const multiply = (a, b) => a * b
console.log(multiply(2, 5)) // 10

// - this lexico
const handler = {
    name: "David",
    greet: function () { console.log(`Hola ${this.name}`) },
    greetingArrow: () => { console.log(`Hola ${this.name}`) },
};

// handler.greet() // Hola David
// handler.greetingArrow() // Hola undefined

// ---------------------------------
// Funciones IIFE 
// ---------------------------------

// IIFE Clasico
(function () {
    console.log("IIFE clasico")
})();

// IIFE Arrow Function
(() => {
    console.log("IIFE arrow")
})();

// ---------------------------------
// Parametros Rest 
// ---------------------------------
function sum(...numbers) {
    let result = 0
    console.log(numbers)
    for (const number of numbers) {
        result += number
    }
    return result

}

console.log(sum(1, 2, 3, 4))

// ---------------------------------
// Operador Spread
// ---------------------------------
const numbers = [1, 2, 3, 4]
function sumWithSpread(a, b, c) {
    return a + b + c
}

sumWithSpread(...numbers)

// ---------------------------------
// Clousures
// ---------------------------------
function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()

// ---------------------------------
// Recursividad
// ---------------------------------
function factorial(n) {
    if (n == 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(4))

// ---------------------------------
// Funciones parciales
// ---------------------------------
function partialSum(a) { // Se crea la funcion parcial
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4) // Parametros para la primera funcion
console.log(sumWith(2, 3)) // Parametros para la segunda funcion

// ---------------------------------
// Currying
// ---------------------------------

function currySum(a) {
    return function (b) {
        return function (c) {
            return sum(a, b, c)
        }
    }
}

const sumAB = currySum(1)(2)
console.log(sumAB(3)) // 6
console.log(sumAB(4)) // 7
console.log(sumAB(5)) // 8

// ---------------------------------
// Callbacks
// ---------------------------------
function processData(data, callback) {
    let result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

processData([1, 2, 3], processResult)