import { obtenerEstilosModal } from '../../service/Listas';
import { Button, Hidden, TextField } from "@material-ui/core";
import React, { useState } from 'react';


const Formulario = ({ cerrarFormulario, productoEditado }) => {

    const estilos = obtenerEstilosModal();

    const [id, setId] = useState(productoEditado.id);
    const [urlImagen, setUrlImagen] = useState(productoEditado.urlImagen);
    const [nombre, setNombre] = useState(productoEditado.nombre);
    const [descripcion, setDescripcion] = useState(productoEditado.descripcion);
    const [caracteristicas, setCaracteristicas] = useState(productoEditado.caracteristicas);
    const [precio, setPrecio] = useState(productoEditado.precio);

    const guardar = async (e) => {
        let url = "";
        if (productoEditado.id >= 0 ){
            url = "http://localhost:3020/productos/modificar";
        }else{
            url ="http://localhost:3020/productos/agregar";
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
                    urlImagen: urlImagen,
                    nombre: nombre,
                    descripcion: descripcion,
                    caracteristicas: caracteristicas,
                    precio: precio,
                }
                )
            }
        ).then((res) => res.json())
        .then((json) => {
            window.alert(`El producto [${json.nombre}] fue ${productoEditado.id >= 0 ? "modificado": "agregado"}`);
            cerrarFormulario();
        })
        .catch((error) => {
            window.alert(`Error actualizando productos: ${error}`);
        })
    }

    return (
        <form className={estilos.root} onSubmit={guardar}>
            <TextField
                label="ID del producto"
                variant="filled"
                required
                value={id}
                onChange={(e) => { setId(e.target.value) }}
            />
            <TextField
                label="Imagen del producto"
                variant="filled"
                required
                value={urlImagen}
                onChange={(e) => { setUrlImagen(e.target.value) }}
            />
             <img src= {urlImagen}
            width="250px"
            overflow= "Hidden"
            />  
            <TextField
                label="Producto"
                variant="filled"
                required
                value={nombre}
                onChange={(e) => { setNombre(e.target.value) }}
            />
            <TextField
                label="Descripcion"
                multiline
                variant="filled"
                required
                value={descripcion}
                onChange={(e) => { setDescripcion(e.target.value) }}
            />
            <TextField
                label="Caracteristicas"
                multiline
                variant="filled"
                required
                value={caracteristicas}
                onChange={(e) => { setCaracteristicas(e.target.value) }}
            />
            <TextField
                label="Precio"
                variant="filled"
                required
                value={precio}
                onChange={(e) => { setPrecio(e.target.value) }}
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