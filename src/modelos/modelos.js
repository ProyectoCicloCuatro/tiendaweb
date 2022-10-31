export const Producto = function (id, urlImagen, nombre, descripcion, caracteristicas, precio) {
    this.id = id;
    this.urlImagen = urlImagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.caracteristicas = caracteristicas;
    this.precio = precio;
}

export const Venta = function (id, fecha, idCliente, idVenta, valor, detalleCompra) {
    this.id = id;
    this.fecha = fecha;
    this.idcliente = idCliente;
    this.idVenta = idVenta;
    this.monto = valor;
    this.detalleCompra = detalleCompra;
    
}