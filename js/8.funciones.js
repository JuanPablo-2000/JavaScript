//Declaración de Funciónes
function estoEsUnaFuncion() {
	console.log("Uno");
}

function unaFuncionQueDevuelveValor() {
	console.log("Uno");
	console.log("Dos");
	console.log("Tres");
	
	return "La función ha retornado una Cadena de texto.";
}

function saludar(nombre, edad) {
	console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

//Invocación de Función
estoEsUnaFuncion();
saludar("Juan Pablo", 20);

//Funciones declaradas Vs Funciones expresadas

funcionDeclarada();

function funcionDeclarada() {
	console.log(`
	Esto es una función declarada puede invocarse 
	en cualquier parte de nuestro código, incluso
	antes de que la función sea declarada`);
}

funcionDeclarada();
