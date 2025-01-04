/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(string1, string2) {
    if (string1 === string2){
        return false
    }

    string2Chars = string2.split('')
    for(const letter of string1){
        if (!string2Chars.includes(letter)){
            return false
        }       
    }

    return true
}

console.log(anagrama('Hola', 'Ula'))