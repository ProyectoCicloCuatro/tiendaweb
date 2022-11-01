export const Producto = function (id, urlImagen, nombre, descripcion, caracteristicas, precio) {
    this.id = id;
    this.urlImagen = urlImagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.caracteristicas = caracteristicas;
    this.precio = precio;
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
export const Venta = function  (id, fecha, valor, confirmado, detalleCompra, cliente) {
    this.id = id;
    this.fecha = fecha;
    this.valor = valor;
    this.confirmado = confirmado;
    this.detalleCompra = detalleCompra;
    this.cliente = cliente;
}