// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

//* 1. Crea una función que reciba dos números y devuelva su suma

const suma = function (a, b) {
    return a + b
}
console.log(suma(1, 2))

const suma2 = (a, b) => a + b
console.log(suma2(3, 5))


//* 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let nums = [1, 2, 4, 5, 6, 7, 4, 5, 10]

function maxNumber(array) {
    let max = nums[0]

    for (const number of array) {
        if (number > max) {
            max = number
        }
    }
    return max
}

console.log(maxNumber(nums))

//* 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vowelsNumber(string) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let counter = 0

    for (const letter of string) {
        if (vowels.has(letter)) {
            counter++
        }
    }

    return counter
}

console.log(vowelsNumber('Hola Mundo'))


//* 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let stringsLowerCase = ['hola', 'mundo', 'como', 'se', 'hace']

function upperCase(strings) {
    let newArray = []

    for (let string of strings) {
        newArray.push(string.toUpperCase())
    }

    return newArray
}

console.log(upperCase(stringsLowerCase))



//* 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrime(number) {

    if (number == 2 || number == 3) {
        return true
    }

    else if (number % 2 != 0){
        stringNumber = number.toString().split('')
        verificationNumber = 0
        
        stringNumber.forEach(number => verificationNumber += parseInt(number))
    
        if (verificationNumber % 3 != 0) {
            return true
        }
    }

    return false

}

console.log(isPrime(7))


//* 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1 = ['hola', 1, 'david', 1034, false]
let array2 = ['hola', 'adios', 'david', true, false, 1, 2]

let arrayMatches = function(array1, array2){
    let arraysMatches = []

    for (const element1 of array1) {
        for (const element2 of array2) {
            if (element1 === element2){
                arraysMatches.push(element1)
            }        
        }
    }

    return arraysMatches
}

console.log(arrayMatches(array1, array2))


//* 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let array = [1, 2, 3, 4, 54, 3, 3]

const sumArray = array => {
    let count = 0

    array.forEach((number) => {
    
        if (number % 2 == 0){
            count += number
        }

    })

    return count
}

console.log(sumArray(array))

//* 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
array = [2, 3, 4, 5, 6]

const squareArray = function (array){
    let newArray = []

    array.forEach(number => 
        newArray.push(number**2)
    )

    return newArray
}

console.log(squareArray(array))


//* 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function revertString(string){
    let revertedString = []
    let stringArray = string.split('')

    for (const char of string) {
        revertedString.unshift(char)
    }

    return revertedString.join('')
}

console.log(revertString('Hola mundo'))

//* 10. Crea una función que calcule el factorial de un número dado\
function factorial(number){
    if (number == 1){
        return 1
    }
    return number * factorial(number - 1)
}

console.log(factorial(5))