// 1. Exporta una función
export function isPalindrome (string) {
    // Remove spaces, punctuation, and convert to lowercase
    string = string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\W_]/g, '');
    let revertedString = string.split('').reverse().join('');
    return string === revertedString;
}
// 2. Exporta una constante
export const PI = 3.1416;

// 3. Exporta una clase
export class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greet () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

