import react from 'react'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import {withRouter} from 'react-router-dom'

import SidebarLog from './SidebarLog';

import API from '../http-axios'

class HeaderLog extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            nombre : ''
        }
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(){ 
        this.props.outSession();
        console.log("saliendo de sesion"); 
        this.props.history.push("/");
    }


    render() {
        return(
        <header className = "header-saloua d-flex justify-content-between">
            <SidebarLog className = ""/>
            <div>
                <Link to="/">
                    <button className = "btn btn-saloua"><i className="fas fa-book"></i> Libros</button>
                </Link>
                
                <button className = "btn btn-saloua dropdown-toggle m-2" id="dropdownop" data-toggle="dropdown" ><i className="fas fa-user"></i></button>
                <div className = "dropdown-menu" aria-labelledby="dropdownop">
                    <b style={{padding : ".25rem 1.5rem"}}>Magne</b>
                    <div className = "dropdown-divider"></div>
                    <button className="dropdown-item" onClick={this.onLogout}>Cerrar sesión</button>
                    <Link className="dropdown-item" to="/">Configuracion</Link>
                </div>

            </div>
            
        </header>
        );
    }
}

HeaderLog.propTypes = {
    outSession : Proptypes.func.isRequired
};

export default withRouter(HeaderLog);