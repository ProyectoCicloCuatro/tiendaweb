import { Button } from "reactstrap";

const CartItem = ({ data, delFromCart }) => {
  let { id, nombre, precio, quantity, urlImagen } = data;
  const Swal = require('sweetalert2')

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <div className="row row-cols-6 d-sm-flex align-items-center">
        <div className=" w-25">
          <img className="card-img-top w-25" src={urlImagen} alt="..." />
        </div>
        <div>
          {nombre}
        </div>
        <div>
          <h5>${precio} x {quantity} = ${precio * quantity}</h5>
        </div>
        <div>
          <Button color="secondary" onClick={() => [delFromCart(id),
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '¡Se ha eliminado el artículo al carrito correctamente!',
              showConfirmButton: false,
              timer: 1500
            })]  
            }>Eliminar Uno</Button>
        </div>
        <div>
          <Button color='danger' onClick={() =>
            Swal.fire({
              title: '¿Está seguro?',
              text: "Esta acción eliminará estos artículos del carrito de compras!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, eliminar esto!'
            }).then((result) => {
              if (result.isConfirmed) {
                delFromCart(id, true);
                Swal.fire({
                  icon: 'success',
                  text: '¡Borrado!.\n Se han eliminado estos artículos del carrito correctamente.\n'
                });

              }
            })

          }>Eliminar Todos</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;