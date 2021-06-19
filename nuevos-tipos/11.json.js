/*
{
  "cadena": "Juan",
  "numero": "35",
  "booleano": "true",
  "arreglo": ["correr", "programar", "cocinar"]

  ,
  "objeto": {
    "twitter": "@jonmircha",
    "email": "jonmircha@gmail.com"
  },
  "nulo": null
}
*/

const json = {
  cadena: "Juan",
  numero: 35,
  boolean: true,
  arreglo: ["correr", "programar", "cocinar"],

  objeto: {
    twitter: "@Juanpablo",
    email: "juan.mera.agudelo@correounivalle.edu.co"
  },

  nulo: null
}

console.log(json);
console.log(JSON);

console.log(`\n Método parse ...`);

/** Método parse() */
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3,4,5]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
console.log(JSON.parse(
`{"cadena": "Juan",
"numero": "35",
"booleano": "true",
"arreglo": ["correr", "programar", "cocinar"]
,
"objeto": {
  "twitter": "@jonmircha",
  "email": "jonmircha@gmail.com"
},
"nulo": null}`));

console.log(`\nMétodo stringify ...`);

/** Método Stringify */
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3,4,5]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({x:2, y:3}));
console.log(JSON.stringify(json));