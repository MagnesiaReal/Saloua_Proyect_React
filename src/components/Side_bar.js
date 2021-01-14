import React, { useState } from 'react'
import {
    Link
  } from 'react-router-dom';


//Logo import
import logoSaloua from '../images/logo-saloua.png'
//Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown'

function Side_bar(props){
    const [Estado, setEstado] = useState(false);

    if(Estado){
        var togglesidebar = 'active';

    }

    

    return(
        <>
            <nav id = "sidebar" className = {togglesidebar}>
                <div id = "dismiss" className = "d-lg-none" onClick = {() => setEstado(false)}>
                    <i className = "fas fa-arrow-left"></i>
                </div>
                <div className="sidebar-header">
                    <img src = {logoSaloua} className = "Saloua d-inline-block" alt = "err-logo" width = "%100" height = "150px"/>
                </div>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/inicio"><i className="fas fa-home"></i><br /> Inicio <abbr className="nahua" title="Origen, princicpio de algo (en lengua Náhuatl)">Peuhcayotl</abbr></Link>
                    </li>
                    <li>
                        <Link to="/acerca"><i className="fas fa-users"></i><br /> Quienes somos <abbr className="nahua" title="Acerca de algo (en lengua Náhuatl)">Tenahuac</abbr></Link>
                    </li>
                    <li>
                        <Link to="/ayuda"><i className="fas fa-question-circle"></i><br /> Ayuda <abbr className="nahua" title="Ayudar (en lengua Náhuatl); paleografía: kimäkïxtia">Maquixtia </abbr></Link>
                    </li>
                    
                    <NavDropdown.Divider/>
                    <li className="conaliteg">
                        <a href="https://libros.conaliteg.gob.mx/index.html"><i className="fas fa-book-open"></i><br /> CONALITEG</a>
                    </li>
                </ul>
            </nav>
            <div className ={props.className}>
                <button onClick ={() => setEstado(true)} className = "d-lg-none sidebar-btn-saloua btn m-2"><i className="fas fa-align-justify"></i></button>
            </div>
        </>
   
    );
}

export default Side_bar;