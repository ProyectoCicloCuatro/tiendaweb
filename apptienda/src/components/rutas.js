import React from "react";
import {Routes,Route} from 'react-router-dom'
import Inicio from '../vistas/Inicio'
import Ventas from '../vistas/ShoppingCart'
import Administrar from '../vistas/Administrador'


const Rutas = () =>{
    return(
        <Routes>
            <Route exact path = '/' element={<Inicio/>} />
            <Route exact path = '/Compras' element={<Ventas/>} />
            <Route exact path = '/Administrar' element={<Administrar/>} />
        </Routes>
    );
}
export default Rutas;