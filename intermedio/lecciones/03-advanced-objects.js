// Objetos Avanzados

// -----------------------------
// Prototipos y Herencia
// -----------------------------

// Prototipos
let person = {
    name: "David",
    age: 19,
    greet: function () { console.log(`Me llamo ${this.name}`) } 
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function () {console.log(`Tengo ${this.age} de edad`)}
person.sayAge()

// Herencia
let programmer = Object.create(person) // Hereda los atributos name y age del objeto programmer
programmer.language = "JavaScript"

console.log(programmer.language) // JavaScript
console.log(person.language) // Indefinded

// ---------------------------------
// Metodos Estaticos y de Instancia
// ---------------------------------

// Funcion constructora
function Person(name, age){
    this.name = name
    this.age = age
}

// Declaramos una nueva funcionalidad accediendo al prototipo
Person.prototype.greet = function () {
    console.log(`Hola me llamo ${this.name}`)
}

let new_person = new Person("David", 19)
new_person.greet()

// ---------------------------------
// Metodos avanzados
// ---------------------------------
let person_core = { name: "David"}
let person_details = { age: 19, alias: "DavidGonzalez-dev"}

let fullPerson = Object.assign(person_core, person_details)
console.log(fullPerson) // { name: 'David', age: 19, alias: 'DavidGonzalez-dev' }