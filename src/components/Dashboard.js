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
                        <h1>Bienvenido al Inicio de Saloua</h1>
                        <h2>Para iniciar porfavor ve al menu lateral para crear o acceder a una nueva clase :)</h2>
                        
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

