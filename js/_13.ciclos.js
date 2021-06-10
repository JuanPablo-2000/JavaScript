 let contador = 0;

while(contador < 10) {
	console.log(contador);
	contador++;
}

do {
	console.log(contador);
	contador++;
} while(contador < 10);

for(let i=0;i<10;i++) {
	console.log("for" + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let i=0; i<numeros.length;i++) {
	console.log(numeros[i]);
}

const juan = {
	nombre: "Juan",
	apellido: "Mera",
	edad: 35
}

for(const propiedad in juan) {
	console.log(`Key: ${propiedad}, Value: ${juan[propiedad]}`);
}

for(const elemento of numeros) {
	console.log(elemento);
}

let cadena = "Hola Mundo";

for(const caracter of cadena) {
	console.log(caracter);
}


