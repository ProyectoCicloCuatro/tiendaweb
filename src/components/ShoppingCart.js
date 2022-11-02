import { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";

import {
  shoppingInitialState,
  shoppingReducer
} from "../reducers/shoppingReducer";

/*i
import {
  shoppingInitialState
} from "../reducers/shoppingReducer";*/
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { Button, ButtonGroup } from 'reactstrap';
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Swal from 'sweetalert2'
import { listarProductos } from "../service/Listas";
import { Icon } from "@material-ui/core";

const ShoppingCart = () => {

  //variable que almacenar[a el listado de productos]
  const [products, setProductos] = useState([]);
  //const [products, cart] = useState([state]);
  const [estadoListado, setEstadoListado] = useState(true);

  async function obtenerProductos() {
    const productosT = await listarProductos();
    setProductos(productosT);
    setEstadoListado(false);
    
  }

  if (estadoListado) {
    obtenerProductos();
   
  }


  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { productos, cart } = state;
 // const cart  = [state];
  const Swal = require('sweetalert2')



  //metodo para agregar al carrito
  const addToCart = (data) => {
    let { id, nombre, precio, urlImagen } = data;
    //console.log(id);
   
   //window.alert(nombre);
    dispatch({ type: TYPES.ADD_TO_CART, payload: data });
  };
  //metodo para eliminar del carrito
  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  //metodo para limpiar el carrito
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <section className="py-5">
      <div className="d-flex align-items-center justify-content-center">
        <ButtonGroup >
          <Button color="primary" size="lg" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            {' '}Carrito de Compras
          </Button>
        </ButtonGroup>
      </div>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
       
        {
          products.map((product) => (
            <ProductItem key={product.id} data={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <ButtonGroup>
          <Button color="primary" size="lg" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            {' '}
            Carrito de Compras</Button>
        </ButtonGroup>

        <Modal
          
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo="Carrito de Compras"
        >
          <Contenido>

            <h1 color="primary">Carrito de Compras </h1>


            {cart.map((item, index) => (
              //window.alert(item),
              <CartItem key={index} data={item} delFromCart={delFromCart} />
            ))}
<div>
            <Button color="primary" onClick={() => Swal.fire({
              title: '¿Está seguro?',
              text: "Esta acción eliminará todos los artículos y dejará totalmente vació el carrito de compras!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, eliminar esto!'
            }).then((result) => {
              if (result.isConfirmed) {
                clearCart();
                Swal.fire({
                  icon: 'success',
                  text: '¡Borrado!.\n El carrito se ha vaciado correctamente.\n'
                });
                cambiarEstadoModal1(!estadoModal1)
              }
            })}> Limpiar Carrito
            <Icon>
            backspace
            </Icon> 
            </Button>  &nbsp;&nbsp;
            <Button color="success">
             Pagar
             <Icon>
            shopping_cart_checkout
            </Icon>
            </Button></div>
            
          </Contenido>
        </Modal>
      </div>
    </section>
  );
}

export default ShoppingCart;


const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
  overflow-y: scroll;
`;