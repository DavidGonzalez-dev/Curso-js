//* 1. Usa desestructuración para extraer los dos primeros elementos de un array
let arr = [1, 2, 3, 4, 5, 6]
let [elemento1, elemento2] = arr

//* 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [elemento3, elemento4, elemento5, , , , elemento6 = 0] = arr


//* 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    nombre: "David",
    edad: 19,
    trabajo: "Programador"
}

let { nombre, trabajo } = person

//* 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//*    a nuevas variables con nombres diferentes
let { nombre: personNombre, trabajo: personTrabajo } = person

//* 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let persona3 = {
    name: "David",
    age: 19,
    saludar: function () {
        console.log(`Hola me llamo ${this.name}`)
    },
    job: {
        name: "Programador",
        experience: 1,
        work: function () {
            console.log(`${this.name} esta trabajando`)
        }
    }
}

let { name: nombrePersona2, job: { name: jobName, experience } } = persona3
console.log(nombrePersona2)
console.log(jobName)
console.log(experience)


//* 6. Usa propagación para combinar dos arrays en uno nuevo
let arr1 = [1, 2, 3, 4]
let arr2 = ['David', 'Gonzalez']

let arr3 = [...arr1, ...arr2]
console.log(arr3)


//* 7. Usa propagación para crear una copia de un array
let arr4 = [...arr3]
console.log(arr4)

//* 8. Usa propagación para combinar dos objetos en uno nuevo
let carro = {
    marca: "toyota",
    modelo: 'Prado',
    year: 1998
}

let persona = {
    name: 'David',
    edad: 18,
    licencia: false
}

let conductor = {
    persona: { ...persona },
    carro: { ...carro }
}

console.log(conductor)

//* 9. Usa propagación para crear una copia de un objeto
let conductor2 = {
    ...conductor
}

console.log(conductor2)


//* 10. Combina desestructuración y propagación
let { persona: { name: nombreConductor, edad: edadConductor } } = conductor

let conductor3 = {
    nombre: nombreConductor,
    edad: edadConductor,
    carro: {
        ...carro
    }
}

console.log(conductor3)