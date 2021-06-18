const set = new Set([1,2,3,4,5,true,false,{},"hola"]);

console.log(set);
console.log(set.size);

/** Como agreagar datos a un set */
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(6);
set2.add({});

console.log(set2);
console.log(set2.size);

/** Como se recorren los set con for of */
console.log(`recorriendo Set`)
for(item of set) {
  console.log(item);
}

/** Como se recorren los set con forEach */
console.log(`recorriendo Set2`);
set2.forEach(item => console.log(item));

/** Convertir un set en un arreglo */
let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);
console.log(arr[8]);

/** Borrar el dato especificado */
set.delete(`hola`);
console.log(set)


/** Validar si el dato existe */
console.log(set.has(true));
console.log(set.has(1));

/** Limpiar todos los datos del set */
set2.clear();
console.log(set2)

let set3 = new Set();
set3.add(1);
set3.add(1);
set3.add(1);
set3.add(1);

console.log(set3);

/** 
 *  Los Sets no permiten almacenar datos repetidos
 *  es decir cada dato en el es diferente.
 * 
 *  ej. almacenar correos electronicos de una base
 *  de datos para no tener que validar si existen o no.
 */