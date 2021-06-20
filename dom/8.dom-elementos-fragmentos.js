/** Creando Elementos y Fragmentos - DOM */
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptiontext = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figure.appendChild($img);
$cards.appendChild($figure);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptiontext);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption> People </figcaption>`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
$ul = document.createElement("ul");

document.write("<h3> Estaciones del Año </h3>");
document.body.appendChild($ul);

estaciones.forEach(e => {
  const $li = document.createElement("li");
  $li.textContent = e;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
$ul2 = document.createElement("ul");

document.write("<h3> Continentes del Mundo </h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach(e => $ul2.innerHTML += `<li>${e}</li>`);

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(e => {
  const $li = document.createElement("li");
  $li.textContent = e;
  $fragment.appendChild($li);
});

document.write("<h3> Meses del Año </h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);