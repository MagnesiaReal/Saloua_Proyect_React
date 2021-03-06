import React from 'react'
import {withRouter} from 'react-router-dom';
import Proptypes from 'prop-types'

import API from '../http-axios'

class Login extends React.Component{
    constructor(props){
        super(props);

        this.onChangeCorreo = this.onChangeCorreo.bind(this);
        this.onChangePass = this.onChangePass.bind(this);

        this.onLogin = this.onLogin.bind(this);

        this.state = {
            email : '',
            pass : '',
            incorrecto : <div></div>,
            logged : false
        }
    }
    onChangeCorreo(e) {
        this.setState({email : e.target.value})
    }
    onChangePass(e){
        this.setState({pass : e.target.value})
    }

    componentWillUnmount (){
        this.props.history.push('/dashboard');
    }
    async onLogin(e){
        e.preventDefault();
        const userVerify = {
            email : this.state.email,
            pass : this.state.pass
        }
        API.post('/node/users/login', userVerify)
            .then(respuesta => {
                // console.log(respuesta.data);
                if(respuesta.data){
                    this.props.setSession(respuesta.data);
                    this.componentWillUnmount();
                }else 
                {
                    this.setState({email : '', pass : '', incorrecto : <div align="center">Correo o Pass incorrecta</div>})
                }
            }).catch(error => {
                console.log(error);
        });
    }
    render(){
        return(
            <div className="registrar-saloua">
                <div id="propiedades-saloua" className="container">
                    <div className="col" align="center">
                        <div className="d-inline-block align-middle">
                            <h2 className="">Iniciar sesión</h2>
                        </div>
    
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="container">
                        <form onSubmit={this.onLogin}>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label className="">
                                        Correo:   
                                    </label>
                                    <input type="text" value={this.state.email} onChange={this.onChangeCorreo} className="form-control" name="new_user_name" placeholder="Jhon" required>
                                    </input>
    
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <label className="">
                                        Contraseña:
                                    </label>
                                    <input type="password" value={this.state.pass} onChange={this.onChangePass} className="form-control" name="new_user_pass" required>
                                    </input>
    
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                    <input className="btn btn-saloua" type="submit" value="Entrar" style={{margin : "10px"}}></input>
                            </div>
                            {this.state.incorrecto /*se despliega mensaje de error*/}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    setSession : Proptypes.func.isRequired
};

export default withRouter(Login);
