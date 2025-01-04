/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function decimalBinary (number) {
    let binary = []

    while (number >= 1) {
        console.log(`${number}/2 = ${number% 2}`)
        binary.unshift(number % 2)
        number = Math.floor(number / 2)
    }

    return binary.join('')
}

console.log(decimalBinary(123))