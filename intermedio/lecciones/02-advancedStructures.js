// Estructuras Avanzadas

// -----------------------
// Arrays Avanzados
// -----------------------

// - Metodos Funcionales

//forEach

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))

// map
let doubled = numbers.map(element => element * 2)
console.log(doubled) // [ 2, 4, 6, 8, 10 ]

// filter
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

//reduce
let sum = numbers.reduce((previous, current) => previous + current)
console.log(sum)

// - Manipulacion

// flat
let nestedArray = [1, [2, [3, [4]]]]
let flatArray = nestedArray.flat(3)
console.log(nestedArray) // [1, [2, [3, [4]]]]
console.log(flatArray) // [ 1, 2, 3, [ 4 ] ]

// flatMap
let phrases = ["Hola mundo", "Adios mundo"]
let words = phrases.flatMap(phrase => phrase.split(' '))
console.log(words) // [ 'Hola', 'mundo', 'Adios', 'mundo' ]

// - OREDENACION

// sort
let unsorted = ['a', 'c', 'd', 'b']
let sorted = unsorted.sort()
console.log(sorted) // [ 'a', 'b', 'c', 'd' ]

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)
console.log(sorted) // [ 1, 3, 4, 6, 10 ]

// reverse
sorted.reverse()
console.log(sorted) //  10, 6, 4, 3, 1 ]

// -BUSQUEDA

// includes 
console.log(sorted.includes(4)) // true
console.log(sorted.includes(5)) // false

// find
sorted = [3, 4, 5, 6]
let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven) // 4

//findIndex
let findIndex = sorted.findIndex(element => element % 2 === 0)
console.log(findIndex) // 1

// -----------------------
// Sets Avanzados
// -----------------------

// -OPERACIONES

// Eliminacion de duplicados
const numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
const numbersSet = [...new Set(numbersArray)]
console.log(numbersArray) // [1, 2, 2, 3, 4, 5, 6, 6]
console.log(numbersSet) // [ 1, 2, 3, 4, 5, 6 ]

// - Operaciones con conjuntos
// union
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union) // Set(5) { 1, 2, 3, 4, 5 }

// interseccion
const interseccion = new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion) // Set(2) { 2, 3 }

// Diferencia
const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference) // Set(1) { 1 }

// - ITERACION

setA.forEach(element => console.log(element))

// -----------------------
// Maps Avanzados
// -----------------------

// - Iteracion
let myMap = new Map([
    ["name", "David"],
    ["age", 19]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// Conversion
const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Conversion a Diccionario
const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap) // { name: 'David', age: 19 }

// Conversion de Objeto a Mapa
const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject) // Map(2) { 'name' => 'David', 'age' => 19 }