import react from 'react'
//Logo import
import logoSaloua from '../images/logo-saloua.png'
//Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown'

import {Link, withRouter} from 'react-router-dom'

class SidebarLog extends react.Component {
    constructor(props) {
        super(props);
        this.state = false;
        this.togglestatus = this.togglestatus.bind(this);
        this.state = {toggle : false};

    }
    togglestatus(){
        if(this.state.toggle){
            this.setState({toggle : false});
        }else{
            this.setState({toggle : true});
        }
    }
    render() {
        if(this.state.toggle){
            var togglesidebar = 'active';
        }
        if(this.props.location.pathname === '/dashboard/clases'){
            var classtoggle = {display : "none"};
        }
        if(this.props.location.pathname === '/dashboard/actividades'){
            var activitytoggle = {display : "none"};
        }
        if(this.props.location.pathname === '/dashboard/temas' || true){
            var topictoggle = {display : "none"};
        }
        if(this.props.location.pathname === '/dashboard'){
            var infotoggle = {display : "none"};
        }
        
        return (
            <>
                <nav id="sidebar" className={togglesidebar}>
                    <div id="dismiss" className="d-lg-none" onClick={this.togglestatus}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="sidebar-header">
                        <img src={logoSaloua} className="Saloua d-inline-block" alt="err-logo" width="%100" height="150px" />
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/dashboard/clases" style={classtoggle}><i className="fas fa-chalkboard-teacher"></i><br/> Clases <abbr className="nahua" title="Origen, princicpio de algo (en lengua Náhuatl)">Peuhcayotl</abbr></Link>
                        </li>
                        <li>
                            <Link to="/dashboard/actividades" style={activitytoggle}><i className="fas fa-clipboard-list"></i><br /> Actividades <abbr className="nahua" title="Acerca de algo (en lengua Náhuatl)">Tenahuac</abbr></Link>
                        </li>
                        <li>
                            <Link to="/dashboard/temas" style={topictoggle}><i className="fas fa-calculator"></i><br /> Temas <abbr className="nahua" title="Ayudar (en lengua Náhuatl); paleografía: kimäkïxtia">Maquixtia </abbr></Link>
                        </li>
                        <li>
                            <Link to="/dashboard" style={infotoggle}><i className="fas fa-info"></i><br /> Presentacion <abbr className="nahua" title="Ayudar (en lengua Náhuatl); paleografía: kimäkïxtia">Maquixtia </abbr></Link>
                        </li>

                        <NavDropdown.Divider />
                        <li className="conaliteg">
                            <a href="https://libros.conaliteg.gob.mx/index.html"><i className="fas fa-book-open"></i><br /> CONALITEG</a>
                        </li>
                    </ul>
                </nav>
                <div className={this.props.className}>
                    <button onClick={this.togglestatus} className="d-lg-none sidebar-btn-saloua btn m-2"><i className="fas fa-align-justify"></i></button>
                </div>
            </>

        );
    }


}

export default withRouter(SidebarLog);