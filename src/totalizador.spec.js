describe("Totalizar ventas", () => {
  it("deberia mostrar la cantidad mostrada por el usuario", () => {
    expect(mostrarCantidad(5)).toEqual(5);
  });
});
import mostrarCantidad from "./totalizador.js";
