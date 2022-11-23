import React, { useState } from "react";
import { TYPES } from "../actions/shoppingAction";
import { listarProductos, Producto } from "../service/Listas";



export const shoppingInitialState = {
  products: null,
  cart: []
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      /*let newItem = state.products.find(
        (product) => product.id === action.payload
      );*/

      let newItem = action.payload;
      console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      let url = "http://localhost:3020/ventas/detalle/1";

      fetch(url,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({

            producto: {
              id: newItem.id
            },
            cantidad: 1
          }

          )
        }
      ).then((res) => res.json())
        .then((json) => {
          //window.alert(`La venta [${json.id}] fue ${ventaEditado.id >= 0 ? "modificado" : "agregado"}`);
          // cerrarFormulario();
        })
        .catch((error) => {
          window.alert(`Error actulizando ventas: ${error}`);
        })

      return itemInCart
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
        : {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id == action.payload);

      return itemToDelete.quantity > 1
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
        : {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default:
      //console.log(state.products.find());
      return state;


  }
}