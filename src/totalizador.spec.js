import {mostrarCantidad, mostrarPrecioPorItem, calcularPrecioNeto,impuestoPorEstado} from "./totalizador.js";

describe("Totalizar ventas", () => {
  it("deberia mostrar la cantidad mostrada por el usuario", () => {
    expect(mostrarCantidad(5)).toEqual(5);
  });
  it("deberia mostrar el precio por item ingresada por el usuario", () => {
     expect(mostrarPrecioPorItem(10)).toEqual(10);
  });
  it("Deberia calcular el precio neto",()=>{
    expect (calcularPrecioNeto(13,2)).toEqual(26);
  });
  it("Deberia mostrar porcentaje de impuesto por estado", () =>{
    expect (impuestoPorEstado("CA")).toEqual(6.65);
  });
//   it("Deberia Seleccionar estado y mostrar elección CA",()=>{
//     expect ((13,2)).toEqual(26);
//   });
});
