// Arrays
// Declaracion del Array
let myArray = [] //recomendada
let myArray2 = new Array()

// Inicializacion de Arrays
myArray = [1] // [1]
myArray2 = new Array(1) // Espacio para 1 elemento

// Añadiendo valores
myArray2 = new Array(3)
myArray[0] = 'David'
myArray[1] = 'Felipe'
myArray[2] = 'Gonzalez'

// Metodos comunes

// PUSH: Ingresa un elemento a la ultima poscicion del array
myArray = []
myArray.push('David') // ['David']
myArray.push('Gonzalez') // ['David', 'Gonzalez']
myArray.push('Cuevas') // ['David', 'Gonzalez', 'Cuevas']

// POP: Elimina el elemento en la ultima poscicion del array
myArray.pop() // ['David', 'Gonzalez']
console.log(myArray.pop()) //Elimina el ultimo elemento y lo devuelve

// SHIFT : Elimina el primer elemento del array
myArray.shift() // ['Gonzalez']
console.log(myArray.shift()) //Elimina el primer elemento y lo devuelve

//UNSHIFT: Añade 1 o mas elementos al principio del array
myArray.unshift('David', 'Gonzalez') // ['David', 'Gonzalez', 'Cuevas']

// LENGTH: Propiedad que contiene el largo del array
console.log(myArray.lenght)

// Vaciar un array
myArray = []
myArray.length = 0

// SLICE: Devolver un nuevo array con un segmento del original
//         Excluye el ultimo elemento
myArray = ['David', 'Felipe', 'Gonzalez', 19, false]
console.log(myArray.slice(1, 3)) // ['Felipe', 'Gonzalez']

// SPLICE: Elimina cierta cantidad de elementos desde una posicion
myArray.splice(1, 3) // ['David', false]