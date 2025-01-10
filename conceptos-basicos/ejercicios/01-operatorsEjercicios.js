// 1. Crea una variable para cada operación aritmética

let suma = 1 + 2
let resta = 1 - 2
let multiplicacion = 1 * 2
let division = 1 / 2
let modulo = 1 % 2
let exponente = 2 ** 2

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 1
resta -= 1
multiplicacion *= 4
division /= 5
modulo %= 2
exponente **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log('-----------------------------------------------')
console.log('         Comparaciones Verdaderas              ')
console.log('-----------------------------------------------')

console.log(2 > 1)
console.log(5 < 10)
console.log(5 <= 5)
console.log(10>= 9)
console.log(1 == true)
console.log(null === null)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log('-----------------------------------------------')
console.log('         Comparaciones Falsas                  ')
console.log('-----------------------------------------------')

console.log(1 > 2)
console.log(11 < 10)
console.log(15 >= 20)
console.log(10 <= 5)
console.log(1 == 2)
console.log(1 === '1')

// 5. Utiliza el operador lógico and

console.log('-----------------------------------------------')
console.log('         Comparaciones and(&&)                 ')
console.log('-----------------------------------------------')

console.log(1 < 2 && 2 < 3)

// 6. Utiliza el operador lógico or

console.log('-----------------------------------------------')
console.log('         Comparaciones or(||)                  ')
console.log('-----------------------------------------------')

console.log(3 > 8 || 5 < 10)

// 7. Combina ambos operadores lógicos

console.log('-----------------------------------------------')
console.log('         Comparaciones combinadas              ')
console.log('-----------------------------------------------')

console.log((3 > 8 || 5 < 10) && 5=='5')

// 8. Añade alguna negación

console.log('-----------------------------------------------')
console.log('         Comparaciones negacion                ')
console.log('-----------------------------------------------')

console.log(!(3 > 8 || 5 < 10) && 5=='5')

// 9. Utiliza el operador ternario

console.log('-----------------------------------------------')
console.log('         Comparaciones ternaria                ')
console.log('-----------------------------------------------')

5 < 3 ? console.log('El 5 es mayor que 3') : console.log('El 5 es menor que tres')

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log('-----------------------------------------------')
console.log('         Comparaciones todos                   ')
console.log('-----------------------------------------------')

console.log(((2 * 4) === (2 ** 3)) || 16 < 1)
