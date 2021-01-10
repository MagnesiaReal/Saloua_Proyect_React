import React from 'react'
import logoSaloua from '../images/logo-saloua.svg';

function Login(){

    return(

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
                                <label className="">
                                    Correo:   
                                </label>
                                <input type="text" id="Input_name" className="form-control" name="new_user_name" placeholder="Jhon" required>
                                </input>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <label className="">
                                    Contraseña:
                                </label>
                                <input type="password" id="Input_pass" className="form-control" name="new_user_pass" required>
                                </input>

                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="d-flex justify-content-center">
                                <input className="btn btn-saloua" type="submit" value="Entrar" style={{margin : "10px"}}></input>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>



    );

}


export default Login;