import react from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'

function Temas(props){

    return(
        <div id='content'>
            <div className="container">
                <HeaderLog outSession={props.outSession}/>
                <div style={{height : "80vh"}}>
                    <h1>Aqui iran enlistadas los 3 temas de ejemplo para presentar como trabajo</h1>
                    <h2>Ejemplo : tema1 = funciones trigonometricas, tema2 = ecuacion de segundo grado, tema3 = area y volumen</h2>
                </div>
                <Footer/>
            </div>
        </div>
    );

}

export default Temas;