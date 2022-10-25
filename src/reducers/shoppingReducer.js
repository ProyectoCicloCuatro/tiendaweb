import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState={
    products:[
        {
            id: "983943941162",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/02/01-43-600x600.png",
            nombre: "Portatil Lenovo IP 3 14ALC6 AMD Ryzen 3 5300U",
            descripcion: "Una laptop perfecta para tus trabajos con tecnología confiable gracias a su procesador AMD.!",
            características: "<p>8 RYZEN 3 5300U, 2.6 GHz</p>\n<p>14″ HD 1920 x 1080</p>",
            precio: 1.733000
        },
        {
            id: "042184531418",
            urlImagen: "https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/a/z/azure_rebakcg_4.png",
            nombre: "Lenovo V14 14'' Ryzen 5 5500U 1TB 4.0 GHz",
            descripcion: "El diseño de esta elegante laptop gris acero le da un aspecto y una sensación de calidad.",
            características: "<p>AMD Ryzen 5 5500O, 4.0 GHz</p>\n<p> 14″ HD 1920 x 1080</p>",
            precio: 2.039000
        },
        {
            id: "899406609491",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/03/162f0la_4-768x768.png",
            nombre: "PORTATIL HP PAVILION GAMING 15-EC1037LA RYZEN",
            descripcion: "No te pierdas de nada gracias a la potente laptop HP Pavilion Gaming 15. Disfruta de la mejor calidad.!",
            características: "<p>8 RYZEN 5 4600H, 4.0 GHz</p>\n<p>15.6″ FHD 1920 x 1080</p>",
            precio: 3.723000
        },
        {
            id: "605966704417",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/06/1-768x768.jpg",
            nombre: "PORTATIL ASUS VIVOBOOK M3401Q R7 5800H RTX 3050",
            descripcion: "Vivobook Pro 14 está listo y esperando para llevarlo en su viaje de descubrimiento.",
            características: "<p>AMD Ryzen 7 5800H, 4.4GHz</p>\n<p> 14″ OLED WQXGA 2880 x 1800</p>",
            precio: 5.541000
        },
        {
            id: "088054427495",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/06/1-1-768x768.jpg",
            nombre: "PORTATIL ASUS TUF GAMING FA506QM R7 5800H RTX 3060",
            descripcion: "TUF Gaming es una computadora repleta de funciones con el poder de llevarte a la victoria.!",
            características: "<p>8 AMD Ryzen 7 5800H, 4.4GHz</p>\n<p> 15.6″ FHD 1920 x 1080 144Hz IPS</p>",
            precio: 6.324000
        },
        {
            id: "640209396025",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/07/1-6-768x768.jpg",
            nombre: "PORTATIL GIGABYTE A5 K1 RYZEN 5 5600H RTX 3060",
            descripcion: "El Gigabyte A5 combina juegos, entretenimiento, trabajo y más. Tareas al mismo tiempo sin esfuerzo..",
            características: "<p>AMD RYZEN 5 5600H</p>\n<p>15.6” FHD IPS (1920 x 1080)</p>",
            precio: 6.620000
        },
        {
            id: "414057541797",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/09/2-14-768x768.jpg",
            nombre: "PORTATIL ASUS ROG STRIX RYZEN 7 6800H RTX 3060",
            descripcion: "Sutiles retoques adornan el exterior del portátil, destacando el sistema en cualquier ángulo.!",
            características: "<p>8 AMD Ryzen 7 6800H, 4.7 GHz</p>\n<p> 15.6″ QHD 144Hz - IPS</p>",
            precio: 7.398000
        },
        {
            id: "420227595442",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/08/0-768x768.jpg",
            nombre: "PORTATIL MSI KATANA GF76 12UE INTEL I7 12700H RTX 3060",
            descripcion: "Katana GF es tan poderosa y resistente como una espada y está lista para un optimo rendimiento.",
            características: "<p> Intel Core I7 12700H, 4.7 GHz</p>\n<p>17.3″ FHD 144Hz – IPS</p>",
            precio: 7.955000
        },
        {
            id: "876439548187",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/07/1-7-768x768.jpg",
            nombre: "PORTATIL AORUS 15 XE5 I7 12700H RTX 3070 TI 165HZ",
            descripcion: "El nuevo AORUS 15 redefine las computadoras portátiles para juegos de alta gama!",
            características: "<p>Intel Core I7 12700H GHz</p>\n<p> 15.6” 2k (2560 x 1440)</p>",
            precio:11.210000
        },
        {
          id: "521336177935",
          urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2020/08/A-5-768x768.jpg",
          nombre: "BASE REFRIGERANTE PARA PORTÁTIL TRUST GXT 220 KUZO",
          descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
          características: "<p>Para notebooks de hasta 17.3</p>\n<p>Mantiene su computadora portátil refrigerado para aumentar el rendimiento</p>",
          precio: 95.000
        },
        {
            id: "360363372217",
            urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2021/02/1-31-768x768.jpg",
            nombre: "MOUSE RAZER DEATHADDER V2 MINI 8500DPI CON CABLE USB",
            descripcion: "Tecnología de conectividad",
            características: "<p>Wired - Razer™ Speedflex</p>\n<p>Personal Computer</p>",
            precio: 155.000
        }
    ],
    
    cart:[]
};

export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
              (product) => product.id === action.payload
            );
            //console.log(newItem);
      
            let itemInCart = state.cart.find((item) => item.id === newItem.id);
      
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
            let itemToDelete = state.cart.find((item) => item.id === action.payload);
      
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