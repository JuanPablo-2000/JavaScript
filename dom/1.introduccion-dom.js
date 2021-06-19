let texto = `Hola me llamo juan y tengo 20 años de edad`;
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

//hablar(texto);

console.log(`********** Elementos del Documento`);
console.log(window.document);
console.log(document);
console.log(document.head); // return el encabezado
console.log(document.body); // return el cuerpo
console.log(document.documentElement); // return todo el html
console.log(document.doctype); // return el doctype
console.log(document.charset); // return la tipografia
console.log(document.title); // return el titulo
console.log(document.links); // return los links
console.log(document.images); // return las imagenes
console.log(document.forms); // return los formularios
console.log(document.styleSheets) // return los estilos y reglas Css
console.log(document.scripts) // return los scrips del archivo html
setTimeout(() => {
  //return lo seleccionado en la página 
  console.log(document.getSelection().toString());
}, 3000);
document.write("<h2> Hola Mundo desde el DOM</h2>");