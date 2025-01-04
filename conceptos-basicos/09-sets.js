// Declaracion de Sets
let mySet = new Set()
let mySet2 = {} //! No es un set

// Inicializacion
mySet = new Set('david', 'felipe', 'gonzalez') // Solo toma el primer elemento
mySet = new Set(['david', 'felipe', 'gonzalez']) // Inicializa con todos los elementos

// Meotodos Comunes

// ADD: Añade un elemento al final del set
mySet.add('Hola mundo') // ['david', 'felipe', 'gonzalez', 'Hola mundo']

// DELETE: Se borra un elemento indicado (valor) en el set.
//          retorna un boolean dependiendo si exite el elemento o no

mySet.delete('david') // ['felipe', 'gonzalez', 'Hola mundo']

// HAS: Se usa para saber si un elemento se enceuntra dentro de un set
console.log(mySet.has('Hola mundo')) // true
console.log(mySet.has('david')) //false

// SIZE: Propiedad que representa el largo del set
console.log(mySet.size) // 3

// Convertir un set a un array
let MyArray = Array.from(mySet)

// Convertir un array a un set
mySet = new Set(MyArray)