import saludar, {Saludar, PI, usuario} from "./matematica/constantes.js";
import {aritmetica as calculos} from "./matematica/aritmetica.js";

console.log("Archivos modulos");
console.log(PI, usuario);
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));;
saludar();

let saludo = new Saludar();
saludo;