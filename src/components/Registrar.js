import React, { Component } from 'react';

import logoSaloua from '../images/logo-saloua.svg';

import {Link, Redirect} from 'react-router-dom';

import API from '../http-axios'


class Registrar extends Component{
    constructor(props){
        super(props)

        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeApellido = this.onChangeApellido.bind(this);
        this.onChangeFecha = this.onChangeFecha.bind(this);
        this.onChangeOcupacion = this.onChangeOcupacion.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfPass = this.onChangeConfPass.bind(this);
        // Funcion Submit
        this.onRegistrar = this.onRegistrar.bind(this);

        this.state = {
            nombre : '',
            apellido : '',
            fecha : '' ,
            ocupacion : '1',
            email : '',
            pass : '',
            confpass : '',
            redirect : false
        }
    }
    onChangeNombre(e) {
        this.setState({ nombre: e.target.value })
    }
    onChangeApellido(e) {
        this.setState({apellido : e.target.value})
    }
    onChangeFecha(e) {
        this.setState({fecha : e.target.value})
        
    }
    onChangeOcupacion(e) {
        this.setState({ocupacion : e.target.value})
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value})
    }
    onChangePassword(e){
        this.setState({pass : e.target.value})
    }
    onChangeConfPass(e){
        this.setState({confpass : e.target.value})
    }

    onRegistrar(e){
        e.preventDefault();
        const userDatus = {
            nombre : this.state.nombre,
            apellido : this.state.apellido,
            fecha : this.state.fecha,
            ocupacion : this.state.ocupacion,
            email : this.state.email,
            pass : this.state.pass
        }
        if(this.state.pass !== this.state.confpass){
            alert("La contraseña no coincide, intenta de nuevo");
        }else{
            API.post('/node/users/new', userDatus)
            .then(respuesta => {
                console.log(respuesta.data);
            }).catch(error => {
                console.log(error);
            });
            this.setState({ nombre : '', apellido : '', fecha : '' ,
            ocupacion : '1', email : '', pass : '' , redirect : true});
        }
    }

    

    render() {
        // API.get('/node/users/list').then(res => {
        //     console.log(res.data.data);
        //     });
        if(this.state.redirect){
            return <Redirect push to="/inicio"/>;
        }

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
                        <form onSubmit={this.onRegistrar}> 
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label className="" >
                                        Nombre:   
                                    </label>
                                    <input type="text" value={this.state.nombre} onChange={this.onChangeNombre} className="form-control" name="new_user_name" placeholder="Jhon" required/>
    
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label className="" >
                                        Apellido:
                                    </label>
                                    <input type="text" value={this.state.apellido} onChange={this.onChangeApellido} className="form-control" name="new_user_lastname" placeholder="Cena" required>
                                    </input>
    
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label >Fecha de nacimiento:</label>
                                    <input type="date" value={this.state.fecha} onChange={this.onChangeFecha} className="form-control" name="new_user_date">
                                    </input> 
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label >Ocupacion:</label>
                                    <select name="new_user_oc" value={this.state.ocupacion} onChange={this.onChangeOcupacion} className="form-control">
                                        <option value="1">Estudiante</option>
                                        <option value="2">Profesor</option>
                                        <option value="3" disabled>Admin 😎(disabled)</option>
                                        <option value="5" disabled>Agente del FBI</option>
                                    </select>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label className="" >
                                        Correo Electronico:
                                    </label>
                                    <input type="text" value={this.state.email} onChange={this.onChangeEmail} className="form-control" name="new_user_email" placeholder="correo123@nasa.com" required>
                                    </input>
    
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label className="" >
                                        Password:
                                    </label>
                                    <input type="password" value={this.state.pass} onChange={this.onChangePassword} className="form-control" name="new_user_pass" required>
                                    </input>
    
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label className="" >
                                        Confirmar Password:
                                    </label>
                                    <input type="password" value={this.state.confpass} onChange={this.onChangeConfPass} className="form-control" name="new_user_passverify" required>
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

}

export default Registrar;