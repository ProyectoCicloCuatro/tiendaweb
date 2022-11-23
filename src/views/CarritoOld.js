import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import ModalEditar from "../components/EditarVenta/Modal";
import { listarDetalleVentas, obtenerEstilos } from "../service/Listas";
import { DetalleVenta } from '../modelos/modelos';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import Confirmacion from '../components/Confirmacion'

const columnas = [
    { field: "id", headerName: "Id", width: 100 },
    {
        field: "cantidad", headerName: "cantidad", width: 150
        // renderCell will render the component
    },
     /*
    { 
        field: "cliente", headerName: "Cliente", width: 200,
        renderCell: (params) => {
            const client = params.row.cliente;
            return (
                <>
                    {`${client.nombre}`} 
                </>
            );
        },
        
    },
    {
        field: "valor", headerName: "Valor", width: 200,
        renderCell: (field) => field.value.toLocaleString('USD')
    },
    { 
        field: "confirmado", headerName: "Estado", width: 200,
        renderCell: (field) => field.value ? "Confirmado" : "Pendiente"
    },
   
    { 
        field: "nitCliente", headerName: "Nit Cliente", width: 200,
        
    },
    { 
        field: "nombreCliente", headerName: "Nombres del Cliente", width: 200,
        
    },
    { 
        field: "apellidoCliente", headerName: "Apellidos del Cliente", width: 200,
        
    },
    {
        field: "detalleCompra", headerName: "Detalle de la venta", width: 700,
        renderCell: (params) => (
            <ul className="flex">
                {params.value.map((detalleCompra, index) => (
                    <li key={index}> {detalleCompra.cantidad} {detalleCompra.nombreProducto}  </li>

                ))}
            </ul>
        ),
        type: 'string',

    },

   {
        field: "cliente", headerName: "Cliente", width: 500,
        renderCell: (params) => {
            const client = params.row.cliente;
            return (
                <>
                    <p>{`${client.nombreCliente}  ${client.apellidoCliente}`} </p>
                </>
            );
        },
        
    

    },*/
    
]


const Carrito = () => {

    const estilos = obtenerEstilos();

    //variable que almacenar[a el listado de productos]
    const [detalleVenta, setDetalleVenta] = useState([]);
    const [estadoListado, setEstadoListado] = useState(true);



    const [detalleVentaEditado, setDetalleVentaEditado] = useState({});

    const [estadoModal, setEstadoModal] = useState(false);
    const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

    async function obtenerDetalleVentas() {
        const ventasT = await listarDetalleVentas(1);
        setDetalleVenta(ventasT);
        setEstadoListado(false);
        //window.alert('prueba'+ventasT);
    }

    var ventaSeleccionado;

    if (estadoListado) {
        obtenerDetalleVentas();
        
    }

    const cerrarModal = () => {
        setEstadoModal(false);
    }

    const agregar = () => {
        const ventaE = new DetalleVenta(-1, "", "", "", "", "", "");
        setDetalleVentaEditado(ventaE);
        setEstadoModal(true);
    }

    const modificar = () => {
        if (ventaSeleccionado) {
            const ventaE = ventaSeleccionado;
            setDetalleVentaEditado(ventaE);
            setEstadoModal(true);
        }
        else {
            window.alert("Por favor seleccione la venta a editar");
        }
    }

    const eliminar = () => {
        if (ventaSeleccionado) {
            setDetalleVentaEditado(ventaSeleccionado);
            setEstadoConfirmacion(true);
        }
        else {
            window.alert("Por favor seleccione la venta a eliminar");
        }
    }

    const cerrarConfirmacion = () => {
        setEstadoConfirmacion(false);
    }

    const aceptarConfirmacion = () => {
        fetch(`http://localhost:3020/ventas/${detalleVentaEditado.id}`,
            { method: 'delete' }
        )
            .then((res) => {
                if (res.status !== 200) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then((json) => {
                window.alert(json.mensaje);
                setEstadoListado(true);
            })
            .catch((error) => {
                window.alert(`Error eliminando Venta: ${error}`);
            });

    }

    return (
        <div>
            <center>
                <h1>Carrito de Compras</h1>
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
                
                    rows={detalleVenta.rows}
                    columns={columnas}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    rowHeight={60}


                    onSelectionModelChange={(idVentas) => {
                        const ventasSeleccionados = detalleVenta.filter(
                            function (fila) {
                                return fila.id === idVentas[0];
                            }
                        );
                        ventaSeleccionado = ventasSeleccionados[0];
                    }
                    }
                />

                <ModalEditar open={estadoModal} cerrar={cerrarModal} venta={detalleVentaEditado} />
                <Confirmacion open={estadoConfirmacion}
                    titulo="Eliminado venta"
                    mensaje="Está seguro?"
                    cerrar={cerrarConfirmacion}
                    aceptar={aceptarConfirmacion}
                />  
            </div>

        </div>

    );
}

export default Carrito;