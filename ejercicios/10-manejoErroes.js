//* 1. Captura una excepción utilizando try-catch
try {
    let myObject
    console.log(myObject.alias)
}
catch (error) {
    console.error('Ha ocurrido un error:', error.message)
}

console.log()
//* 2. Captura una excepción utilizando try-catch y finally
try {
    let myObject
    console.log(myObject.name)
}
catch (error) {
    console.error('Ha ocurrido un error:', error.message)
}
finally {
    console.log('Finalmente se ejecuta este bloque')
}
console.log()

//* 3. Lanza una excepción genérica
let personName = false
try {
    if (typeof personName !== 'string') {
        throw new TypeError('El nombre debe ser una cadena de texto')
    }
    console.log(`El nombre de la persona es ${personName}`)
}
catch (error) {
    console.error('Ha ocurrido un error:', error.message)
}


//* 4. Crea una excepción personalizada
class BalacenInsufficientError extends Error {
    constructor(message, balance) {
        super(message)
        this.name = 'BalacenInsufficientError'
        this.balance = balance
    }

}

console.log()
//* 5. Lanza una excepción personalizada
let person = {
    name: 'David',
    age: 20,
    balance: 100,
    updateBalance: function (productPrice) {
        this.balance = pay(this.balance, productPrice)
    }
}

let product = {
    name: 'Laptop',
    price: 500
}
function pay(balance, productPrice) {
    if (balance < productPrice) {
        throw new BalacenInsufficientError('Saldo insuficiente', balance)
    }
    balance -= productPrice
    return balance
}

try {
    person.updateBalance(product.price)
    console.log(`Se ha pagado el producto ${product.name}`)
    console.log(`Saldo actual: ${person.balance}`)
} catch (error) {
    console.error('Ha ocurrido un error:', error.message)
    console.log(`Saldo actual: ${error.balance}`)
}

console.log()
//* 6. Lanza varias excepciones según una lógica definida
//* 7. Captura varias excepciones en un mismo try-catch

let number = 1
let number2 = 2
try {
    if (number === 0) {
        throw new Error('El primer numero no puede ser 0')
    }
    if (!Number.isInteger(number2)) {
        throw new TypeError('El segundo número debe ser entero')
    }
    console.log(number / number2)
} catch (error) {
    if (error instanceof TypeError) {
        console.log('Error de tipo:', error.message)
    }
    else if (error instanceof Error) {
        console.log('Error:', error.message)
    }
}


//* 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let numbers = [1, 2, 3, '4', 5, '6', 7, 8, '9', 10]
let float = []


numbers.forEach(number => {
    try {
        float.push(number / 1.0)
    } catch (error) {
        console.log('Se produjo un error: ', error.message)
    }
})

console.log(float)
console.log()
//* 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function hasName(object) {
    console.log(object.name)
}

let myObject = {
    alias: 'AliasName'
}

// function hasName(object) {
//     if (!("name" in object)) {
//         throw new MissingPropertyError('El objeto no tiene la propiedad "name"')
//     }
//     console.log(object.name)
// }

class MissingPropertyError extends Error {
    constructor(message, propertyName) {
        super(message)
        this.propertyName = propertyName
    }

}

hasName(myObject)
console.log()
//* 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

let user = {
    username: 'user123',
    password: 'password123'
}


function LogIn(user) {
    let counter = 10

    while (counter > 0) {
        try {

            if (user.name !== 'user321' && user.password !== 'password321') {
                throw new Error(`Credenciales incorrectas, quedan ${counter} intentos`)
            }

            console.log('Se accedio con exito al sistema')
            return true

        } catch (error) {
            console.log(error.message)
            counter--
        }
    }

    return false
}

LogIn(user)
