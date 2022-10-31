export const Venta = function (id, fecha, idCliente, idVenta, valor, detalleCompra) {
    this.id = id;
    this.fecha = fecha;
    this.idcliente = idCliente;
    this.idVenta = idVenta;
    this.monto = valor;
    this.detalleCompra = detalleCompra;
    
}