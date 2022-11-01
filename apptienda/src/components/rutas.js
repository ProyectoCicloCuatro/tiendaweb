
import { Route, Routes } from "react-router-dom"
import Inicio from "../views/Inicio"
import Compras from "../views/InicioShopping"
import Productos from "../views/Productos"
import Ventas from "../views/Ventas";




const Rutas = () => {
    return (


        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="inicio" element={<Inicio />} />
            <Route path="Administrar" element={<Productos />} />
            <Route path="Compras" element={<Compras />} />
            <Route path="ventas" element={<Ventas />} />

        </Routes>




    );
}

export default Rutas;
