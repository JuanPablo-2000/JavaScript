/** stopPropagation & preventDefault - DOM */

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");


function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  e.stopPropagation();
}

$divsEventos.forEach(div => {
  div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", (e) => {
  alert(`Hola soy tu amigo y docente digital... jonatanmircha`);
  e.preventDefault();
  e.stopPropagation();
});