//  Declaracion de mapas
let myMap = new Map()

// Incializacion
myMap = new Map([
    ['nombre', 'David'], //Elemento ['clave', 'valor']
    ['email', 'david@gmail.com'], //Elemento ['clave', 'valor']
    ['age', 18] //Elemento ['clave', 'valor']
])

// Metodos y Propiedades

// SET: Actualiza un elemento o lo agrega al map
myMap.set('alias', 'Summerpepper2023') // Se añade una elemento
myMap.set('nombre', 'Felipe') // Se actualiza un elemento

// GET: Recupera el valor de una llave que le pasemos
myMap.get('nombre') // David

// HAS: Comprueba si una clave existe o no
myMap.has('nombre') // True
myMap.has('ciudad') //false

// DELETE: Elimina un elemento basado en la clave dada
myMap.delete('email')

// CLEAR: Elimina todos los elementos del mapa\
myMap.clear() // Map(0) {}

// KEYS: Nos retorna un listado de las llaves del mapa.
myMap.keys() // [Map Iterator] {'nombre', 'email', 'age'}

// VALUES: Nos retorna un listado de los valores del mapa
myMap.values()  // [Map iterator] {'David', 'david@gmail.com', 18}

//SIZE: Nos indica la cantidad de elementos dentro del mapa
myMap.size // 3

// ENTRIES: Nos indica las claves y valores dentro del mapa.
myMap.entries() // [Map Entries] {['nombre', 'David'], ['email', 'david@gmail.com'], ['age', 18]}

