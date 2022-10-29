import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, ListItem, ListItemText, List, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const obtenerEstilos = makeStyles(
    (tema) => ({
        botonMenu: {
            marginRight: tema.spacing(2),
        },
        titulo: {
            flexGrow: 1,
        }

    })
);



const MenuPrincipal = () => {

    const estilos = obtenerEstilos();
    //Manejo del estado del menu
    const [estadoMenu, setEstadoMenu] = useState(false);
    //Rutina que desactivo el despiegue del menu
    const mostrarMenu = (estado) => () => {
        setEstadoMenu(estado);
    }

    const menu = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={mostrarMenu(false)}
        >
            <List>
                {
                    ['Inicio', 'Productos', 'Ventas'].map((texto, indice) => (
                        <ListItem button component="a" href={`/${texto}`}>
                            <img alt={texto} src={require(`../assets/icons/${texto}.png`)} />
                            <ListItemText primary={texto} />
                        </ListItem>))
                }
            </List>
        </Box >)

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    className={estilos.botonMenu}
                    onClick={mostrarMenu(true)}
                    aria_label="Menu Principal"
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={estilos.titulo}>
                    AppTiendaWeb
                </Typography>


            </Toolbar>
            <Drawer
                anchor='left'
                open={estadoMenu}
                onClose={mostrarMenu(false)}
            >
                {menu()}

            </Drawer>
        </AppBar>

        
    )

}

export default MenuPrincipal