const numeros = [1,2,3];

//Sin destructuración 
let uno = numeros[0],
	dos = numeros[1],
	tres = numeros[2];

//Con destructuración
const [one, two, three] = numeros;
console.log(one, two, three);

let persona = {
	nombre: "Juan",
	apellido: "Mera",
	edad: 35
}

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);

