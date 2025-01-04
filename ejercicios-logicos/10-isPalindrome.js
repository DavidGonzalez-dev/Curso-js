/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function isPalindrome (string) {
    // Remove spaces, punctuation, and convert to lowercase
    string = string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\W_]/g, '');
    let revertedString = string.split('').reverse().join('');
    return string === revertedString;
}

console.log(isPalindrome('Ana lleva al oso la avellana')); // true
console.log(isPalindrome('Hello World')); // false

