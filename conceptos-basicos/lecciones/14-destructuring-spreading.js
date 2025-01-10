//Destructuracion

let myArray = [1, 2, 3]


// Sintaxis en arrays 
let [myValue0, myValue1, myValue2] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)


console.log()
// Sintacix de Arrays con valores predeterminados
let [myValue3, myValue4, myValue5, myValue6 = 0] = myArray
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)

// Ignorar elementos del array
console.log()

let [myValue7, /* Espacio de elemento */, myValue10 = 0] = myArray
console.log(myValue7)
console.log(myValue10)

// Destructuracion de Objetos
let person = {
    name: 'David',
    age: 19,
    alias: 'Dvaid-dev'
}

console.log()

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

console.log()
// Valores por defecto
let { name2, age2, alias2, email = "email@gmail.com" } = person
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

console.log()

//Reasignanlo los nombres de las variables
let { name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

console.log()
//Destructurando objetos anidados
let persona3 = {
    name : "David",
    age: 19,
    saludar: function(){
        console.log(`Hola me llamo ${this.name}`)
    },
    job : {
        name : "Programador",
        experience : 1,
        work : function (){
            console.log(`${this.name} esta trabajando`)
        }
    }
}

let { name: name4, job: { name: jobName } } = persona3
console.log(name4)
console.log(jobName)

// Propagacion (...)
let arr1 = [1, 2, 3]
let arr2 = arr1
console.log(arr2)
arr1.unshift(3)
console.log(arr2)

// Copiando arrays
arr1 = [1, 2, 3]
arr2 = [...arr1]
console.log(arr2)
arr1.unshift(3)
console.log(arr2)

// Combinacion de arrays
arr1 = [1, 2, 3]
arr2 = [4, 5]
let arr3 = [...arr1, ...arr2]

console.log(arr3)

//Sintaxis en objetos

let person4 = {
    ...person,
    email: 'email@gmail.com'
}
console.log(person4)

//Copia de objeto
let person5 = {
    ...person
}

console.log(person5)