var hola = "Hola mundo";
let hello = "Hello World";

console.log(hola);
console.log(hello);

// Objeto (window) mapea toda la ventana del navegador
// para javaScript

console.log(window);
console.log(window.hola);
console.log(window.hello);

// Ambito de bloque

//var no respeta los scopes de bloque 
//es decir que se queda con el valor anterior de un bloque

console.log("................. var .........................");
var musica = "Rock";
console.log("Variable Música antes del Bloque", musica);

{
	var musica = "Pop";
	console.log("Variable Música dentro del Bloque", musica);
}

console.log("Variable Música después del Bloque", musica);

console.log(".................. let .........................");

let musica2 = "Rock";
console.log("Variable Música antes del Bloque", musica2);

{
	let musica2 = "Pop";
	console.log("Variable Música dentro del Bloque", musica2);
}

console.log("Variable Música después del Bloque", musica2);
console.log("--------------- Constantes -----------------------")


