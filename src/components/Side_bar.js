import React, { useState } from 'react'
import {
    Link
  } from 'react-router-dom';


//Logo import
import logoSaloua from './logo-saloua.svg'
//Bootstrap
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Side_bar(props){
    const [Estado, setEstado] = useState(false);

    if(Estado){
        var togglesidebar = 'active';
        console.log("lo que sea alv");
    }

    

    return(
        <>
            <nav id = "sidebar" className = {togglesidebar}>
                <div id = "dismiss" className = "d-lg-none" onClick = {() => setEstado(false)}>
                    <i className = "fas fa-arrow-left"></i>
                </div>
                <div className="sidebar-header">
                    <img src = {logoSaloua} className = "logo-Saloua d-inline-block" alt = "err-logo" width = "%100" height = "80px"/><h1 className = "d-inline-block align-middle">SALOUA</h1>
                </div>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/inicio"><i className="fas fa-home"></i> Inicio</Link>
                    </li>
                    <li>
                        <Link to="/acerca"><i className="fas fa-users"></i> Quienes somos</Link>
                    </li>
                    <li>
                        <Link to="/ayuda"><i className="fas fa-question-circle"></i> Ayuda alv</Link>
                    </li>
                    
                    <NavDropdown.Divider/>
                    <li>
                        <a href="https://libros.conaliteg.gob.mx/index.html"><i className="fas fa-book-open"></i> CONALITEG</a>
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