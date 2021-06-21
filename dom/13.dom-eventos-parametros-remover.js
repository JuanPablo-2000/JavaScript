/**
 * Eventos con Parámetros y Remover Eventos - DOM
 */
 function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre} - ${event}`);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiple = document.getElementById("evento-multiple"),
$eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = (e) => {
  alert(`Hola Mundo Manejador de Eventos Semánticos`);
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert(`Hola Mundo Manejador de Eventos Múltiples`);
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

$eventoMultiple.addEventListener("click", (e) => {
  saludar();
  saludar("Juan");
});

const removerDobleClick = () => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disable = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);