//Objetos en JavaScript
const b = {}
console.log(b);

const c = new Object();
console.log(c);

const juan = {
	nombre: "Juan Pablo",
	apellido: "Mera Agudelo",
	edad: 35,
	pasatiempos: ["Correr", "Hacer ejercicio", "Dar Clases"],
	soltero: true,
	contacto:{
		email: "juan@gmail.com",
		twitter: "@juanpablo",
		movil: "312 2345 4321"
	},
	//Métodos en las clases
	saludar: function() {
		console.log(`Hola`);
	},

	decirMiNombre: function() {
		console.log(`
Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años 
y me puedes seguir como ${this.contacto.twitter} en twitter.`);
	}
}

console.log(juan);

//Notación con arreglo
console.log(juan["nombre"]);
console.log(juan["apellido"]);

//Notación con punto
console.log(juan.nombre);
console.log(juan.apellido);
console.log(juan.edad);
console.log(juan.soltero);
console.log(juan.pasatiempos);
console.log(juan.pasatiempos[0]);
console.log(juan.pasatiempos[1]);
console.log(juan.pasatiempos[2]);
console.log(juan.contacto);
console.log(juan.contacto.email);
console.log(juan.contacto.twitter);
console.log(juan.contacto.movil);

//Invocar métodos del objeto
juan.saludar();
juan.decirMiNombre();

// Llaves y valores de los objetos
console.log(Object.keys(juan));
console.log(Object.values(juan));

// Preguntar si una llave se encuentra en el objeto
console.log(juan.hasOwnProperty("nombre"));
console.log(juan.hasOwnProperty("nacimiento"));
