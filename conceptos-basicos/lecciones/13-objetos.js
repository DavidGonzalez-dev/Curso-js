
// Sintaxis
let persona = {
    name: "David",
    age: 19,
    alias: "David-dev"
}


//Accediendo a las propiedades
//Sintaxis con el punto
console.log(persona.name)

//Sintaxis con corchetes
console.log(persona['name'])

//Modificando propiedades
persona.name = "Felipe"
console.log(persona.name)

persona.age = "19"
console.log(persona.age)

// Eliminacion de propiedades
console.log(persona)
delete persona.age
console.log(persona)

// Add propiedades
persona.email = "davidfgonzalezc1@gmail.com"
persona["age"] = 19

console.log(persona)

// Metodos de objetos
let persona2 = {
    name: "David",
    age: 19,
    saludar: function () {
        console.log(`Hola me llamo ${this.name}`)
    }
}
persona2.saludar()

// Anidando objetos
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

console.log(persona3)



// Iterando Objetos
for (const key in persona) {
    console.log(`${key} : ${persona[key]}`)
}