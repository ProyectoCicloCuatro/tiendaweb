import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState={
    products:[
        {
            id: "GGOEAFKA087490",
            urlImagen: "https://bucket-periodismodelmotor.s3.eu-west-3.amazonaws.com/wp-content/uploads/2020/09/bmw-m4-2021--450x300.jpg",
            nombre: "Android Small Removable Sticker Sheet1",
            descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
            características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
            precio: 2.99
        },
        {
            id: "GGOEAFKA087591",
            urlImagen: "https://figarettis.net/wp-content/uploads/2019/01/sauce-450x300.jpg",
            nombre: "Android Large Removable Sticker Sheet2",
            descripcion: "Show your quirky side by placing these fun Android stickers on your personal belongings.",
            características: "<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>",
            precio: 3.99
        },
        {
            id: "GGOEAFKA087492",
            urlImagen: "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
            nombre: "Android Small Removable Sticker Sheet3",
            descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
            características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
            precio: 2.99
        },
        {
            id: "GGOEAFKA087593",
            urlImagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png",
            nombre: "Android Large Removable Sticker Sheet4",
            descripcion: "Show your quirky side by placing these fun Android stickers on your personal belongings.",
            características: "<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>",
            precio: 3.99
        },
        {
            id: "GGOEAFKA087494",
            urlImagen: "https://revistardenergia.com/wp-content/uploads/2019/04/IMG_20190418_152149-450x300.jpg",
            nombre: "Android Small Removable Sticker Sheet5",
            descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
            características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
            precio: 2.99
        },
        {
            id: "GGOEAFKA087595",
            urlImagen: "https://us.123rf.com/450wm/foodandmore/foodandmore1806/foodandmore180600099/103462679-bolas-cremosas-de-helado-o-helado-de-fresa-italiano-servido-en-un-recipiente-azul-para-un-delicioso-.jpg?ver=6",
            nombre: "Android Large Removable Sticker Sheet6",
            descripcion: "Show your quirky side by placing these fun Android stickers on your personal belongings.",
            características: "<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>",
            precio: 3.99
        },
        {
            id: "GGOEAFKA087496",
            urlImagen: "https://us.123rf.com/450wm/skab3txina/skab3txina1207/skab3txina120700011/14472579-imagen-3d-de-un-regalo-de-un-tel%C3%A9fono-celular-.jpg",
            nombre: "Android Small Removable Sticker Sheet7",
            descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
            características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
            precio: 2.99
        },
        {
            id: "GGOEAFKA087597",
            urlImagen: "https://i.blogs.es/b26cae/pc-01/450_1000.webp",
            nombre: "Android Large Removable Sticker Sheet8",
            descripcion: "Show your quirky side by placing these fun Android stickers on your personal belongings.",
            características: "<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>",
            precio: 3.99
        },
        {
            id: "GGOEAFKA087498",
            urlImagen: "https://us.123rf.com/450wm/skab3txina/skab3txina1207/skab3txina120700011/14472579-imagen-3d-de-un-regalo-de-un-tel%C3%A9fono-celular-.jpg",
            nombre: "Android Small Removable Sticker Sheet9",
            descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
            características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
            precio: 2.99
        },
        {
            id: "GGOEAFKA087599",
            urlImagen: "https://i.blogs.es/b26cae/pc-01/450_1000.webp",
            nombre: "Android Large Removable Sticker Sheet10",
            descripcion: "Show your quirky side by placing these fun Android stickers on your personal belongings.",
            características: "<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>",
            precio: 3.99
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