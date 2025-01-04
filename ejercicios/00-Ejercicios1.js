// 1. Escribe un comentario en una línea

// Este es un comentario de una linea


// 2. Escribe un comentario en varias líneas

/*
Este es un
Comentario de Multiples Lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = 'David'
let edad = 18
let peso = 79.5
let esHombre = true
let valorIndefinido
let valorNulo = null
let miSimbolo = Symbol('miSimbolo')
let miNumeroGrande = 123345456n

// 4. Imprime por consola el valor de todas las variables
console.log('---------------------------------------------------')
console.log('           Valor de las Variables                  ')
console.log('---------------------------------------------------')
console.log(nombre)
console.log(edad)
console.log(peso)
console.log(esHombre)
console.log(valorIndefinido)
console.log(valorNulo)
console.log(miSimbolo)
console.log(miNumeroGrande)

// 5. Imprime por consola el tipo de todas las variables
console.log('---------------------------------------------------')
console.log('    Tipo de Dato de las Variables                  ')
console.log('---------------------------------------------------')

console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof peso)
console.log(typeof esHombre)
console.log(typeof valorIndefinido)
console.log(typeof valorNulo)
console.log(typeof miSimbolo)
console.log(typeof miNumeroGrande)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

nombre = 'Felipe'
edad = 19
peso = 80.1
esHombre = false
valorIndefinido = undefined
valorNulo = null
miSimbolo = Symbol('mi simbolo nuevo')
miNumeroGrande = 654321n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

nombre = 12
edad = 'Gonzalez'
peso = 'Cuevas'
esHombre = null
valorIndefinido = true
valorNulo = 1.5
miSimbolo = 123345456n
miNumeroGrande =Symbol(1234)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const apellido = 'Ramirez'
const nHijos = 3
const dosis = 3.5
const esViejo = true
const valorPorDefinir = undefined
const valorNulo2 = null
const APIKey = Symbol(1234)
const hashPassword = BigInt(1231231231231312312312312312312)


// 9. A continuación, modifica los valores de las constantes

// apellido = "hola"
// nHijos = 3
// dosis = 4.5
// esViejo = 1
// valorPorDefinir = null
// valorNulo2 = 1
// APIKey = 123
// hashPassword = "Password"

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse