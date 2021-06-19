const mapa = new Map();

mapa.set(`Nombre`, `Juan`);
mapa.set(`Apellido`, `Mera`);
mapa.set(`Edad`, 20);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has(`correo`));
console.log(mapa.has(`Nombre`));
console.log(mapa.get(`Nombre`));

mapa.set(`Nombre`, `Jonathan Mircha`);
console.log(mapa.get(`Nombre`));

mapa.delete(`Apellido`);
console.log(`mapa`);

mapa.set(19, `diecinueve`);
mapa.set(false, "falso");
mapa.set({}, {});
console.log(mapa);

for(let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
  ["nombre", "kEnAi"],
  ["edad", 7],
  ["animal", "perro"],
  [null, "nulo"]
]);
console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);

/** Maps */