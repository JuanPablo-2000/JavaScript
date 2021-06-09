// Cadenas de texto String
//
let nombre = "Juan Pablo";
let apellido = "Mera Agudelo";
let saludo = new String("Hola Mundo");
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua."

console.log(nombre, apellido, saludo);
console.log(
	nombre.length,
	apellido.length,
	saludo.length,
	nombre.toUpperCase(),
	apellido.toLowerCase(),
	lorem.includes("amet"),
	lorem.includes("jon"),
	lorem,
	lorem.trim(),
	lorem.split(",")
);



