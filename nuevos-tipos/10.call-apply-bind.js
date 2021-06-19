console.log(this);
this.lugar = 'Contexto Global';

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "Morgan");

const obj = {
  lugar: "Contexto Objeto"
}

saludar.call(obj, "Hola", "Juan");
saludar.call(null, "Hola", "Juan");
saludar.call(this, "Hola", "Juan");

saludar.apply(obj, ["Adios", "Mircha"]);
saludar.apply(null, ["Adios", "Mircha"]);
saludar.apply(this, ["Adios", "Mircha"]);

this.nombre = "Window";

const persona = {
  nombre: "Juan",
  saludar: function() {
    console.log(`Hola ${this.nombre}`);
  }
}

persona.saludar();

const otraPersona = {
  saludar: persona.saludar.bind(persona)
}

otraPersona.saludar();

/** El call() & apply() nos permiten llamar
 *  a cualquier función JavaScript indicándole
 *  el objeto que actuará como this dentro de la 
 *  funcion llamada.
 * 
 * El bind() crea una función, que cuando es llamada,
 * asigna a su operador this el valor entregado, con una
 * secuencia de argumentos dados precedidos a cualquiera
 * entregados cuando la función es llamada.
 */