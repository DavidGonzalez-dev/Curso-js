// Clases Avanzadas

// ---------------------------
// Add metodos
// ---------------------------
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola me llamo ${this.name}`)
    }
}

const person = new Person("David", 19)
person.sayAge = function () {
    console.log(`Mi edad es ${this.age}`)
}
person.sayAge() // Mi edad es 19

// ---------------------------
//  Clases Abstractas
// ---------------------------
class Animal {
    constructor(name) {
        if(new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este metodo tiene que ser implementado en una subclase")
    }
} 

// const animal = new Animal() // error
// animal.makeSound() // Error

// ---------------------------
//  Polimorfismo
// ---------------------------
class Cat extends Animal { // Hereda el constructor
    makeSound() {
        console.log("Miau")
    }
}

class Dog extends Animal { // Hereda el constructor
    makeSound() {
        console.log("Guau")
    }
}

const cat = new Cat("Kity") // Miau
const dog = new Dog("Dogy") // Guau

cat.makeSound()
dog.makeSound()

// ---------------------------
//  Mixins
// ---------------------------

// Funcionalidad
const FlyMixin = {
    fly() {
        console.log(`${this.name} esta volando`)
    }
}

// Clases que comparten funcionalidad
class Bird extends Animal {  }
class Dragon extends Animal {  }

// Asignacion del Mixin
Object.assign(Bird.prototype, FlyMixin) // Se le asigna a la clase Bird
Object.assign(Dragon.prototype, FlyMixin) // Se le asigna a la clase Dragon

const bird = new Bird("Piolin")
bird.fly() // Piolin esta volando

const dragon = new Dragon("Mordo")
dragon.fly() // Mordo esta volando

// ---------------------------
//  Singleton
// ---------------------------

class Session {
    constructor(name) {
        if(Session.instance) { // Comprobamos si existe una instancia
            return Session.instance
        }
        this.name = name
        Session.instance = this // Asociamos la instancia al atributo instance
    }

}

const session1 = new Session("David Gonzalez")
const session2 = new Session()

console.log(session1) // Session { name: 'David Gonzalez' }
console.log(session2) // Session { name: 'David Gonzalez' }

// ---------------------------
//  Symbol
// ---------------------------
const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }
}

const user = new User("David")
console.log(user.name)
console.log(user[ID])

// ---------------------------
//  instanceof
// ---------------------------
class Perro extends Animal {}

const miPerro = new Perro();

console.log(miPerro instanceof Perro); // Output: true
console.log(miPerro instanceof Animal); // Output: true
console.log(miPerro instanceof Object); // Output: true
console.log(miPerro instanceof Array); // Output: false

// ---------------------------
//  create
// ---------------------------
class Car {  }
const car = new Car() // Manera Comun de Instanciar
const another_car = Object.create(Car.prototype) // otra manera

console.log(car) // Car {}
console.log(another_car) // Car {}

// ---------------------------
//  proxy
// ---------------------------

// Handler del proxy para implementar las medidas de seguridad
const handler = {
    // Medidas para obtener las propiedades del target
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    // Medidas para setear las propiedades del target
    set(target, property, value) {
        if (property == "balance" && value < 0){ // Verificaciones
            throw new Error("El saldo no puede ser negativo")
        }
        console.log(`Se cambia el valor de la propiedad ${property}`) // Mensaje de Notificacion
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

// Creacion del proxy junto a la clase de cuenta para implementar las medidas \
// de seguridad del handler
const account = new Proxy(new BankAccount(100), handler)
console.log(account.balance)
account.balance = 50
console.log(account.balance)
