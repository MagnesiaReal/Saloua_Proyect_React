import React from 'react';

import logoSaloua from './logo-saloua.svg';

import {Link} from 'react-router-dom';

function Registrar() {

    return (
        <div className="registrar-saloua">
            <div id="propiedades-saloua" className="container">
                <div className="col" align="center">
                    <img src={logoSaloua} className="logo-Saloua" alt="err-logo" width="%100" height="80px" />
                    <span className="d-inline-block align-middle">
                        <h1 className="">SALOUA</h1>
                    </span>

                </div>
                
                <div className="dropdown-divider"></div>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" >
                                    Nombre:   
                                </label>
                                <input type="text" id="Input_name" className="form-control" name="new_user_name" placeholder="Jhon" required>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" >
                                    Apellido:
                                </label>
                                <input type="text" id="Input_lastname" className="form-control" name="new_user_lastname" placeholder="Cena" required>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label >Fecha de nacimiento:</label>
                                <input type="date" className="form-control" id="Input_startdate" name="new_user_date">
                                </input> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label >Ocupacion:</label>
                                <select name="new_user_oc" id="Input_oc" className="form-control">
                                    <option value="1">Estudiante</option>
                                    <option value="2">Agente del FBI</option>
                                    <option value="3" disabled>Admin 😎(disabled)</option>
                                </select>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" >
                                    Correo Electronico:
                                </label>
                                <input type="text" id="Input_email" className="form-control" name="new_user_email" placeholder="correo123@nasa.com" required>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" >
                                    Password:
                                </label>
                                <input type="password" id="Input_pass" className="form-control" name="new_user_pass" required>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" >
                                    Confirmar Password:
                                </label>
                                <input type="password" id="Input_passverify" className="form-control" name="new_user_passverify" required>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            
                        </div>
                        <div className="d-flex justify-content-center">
                                <input className="btn btn-saloua" type="submit" value="Registrar" style={{margin : "10px"}}></input>
                        </div>
                        <script src="conectdata.js"></script>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Registrar;