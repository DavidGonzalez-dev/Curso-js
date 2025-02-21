//* 1. Agregega una función al prototipo de un objeto
console.log("---------------------")
console.log("EJERCICIO 1")
console.log("---------------------")

let person = {
    name: "David",
    age: 19,
    greet: function () {
        console.log(`Hola, me llamo ${this.name}`)
    }
}


person.grow = function () {
    this.age++
}

console.log(person.__proto__)
console.log()

//* 2. Crea un objeto que herede de otro
console.log("---------------------")
console.log("EJERCICIO 2")
console.log("---------------------")

let policeOficcer = Object.create(person)
policeOficcer.grow()

console.log(policeOficcer.age)
console.log()

//* 3. Define un método de instancia en un objeto
console.log("---------------------")
console.log("EJERCICIO 3")
console.log("---------------------")

function Car(model, year, owner) {

    this.model = model
    this.year = year
    this.owner = owner

    function getOwner() {
        return this.owner
    }

    function setOwner(owner) {
        this.owner = owner
    }
}

const car = new Car("sandero", "2005")
console.log(car)
console.log()

//* 4. Haz uso de get y set en un objeto
console.log("---------------------")
console.log("EJERCICIO 4")
console.log("---------------------")

const bankAccount = {
    _accountNumber: '123',

    // getter
    get accountNumber() {
        return this._accountNumber
    },

    // Setter
    set accountNumber(number) {
        this._accountNumber = number
    }
}


bankAccount.accountNumber = 321
console.log(bankAccount.accountNumber)
console.log()

//* 5. Utiliza la operación assign en un objeto
console.log("---------------------")
console.log("EJERCICIO 5")
console.log("---------------------")

let anotherCar = {
    branch: "Renault",
    model: "sandero",
    year: "2005"
}

let carOwner = Object.assign(anotherCar, person)
console.log(carOwner)


console.log()

//* 6. Crea una clase abstracta
console.log("---------------------")
console.log("EJERCICIO 6")
console.log("---------------------")

class Vehicle {

    constructor(speed) {
        if (new.target === Vehicle) {
            throw new Error("No se puede instanciar una clase abstracata")
        }
        this.speed = speed
    }

    accelerate() {
        throw new Error("No se puede llamar este metodo en una instancia de una clase abstracata")
    }

    break() {
        throw new Error("No se puede llamar este metodo en una instancia de una clase abstracata")
    }
}

console.log("Se crea la clase abstracta Vehicle")
console.log()

//* 7. Utiliza polimorfismo en dos clases diferentes
console.log("---------------------")
console.log("EJERCICIO 7")
console.log("---------------------")

class Car2 extends Vehicle {
    wheels = 4
    constructor(speed, motorSize) {
        super(speed)
        this.motorSize = motorSize
    }

    accelerate() {
        this.speed += 10
    }

    break() {
        this.speed -= 10
    }
}

class Bicycle extends Vehicle {
    accelerate() {
        this.speed += 4
    }

    break() {
        this.speed -= 4
    }
}

const newCar = new Car2(100, "1200")
console.log(newCar.speed)
newCar.break()
console.log(newCar.speed)

const bicycle = new Bicycle(10)
console.log(bicycle.speed)
bicycle.accelerate()
console.log(bicycle.speed)
console.log()

//* 8. Implementa un Mixin
console.log("---------------------")
console.log("EJERCICIO 8")
console.log("---------------------")

//Crea un mixin que aplique automáticamente descuentos a los productos en un carrito de compras según diferentes criterios, como promociones especiales o membresías de usuarios.

const discountMixin = {
    discount() {
        this.price -= this.price * 0.5
    }
}

class Product {
    constructor(price, productName) {
        this.productName = productName
        this.price = price
    }

    getTotalPrice() {
        return this.price += this.price * 0.19
    }

}


class Alcohol extends Product {
    getToalPrice() {
        return this.price += (this.price * 0.19) + (this.price * 0.20)
    }
}

class Fruit extends Product {
    getTotalPrice() {
        return this.price
    }
}

// Las bebidas alcholicas tienen tiene un descuento especial
let beer = new Alcohol(3000)
let beer2 = new Alcohol(3000)
Object.assign(beer, discountMixin)

beer.discount()

console.log(beer.price)
console.log(beer2.price)


console.log()

//* 9. Crea un Singleton
console.log("---------------------")
console.log("EJERCICIO 9")
console.log("---------------------")

class Conection {
    constructor(dbName, user, password) {
        if(Conection.instance) {
            return Conection.instance
        }
        this.dbName = dbName
        this.user = user
        this.password = password
        Conection.instance = this
    }

}

const conexion1 = new Conection("David", "david123", "...")
const conexion2 = new Conection("Juan", "juan321", ",,,")

console.log(conexion1, conexion2)
console.log(conexion1 === conexion2)



console.log()

//* 10. Desarrolla un Proxy
console.log("---------------------")
console.log("EJERCICIO 10")
console.log("---------------------")



class BankAccount {
    constructor(ownerName, accountNumber, balance) {
        this.ownerName = ownerName
        this.accountNumber = accountNumber
        this.balance = balance
    }
}


const handler = {
    get(target, property) {

        if(property === "accountNumber") {
            return parseInt(target[property]).toLocaleString("en-US").replace(/,/g, '-')
        }

        else if (property === "balance") {
            return '$' + target[property].toLocaleString("en-US")
        }
    }
}


let new_bankAccount = new Proxy(new BankAccount("David", "1034779033", 1000), handler)
console.log(new_bankAccount.accountNumber)
console.log(new_bankAccount.balance)