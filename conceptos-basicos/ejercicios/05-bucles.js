// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

//* For
for (let numero = 1; numero < 21; numero++){
    console.log(numero)
}

//*while
let numero = 1
while (numero < 21){
    console.log(numero)
    numero++
}

//* do while
numero = 1
do {
    console.log(numero)
    numero ++
} while(numero < 21)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let numero = 1; numero < 101; numero++){
    suma += numero
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let numero = 2; numero <= 50; numero+=2){
    console.log(numero)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ['David', 'Felipe', 'Sara', 'Luz']
for (const nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = 'Hola mundo cruel.'
let numeroCaracteres = 0

for (const caracter of cadena) {
    numeroCaracteres ++
}

console.log(numeroCaracteres)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5]
let producto = 1
for (const numero of numeros) {
    producto += numero
}
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let numero = 1; numero <= 10; numero++){
    console.log(`5 * ${numero} = ${numero * 5}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let nombre = 'David'
let reves = []
for (const letra of nombre) {
    reves.unshift(letra)
}
console.log(reves.join(''))

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let incioSecuencia = 0
let siguienteNumero = 1
console.log(incioSecuencia)
console.log(siguienteNumero)
for (let i=0; i < 10; i++){
    nuevoNumero = incioSecuencia + siguienteNumero
    console.log(nuevoNumero)
    incioSecuencia = siguienteNumero
    siguienteNumero = nuevoNumero
    
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
numeros = [123, 321, 4321, 1, 2, 3, 4, -1, -1312, 20 , -100]
let menores = []
for (let numero of numeros){
    if (numero > 10){
        menores.push(numero)
    }
}

console.log(menores)