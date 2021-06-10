//Arrow Functions

const saludar = nombre => console.log(`Hola ${nombre}`);
const sumar = (a, b) => a+b;
const funcionDeVariablesLineas = () => {
	console.log("Uno");
	console.log("Dos");
	console.log("Tres");
}

saludar("Irma");
console.log(sumar(9, 9));

funcionDeVariablesLineas();

const numeros = [1,2,3,4,5];

numeros.forEach((el, index) => console.log(`${el} 
esta en la posición ${index}`));

function Perro() {
	console.log(this)
}

Perro();

const perro = {
	nombre: "Morgan",

	ladrar: () => {
		console.log(this);
	}
}

perro.ladrar();
