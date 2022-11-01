import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import ModalEditar from "../components/EditarVenta/Modal";
import { listarVentas, obtenerEstilos } from "../service/Listas";
import { Venta } from '../modelos/modelos';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import Confirmacion from '../components/Confirmacion'

const columnas = [
    { field: "id", headerName: "Id", width: 100 },
    {
        field: "fecha", headerName: "Fecha", width: 300,
        // renderCell will render the component
    },
    { field: "idCliente", headerName: "Cliente", width: 300 },
    {
        field: "valor", headerName: "Valor", width: 300,
        renderCell: (field) => field.value.toLocaleString('USD')
    },
    { field: "confirmado", headerName: "Estado", width: 200 },
    {
        field: "detalleCompra", headerName: "Detalle de la venta", width: 500,
        renderCell: (params) => (
            <ul className="flex">
              {params.value.map((detalleCompra, index) => (
                <li key={index}>idProducto: {detalleCompra.idProducto} - Cantidad: {detalleCompra.cantidad}</li>
                
              ))}
            </ul>
          ),
          type: 'string',

    },
]


const Ventas = () => {

    const estilos = obtenerEstilos();

    //variable que almacenar[a el listado de productos]
    const [ventas, setVentas] = useState([]);
    const [estadoListado, setEstadoListado] = useState(true);



    const [ventaEditado, setVentaEditado] = useState({});

    const [estadoModal, setEstadoModal] = useState(false);
    const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

    async function obtenerVentas() {
        const ventasT = await listarVentas();
        setVentas(ventasT);
        setEstadoListado(false);
    }

    var ventaSeleccionado;

    if (estadoListado) {
        obtenerVentas();
    }

    const cerrarModal = () => {
        setEstadoModal(false);
    }

    const agregar = () => {
        const ventaE = new Venta(-1, "", "", "", "", "", "");
        setVentaEditado(ventaE);
        setEstadoModal(true);
    }

    const modificar = () => {
        if (ventaSeleccionado) {
            const ventaE = ventaSeleccionado;
            setVentaEditado(ventaE);
            setEstadoModal(true);
        }
        else {
            window.alert("Por favor seleccione la venta a editar");
        }
    }

    const eliminar = () => {
        if (ventaSeleccionado) {
            setVentaEditado(ventaSeleccionado);
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
        fetch(`http://localhost:3020/ventas/${ventaEditado.id}`,
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
                <h1>Lista de Ventas</h1>
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
                    rows={ventas}
                    columns={columnas}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    rowHeight={60}


                    onSelectionModelChange={(idVentas) => {
                        const ventasSeleccionados = ventas.filter(
                            function (fila) {
                                return fila.id === idVentas[0];
                            }
                        );
                        ventaSeleccionado = ventasSeleccionados[0];
                    }
                    }
                />

                <ModalEditar open={estadoModal} cerrar={cerrarModal} venta={ventaEditado} />
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

export default Ventas;