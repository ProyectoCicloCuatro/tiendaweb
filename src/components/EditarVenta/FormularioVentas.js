import { obtenerEstilosModal } from '../../service/ListasVentas';
import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react';


const Formulario = ({ cerrarFormulario, ventaEditado }) => {

    const estilos = obtenerEstilosModal();

    const [id, setid] = useState(ventaEditado.id);
    const [fecha, setfecha] = useState(ventaEditado.fecha);
    const [idCliente, setidCliente] = useState(ventaEditado.idCliente);
    const [idVenta, setidVenta] = useState(ventaEditado.idVenta);
    const [valor, setvalor] = useState(ventaEditado.valor);
    const [detalleCompra, setdetalleCompra] = useState(ventaEditado.detalleCompra);

    const guardar = async (e) => {
        let url = "";
        if (ventaEditado.id >= 0 ){
            url = "http://localhost:3020/ventas/modificar";
        }else{
            url ="http://localhost:3020/ventas/agregar";
        }
        fetch(url,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    id: eval(id),
                    fecha: fecha,
                    idCliente: idCliente,
                    idVenta: idVenta,
                    valor: valor,
                    detalleCompra: detalleCompra,
                }
                )
            }
        ).then((res) => res.json())
        .then((json) => {
            window.alert(`La Venta [${json.nombre}] fue ${ventaEditado.id >= 0 ? "modificada": "agregada"}`);
            cerrarFormulario();
        })
        .catch((error) => {
            window.alert(`Error actulizando venta: ${error}`);
        })
    }

    return (
        <form className={estilos.root} onSubmit={guardar}>
            <TextField
                label="ID de la venta"
                variant="filled"
                required
                value={id}
                onChange={(e) => { setid(e.target.value) }}
            />
            <TextField
                label="fecha"
                variant="filled"
                required
                value={fecha}
                onChange={(e) => { setfecha(e.target.value) }}
            />
            <TextField
                label="idCliente"
                variant="filled"
                required
                value={idCliente}
                onChange={(e) => { setidCliente(e.target.value) }}
            />
            <TextField
                label="idVenta"
                multiline
                variant="filled"
                required
                value={idVenta}
                onChange={(e) => { setidVenta(e.target.value) }}
            />
            <TextField
                label="valor"
                multiline
                variant="filled"
                required
                value={valor}
                onChange={(e) => { setvalor(e.target.value) }}
            />
            <TextField
                label="detalleCompra"
                variant="filled"
                required
                value={detalleCompra}
                onChange={(e) => { setdetalleCompra(e.target.value) }}
            />
            <div>
                <Button variant="contained" onClick={cerrarFormulario}>
                    Cancelar
                </Button>
                <Button variant="contained" type="submit" color="Primary">
                    Aceptar
                </Button>
            </div>
        </form>
    )

}


export default Formulario;