import { obtenerEstilosModal } from '../../service/Listas';
import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react';


const Formulario = ({ cerrarFormulario, ventaEditado }) => {

    const estilos = obtenerEstilosModal();
    window.alert(ventaEditado.id);
    const [id, setId] = useState(ventaEditado.id);
    const [fecha, setFecha] = useState(ventaEditado.fecha);
    const [idCliente, setIdCliente] = useState(ventaEditado.idCliente);
    const [valor, setValor] = useState(ventaEditado.valor);
    const [confirmado, setConfirmado] = useState(ventaEditado.confirmado);
    const [detalleCompra, setDetalleCompra] = useState(ventaEditado.detalleCompra);

    const guardar = async (e) => {
        let url = "";
        if (ventaEditado.id >= 0) {
            url = "http://localhost:3020/ventas/modificar";
        } else {
            url = "http://localhost:3020/ventas/agregar";
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
                    idCliente: eval(idCliente),
                    valor: parseFloat(valor),
                    confirmado: confirmado,
                    detalleCompra: detalleCompra
                }
                )
            }
        ).then((res) => res.json())
            .then((json) => {
                window.alert(`La venta [${json.id}] fue ${ventaEditado.id >= 0 ? "modificado" : "agregado"}`);
                cerrarFormulario();
            })
            .catch((error) => {
                window.alert(`Error actulizando ventas: ${error}`);
            })
    }

    return (
        <form className={estilos.root} onSubmit={guardar}>
            <TextField
                label="Id de la venta"
                variant="filled"
                required
                value={id}
                onChange={(e) => { setId(e.target.value) }}
            />
            <TextField
                label="Fecha de la Venta"
                variant="filled"
                required
                value={fecha}
                onChange={(e) => { setFecha(e.target.value) }}
            />
            <TextField
                label="Id Cliente"
                variant="filled"
                required
                value={idCliente}
                onChange={(e) => { setIdCliente(e.target.value) }}
            />
            <TextField
                label="Valor Venta"
                multiline
                variant="filled"
                required
                value={valor}
                onChange={(e) => { setValor(e.target.value) }}
            />
            <TextField
                label="Estado"
                multiline
                variant="filled"
                required
                value={confirmado}
                onChange={(e) => { setConfirmado(e.target.value) }}
            />
            <TextField
                label="Detalle de la Venta"
                variant="filled"
                required
                value={detalleCompra}
                onChange={(e) => { setDetalleCompra(e.target.value) }}
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