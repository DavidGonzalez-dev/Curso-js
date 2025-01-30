//* 1. Crea una función que retorne a otra función
console.log("-------------------------------------")
console.log("Ejercicio 1")
console.log("-------------------------------------")

function crearSaludo(saludo) {
    let inicio = saludo
    return function (nombre) {
        return inicio + " " + nombre
    }
}

const saludo = crearSaludo("Hello")
console.log(saludo("David"))
console.log(saludo("Felipe"))
console.log()


//* 2. Implementa una función currificada que multiplique 3 números
console.log("-------------------------------------")
console.log("Ejercicio 2")
console.log("-------------------------------------")

function multiplyNumbers(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

const multiply1 = multiplyNumbers(2)
const multiply2 = multiplyNumbers(3)

console.log(multiply1(2)(2))
console.log(multiply2(2)(2))
console.log()


//* 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
console.log("-------------------------------------")
console.log("Ejercicio 3")
console.log("-------------------------------------")

function recursivePow(number, pow) {
    if (pow == 1) {
        return number
    }
    return number * recursivePow(number, pow - 1)
}

console.log(recursivePow(3, 3))
console.log()

//* 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.log("-------------------------------------")
console.log("Ejercicio 4")
console.log("-------------------------------------")

function createCounter(initialValue) {
    let value = initialValue

    return {
        getValue: () => value,
        increment: () => { value++ },
        decrement: () => { value-- }
    }
}

let counter = createCounter(1)
counter.increment()
console.log(counter.getValue())
counter.decrement()
console.log(counter.getValue())
console.log()

//* 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
console.log("-------------------------------------")
console.log("Ejercicio 5")
console.log("-------------------------------------")

function sumManyTimes(multiplier, ...numbers) {
    let sum = 0

    for (const number of numbers) {
        sum += number
    }

    return sum *= multiplier
}

console.log(sumManyTimes(2, 2, 3))
console.log()

//* 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
console.log("-------------------------------------")
console.log("Ejercicio 6")
console.log("-------------------------------------")

function numbersOperation(operationCallback, ...numbers) {
    return operationCallback(numbers)
}

function sumNumbers(numbers) {
    let result = 0
    for (const number of numbers) {
        result += number
    }
    console.log(result)
}

numbersOperation(sumNumbers, 2, 3, 4, 2)
console.log()

//* 7. Desarrolla una función parcial
console.log("-------------------------------------")
console.log("Ejercicio 7")
console.log("-------------------------------------")

function AplyDiscountPartial(discountPercentage) {
    return function (price) {
        return price -= price * discountPercentage
    }
}

const discount = AplyDiscountPartial(0.5)
console.log(discount(3))
console.log()


//* 8. Implementa un ejemplo que haga uso de Spread
console.log("-------------------------------------")
console.log("Ejercicio 8")
console.log("-------------------------------------")

function concatenateStrings(a, b, c) {
    return a + b + c
}

let strings = ["Hola", "me llamo", "David"]
console.log(...strings)
console.log()



//* 9. Implementa un retorno implícito
console.log("-------------------------------------")
console.log("Ejercicio 8")
console.log("-------------------------------------")

const mult = (a, b) => a * b
console.log(mult(2, 3))
console.log()

//* 10. Haz uso del this léxico
console.log("-------------------------------------")
console.log("Ejercicio 8")
console.log("-------------------------------------")

const persona = {
    nombre: "David",
    saludar: function() {
        const funcionInterna = () => { console.log(`Hola soy ${this.nombre}`) }
        funcionInterna()
    } 
}

persona.saludar()

