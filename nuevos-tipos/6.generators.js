/** Los generadores 
 * 
 *  Son funciones que nos permiten
 *  trabajar de una manera mucho más
 *  amigable.
 * 
 *  Tambien nos sirven para volver iterable
 *  una función.
 * 
 *  yield es como un return.
 */

function* iterable() {
  yield 'Hola';
  console.log(`Hola consola`);
  yield 'Hola 2';
  console.log(`Seguimos con más instrucciones de nuestro código`);
  yield `Hola 3`;
  yield `Hola 4`;
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for(let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({valor, resultado: valor*valor});
  }, Math.random()*1000);

}

function* generador() {
  console.log(`Inicia Generador`);
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log(`Termmina Generador`);
}

let gen = generador();

for(let y of gen) {
  console.log(y);
}