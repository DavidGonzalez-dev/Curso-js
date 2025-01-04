/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(number) {
    for (let i = number - 1; i > 1; i--){
        if (number % i == 0){
            return false
        }
    }

    return true
}

console.log(isPrime(93))