// Cadenas de texto (string)
let nombre = 'David'
let apellido = "Gonzalez"
let email = `davidf@gamil.com`

// Numeros (number)
let edad = 18 // Numero entero
let altura = 1.18 //numero decimal

// Booleanos (boolean)
let esEstudiante = false
let esHombre = true

// variables a las que no se le han asignado un valor (undefined)
// Sin intencion se deja la variable sin valor
let undefinedValue 

// Valor nulo (null)
// Se declara de manera intencionada ya que esperamos que no halla un valor
let nullValue = null

// Symbol
// Son valores unicos
// Pueden ser utilizados como indentificadores de propiedades de objetos
// Ayudan a evitar colisiones
let symbolValue = Symbol('mysymbol')

// bigint
// Se usa cuando necesitamos guardar un numero que exeda 64-bits de tamaño
// Se pude usar toda la memoria de la maquina para guardar un bigint
let bigintvalue = BigInt(122344534534)
let bigintvalue2 = 1231231241231231231231n

// mostrando el tipo de dato
console.log(typeof nombre) //string
console.log(typeof(edad)) //number
console.log(typeof(altura)) //number
console.log(typeof(esEstudiante)) //boolean
console.log(typeof(undefinedValue)) //undefined
console.log(typeof(nullValue)) //object
console.log(typeof(symbolValue)) //symbol
console.log(typeof(bigintvalue)) //bigint