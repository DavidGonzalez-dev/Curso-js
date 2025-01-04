/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

function findKey(object, value) {
    for (const key in object) {
        if (object[key] == value) {
            return key
        }
    }
    return ''
}


function isMorseCode(morseCode, string) {
    let morseChar = ['.', '-']

    string = string.split('')

    for (const char of string) {
        if (Object.keys(morseCode).includes(char) && !morseChar.includes(char)) {
            return false
        }
    }

    return true
}

function morseDecoder(string) {
    const morseCode = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
    }

    let convertedString = []
    string = string.toLowerCase()

    // Conversion de morse a texto
    if (isMorseCode(morseCode, string)) {

        // Separamos las palabras
        string = string.trim().split('  ')

        //Iteramos por cada una de las palabras
        string.forEach(word => {
            // Se paramos los caracteres de la palabra
            word = word.split(' ')

            //Iteramos cada caracter y hacemos la conversion
            for (const char of word) {
                convertedString.push(findKey(morseCode, char))
            }

            // A;adimos el caraceter a la traduccion
            convertedString.push(' ')

        });

    }

    // Conversion de texto a morse
    else {
        string = string.trim().toLowerCase().split(' ')

        string.forEach(word => {

            word.split('').forEach(char => {
                convertedString.push(morseCode[char])
                convertedString.push(' ')

            })

            convertedString.push('  ')
        })
    }

    return convertedString.join('').trim()
}


let palabraMorse = '-- .- -.. .-. . --..--   - .   .- -- ---'
let palabraTexto = 'madre, te amo'

console.log(morseDecoder(palabraMorse))