import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCart from '../components/ShoppingCart';



const obtenerEstilos = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '24vh',
        position: 'relative',
        '& video': {
            objectFit: 'cover',
        },
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        paddingBottom: theme.spacing(4),
    },
}));

const Inicio = () => {
    const estilos = obtenerEstilos();

    return (
        <section className={estilos.root}>
            <ShoppingCart />
        </section>
    );
};

export default Inicio;