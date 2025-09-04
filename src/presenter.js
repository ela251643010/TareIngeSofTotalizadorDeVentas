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
import mostrarCantidad from "./totalizador.js";
const inputCantidad = document.querySelector("#Cantidad");
const form = document.querySelector("#totalizar");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidad = Number.parseInt(inputCantidad.value);
  div.innerHTML = "<p>" + mostrarCantidad(cantidad) + "</p>";
});
