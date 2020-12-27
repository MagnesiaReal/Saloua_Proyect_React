import React from 'react';

import logoSaloua from './logo-saloua.svg'

function Registrar(){

    return(
        <div className="registrar-saloua">
            <div id="propiedades-saloua" className="container">
                <div className="d-flex justify-content-center">
                    <img src = {logoSaloua} className = "logo-Saloua" alt = "err-logo" width = "%100" height = "80px"/><h1 className = "align-middle">SALOUA</h1>
                </div>  
                <div className="dropdown-divider"></div>
                <div className="row">
                    <form>
                        <label>
                            Nombre:
                            <input type="text" className="form-control" name="new_user_name" placeholder="Juanito Prancracio" requiered>
                            </input>
                        </label>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default Registrar;