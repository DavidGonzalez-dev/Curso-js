// 1. Imprime por consola tu nombre si una variable toma su valor
let estudiante = false
if (estudiante) {
    console.log('David')
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let password = '124'
let username = 'David321'
if (password === '123' && username === 'David321') {
    console.log('Ingreso exitoso')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = null
if (number > 0) {
    console.log('El numero es positivo')
} else if (number < 0) {
    console.log('El numero es negativo')
} else {
    console.log('El numero es 0')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 9
if (age >= 18) {
    console.log('Puedes votar')
} else {
    let years = 18 - age
    console.log(`No puedes votar aun te faltan ${years} anios para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age2 = 17
let mensaje = age2 >= 18 ? 'Mayor' : "Menor"
console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1
let diasMes
switch (mes) {
    case 0:
        diasMes = 31
        break
    case 1:
        diasMes = 28
        break
    case 2:
        diasMes = 31
        break
    case 3:
        diasMes = 30
        break
    case 4:
        diasMes = 31
        break
    case 5:
        diasMes = 30
        break
    case 6:
        diasMes = 31
        break
    case 7:
        diasMes = 31
        break
    case 8:
        diasMes = 30
        break
    case 9:
        diasMes = 31
        break
    case 10:
        diasMes = 30
        break
    case 11:
        diasMes = 31
        break
    default:
        diasMes = 'No se ha ingresado un mes valido'
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
    console.log(`El mes tiene ${diasMes} dias`)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    let idioma = 'es'
    switch (idioma){
        case 'en':
            console.log('Hello, world')
            break
        case 'es':
            console.log('Hola, mundo')
            break
        default:
            console.log('Idioma no valido')
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7