// Operadores aritmeticos
let a = 1
let b = 2

console.log(a + b) // resultado suma: 3
console.log(a - b) // resultado resta: -1
console.log(a * b) // resultado multiplicacion: 2
console.log(a / b) // resultado division: 0.5
console.log(a % b) // resultado modulo: 0.5
console.log(a ** b) // resultado exponente: 1
a++
console.log(a) // resultado incremento: 2
a--
console.log(a) // resultado decremento: 1

// Operadores de Asignacion
let myVariable = 2 // Valor 2
myVariable += 2 // valor 4
myVariable -= 2 // valor 0
myVariable *= 2 // valor 4
myVariable /= 2 // valor 1
myVariable %= 2 // valor 0
myVariable **= 2 // valor 4

// Operadors de Comparacion
console.log(a > b) // false
console.log(a < b) // true
console.log(10 <= 10) // true
console.log(a >= b) // false
// Comparamos una igualdad por valor
console.log(a == "1") // true
// Comparamos igualdad por identidad(tipo y valor)
console.log(a === "1") // false
// Desigualdad por valor
console.log(a != 5) //false
// Desigualdad por identidad
console.log(a !== "5") // true

 // Operadores Logicos
 // Operador and
 console.log(5 > 10 && 15 > 20) //false
 console.log(5 < 10 && 15 > 20) //false
 console.log(5 < 10 && 15 < 20) //true
 // Operador or
 console.log(5 > 10 || 15 > 20) //false
 console.log(5 < 10 || 15 > 20) //true
 // Negacion
 console.log(!(5 > 10 || 15 > 20)) //true
 console.log(!(5 < 10 || 15 > 20)) //false
 
 
// Operadores Ternarios
const isRaining = true
isRaining ? console.log('Esta lloviendo') : console.log('No esta lloviendo')




