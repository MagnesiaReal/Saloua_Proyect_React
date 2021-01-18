import react from 'react'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import SidebarLog from './SidebarLog';

import API from '../http-axios'

class HeaderLog extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            listadelibros : []
        }
        this.onLogout = this.onLogout.bind(this);
        this.fetchLibros = this.fetchLibros.bind(this);
    }

    onLogout() {
        this.props.outSession();
        console.log("saliendo de sesion");
        this.props.history.push("/");
    }

    fetchLibros(){
        console.log("buscando libros");
        API.post('/node/users/books', [])
            .then(respuesta => {
                console.log(respuesta.data);
                this.setState({listadelibros : respuesta.data.libros});
            }).catch(error =>{
                console.log(error);
            })
    }

    render() {

        let bodyLibros = this.state.listadelibros.map((libro, key)=>
            
            <div key={key}>
                <a href={'http://magnesiaestelar.ddns.net/libros/'+libro}><h4><i className="fas fa-file-pdf"></i> {libro}</h4></a>
                <hr/>
            </div>
            
        )



        return (
            <header className="header-saloua d-flex justify-content-between">
                <SidebarLog className="" />
                <div>
                    
                    <button className="btn btn-saloua" onClick={this.fetchLibros} data-toggle="modal" data-target="#modallibro"><i className="fas fa-book"></i> Libros</button>
                    

                    <button className="btn btn-saloua dropdown-toggle m-2" id="dropdownop" data-toggle="dropdown" ><i className="fas fa-user"></i></button>
                    <div className="dropdown-menu" aria-labelledby="dropdownop">
                        <b style={{ padding: ".25rem 1.5rem" }}>Magne</b>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={this.onLogout}>Cerrar sesión</button>
                        <Link className="dropdown-item" to="/">Configuracion</Link>
                    </div>

                </div>
                {/*Aqui va el Modal para la creacion de clase*/}
                <div className="modal fade" id="modallibro" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{color : "black"}}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Libros Disponibles</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {bodyLibros}                
                            </div>
                        </div>
                    </div>
                </div>




            </header>
        );
    }
}

HeaderLog.propTypes = {
    outSession: Proptypes.func.isRequired
};

export default withRouter(HeaderLog);