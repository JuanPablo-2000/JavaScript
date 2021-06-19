/** Iterables & Iterators
 * 
 * Una variables es iterable cuando 
 * su estructura de datos es lineal
 * que hace que sus elementos sean
 * publicos y se puedan recorrer 
 * 
 * ep. Strings, arreglos, maps, sets;
 * 
 * Un iterador es una especie de apuntador
 * que va recorriendo los elementos de la 
 * misma estructura de datos.
 */

const iterable = [1,2,3,4,5];
// const iterable = "Hola Mundo";
// const iterable = new Set([1,2,3,4,5]);
// const iterable = new Map([["nombre", "jon"], ["edad", 35]]);

/** Accedemos al iterador del iterable */
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();

while(!next.done) {
  console.log(next.value);
  next = iterador.next();
}