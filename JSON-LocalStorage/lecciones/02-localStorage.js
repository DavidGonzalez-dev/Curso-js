//localStorage only is usable in a web enviroment

// Store data
localStorage.setItem("username", "JohnDoe");

// Retrieve data
const username = localStorage.getItem("username");
console.log(username); // "JohnDoe"

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();