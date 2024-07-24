/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cartaAleatoria() {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palos = ["♦", "♥", "♠", "♣"];

  let numeroRandom = numeros[Math.floor(Math.random() * numeros.length)];
  let paloRandom = palos[Math.floor(Math.random() * palos.length)];

  const topSuit = document.getElementById("top-suited");
  const value = document.getElementById("number");
  const bottomSuit = document.getElementById("bottom-suited");

  topSuit.innerText = paloRandom;
  value.innerText = numeroRandom;
  bottomSuit.innerText = paloRandom;

  if (paloRandom === "♦" || paloRandom === "♥") {
    topSuit.style.color = "red";
    value.style.color = "red";
    bottomSuit.style.color = "red";
  } else {
    topSuit.style.color = "black";
    value.style.color = "black";
    bottomSuit.style.color = "black";
  }
}
window.onload = cartaAleatoria;
document.getElementById("boton").addEventListener("click", cartaAleatoria);
reloadPageAfterDelay();

function reloadPageAfterDelay() {
  setInterval(() => {
    cartaAleatoria();
  }, 10000);
}

function changeWidth() {
  const nuevoAncho = document.getElementById("ancho").value;
  const carta = document.getElementById("card");
  console.log(nuevoAncho);
  if (nuevoAncho > 99 && nuevoAncho != "" && nuevoAncho != NaN) {
    card.style.width = nuevoAncho + "px";
  } else {
    alert("Debes ingresa un valor valido");
  }
}
function changeHeigth() {
  const nuevoAlto = document.getElementById("alto").value;
  const carta = document.getElementById("card");
  if (nuevoAlto > 99 && nuevoAlto != "" && nuevoAlto != NaN) {
    card.style.height = nuevoAlto + "px";
  } else {
    alert("Debes ingresa un valor valido");
  }
}
document.getElementById("nuevoAncho").addEventListener("click", changeWidth);
document.getElementById("nuevoAlto").addEventListener("click", changeHeigth);

/*document.querySelector("#card.width").style.width = prompt(
  "Ingrese el tamaño deseado"
);
document.querySelector("#card.heigth");
*/
