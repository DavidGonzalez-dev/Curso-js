const obj = { name: "John", age: 30, city: "New York" };

// We use JSON.stringify() to convert a JS object to a JSON string
const jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"John","age":30,"city":"New York"}
console.log(typeof jsonString) // string

// We use JSON.parse() to convert a JSON string into a JS object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // {name: "John", age: 30, city: "New York"}
console.log(typeof parsedObj); // object
