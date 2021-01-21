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
import Acerca from './components/Acerca';
import Clases from './components/Clases';
import Actividades from './components/Actividades';
import Temas from './components/Temas';
import Clase from './components/Clase';
import Actividad from './components/Actividad';


import { Component, useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";



function getSession() {
  const tokenString = sessionStorage.getItem('usersession');
  const userToken = JSON.parse(tokenString);
  return userToken
}

function App(){
  function outSession(){
    sessionStorage.removeItem('usersession');
    setStatelog(undefined);
  }

  function setSession(userSession) {
    sessionStorage.setItem('usersession', JSON.stringify(userSession));
    setStatelog(userSession);
  }
  const [statelog, setStatelog] = useState();
  
  useEffect(()=>{
    const autenticar_session = getSession();
    if(autenticar_session){
      setStatelog(autenticar_session);
    }
  },[]);

  console.log(statelog, "desde app");

  if(!statelog){
    return (
      <div className="App">
        <Router>{/*Aqui adentro van todos los componentes y las paginas que se vayan generando*/}
          <Switch>
            <Route exact path="/"> {/*Redirije a la pagina de inicio por default*/}
              <Redirect to="/inicio"/>
            </Route>
            <Route exact path="/dashboard/*"> {/*Redirije a la pagina de inicio por default*/}
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
                  <Acerca/> 
  
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
                  <Login setSession={setSession}/>
                </div>
              </div>
            </Route>

          </Switch>
  
        </Router>
      </div>
    );
  }else{
    
    return(
      <Router>
        <Switch>
          <Route exact path="/"> {/*Redirije a la pagina de inicio por default*/}
              <Redirect to="/dashboard"/>
          </Route>
          <Route exact path="/newuseruwu"> 
              <Redirect to="/dashboard"/>
          </Route>
          <Route exact path="/inicio"> 
              <Redirect to="/dashboard"/>
          </Route>
          <Route exact path="/login"> 
              <Redirect to="/dashboard"/>
          </Route>
          <Route exact path="/acerca"> 
              <Redirect to="/dashboard"/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard outSession={outSession}/>
          </Route>
          <Route exact path='/dashboard/clases'>
            <Clases outSession={outSession}></Clases>
          </Route>
          <Route exact path='/dashboard/actividades'>
            <Actividades outSession={outSession}></Actividades>
          </Route>
          <Route exact path='/dashboard/temas'>
            <Temas outSession={outSession}></Temas>
          </Route>
          <Route exact path={`/dashboard/clases/:classId`}>
            <Clase outSession={outSession}/>
          </Route>
          <Route exact path={`/dashboard/actividades/:actId`}>
            <Actividad outSession={outSession}/>
          </Route>
        </Switch>
      </Router>
    );
  }

  
}

export default App;
