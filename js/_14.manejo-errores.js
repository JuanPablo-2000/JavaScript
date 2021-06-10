//Manejo de errores

try {
	console.log("En el Try se agrega el código a evaluar");
	noExiste;
} catch(error) {
	console.log("Catch, captura cualquier error surgido o lanzado en el try");
} finally {
	console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");
}


