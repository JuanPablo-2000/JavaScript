// Temporizadores

/*Todo el codigo que ponga en la función 
  es lo que se va ha ejecutar cada segundo*/

// console.log("Inicio");
// setTimeout(() => {
//   console.log(`Esto se ejecuta una sola vez (setTimeout)`);
// }, 3000);

// setInterval(() => {
//   console.log(`Cada segundo se ejecuta el setInterval`);
// }, 1000);

// let temporizador = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// clearTimeout(temporizador);
// console.log(`después del clearTimeout`);

setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

//clearTimeout(temporizador);
console.log(`después del clearTimeout`);