/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
  miFuncion("Hola Mundo") devolverá 10.

2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
  pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. 
  miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
  devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

contar = (cadena) => console.log(cadena.length); 
contar('Hola Mundo');

recortar = (cadena, recorte) =>  console.log(cadena.substring(0, recorte));
recortar('Hola Mundo', 4);

separar = (cadena) => console.log(cadena.split(''));
separar('Hola Mundo');

repetir = (cadena, repeticion) => console.log(cadena.repeat(repeticion));
repetir('Hola Mundo', 3);

/*
  5) Programa una función que invierta las palabras de una cadena de texto, pe. 
    miFuncion("Hola Mundo") devolverá "odnuM aloH".

6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
   miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
  (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. 
  miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

reversa = (cadena) => {let texto = ''; for(let i=cadena.length-1;i>=0;i--) {texto += cadena[i];} return texto};
console.log(reversa('Hola Mundo'));

palindromo = (cadena) => {return cadena.toLowerCase() === reversa(cadena.toLowerCase()) ? true : false}
console.log(palindromo('Oso'));

deletepatron = (patron, ...cadena) => {for(let i=0;i<cadena.length;i++) {cadena[i] = cadena[i].replace(patron, '');} return cadena};
console.log(deletepatron('xyz', 'xyz1', 'xyz2', 'xyz3'));

/*
  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

  10) Programa una función que reciba un número y evalúe si es capicúa o no 
  (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

  11) Programa una función que calcule el factorial de un número 
  (El factorial de un entero positivo n, se define como el producto de 
  todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

aleatorioNumero = () => {return Math.random() * (600 - 501) + 501}
console.log(Math.round(aleatorioNumero())); 

isCapicua = (n) => {return n.toString() === reversa(n.toString()) ? true : false}
console.log('Es Capicua: '+isCapicua(404));

fatorial = (n) => {let f=1; for(let i=1;i<=n;i++) {f *= i}; return f}
console.log('Factorial #: '+fatorial(5));

/*
  12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
      o no, pe. miFuncion(7) devolverá true.

  13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

  14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") 
      devolverá 32°F.
*/

let contador = 2, r;

function esPrimo(n) {

  if(n===1 || n===2) {
    r=true;
  } else if(n===contador) {
    r=true; 
  } else if(n%contador===0) {
    r=false;
  } else{ contador++; esPrimo(n); }

  return r;
}

console.log('# Primo: '+esPrimo(7))

isImpar = (n) => {n%2===0 ? console.log('Par'): console.log('Impar')}
isImpar(7)

temperatura = (grados, escala) => {return escala==='C' ? 9*(grados)/5+32: 5*(grados-32)/9}
console.log('Temperatura: '+temperatura(0, 'C'))

/*
  15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
      miFuncion(100,2) devolverá 4 base 10.

  16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. 
      miFuncion(1000, 20) devolverá 800.

  17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. 
      miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

auxDecimal = (n) => {
  let retorno=0;
  n = n.toString().split('').reverse().join('');
  for(let i=0;i<n.toString().length;i++) {
    if(n[i]==='1') { 
      retorno += Math.pow(2, i);
    }
  } 
  return retorno
}

auxBinario = (n) => {
  let contador = 0, retorno = '', n_aux = 0;

  while(n>0) {
    
    retorno += (n%2).toString();
    n_aux = Math.round((n/2));
    n = n - n_aux;
  }

  retorno = reversa(retorno);
  return retorno;
}

cambioBase = (n, base) => {return base===2 ? auxDecimal(n):auxBinario(n)}
 
console.log('De binario a Decimal: '+cambioBase(1100100, 2));
console.log('De decimal a Binario: '+cambioBase(100, 10))

descuento = (precio, descuento) => {return precio - (precio*descuento/100)};
console.log(descuento(1000, 20));

fechaValida = (fecha) => {return (new Date(Date.now()).getFullYear() - fecha.getFullYear())};
console.log(fechaValida(new Date(1984,4,23)));

/*
  18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. 
      miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

  19) Programa una función que valide que un texto sea un nombre válido, pe. 
      miFuncion("Jonathan MirCha") devolverá verdadero.

  20) Programa una función que valide que un texto sea un email válido, pe. 
      miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

contadorConsonantes = (texto) => {return texto.match(/[qwrtypsdfghjklñzxcvbnm]/gi).length};
contadorVocales = (texto) => {return texto.match(/[aeiou]/gi).length};
constarLetras = (texto) => {return 'Cantidad de vocales: '+contadorVocales(texto)+' Cantidad de consonantes: '+contadorConsonantes(texto)};
console.log(constarLetras('Hola Mundo'));

isNombre = (nombre) => {};

isEmail = (correo) => {return /\S+@\S+\.\S+/.test(correo)};
console.log('Es correo? : '+isEmail('juan@gmail.com'));

/*
  21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. 
        mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

  22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. 
      miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

  23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. 
      miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

elevarCuadrado = (arreglo) => {for(let i=0;i<arreglo.length;i++) {arreglo[i]= arreglo[i]*2} return arreglo};
console.log('Al cuadrado: '+elevarCuadrado([1, 4, 5]));

smallAndbig = (arreglo) => {
  let big = arreglo[0], small = arreglo[0];

  for(let i=0;i<arreglo.length;i++) {
    if(arreglo[i] > big) {
      big = arreglo[i];
    } else if(!(small < arreglo[i])) {
      small = arreglo[i];
    }
  }

  return console.log('Número mayor: '+big,'Número menor: '+small);
};

smallAndbig([1, 4, 5, 99, -60]);

pares_impares = (arreglo) => {
  let pares = [], impares = [];

  for(let i=0;i<arreglo.length;i++) {
    if(arreglo[i]%2 === 0) {
      pares.push(arreglo[i]);
    } else{
      impares.push(arreglo[i]);
    }
  }

  return console.log('Números pares: '+pares+'  Números impares: '+impares);
};

pares_impares([1,2,3,4,5,6,7,8,9,0]);

/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
    el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. 
    miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. 
    miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

26) Programa una función que dado un arreglo de números obtenga el promedio, pe. 
    promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5
*/

ordenNumeros = (arreglo) => {
  let ascendente = arreglo.sort(), descendiente = [];

  for(let i=arreglo.length-1;i>0;i--) {
    descendiente.push(ascendente[i]);
  }

  return console.log('Asecendente: '+ascendente,'  Descendente: '+descendiente);
}
ordenNumeros([7, 5, 7, 8, 6]);

deleteDuplicate = (arreglo) => {
  let aux_arreglo = [];
  for(let i=0;i<arreglo.length;i++) {
    for(let j=0;j<arreglo.length;j++) {
      if(arreglo[i] === arreglo[j] && j != i) {
        arreglo.splice(i, 1);
      }
    }
  }
  return console.log('Delete data repeated: '+arreglo);
}
deleteDuplicate(["x", 10, "x", 2, "10", 10, true, true]);

averageArray = (arreglo) => {
  let average = 0; 

  for(let i=0;i<arreglo.length;i++) {
    average += arreglo[i];
  }

  return console.log('Average array: '+average/arreglo.length)
}
averageArray([9,8,7,6,5,4,3,2,1,0]);

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en 
IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary,
  Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, 
  Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

