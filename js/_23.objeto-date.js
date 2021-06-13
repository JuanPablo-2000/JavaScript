//Objeto Date

console.log(Date);
 
let fecha = new Date();
console.log(fecha);

//día del mes
console.log(fecha.getDate());
//día de la semana D L M M J V S -> 0 1 2 3 4 5 6
//Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate()); //Meridiano de Greenwich hora zero
console.log(fecha.getUTCHours());
console.log(Date.now()); //Timestamp

//Echarle un vistazo a moment js

let cumpleJuan = new Date(1984, 4, 23);
console.log(cumpleJuan);

