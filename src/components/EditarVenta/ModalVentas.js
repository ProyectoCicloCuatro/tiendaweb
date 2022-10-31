import Formulario from "./FormularioVentas";
import Dialog from '@material-ui/core/Dialog';

const ModalEditar = ({ open, cerrar, venta }) => {

    return (
        <Dialog open={open} onClose={cerrar}>
            <Formulario cerrarFormulario={cerrar} ventaEditado={venta}/>
        </Dialog>

    )
}

export default ModalEditar;