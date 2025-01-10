// 1. Crea un array que almacene cinco animales
    let animales = ['perro', 'gato', 'paloma', 'cerdo', 'vaca']
    console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final
    animales.push('perro')
    animales.unshift('halcon') 
    console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
    animales.splice(2, 1)
    console.log(animales)

// 4. Crea un set que almacene cinco libro
    let libros = new Set(['biblia', 'Algebra de Baldor', '50 años de seriedad', 'Paras Arriba', 'Harry Potter'])
    console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
    libros.add('Paras Arriba')
    libros.add('Colores')
    console.log(libros)

// 6. Elimina uno concreto a tu elección
    libros.delete('biblia')
    console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
    let meses = new Map([
        [1, 'Enero'],
        [2, 'Febrero'],
        [3, 'Marzo'],
        [4, 'Abril'],
        [5, 'Mayo'],
        [6, 'Junio'],
        [7, 'Julio'],
        [8, 'Agosto'],
        [9, 'Septiembre'],
        [10, 'Octubre'],
        [11, 'Noviembre'],
        [12, 'Diciembre'],
    ])
    console.log(meses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    if (meses.has(5)){
        console.log(meses.get(5))
    }
// 9. Añade al mapa una clave con un array que almacene los meses de verano
    meses.set('Verano', [meses.get(6), meses.get(7), meses.get(8), meses.get(9)])
    console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    let miArray = [4, 4, 4,'Hola', 'Hola']
    console.log(miArray.length
    )
    let miSet = new Set(miArray)
    console.log(miSet.size)

    let miMapa = new Map([
        [1, miArray[0]],
        [2, miArray[1]],
        [3, miArray[2]],
        [4, miArray[3]],
        [5, miArray[4]],
    ])

    console.log(miMapa)