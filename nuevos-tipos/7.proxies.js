/** Proxies */

const persona = {
  nombre: ``,
  apellido: ``,
  edad: 0
}

const manejador = {
  set(obj, prop, valor) {
    if(Object.keys(obj).indexOf(prop) === -1) {
      return console.error(`La propiedad "${prop}" 
      no existe en el objeto persona.`);
    }

    if((prop === 'nombre' || prop === 'apellido') && 
      !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))) {
        return console.error(`La propiedad "${prop}" 
        sólo acepta letras y espacios en blanco`);
    }
      
    obj[prop] = valor;
  }
}

const juan = new Proxy(persona, manejador);
juan.nombre = 'Juan Pablo';
juan.apellido = 'Mera Agudelo';
juan.edad = 35;
juan.twitter = '@juanmera';
console.log(juan);