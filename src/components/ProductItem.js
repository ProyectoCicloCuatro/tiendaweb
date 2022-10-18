/*const ProductItem = ({data, addToCart}) => {
    return ( <div>Producto</div> );
}
 */

const ProductItem = ({ data, addToCart }) => {
  const Swal = require('sweetalert2')
  let { id, nombre, precio, urlImagen } = data;
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/*<!-- Product image-->*/}
        <img className="card-img-top" src={urlImagen} alt="..." />
        {/*<!-- Product details-->*/}
        <div className="card-body p-4">
          <div className="text-center">
            {/*<!-- Product name-->*/}
            <h5 className="fw-bolder">{nombre}</h5>
            {/*<!-- Product price-->*/}
            ${precio}
          </div>
        </div>
        {/*<!-- Product actions-->*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => [addToCart(id), 
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Se ha agregado el artículo al carrito correctamente!',
            showConfirmButton: false,
            timer: 1500
          })]}>Agregar</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

