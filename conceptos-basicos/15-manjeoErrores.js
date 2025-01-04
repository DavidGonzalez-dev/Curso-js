// Manejo de Errores

let myObject
// console.log(myObject.alias) // Produce un error

// Para manejar y capturar errores en JavaScript se utiliza la estructura try-catch

// try: se coloca el código que se desea monitorear en busca de errores
try { //bloque que se intenta ejecutar
    console.log(myObject.alias) 
}
//catch: se coloca el código que se ejecutará si se encuentra un error
catch (error) { // captura el error y lo almacena en la variable error
    console.error('Ha ocurrido un error:', error.message)
}
// finally: se ejecuta siempre, haya o no errores
finally {
    console.log('Finalmente se ejecuta este bloque')
}

//Lanzamiento de errores
// Se pueden lanzar errores manualmente con la palabra reservada throw
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los argumentos deben ser números')
    }
    return a + b
}
    

try {
    console.log(sum(10, "2"))
} catch (error) {    
    console.error('Ha ocurrido un error:', error.message)
}

// Crecion de errores personalizados
class CustomSumError extends Error {
    constructor(a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers(){
        console.log(`Los números son ${this.a} y ${this.b}`)
    }
}

function sumCustomError(a, b){
    if (a === 0 || b === 0) {
        throw new CustomSumError(a, b, 'Los números no pueden ser 0')
    }
    return a + b
}

try {
    console.log(sumCustomError(0, 2))
} catch (error) {    
    console.error('Ha ocurrido un error:', error.message)
    error.printNumbers()
}