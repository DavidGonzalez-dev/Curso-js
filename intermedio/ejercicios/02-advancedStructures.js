//* 1. Utiliza map, filter y reduce para crear una ejemplo diferente al de la leccion

// - Tienes un array de objetos de productos, cada uno con propiedades como nombre, precio y enOferta (booleano).
// - Primero, usa filter para obtener solo los productos en oferta.
// - Luego, usa map para aplicar un descuento a los precios de esos productos.
// - Finalmente, usa reduce para sumar los precios de los productos en oferta y obtener el precio total.


console.info("---------------------------------------------------")
console.info("EJERCICIO 1")
console.info("---------------------------------------------------")
console.log()

// Declaracion de la clase producto
class Product {
    constructor(name, price, discount = false) {
        this.name = name
        this.price = price
        this.discount = discount
    }
}

// Array con productos
let products = [
    new Product("Leche", 5000, true),
    new Product("Arroz", 10000),
    new Product("Lenteja", 9000),
    new Product("Papas", 2000, true),
    new Product("Agua", 1000, true),
]

// Se le hace el desceunto solo a los productos que tienen descuento
let offerProducts = products.filter(product => product.discount).map(product => {
    product.price *= 0.5
    return product
})

// Informacion de los productos en descuento
console.info("Productos con descuento")
console.table(offerProducts)
console.log()

// Se abstraen solo los precios de los productos en descuento
let offerProductsPrices = offerProducts.map(product => Array.from(Object.values(product))).flat(1).filter(info => typeof info == "number")

// Se hace un reduce para realizar la suma de los precios
console.info("Precio total de los productos en descuento")
console.log(offerProductsPrices.reduce((previousPrice, currentPrice) => previousPrice + currentPrice))

console.log()


//* 2. Dado un array de numeros, crea uno nuevo con dichos numero elevados al cubo y filtra solo los numero pares


console.info("---------------------------------------------------")
console.info("EJERCICIO 2")
console.info("---------------------------------------------------")
console.log()

let numbers = [1, 2, 3, 4, 5, 2, 6]
let evens = numbers.map(number => number ** 3).filter(number => number % 2 == 0)
console.log(evens)

console.log()


//* 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

console.info("---------------------------------------------------")
console.info("EJERCICIO 3")
console.info("---------------------------------------------------")
console.log()

// Escenario: Estas trabajando con playlist de canciones donde cada playlist contiene multiples canciones, y 
// algunas canciones estas agrupadas en albums. Se necesita redimensionar la profundidad del array para crear 
// una sola playlist de todas las canciones.

const playlists = [
    {
      name: "Chill Vibes",
      songs: [
        "Sunset Lullaby",
        "Ocean Breeze",
        ["Album: Relaxation Station", "Calm Waters", "Serene Skies"],
      ],
    },
    {
      name: "Workout Beats",
      songs: [
        "Pump It Up",
        ["Album: High Energy Hits", "Power Move", "Adrenaline Rush"],
        "Run the World",
      ],
    },
    {
      name: "Road Trip Mix",
      songs: [
        ["Album: Classic Rock Anthems", "Highway Star", "Born to Be Wild"],
        "On the Road Again",
        "Adventure Awaits",
      ],
    },
  ];


let singlePlaylist = playlists.flatMap(playlist => playlist.songs.flat(1)).filter(song => !song.toLowerCase().includes("album"))
console.log(singlePlaylist)
console.log()

//* 4. Ordena un array de números de mayor a menor

console.info("---------------------------------------------------")
console.info("EJERCICIO 4")
console.info("---------------------------------------------------")
console.log()

numbers = [1, 23, 432, 1, 312 , 0, 3213, 111122]
console.log(numbers.sort((a, b) => b - a))
console.log()

//* 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
console.info("---------------------------------------------------")
console.info("EJERCICIO 5")
console.info("---------------------------------------------------")
console.log()

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

//union
const union = new Set([...setA, ...setB])
console.log(union)

//interseccion
const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia del set A
const differenceA = new Set([...setA].filter(element => !setB.has(element)))
console.log(differenceA)

// Diferencia del set B
const differenceB = new Set([...setB].filter(element => !setA.has(element)))
console.log(differenceB)
console.log()

//* 6. Itera los resultados del ejercicio anterior
console.info("---------------------------------------------------")
console.info("EJERCICIO 6")
console.info("---------------------------------------------------")
console.log()

union.forEach(element => console.log(element))
console.log()
intersection.forEach(element => console.log(element))
console.log()
differenceA.forEach(element => console.log(element))
console.log()
differenceB.forEach(element => console.log(element))
console.log

//* 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
console.info("---------------------------------------------------")
console.info("EJERCICIO 7")
console.info("---------------------------------------------------")
console.log()

let users = new Map();

const user1 = new Map();
user1.set("name", "Alice");
user1.set("age", 25);
user1.set("email", "alice@example.com");

const user2 = new Map();
user2.set("name", "Bob");
user2.set("age", 17);
user2.set("email", "bob@example.com");

const user3 = new Map();
user3.set("name", "Charlie");
user3.set("age", 22);
user3.set("email", "charlie@example.com");

const user4 = new Map();
user4.set("name", "Diana");
user4.set("age", 13);
user4.set("email", "diana@example.com");

users.set(1, user1);
users.set(2, user2);
users.set(3, user3);
users.set(4, user4);

users.forEach((user, index) => {
    console.log(`Usuario ${index}`)
    user.forEach((value, key) => console.log(`${key}: ${value}`))
    console.log()
});
console.log()

//* 8. Dado el mapa anterior, crea un array con los nombres
console.info("---------------------------------------------------")
console.info("EJERCICIO 8")
console.info("---------------------------------------------------")
console.log()

const nameArray = []
users.forEach(user => 
    nameArray.push(user.get("name"))
)

console.log(nameArray)
console.log()

//* 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
console.info("---------------------------------------------------")
console.info("EJERCICIO 9")
console.info("---------------------------------------------------")
console.log()

let adultsEmail = []
users.forEach(user => user.get("age") >= 18 ? adultsEmail.push(user.get("age")) : user)

adultsEmail = new Set(adultsEmail)
console.log(adultsEmail)
console.log()

console.log()

//* 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
console.info("---------------------------------------------------")
console.info("EJERCICIO 10")
console.info("---------------------------------------------------")
console.log()

users = Array.from(users).flat(1).filter(element => typeof element != "number")
users = users.map(user => Object.fromEntries(user)).map(user => [user.email, Object.values(user)])
users = new Map(users)

console.log(users)