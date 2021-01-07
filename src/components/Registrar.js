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
                                <label className="" for="Input_name">
                                    Nombre:   
                                </label>
                                <input type="text" id="Input_name" className="form-control" name="new_user_name" placeholder="Jhon" requiered>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" for="Input_lastname">
                                    Apellido:
                                </label>
                                <input type="text" id="Input_lastname" className="form-control" name="new_user_lastname" placeholder="Cena" requiered>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label for="Input_startdate">Fecha de nacimiento:</label>
                                <input type="date" className="form-control" id="Input_startdate" name="new_user_date">
                                </input> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label for="Input_oc">Ocupacion:</label>
                                <select name="new_user_oc" id="Input_oc" className="form-control">
                                    <option value="1">Estudiante</option>
                                    <option value="2">Agente del FBI</option>
                                    <option value="3" disabled>Admin 😎(disabled)</option>
                                </select>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" for="Input_email">
                                    Correo Electronico:
                                </label>
                                <input type="text" id="Input_email" className="form-control" name="new_user_email" placeholder="correo123@nasa.com" requiered>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" for="Input_pass">
                                    Password:
                                </label>
                                <input type="password" id="Input_pass" className="form-control" name="new_user_pass" requiered>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="" for="Input_passverify">
                                    Confirmar Password:
                                </label>
                                <input type="password" id="Input_passverify" className="form-control" name="new_user_passverify" requiered>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            
                        </div>
                        <div className="d-flex justify-content-center">
                                <input className="btn btn-saloua" type="submit" value="Registrar" style={{margin : "10px"}}></input>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Registrar;