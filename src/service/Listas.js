import { makeStyles } from "@material-ui/core";
import { Producto, Venta, DetalleVenta } from "../modelos/modelos";

export const obtenerEstilos = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    botonAgregar: {
        borderRadius: 15,
        backgroundColor: "#21b6ae",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonModificar: {
        borderRadius: 15,
        backgroundColor: "#55ff55",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonEliminar: {
        borderRadius: 15,
        backgroundColor: "#ff5555",
        padding: "10px 10px",
        fontSize: "18px"
    }

}));

export const obtenerEstilosModal = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

export const listarProductos = () => {

    //construir la lista de productos desde la API
    return fetch("http://localhost:3020/productos",
        {
            method: "GET",
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error, estado=${res.status}`);
            }
            return res.json();
        })
        .then((json) => {
            var productos = [];
            json.map((item) => {
                productos.push(new Producto(item.id,
                    item.urlImagen,
                    item.nombre,
                    item.descripcion,
                    item.caracteristicas,
                    item.precio,
                    item.cantidad
                ));
            });
            return productos;
        })
        .catch(function (error) {
            window.alert(`Error consultado productos[${error}]`);
        });
    /*
         return [
             {
                id: "983943941162",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/02/01-43-600x600.png",
                nombre: "Portatil Lenovo IP 3 14ALC6 AMD Ryzen 3 5300U",
                descripcion: "Una laptop perfecta para tus trabajos con tecnología confiable gracias a su procesador AMD.!",
                caracteristicas: "<p>8 RYZEN 3 5300U, 2.6 GHz</p>\n<p>14″ HD 1920 x 1080</p>",
                precio: 1733000
            },
            {
                id: "042184531418",
                urlImagen: "https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/a/z/azure_rebakcg_4.png",
                nombre: "Lenovo V14 14'' Ryzen 5 5500U 1TB 4.0 GHz",
                descripcion: "El diseño de esta elegante laptop gris acero le da un aspecto y una sensación de calidad.",
                caracteristicas: "<p>AMD Ryzen 5 5500O, 4.0 GHz</p>\n<p> 14″ HD 1920 x 1080</p>",
                precio: 2039000
            },
            {
                id: "899406609491",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/03/162f0la_4-768x768.png",
                nombre: "PORTATIL HP PAVILION GAMING 15-EC1037LA RYZEN",
                descripcion: "No te pierdas de nada gracias a la potente laptop HP Pavilion Gaming 15. Disfruta de la mejor calidad.!",
                caracteristicas: "<p>8 RYZEN 5 4600H, 4.0 GHz</p>\n<p>15.6″ FHD 1920 x 1080</p>",
                precio: 3723000
            },
            {
                id: "605966704417",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/06/1-768x768.jpg",
                nombre: "PORTATIL ASUS VIVOBOOK M3401Q R7 5800H RTX 3050",
                descripcion: "Vivobook Pro 14 está listo y esperando para llevarlo en su viaje de descubrimiento.",
                caracteristicas: "<p>AMD Ryzen 7 5800H, 4.4GHz</p>\n<p> 14″ OLED WQXGA 2880 x 1800</p>",
                precio: 5541000
            },
            {
                id: "088054427495",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/06/1-1-768x768.jpg",
                nombre: "PORTATIL ASUS TUF GAMING FA506QM R7 5800H RTX 3060",
                descripcion: "TUF Gaming es una computadora repleta de funciones con el poder de llevarte a la victoria.!",
                caracteristicas: "<p>8 AMD Ryzen 7 5800H, 4.4GHz</p>\n<p> 15.6″ FHD 1920 x 1080 144Hz IPS</p>",
                precio: 6324000
            },
            {
                id: "640209396025",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/07/1-6-768x768.jpg",
                nombre: "PORTATIL GIGABYTE A5 K1 RYZEN 5 5600H RTX 3060",
                descripcion: "El Gigabyte A5 combina juegos, entretenimiento, trabajo y más. Tareas al mismo tiempo sin esfuerzo..",
                caracteristicas: "<p>AMD RYZEN 5 5600H</p>\n<p>15.6” FHD IPS (1920 x 1080)</p>",
                precio: 6620000
            },
            {
                id: "414057541797",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/09/2-14-768x768.jpg",
                nombre: "PORTATIL ASUS ROG STRIX RYZEN 7 6800H RTX 3060",
                descripcion: "Sutiles retoques adornan el exterior del portátil, destacando el sistema en cualquier ángulo.!",
                caracteristicas: "<p>8 AMD Ryzen 7 6800H, 4.7 GHz</p>\n<p> 15.6″ QHD 144Hz - IPS</p>",
                precio: 7398000
            },
            {
                id: "420227595442",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/08/0-768x768.jpg",
                nombre: "PORTATIL MSI KATANA GF76 12UE INTEL I7 12700H RTX 3060",
                descripcion: "Katana GF es tan poderosa y resistente como una espada y está lista para un optimo rendimiento.",
                caracteristicas: "<p> Intel Core I7 12700H, 4.7 GHz</p>\n<p>17.3″ FHD 144Hz – IPS</p>",
                precio: 7955000
            },
            {
                id: "876439548187",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2022/07/1-7-768x768.jpg",
                nombre: "PORTATIL AORUS 15 XE5 I7 12700H RTX 3070 TI 165HZ",
                descripcion: "El nuevo AORUS 15 redefine las computadoras portátiles para juegos de alta gama!",
                caracteristicas: "<p>Intel Core I7 12700H GHz</p>\n<p> 15.6” 2k (2560 x 1440)</p>",
                precio:11210000
            },
            {
              id: "521336177935",
              urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2020/08/A-5-768x768.jpg",
              nombre: "BASE REFRIGERANTE PARA PORTÁTIL TRUST GXT 220 KUZO",
              descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
              caracteristicas: "<p>Para notebooks de hasta 17.3</p>\n<p>Mantiene su computadora portátil refrigerado para aumentar el rendimiento</p>",
              precio: 95000
            },
            {
                id: "360363372217",
                urlImagen: "https://clonesyperifericos.com/wp-content/uploads/2021/02/1-31-768x768.jpg",
                nombre: "MOUSE RAZER DEATHADDER V2 MINI 8500DPI CON CABLE USB",
                descripcion: "Tecnología de conectividad",
                caracteristicas: "<p>Wired - Razer™ Speedflex</p>\n<p>Personal Computer</p>",
                precio: 155000
            }
         ]
   */
}

export const listarVentas = () => {
    let url="http://localhost:3020/ventas";
    //window.alert(url);
    //construir la lista de productos desde la API
    return fetch(url,
        {
            method: "GET",
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error, estado=${res.status}`);
            }
            return res.json();
        })
        .then((json) => {
            var ventas = [];
            json.map((item) => {
                ventas.push(new Venta(item.id,
                    item.cliente,
                    item.fecha,
                    item.valor,
                    item.confirmado,
                ));
            });
            //window.alert(ventas);
            return ventas;
            
        })
        .catch(function (error) {
            window.alert(`Error consultado ventas[${error}]`);
        });


}

export const listarDetalleVentas = (idVentas) => {
    //Consultar la lista de paises desde la API
    let url = `http://localhost:3020/ventas/detalle/${idVentas}`;
    //window.alert(url);
    return fetch(url,
        {
            method: "GET",
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error, estado=${res.status}`);
            }
            return res.text();
        })
        .then((data) => {
            return data.length == 0 ? '{}' : JSON.parse(data);
        })
        .then((json) => {
            var detalles = [];
            if (json != '{}') {
                json.map((item, indice) => {
                    detalles.push(new DetalleVenta(item.id,
                        item.producto.nombre,
                        item.cantidad,
                        item.valorunitario
                    ));
                });
            }
            console.log('Hola mundo');
            console.log(detalles);
            //window.alert(detalles);
            return detalles;
        })
        .catch(function (error) {
            window.alert(`Error consultando regiones [${error}]`);
        });
}
