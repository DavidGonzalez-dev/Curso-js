/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorial(number) {
    if (number === 1) {
        return number
    }
    return number * factorial(number - 1)
}

console.log(factorial(5))