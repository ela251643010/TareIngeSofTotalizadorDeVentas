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
        return 8.25;
    }
    if(estado ==="NV"){
        return 8.00;
    }
    if(estado==="TX")
    {
        return 6.25;
    }
    if(estado==="AL"){
        return 4.00;

    }
    if(estado==="UT"){
        return 6.65;
    }

}

export  {mostrarCantidad, mostrarPrecioPorItem, calcularPrecioNeto, impuestoPorEstado};