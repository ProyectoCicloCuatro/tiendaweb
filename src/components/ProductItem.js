/*const ProductItem = ({data, addToCart}) => {
    return ( <div>Producto</div> );
}
 */
//const [count, setCount] = useState(0);

const ProductItem = ({ data, addToCart }) => {
  const Swal = require('sweetalert2')
  let stock;
  var btnAgregar='';
  let { id, nombre, precio, urlImagen, cantidad } = data;
  if (cantidad>=0){
    stock = "En stock: "+cantidad;
    btnAgregar = ``
  }else{
    stock = "Sin stock ";
    btnAgregar='';
  }
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
            <h6 className="fw-bolder">
            {stock}
              </h6>
            {/*<!-- Product price-->*/}
          </div>
        </div>
        {/*<!-- Product actions-->*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
        <button className="btn btn-outline-dark mt-auto" onClick={() => [addToCart(data), 
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Se ha agregado el artículo al carrito correctamente!',
        showConfirmButton: false,
        timer: 1500
      })]}>Agregar</button>;

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

