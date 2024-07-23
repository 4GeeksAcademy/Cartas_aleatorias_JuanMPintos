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
