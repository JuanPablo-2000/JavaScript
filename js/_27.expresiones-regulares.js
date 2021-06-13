//Expresiones Regulares
//Son una secuencia de caracteres que forman un patrón
//de búsqueda, principalmente utilizada para la búsqueda
//de patrones de cadenas de caracteres.


let cadena = `
Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed eiusmod tempor incidunt 
ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquid ex ea commodi consequat. 
Quis aute iure reprehenderit in voluptate velit esse cillum 
dolore eu fugiat nulla pariatur.`;

//Ignora entre mayusculas y minuculas.
let expReg = new RegExp('lorem', 'ig'); 
let expReg2 = /\d/ig;
let expReg3 = /olor{1,3}/ig;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

console.log(expReg3.test(cadena));
