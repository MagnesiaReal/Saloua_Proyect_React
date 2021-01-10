import React from 'react'
import {Link} from 'react-router-dom';


import Side_bar from './Side_bar';

function Header(){


    return (
        <header className = "header-saloua d-flex justify-content-between">
            <Side_bar className = ""/>
            {/* <div className = "">
                <img src = {logoSaloua} className = "logo-Saloua d-inline-block" alt = "err-logo" width = "%100" height = "50px"/>
                <h3 className = "d-inline-block align-middle">SALOUA</h3>
            </div> */}
            <div>
                <Link to="/newuseruwu">
                    <button className = "btn btn-saloua-reg">Registrar</button>
                </Link>
                <Link to="/login">
                    <button className = "btn btn-saloua m-2">Iniciar Sesion</button>
                </Link>
            </div>
            
        </header>
    );
}

export default Header;


