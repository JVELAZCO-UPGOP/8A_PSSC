import React from "react";

function Pagina(){

    return(
    <>
    <div className="container">
                    
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
        
        
            <div className="actions-menu">
                <h1>Mascotas <i className="fas fa-cat"></i></h1>
                    <div className="actions-menu-content">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Nueva <i className="fas fa-plus-square"></i></button>
                        <div className="alert alert-danger alert-dismissible" role="alert">
                            <strong>Oops!  <i className="fas fa-bug"></i></strong> Algo hicimos mal, por favor vuelve a intentarlo!.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
            </div>
            <table className="table table-stripped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Dueño</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="lista-mascotas"></tbody>
            </table>
            

            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Nueva Mascota</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form id="form">
                        <input type="hidden" id="indice" >
                        <div className="form-row">
                            <div className="col">
                                <select id="tipo" className="form-control">
                                <option>Tipo animal</option>
                                <option>Perro</option>
                                <option>Gato</option>
                                <option>Pájaro</option>
                                <option>Otro</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Nombre"/>
                            </div>
                                <div className="col">
                                    <select className="form-control" id="dueno">
                                        <option>Dueño</option>
                                        <option>Esteban</option>
                                        <option>Julián</option>
                                        <option>Jhon</option>
                                        <option>Felix</option>
                                        <option>Camilo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" id="btn-guardar">Crear</button>
                
                </div>
            </div>  

        </nav>   
    </div> 
    </>     
    );
} 

export default  Pagina;