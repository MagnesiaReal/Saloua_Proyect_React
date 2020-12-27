// CSS
import "./css/stylesidebar_tony.css";
import './css/App.css';
import './css/Reg.css';

//import from react
import { //Librerias para la navegacion entre diferentes paginas
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

// Componentes
import Footer from './components/Footer'; //Pie de pagina
import Header from './components/Header';
import BodyInit from './components/BodyInit';
import Registrar from './components/Registrar';

//Bootstrap
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Router>{/*Aqui adentro van todos los componentes y las paginas que se vayan generando*/}
        <Switch>
          <Route exact path="/"> {/*Redirije a la pagina de inicio por default*/}
            <Redirect to="/inicio"/>
          </Route>
          <Route exact path='/inicio'> 
            <div id="content">
              <div className="container">
                <Header />
                <BodyInit />

                <Footer />
              </div>
            </div> 
          </Route>
          <Route exact path='/newuseruwu'>
            <Registrar/>
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
