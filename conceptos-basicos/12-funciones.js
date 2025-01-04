
// Funciones sin parametros
function myFunc (){
    console.log('Hola Mundo')
}

myFunc()

// Funciones con parametros
function saludar (nombre){
     console.log(`Hola ${nombre}`)
}
saludar('David')

// Funciones anonimas
const myFunc2 = function(name) {
    console.log(`Adios ${name}`)
}
myFunc2('David')

// Arrow Function
const myFunct3 = (name) => {
    console.log(`Hola ${name}`)
}

// Sintaxis alternativa
const myFunc4 = (name) => console.log(`Abreviacion ${name}`)

myFunct3('Andres')

// Parametros
function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

defaultSum(1) // 1
defaultSum(2, 3) // 5

// Retorno de Valores
function mult(a, b){
    return a * b
}

console.log(mult(5, 10))

// Funciones Anidadas
function externa (){
    console.log('Externa')

    function interna(){
        console.log("interna")
    }
}

externa() // Externa
//interna() // Error Fuera del scope

// Funciones de Orden Superior
function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc4, "Funcion de orden Superior")

// Foreach
myArray = [1, 2, 3, 4, 5]
myArray.forEach((element) => {
    console.log(element)
});