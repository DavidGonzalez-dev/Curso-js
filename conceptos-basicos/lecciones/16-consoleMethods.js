// Console

// log:  se usa para mostrar informacion general por consola
console.log('Hola mundo')

// error: se usa para destacar mensajes de error
console.error('Este es un mensaje de error')
console.error('Error al conectarse a la base de datos')

// warn: Se usa para mostrar advertencias
console.warn('Este es un mensaje de advertencia')

// info: Se usa para mostrar infomacion adicional
console.info('Mensaje con informacion adicional')

// table

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

//group
console.groupCollapsed('Grupo de mensajes');
console.log('Este mensaje es parte del grupo');
console.warn('Esta advertencia también es parte del grupo');
console.error('Este error es parte del grupo');
console.groupEnd();
console.log('Este mensaje NO es parte del grupo');

// assert
let age = 17
console.assert(age >= 18, 'El usuario no puede entrar por edad')

console.time('timer')
console.count('click')
console.count('click')
console.count('click')
console.countReset('click')
console.timeEnd('timer')

//Trace
