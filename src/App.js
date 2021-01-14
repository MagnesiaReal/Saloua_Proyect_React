// CSS
import "./css/stylesidebar_tony.css";
import './css/App.css';
import './css/Reg.css';
import './css/mainContent.css';

//import from react
import { //Librerias para la navegacion entre diferentes paginas
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// Componentes
import Footer from './components/Footer'; //Pie de pagina
import Header from './components/Header';
import BodyInit from './components/BodyInit';
import Registrar from './components/Registrar';
import Login from './components/Login';
import Ayuda from './components/Ayuda';


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
            <div id="content">
              <div className="container">
                <Registrar/>
              </div>
            </div>
          </Route>
          <Route exact path='/acerca'> 
            <div id="content">
              <div className="container">
                <Header />
                <BodyInit />

                <Footer />
              </div>
            </div> 
          </Route>
          <Route exact path='/ayuda'>
            <div id="content">
              <div className="container">
                <Header />
                <Ayuda/>
                <Footer />
              </div>
            </div>
          </Route>
          <Route exact path='/login'>
            <div id="content">
              <div className="container">
                <Login/>
              </div>
            </div>

          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
