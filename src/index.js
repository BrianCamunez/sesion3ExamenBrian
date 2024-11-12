import { menu } from "./components/menu.js";

import { pintarTabla } from "./components/crearTabla.js";

import { partidas } from "./components/array.js";

function header() {
  return `${menu()}
    `;
}
document.querySelector("#encabezado").innerHTML = header();

function cargarTabla() {
  return `${pintarTabla()}
  `;
}

document.querySelector("#partidas").innerHTML = cargarTabla();
