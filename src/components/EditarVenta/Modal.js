import Formulario from "./Formulario";
import Dialog from '@material-ui/core/Dialog';

const ModalEditar = ({ open, cerrar, venta }) => {

    return (
        <Dialog open={open} onClose={cerrar}>
            <Formulario cerrarFormulario={cerrar} ventaEditado={venta}/>
        </Dialog>

    )
}

export default ModalEditar;