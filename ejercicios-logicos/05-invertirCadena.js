/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function revertirString(string) {
    let revertedString = []
    string = string.split('')

    for (const letter of string) {
        revertedString.unshift(letter)
    }

    return revertedString.join('')
}

console.log(revertirString('Hola mundo'))

