// import sumar from "./sumador";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstNumber = Number.parseInt(first.value);
//   const secondNumber = Number.parseInt(second.value);

//   div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
// });
// 
import {mostrarCantidad, mostrarPrecioPorItem } from "./totalizador.js";
const inputCantidad = document.querySelector("#Cantidad");
const inputPrecioPorItem = document.querySelector("#precio");
const form = document.querySelector("#totalizar");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidad = Number.parseInt(inputCantidad.value);
  const precioPorItem = Number.parseInt(inputPrecioPorItem.value);
  div.innerHTML = "<p>" +"Cantidad: " + mostrarCantidad(cantidad) + "<br>" + "Precio: " + mostrarPrecioPorItem(precioPorItem)+ "</p>";
});
