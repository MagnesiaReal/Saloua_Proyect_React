import react from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'

function Actividades(props){

    return(
        <div id='content'>
            <div className="container">
                <HeaderLog outSession={props.outSession}/>
                <div style={{height : "80vh"}}>
                    <div className = "container">
                        <button className = "btn btn-saloua"><i className="fas fa-door-open"></i> Crear ACTIVIDAD (solo profes)</button>
                    </div>
                    Contenido de las clases que obtendre de las bases de datos, responsables, ETHAN Y TONY GARRIDO
                </div>
                <Footer/>
            </div>
        </div>
    );

}

export default Actividades;