//* 1. Crea una clase que reciba dos propiedades
class Person {

    static older(person1, person2) {
        if (person1.age > person2.age) {
            console.log(`${person1.name} es mayor que ${person2.name}`)
        }
        else if (person1.age < person2.age) {
            console.log(`${person2.name} es mayor que ${person1.name}`)
        }
        else{
            console.log('Ambas personas tienen la misma edad')
        }
    }

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`)
    }
}

let person = new Person('David', 20)


//* 2. Añade un método a la clase que utilice las propiedades
//* 3. Muestra los valores de las propiedades e invoca a la función
console.log(person.name)
console.log(person.age)
person.saludar()

//* 4. Añade un método estático a la primera clase
//* 5. Haz uso del método estático
let person2 = new Person('Sara', 19)
Person.older(person, person2)



//* 6. Crea una clase que haga uso de herencia
class Kid extends Person {
    constructor(name, age, school){
        super(name, age)
        this.school = school
    }

    saludar(){
       super.saludar()
       console.log(`Estudio en el colegio ${this.school}`)
    }
}

let kid = new Kid('Martin', 7, 'Cafam')
kid.saludar()
//* 7. Crea una clase que haga uso de getters y setters
//* 8. Modifica la clase con getters y setters para que use propiedades privadas
class BankAccount{
    #countNumber
    #balance

    constructor(ownerName, countNumber, balance){
        this.ownerName = ownerName
        this.#countNumber = countNumber
        this.#balance = balance
    }

    get countNumber(){
        return this.#countNumber
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

}


//* 9. Utiliza los get y set y muestra sus valores
let bankAccount = new BankAccount('David', '1234', 321.2)
console.log(bankAccount)
console.log(bankAccount.countNumber)
bankAccount.balance = 320.2


//* 10. Sobrescribe un método de una clase que utilice herencia 
