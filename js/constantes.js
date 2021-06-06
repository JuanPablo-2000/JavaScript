// Los datos primitivos no se permiten ser cambiados en JavaScript
// en cambio los valores compuestos nos permiten cambiar, ya que.
// Al agregar más datos al valor constate este no pierde su naturaleza
// es decir, al agregar más valores a un objeto este no deja de ser un 
// objeto.

let a = "Morgan";

const PI = 3.14159;
const objeto = {
	nombre: "John",
	edad: 35
}

const colores = ["Amarillo", "Blanco", "Negro"];

console.log(a);
console.log(PI)
console.log(objeto);
console.log(colores);

objeto.correo = "agudelo.14321@gmail.com";
colores.push("Anaranjado");

console.log(objeto);
console.log(colores);


// 1. Primitivos: Se accede directamente al valor.
// * String
// * number
// * boolean
// * null
// * undefined
// * NaN
//
// 2. Compuestos: Se accede a la referencia del valor.
// * object = {}
// * array = []
// * function () {}
// * Class {}
// * etc.
