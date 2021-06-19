/** Objeto this */

console.log(this);
console.log(window);
console.log(this === window);

this.nombre = `Contexto Global`;
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  nombre: `Contexto Objeto 1`,
  imprimir: function() {
    console.log(this.nombre);
  }
}

obj.imprimir();

const obj2 = {
  nombre: 'Contexto Objeto 2',
  imprimir
}

obj2.imprimir();


/** la arrow function tiene un problema
 *  a la hora de utilizar el metodo this
 *  ya que no crea un scope y llama al
 *  contexto global.
 */
const obj3 = {
  nombre: 'Contexto Objeto 3',
  imprimir: () => {
    console.log(this.nombre);
  }
}

obj3.imprimir();

function Persona(nombre) {
  const that = this;
  //this.nombre = nombre;
  that.nombre = nombre;
  //return console.log(this.nombre);
  //return function() {console.log(this.nombre, 22);}
  return () => console.log(this.nombre, 33);
}

let juan = new Persona("Juan");
juan();