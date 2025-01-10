// Strings

// Cocatenacion
let miNombre = 'David'
let saludo = 'Hola ' + miNombre + '!' // uso del operador +
saludo  = `Hola ${miNombre}!` // Uso de las ``


// Longitud
console.log(saludo.length) // 11

// Acceso a caracteres
console.log(saludo[0]) // H
console.log(saludo[1]) // o

console.log(saludo.toUpperCase()) // Convierte toda la cadena en mayusculas
console.log(saludo.toLowerCase()) // Convierte toda la cadena en minusculas
console.log(saludo.indexOf('David')) // Recupera el indice donde se encuentra la primera letra de la string que se le pasa.
console.log(saludo.includes('David')) // Verifica si un elemento existe dentro de una string
console.log(saludo.slice(0, 6)) //Recupera una seccion de caracteres comprendidos entre el rango de indices
console.log(saludo.replace('David', 'Felipe')) // Reemplaza un elemento por otro

// Template Iterals
let message = `Hola
mundo`  //mensaje en varias lineas ademas los saltos de linea se aplican

console.log(`Hola ${miNombre}!`) // Uso de las ``
