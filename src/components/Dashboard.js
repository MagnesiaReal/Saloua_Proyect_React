import react from 'react'
import { withRouter } from 'react-router-dom'
import Proptypes from 'prop-types'

import HeaderLog from './HeaderLog'
import Footer from './Footer'

class Dashboard extends react.Component {
    constructor(props) {
        super(props);
        console.log("desde Dashboard : ", props);
    }


    render() {
        return (
            <div id="content">
                <div className='container'>
                    <HeaderLog outSession={this.props.outSession} />\
                    <div style={{height : "80vh"}}>
                        <h1>Hola Soy el Inicio de usuario :) en este lugar ira informacion o un minitutorial de como el usuario puede emepezar atrabajar</h1>
                        <h2>Ejemplo: BIENVENIDO A SALOUA PRECIONA LA OCION DE CLASES Y POSTERIORMENTE SELECCIONA UNIRTE A UNA CLASE PARA EMPEZAR A TRABAJAR RECUERDA.... CHORO MAREADOR</h2>
                        
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }

}

Dashboard.propTypes = {
    outSession: Proptypes.func.isRequired
};

export default withRouter(Dashboard);

