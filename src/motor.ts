import { partida} from "./model";
import {
  cambiarUrlCarta,
  mostrarMensaje,
  mostrarPuntos,
  visibilidadBotones,
  eventos,
} from "./ui";

const numeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1);

const numeroCarta = (numeroAleatorio: number): number =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

const obtenerPuntos = (numeroCarta: number) =>
  numeroCarta <= 7 ? numeroCarta : 0.5;

const sumarPuntos = (puntos: number): number =>
  partida.puntuacion + puntos;

const setPuntuacion = (nuevosPuntos: number) =>
  (partida.puntuacion = nuevosPuntos);

const obtenerUrlCarta = (numeroCarta: number): string => {
  switch (numeroCarta) {
    case 0.1:
      return "src/img/0.1_gameOver.jpg";
    case 1:
      return "src/img/1_as-copas.jpg";
    case 2:
      return "src/img/2_dos-copas.jpg";
    case 3:
      return "src/img/3_tres-copas.jpg";
    case 4:
      return "src/img/4_cuatro-copas.jpg";
    case 5:
      return "src/img/5_cinco-copas.jpg";
    case 6:
      return "src/img/6_seis-copas.jpg";
    case 7:
      return "src/img/7_siete-copas.jpg";
    case 10:
      return "src/img/10_sota-copas.jpg";
    case 11:
      return "src/img/11_caballo-copas.jpg";
    case 12:
      return "src/img/12_rey-copas.jpg";
    default:
      return "Número de carta inesperado";
  }
};

const mensajePuntos = (puntos: number) =>
  mostrarMensaje(`Has sumado ${puntos} puntos!!`);

const gestionPartida = () => {
  if (partida.puntuacion === 7.5) {
    mostrarMensaje("🏆¡Lo has clavado! ¡Enhorabuena!🏆");
    visibilidadBotones();
  }
  if (partida.puntuacion > 7.5) {
    mostrarMensaje("💀!!GAME OVER!!💀");
    visibilidadBotones();
    const urlCarta: string = obtenerUrlCarta(0.1);
    cambiarUrlCarta(urlCarta);
  }
};

export const handlePedir = () => {
  const generarCarta: number = numeroCarta(numeroAleatorio());
  const urlCarta: string = obtenerUrlCarta(generarCarta);
  cambiarUrlCarta(urlCarta);
  const puntos: number = obtenerPuntos(generarCarta);
  const nuevoPuntos: number = sumarPuntos(puntos);
  setPuntuacion(nuevoPuntos);
  mostrarPuntos();
  mensajePuntos(puntos);
  gestionPartida();
};

export const handleSalir = () => mePlanto(partida.puntuacion);

export const handleNuevo = () => empezarDeNuevo();

export const handleVer = () => verResultadoSiguiente();

export const empezarDeNuevo = () => location.reload();

let resetVerResultadosSiguiente = false;
const verResultadoSiguiente = () => {
  if (!resetVerResultadosSiguiente) {
    const generarCarta: number = numeroCarta(numeroAleatorio());
    const urlCarta: string = obtenerUrlCarta(generarCarta);
    cambiarUrlCarta(urlCarta);
    const puntos: number = obtenerPuntos(generarCarta);
    const nuevoPuntos: number = sumarPuntos(puntos);
    setPuntuacion(nuevoPuntos);
    mostrarPuntos();
    mensajePuntos(puntos);
    resetVerResultadosSiguiente = true;
  }
};
const mePlanto = (puntuacion: number) => {
  switch (true) {
    case puntuacion <= 4:
      mostrarMensaje("Has sido muy conservador 🧐");
      break;
    case puntuacion < 6:
      mostrarMensaje("Te ha entrado el canguelo eh?😰");
      break;
    case puntuacion >= 6 && puntuacion <= 7:
      mostrarMensaje("Casi casi....🥈");
      break;
    default:
      console.error("Número de puntuación inesperado");
  }
  visibilidadBotones();
};

export const inicializarPartida = () =>{
    mostrarPuntos();
    eventos();
    mostrarMensaje("!!Empieza el juego!!");
}