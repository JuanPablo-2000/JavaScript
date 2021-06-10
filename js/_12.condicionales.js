let edad = 17;

if(edad > 17) {
	console.log("Eres mayor de Edad");
} else {
	console.log("Eres menor de Edad");
}

if(edad >= 18) {
	console.log("Eres mayor de Edad");
} else {
	console.log("Eres menor de Edad");
}

if(edad < 18) {
	console.log("Eres mayor de Edad");
} else {
	console.log("Eres menor de Edad");
}

if(edad <= 17) {
	console.log("Eres menor de Edad");
} else {
	console.log("Eres mayor de Edad");
}

//Operador Ternario (condición) ? verdadero : falsa
console.log("Operador Ternario");
let eresMayor = (edad >= 18)
	? "Eres mayor de Edad"
	: "Eres menor de Edad";
console.log(eresMayor);

/* Switch - Case*/
/*
	* lunes - 1
	* martes - 2
	* miercoles - 3
	* jueves - 4
	* viernes - 5
	* sabado - 6
	* domingo - 7
*/
let dia = 2;

switch(dia) {
	case 0:
		console.log("Domingo");
	break;
	case 1:
		console.log("Lunes");
	break;
	case 2:
		console.log("Martes");
	break;
	case 3:
		console.log("Miercoles");
	break;
	case 4:
		console.log("Jueves");
	break;
	case 5:
		console.log("Viernes");
	break;
	case 6:
		console.log("Sábado");
	break;
	default: console.log("Valor indefinido ...");
}




