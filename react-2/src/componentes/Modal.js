import React from "react";

function Modal(){

    return(
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
                                        <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Nombre" />
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
                </div>
            
        

        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" id="btn-guardar">Crear</button>
        
        </div>
    </div>     

    );
}
 export default Modal;