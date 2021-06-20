/** Manejador de Eventos - DOM */
function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiple = document.getElementById("evento-multiple");

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