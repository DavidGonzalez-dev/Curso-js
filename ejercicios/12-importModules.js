// 4. Importa una función
import { isPalindrome } from '../13-exportModules.js';
console.log(isPalindrome('Ana lleva al oso la avellana')); // true

// 5. Importa una constante
import { PI } from '../13-exportModules.js';
console.log(PI); // 3.1416

// 6. Importa una clase
import { Person } from '../13-exportModules.js';
const person = new Person('John Doe', 30);
person.greet(); // Hello, my name is John Doe

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
//! No se puede importar una función, una constante y una clase por defecto en el mismo archivo

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { isPalindrome as isPalindrome2 } from '../ejercicios-logicos/13-exportModules.js';
console.log(isPalindrome2('Ana lleva al oso la avellana')); // true