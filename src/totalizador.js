function mostrarCantidad(cantidad) {
  return cantidad;
}

function mostrarPrecioPorItem(precio) {
    return precio;
}
function calcularPrecioNeto(cantidad, precio){
    return cantidad*precio;
}
function impuestoPorEstado(estado){
    if(estado==="CA")
    {
        return 6.65;
    }

}

export  {mostrarCantidad, mostrarPrecioPorItem, calcularPrecioNeto, impuestoPorEstado};