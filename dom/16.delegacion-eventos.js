/** Delegación de Eventos */

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");


function flujoEventos(e) {
  console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
  e.stopPropagation();
}

document.addEventListener("click", (e) => {
  console.log("Click en ",e.target);

  if(e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if(e.target.matches(".eventos-flujo a")) {
    alert('Hola soy tu amigo y docente digital... Jonatan Mircha');
    e.preventDefault();
  }
})
