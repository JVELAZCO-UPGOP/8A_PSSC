import React from "react";



function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light "style="background-color: #f783ac">
            <a className="navbar-brand" href="#"><i className="fas fa-paw"></i>Huellitas <i className="fas fa-paw"></i> </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/index.html">Inicio <i className="fas fa-home"></i><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/veterinarias.html">Dogtores <i className="fas fa-user-nurse"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/consultas.html">Consultas <i className="fas fa-book"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/duenos.html">Dueños <i className="fas fa-smile"></i></a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>

    );
}

export default Nav;
