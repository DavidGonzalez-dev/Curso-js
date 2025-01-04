// 1. Concatena dos cadenas de texto

let nombre = 'David'
let mensaje = `Has iniciado sesion de manera exitosa ${nombre}`

// 2. Muestra la longitud de una cadena de texto

console.log('-----------------------------------------------')
console.log('          Logituid de String                   ')
console.log('-----------------------------------------------')

console.log(mensaje.length)

// 3. Muestra el primer y último carácter de un string

console.log('-----------------------------------------------')
console.log('          Caractres                            ')
console.log('-----------------------------------------------')

console.log(`El primer caracter es ${mensaje[0]}`)
console.log(`El ultimo caracter es ${mensaje[mensaje.length - 1]}`)


// 4. Convierte a mayúsculas y minúsculas un string

console.log('-----------------------------------------------')
console.log('          Mayus Minus                          ')
console.log('-----------------------------------------------')

console.log(mensaje.toUpperCase())
console.log(mensaje.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

console.log('-----------------------------------------------')
console.log('          String Multilinea                    ')
console.log('-----------------------------------------------')

let stringMultilinea = `Esta
es
una
string
multilinea`

console.log(stringMultilinea)                        
                        

// 6. Interpola el valor de una variable en un string

console.log('-----------------------------------------------')
console.log('          Interpolar Variables                 ')
console.log('-----------------------------------------------')

console.log(`Hola ${nombre}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log('-----------------------------------------------')
console.log('          Replace                              ')
console.log('-----------------------------------------------')

console.log(mensaje.replaceAll(' ', '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log('-----------------------------------------------')
console.log('          Comprueba Palabra                    ')
console.log('-----------------------------------------------')

console.log(mensaje.includes('sesion'))

// 9. Comprueba si dos strings son iguales

console.log('-----------------------------------------------')
console.log('          Strings Iguales                      ')
console.log('-----------------------------------------------')

let string1 = 'hola'
let string2 = 'hola1'

console.log(string1 == string2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log('-----------------------------------------------')
console.log('          Comprueba longitus strings           ')
console.log('-----------------------------------------------')

console.log(string1.length == string2.length)