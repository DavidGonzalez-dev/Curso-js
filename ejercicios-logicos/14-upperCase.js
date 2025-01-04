/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function upperCase(string){
    string = string.split('')
    let upperString = []

    string.forEach(char => {
        upperString.push(char.toUpperCase())
    });

    return upperString.join('')
}

console.log(upperCase('Hola mundo'))