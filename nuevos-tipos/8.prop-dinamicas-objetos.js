/** Propiedades dinamicas de los objetos */

let aleatorio = Math.round(Math.random() *100 + 5);

const objUsuarios = {
  propiedad: "Valor",
  [`id_${aleatorio}`]:'Valor Aleatorio'
};

console.log(objUsuarios);

const usuarios = ['Juan', 'Irma', 'Miguel', 'Kala', 'Morgan'];
usuarios.forEach((usuarios, index) => objUsuarios[`id_${index}`] = usuarios);

console.log(objUsuarios);