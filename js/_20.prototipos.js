//POO
//Clases - Modelo a seguir
//Objetos - Es una instancia de una clase
//Atributo - Es una características o propiedad del
//						objeto (son variables dentro de un objeto)
//Métodos - Son las acciones que un objeto puede realizar 
//					(son funciones dentro de un objeto)

const animal = {
	nombre: "Snoopy",
	
	sonar() {
		console.log("Hago sonidos por que estoy vivo");
	}
}

const animal2 = {
	nombre: "Lola Bunny",

	sonar() {
		console.log("Hago sonidos por que estoy vivo");
	}
}

console.log(animal);
console.log(animal2);

//Función constructoras donde asignamos los métodos
//al Prototipo, no a la función como tal.
function Animal(nombre, genero) {
	//Atributo
	this.nombre = nombre;
	this.genero = genero;

	//Métodos agregados al prototipo de la función constructoras
	Animal.prototype.sonar = function () {
		console.log("Hago sonidos por que estoy vivo");
	}
	
	Animal.prototype.saludar = function () {
		console.log(`Hola me llamo ${this.nombre}`);
	}
}

const snoopy = new Animal("Snoopy", "Macho"),
	lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();


