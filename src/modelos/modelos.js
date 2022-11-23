export const Producto = function (id, urlImagen, nombre, descripcion, caracteristicas, precio, cantidad) {
    this.id = id;
    this.urlImagen = urlImagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.caracteristicas = caracteristicas;
    this.precio = precio;
    this.cantidad = cantidad;
}


/*

[
  {
    "id":{"$numberLong":"1"},
    "fecha":{"$date":{"$numberLong":"946702700000"}},
    "idCliente":{"$numberLong":"1231"},
    "valor":{"$numberDouble":"10.0"},
    "confirmado":true,
    "detalleCompra":
    [
      {
        "idProducto":{"$numberLong":"3"},
        "cantidad":{"$numberDouble":"2.0"}
        
      },
      {
        "idProducto":{"$numberLong":"1"},
        "cantidad":{"$numberDouble":"5.0"}
        
      },
      {
        "idProducto":{"$numberLong":"11"},
        "cantidad":{"$numberDouble":"6.0"}
      }
    ]
  },
  {
    "id":{"$numberLong":"2"},
    "fecha":{"$date":{"$numberLong":"946702700000"}},
    "idCliente":{"$numberLong":"1234"},
    "valor":{"$numberDouble":"10.0"},
    "confirmado":false,
    "detalleCompra":
    [
      {
        "idProducto":{"$numberLong":"7"},
        "cantidad":{"$numberDouble":"2.0"}
        
      },
      {
        "idProducto":{"$numberLong":"10"},
        "cantidad":{"$numberDouble":"5.0"}
        
      },
      {
        "idProducto":{"$numberLong":"5"},
        "cantidad":{"$numberDouble":"6.0"}
      }
    ]
  }
]
*/
export const Venta = function  (id, cliente, fecha, valor, confirmado){
    this.id = id;
    this.cliente = cliente;
    this.fecha = fecha;
    this.valor = valor;
    this.confirmado = confirmado;

}

export const DetalleVenta = function  (id, producto, cantidad, valorunitario){
  this.idVenta = id;
  this.producto = producto;
  this.cantidad = cantidad;
  this.valorunitario = valorunitario;
}