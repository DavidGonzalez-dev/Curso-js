/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
    number1 = 0
    number2 = 1

    console.log(number1)
    console.log(number2)
    for (let i = 0; i <= 50; i++) {
        number3 = number1 + number2
        console.log(number3)

        number1 = number2
        number2 = number3

    }
}

fibonacci()