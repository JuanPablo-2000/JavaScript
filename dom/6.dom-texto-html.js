const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
  El Modelo de Objeto del Documento (<b> <i> DOM - Document Object Model</i> </b>)
  es un API para documentos HTML y XML.
</p>
<p>
  Éste proveé una representación estructural del documento, permitiendo modificar su
  contenido y presentación y presentación visual mediante codigo JS.
</p>
<p>
  <mark> El DOM no es parte de la especificación de JavaScript, 
          es una API para los navegadores.
  </mark>
</p>`;

//$whatIsDOM.innerText = text; // Respeta las identaciones
$whatIsDOM.textContent = text; // No respeta las identaciones
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; 
