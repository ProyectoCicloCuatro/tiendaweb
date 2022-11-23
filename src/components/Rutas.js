
import { Route, Routes } from "react-router-dom"
import Inicio from "../views/Inicio"
import Compras from "../components/ShoppingCart"
import Productos from "../views/Productos"
import Ventas from "../views/Ventas";
import Carrito from "../views/Carrito";




const Rutas = () => {
    return (


        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="inicio" element={<Inicio />} />
            <Route path="compras" element={<Compras />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="productos" element={<Productos />} />
            <Route path="carrito" element={<Carrito />} />

        </Routes>




    );
}

export default Rutas;
