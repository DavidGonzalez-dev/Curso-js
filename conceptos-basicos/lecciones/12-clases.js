// Definicion de Clases\

class Person {

    constructor(name, age, alias) { //Constructor
        this.name = name //Propiedad de instancia
        this.age = age //Propiedad de instancia
        this.alias = alias //Propiedad de instancia
    }
}

//Instanciando un objeto de la clase Person
const person = new Person('John Doe', 30, 'JD')

//Valores por defecto 
class DefaultPerson {

    constructor(name = 'Nombre por defecto', age, alias) { //Constructor
        this.name = name
        this.age = age
        this.alias = alias
    }
}

console.log(new DefaultPerson()) // DefaultPerson { name: 'Nombre por defecto', age: undefined, alias: undefined }

//Métodos de una clase
class PersonWithMethods {

    constructor(name, age, alias) { //Constructor
        this.name = name
        this.age = age
        this.alias = alias
    }

    greet() { //Método
        return `Hello, my name is ${this.name}`
    }
}

// Metodos de Intancia
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método de instancia
    saludar() {
      console.log(`¡Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años!`);
    }
  }

  //Metodos Estaticos
  class Matematica {
    // Método estático
    static sumar(a, b) {
      return a + b;
    }
  }
  
  console.log(Matematica.sumar(5, 3)); // Imprime 8
  
  
  let juan = new Persona("Juan", 30);
  juan.saludar(); // Imprime "¡Hola, mi nombre es Juan y tengo 30 años!"
  

const personWithMethods = new PersonWithMethods('John Doe', 30, 'JD')
console.log(personWithMethods.greet()) // Hello, my name is John Doe

// Propiedades estaticas
class PersonWithStaticProperties {

    static species = 'Homo sapiens' //Propiedad estática

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let personStatic = new PersonWithStaticProperties('David', 19)
console.log(personStatic) // { name: 'David', age: 19 }
console.log(PersonWithStaticProperties.species) // Homo sapiens

//Propiedades privadas
class PersonWhithPrivateProperties {
    // Definimos las priopiedades que queremos que sean privadas
    #bankNumber

    constructor(name, age, alias, bankNumber) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bankNumber = bankNumber
    }
}

let privatePerson = new PersonWhithPrivateProperties('David', 19, 'DV', '123012312')
console.log(privatePerson.name) // 'David
console.log(privatePerson.bankNumber) // undefined


// Getters y Setters

// Getter
class GetPerson {
    #name
    #age

    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    get name(){
        return this.#name
    }
}

let getPerson = new GetPerson('David', 19)
console.log(getPerson.name)

//Setter
class SetPerson{
    
    #bankNumber

    constructor(name, age, bankNumber){
        this.name = name
        this.age = age
        this.#bankNumber = bankNumber
    }


    set bankNumber(newBankNumber){
        this.#bankNumber = newBankNumber
    }
    
    get bankNumber(){
        return this.#bankNumber
    }
}

let personSetter = new SetPerson('David', 19, '12432412312')
console.log(personSetter.bankNumber) // '12432412312'
personSetter.bankNumber = '123'
console.log(personSetter.bankNumber) // '123'

// Herencia
class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log('Emite un sonido de animal')
    }
}

class Perro extends Animal{
    
    constructor(name, size){
        super(name) // Llama el constructor del atributo de la superclase
        this.size = size
    }

    run(){
        console.log('El perro corre')
    }

    sound() { // Se redefine la funcion de la superclase
        super.sound() //Se llama la funcion de la superclase
    }
}

let perro1 = new Perro('Luke')
perro1.run() // El perro corre
perro1.sound() // Emite un sonido de animal

// Metodos Estaticos
class MathOperations{
    static sum(a, b){
        return a + b
    }
}

console.log(MathOperations.sum(1, 2))