import react from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'

function Clases(props){

    return(
        <div id='content'>
            <div className="container">
                <HeaderLog outSession={props.outSession}/>
                <div style={{height : "80vh"}}>
                    <div className = "container">
                        <button className = "btn btn-saloua"><i className="fas fa-door-open"></i> Unirte a clase</button>
                    </div>
                    Contenido de las clases que obtendre de las bases de datos, responsable directo TONYGARRIDO
                </div>
                <Footer/>
            </div>
        </div>
    );

}

export default Clases;