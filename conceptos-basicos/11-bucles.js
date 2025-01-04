// bucles

// For
for (let contador = 0 /* Vriable contadora */; contador < 5 /* condicion */; contador++) {
    console.log(`Hola ${contador}`)
}

let numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    console.log(`El elemnto es ${numbers[i]}`)
}

// While
let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++;
}

// do while
i = 0
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of
let frutas = ['manzana', 'pera', 'mango', 'fresa', 'sandia']
for (let element of frutas) {
    console.log(element)
}

let miMapa = new Map([
    ['Hola', 1],
    ['como', 2],
    ['estas', 3]
])

frutas = new Set(frutas)

for (const elemento in frutas) {
    console.log(elemento)
}