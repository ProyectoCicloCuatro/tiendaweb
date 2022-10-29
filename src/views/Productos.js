import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import ModalEditar from "../components/EditarProducto/Modal";
import { listarProductos, obtenerEstilos } from "../service/Listas";
import {Producto} from '../modelos/modelos';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';

const columnas = [
    { field: "id", headerName: "Id", width: 100 },
    {
        field: "urlImagen", headerName: "Imagen", width: 300,
        renderCell: (params) => <img alt="" className="card-img-top w-50" src={params.value} />, // renderCell will render the component
    },
    { field: "nombre", headerName: "Nombre", width: 300 },
    { field: "descripcion", headerName: "Descripción", width: 500 },
    { field: "caracteristicas", headerName: "Caracteristicas", width: 500 },
    {
        field: "precio", headerName: "Precio", width: 200,
        renderCell: (params) => params.value.toLocaleString('USD')
    },
]


const Productos = () => {
    
    const estilos = obtenerEstilos();

    //variable que almacenar[a el listado de productos]
    const [productos, setProductos] = useState([]);
    const [estadoListado, setEstadoListado] = useState(true);

    

    const [productoEditado, setProductoEditado] = useState({});

    const [estadoModal, setEstadoModal] = useState(false);

    async function obtenerProductos() {
        const productosT = await listarProductos();
        setProductos(productosT);
        setEstadoListado(false);
    }

    var productoSeleccionado;

    if (estadoListado) {
        obtenerProductos();
    }

    const cerrarModal = () => {
        setEstadoModal(false);
    }

    const agregar = () => {
        const productoE = new Producto(-1, "", "", "", "", "", "");
        setProductoEditado(productoE);
        setEstadoModal(true);
    }

    const modificar = () => {
        if (productoSeleccionado) {
            const productoE = productoSeleccionado;
            setProductoEditado(productoE);
            setEstadoModal(true);
        }
        else {
            window.alert("Por favor seleccione el producto a editar");
        }
    }

    const eliminar = () => {

    }

    return (
        <div>
            <center>
                <h1>Lista de productos</h1>
            </center>
            <div style={{ height: 500, width: '100%' }}>
                <Button
                    size="large" 
                    variant="outlined" 
                    
                    className={estilos.button}
                    startIcon={<AddIcon />}
                    onClick={agregar}
                    >
                    Agregar
                </Button>
                <Button 
                    size="large"
                    variant="outlined"
                    color="primary"
                    className={estilos.button}
                    startIcon={<EditIcon />} 
                    onClick={modificar}>
                    Modificar
                </Button>
                <Button 
                    size="large"
                    variant="outlined"
                    color="secondary"
                    className={estilos.button}
                    startIcon={<DeleteIcon />} 
                    onClick={eliminar}
                    >
                    Eliminar
                </Button>
                <DataGrid
                    rows={productos}
                    columns={columnas}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    rowHeight={150} 
                      

                    onSelectionModelChange={(idProductos) => {
                        const productosSeleccionados = productos.filter(
                            function (fila) {
                                return fila.id === idProductos[0];
                            }
                        );
                        productoSeleccionado = productosSeleccionados[0];
                    }
                    }
                />

                <ModalEditar open={estadoModal} cerrar={cerrarModal} producto={productoEditado} />
            </div>

        </div>

    );
}

export default Productos;