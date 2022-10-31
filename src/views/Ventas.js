import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import ModalEditar from "../components/EditarVenta/ModalVentas";
import { listarVentas, obtenerEstilos } from "../service/ListasVentas";
import {Venta} from '../modelos/modelosVentas';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';
import Confirmacion from '../components/Confirmacion'

const columnas = [
    { field: "id", headerName: "Id", width: 100 },
    {
        field: "fecha", headerName: "fecha", width: 300,
        renderCell: (params) => <img alt="" className="card-img-top w-50" src={params.value} />, // renderCell will render the component
    },
    { field: "idCliente", headerName: "idCliente", width: 300 },
    { field: "idVenta", headerName: "idVenta", width: 500 },
    { field: "detalleCompra", headerName: "detalleCompra", width: 500 },
    {
        field: "valor", headerName: "valor", width: 200,
        renderCell: (field) => field.value.toLocaleString('USD')
    },
]


const Ventas = () => {
    
    const estilos = obtenerEstilos();

    //variable que almacenar[a el listado de Ventas]
    const [ventas, setVentas] = useState([]);
    const [estadoListado, setEstadoListado] = useState(true);

    

    const [ventaEditado, setVentasEditado] = useState({});

    const [estadoModal, setEstadoModal] = useState(false);
    const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

    async function obtenerVentas() {
        const ventasT = await listarVentas();
        setVentas(ventasT);
        setEstadoListado(false);
    }

    var ventasSeleccionadas;

    if (estadoListado) {
        obtenerVentas();
    }

    const cerrarModal = () => {
        setEstadoModal(false);
    }

    const agregar = () => {
        const VentasE = new Venta(-1, "", "", "", "", "", "");
        setVentasEditado(VentasE);
        setEstadoModal(true);
    }

    const modificar = () => {
        if (ventasSeleccionadas) {
            const VentasE = ventasSeleccionadas;
            setVentasEditado(VentasE);
            setEstadoModal(true);
        }
        else {
            window.alert("Por favor seleccione la venta a editar");
        }
    }

    const eliminar = () => {
        if (ventasSeleccionadas) {
            setVentasEditado(ventasSeleccionadas);
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
        fetch(`http://localhost:3020/Ventas/${ventaEditado.id}`,
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
                    rowHeight={150} 
                      

                    onSelectionModelChange={(idVentas) => {
                        const ventasSeleccionadas = ventas.filter(
                            function (fila) {
                                return fila.id === idVentas[0];
                            }
                        );
                        ventasSeleccionadas = ventasSeleccionadas[0];
                    }
                    }
                />

                <ModalEditar open={estadoModal} cerrar={cerrarModal} ventas={ventaEditado} />
                <Confirmacion open={estadoConfirmacion}
                    titulo="Eliminado Venta"
                    mensaje="Está seguro?"
                    cerrar={cerrarConfirmacion}
                    aceptar={aceptarConfirmacion}
                />
            </div>

        </div>

    );
}

export default Ventas;