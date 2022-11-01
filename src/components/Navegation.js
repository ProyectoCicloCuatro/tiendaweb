const Navegation = () => {
    return (  
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="/">Tienda de Ventas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Compras">Compras</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Ventas">Ventas</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Productos">Productos</a></li>
                    </ul>
                    <form className="d-flex">
                    </form>
                </div>
            </div>
        </nav>
    );
}
 
export default Navegation;