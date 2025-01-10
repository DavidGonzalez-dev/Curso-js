// 1. Crea un función que utilice error correctamente
let error = (num) => {
    if (typeof num !== 'number') {
        console.error('El argumento debe ser un número')
    }
}

error('Hola')
// 2. Crea una función que utilice warn correctamente
let warn = (num) => {
    if (typeof num !== 'number') {
        console.warn('El argumento debe ser un número')
    }
}
warn('Hola')

// 3. Crea una función que utilice info correctamente
let info = (num) => {
    if (typeof num !== 'number') {
        console.info('El argumento debe ser un número')
    }
}
// 4. Utiliza table
let data = [
    {
        name: 'David',
        age: 19
    },
    {
        name:'Sara',
        age:29
    }
]
console.table(data)

// 5. Utiliza group
console.group('info Usuario: ')
for (const user of data) {
    console.log(user.name)
    console.log(user.age)
    console.log()
}
console.groupEnd('info Usuario: ')

// 6. Utiliza time
console.time('Tiempo de Impresion: ')
console.group('info Usuario: ')
for (const user of data) {
    console.log(user.name)
    console.log(user.age)
    console.log()
}
console.groupEnd('info Usuario: ')
console.timeEnd('Tiempo de Impresion: ')


// 7. Valida con assert si un número es positivo
let num = -1
console.assert(num >= 0, 'El numero es negativo')
// 8. Utiliza count
for(let i=0; i < 10; i++){
    console.count('Kills')
}
// 9. Utiliza trace
console.trace()
// 10. Utiliza clear
console.clear()