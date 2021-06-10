/* Operadores */
// Aritméticos: + - * / % ()

let a = 5 + (5 - 10) * 3;
let modulo = 5%2;

console.log(a);
console.log(modulo);

/* Relacionales: >, <, >=, <=, ==, ===, !=, !== */
console.log(8 > 9);
console.log(9 < 8); 
console.log(8 >= 9); 
console.log(9 <= 8); 
console.log(7 < 7); 
console.log(7 <= 7);

/*
 * = 1 igual es asignación de variable
 * == 2 iguales es comparación de valores
 * === 3 iguales es comparación de tipo de dato y de valor.
*/

console.log(`Validaciones con doble igual \n`)
console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(`\nValidaciones con triple igual \n`)
console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

/* Incremento Decremento */
let i = 2;

//i = i + 2;
//i *= 3;

//Operador unario
i++;
i--;
++i;
--i;

console.log(i);

/* Lógicos 
	! - Not
	|| - Or
	&& - And */
console.log(!true);
console.log(!false); 
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));


