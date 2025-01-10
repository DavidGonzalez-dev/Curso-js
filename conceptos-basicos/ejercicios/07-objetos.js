//* 1. Crea un objeto con 3 propiedades
let perro = {
    name: "Luke",
    owner: "David",
    age: 1,
    raza: "Doberman"
}


//* 2. Accede y muestra su valor
console.log(perro)

//* 3. Agrega una nueva propiedad
perro.sex = "macho"
console.log(perro)

//* 4. Elimina una de las 3 primeras propiedades
delete perro.owner
console.log(perro)


//* 5. Agrega una función e invócala
perro.ladrar = () => console.log('El perro ladra')
perro.ladrar()


//* 6. Itera las propiedades del objeto
for (const key in perro){
    console.log(`${key}: ${perro[key]}`)
}


//* 7. Crea un objeto anidado
let carro = {
    modelo: 1998,
    marca: 'Ford',
    referencia: 'Mustang',
    traccion: 4,
    conductor: {
        nombre: 'Luke',
        edad: 19,
        experiencia: 1
    }
}

//* 8. Accede y muestra el valor de las propiedades anidadas
for(const key in carro.conductor){
    console.log(`${key}: ${carro.conductor[key]}`)
}


//* 9. Comprueba si los dos objetos creados son iguales
console.log(carro == perro)


//* 10. Comprueba si dos propiedades diferentes son iguales
console.log(carro.conductor.nombre === perro.name)
