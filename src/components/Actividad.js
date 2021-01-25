import react, { useState, useEffect } from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'
import API from '../http-axios'
import { withRouter, Link, Redirect } from 'react-router-dom'
import Jugar from './Jugar'

function Actividad(props) {
    // Lista de Constantes
    const [cambio, setCambio] = useState(false);
    const [alumnosCal, setalumnosCal] = useState();
    const userType = JSON.parse(sessionStorage.getItem('usersession'));
    var lista_calif = null;

    useEffect(() => {
        var credenciales = {
            id_actividad: props.match.params.actId,
            id_profesor: userType.id
        }
        API.post('/node/users/calificaciones_alumnos', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
                setalumnosCal(respuesta.data.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [cambio]);


    if (alumnosCal !== undefined && alumnosCal[0].length !== 0) {
        lista_calif = alumnosCal[0].map((alumno, key) =>
            <div className="row list-saloua mt-1" key={key}>
                <div className="col-2 list-saloua-id" align="center">
                    <h2>{alumno.id_clase}</h2>
                </div>
                <span>
                    <div className="v-divider-saloua"></div>
                </span>
                <div className="col d-flex justify-content-center flex-column">
                    <h4>{alumno.nombre + ' ' + alumno.apellido}</h4>
                </div>
                <span>
                    <div className="v-divider-saloua"></div>
                </span>
                <div className="col-2 d-flex justify-content-center flex-column list-saloua-calif">
                    <h3>{alumno.calificacion}</h3>
                </div>
                <div>

                </div>
            </div>

        )
    }

    if (userType.ocupacion === 0 && alumnosCal !== undefined) { // es un alumno
        //html de alumno donde resolvera la activdad
        return (
            <div id='content'>
                <div className="container">
                    <HeaderLog outSession={props.outSession} />
                    <div style={{ minHeight: "80vh" }}>
                        <div className="container clase-header my-1" align="center">
                            <h2>{alumnosCal !== undefined ? alumnosCal[1][0].nombre_act : null}</h2>
                            <h4 className="p-1">{alumnosCal !== undefined ? alumnosCal[1][0].type : null}</h4>
                        </div>
                        <Jugar actId={props.match.params.actId} archivo={alumnosCal[1][0].archivo}></Jugar>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
    else if (userType.ocupacion === 1) { // es profesor
        return (
            <div id='content'>
                <div className="container">
                    <HeaderLog outSession={props.outSession} />
                    <div style={{ minHeight: "80vh" }}>
                        <div className="container clase-header my-1" align="center">
                            <h2>{alumnosCal !== undefined ? alumnosCal[1][0].nombre_act : null}</h2>
                            <h4 className="p-1">{alumnosCal !== undefined ? alumnosCal[1][0].type : null}</h4>
                        </div>
                        <div className="container">
                            <Link to={"/dashboard/editar/" + props.match.params.actId}> <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-saloua">
                                <i className="fas fa-cogs"></i> Editar Actividad</button></Link>
                        </div>
                        <div className="container">
                            <div className="row list-saloua">
                                <div className="col-2">ID clase</div>
                                <div className="col-8">Nombre de Alumno</div>
                                <div className="col-2">Calif.</div>
                            </div>
                            {lista_calif}
                        </div>
                    </div>
                    <Footer />

                </div>
            </div>
        )
    } else {
        return (<h1>CARGANDO.....</h1>);
    }
}

export default withRouter(Actividad);