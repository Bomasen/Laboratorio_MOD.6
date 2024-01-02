import { partida } from "./model";

import { handleNuevo, handlePedir, handleSalir, handleVer } from "./motor";

export const mostrarPuntos = () => {
  const puntos = document.getElementById("puntos");
  puntos && puntos instanceof HTMLSpanElement
    ? (puntos.textContent = partida.puntuacion.toString())
    : console.error("No se puede mostrar puntuación");
};

export const cambiarUrlCarta = (urlCarta: string) => {
  const carta = document.getElementById("carta");
  if (carta && carta instanceof HTMLImageElement) carta.src = urlCarta;
};

export const mostrarMensaje = (texto: string) => {
  const mensaje = document.getElementById("mensaje");
  mensaje && mensaje instanceof HTMLDivElement
    ? (mensaje.textContent = texto)
    : console.error("No se puede mostrar mensaje");
};

export const eventos = () => {
  const pedir = document.getElementById("pedir");
  pedir && pedir instanceof HTMLButtonElement
    ? pedir.addEventListener("click", handlePedir)
    : console.error("Error en el botón Pedir");

  const salir = document.getElementById("salir");
  salir && salir instanceof HTMLButtonElement
    ? salir.addEventListener("click", handleSalir)
    : console.error("Error en el botón Salir");

  const nuevo = document.getElementById("nuevo");
  nuevo && nuevo instanceof HTMLButtonElement
    ? nuevo.addEventListener("click", handleNuevo)
    : console.error("Error en el boton Nuevo");

  const ver = document.getElementById("ver");
  ver && ver instanceof HTMLButtonElement
    ? ver.addEventListener("click", handleVer)
    : console.error("Error en el boton Ver");
};

export const visibilidadBotones = () => {
  const pedir = document.getElementById("pedir");
  pedir && pedir instanceof HTMLButtonElement
    ? pedir.remove()
    : console.error("Error al cambiar visualización botón Pedir");

  const salir = document.getElementById("salir");
  salir && salir instanceof HTMLButtonElement
    ? salir.remove()
    : console.error("Error al cambiar visualización botón Salir");

  const nuevo = document.getElementById("nuevo");
  nuevo && nuevo instanceof HTMLButtonElement
    ? (nuevo.style.display = "inline-block")
    : console.error("Error al cambiar visualización botón Nuevo");

  const ver = document.getElementById("ver");
  ver && ver instanceof HTMLButtonElement && partida.puntuacion < 7.5
    ? (ver.style.display = "inline-block")
    : console.error("Error al cambiar visualización botón Ver");
};
