import react, { useState, useEffect } from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'
import API from '../http-axios'
import { withRouter, Link } from 'react-router-dom'

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

    if (userType.ocupacion === 0) { // es un alumno
        //html de alumno
        return (
            <div id='content'>
                <div className="container">
                    <HeaderLog outSession={props.outSession} />
                    <div style={{ height: "80vh" }}>
                        <div className="container">
                            <button className="btn btn-saloua"><i className="fas fa-door-open"></i> Unirte a clase</button>

                        </div>
                        Contenido de las clases que obtendre de las bases de datos, responsable directo TONYGARRIDO
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
                            si
                        </div>
                        <div className="container">
                            <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-saloua">
                                <i className="fas fa-cogs"></i> Editar Actividad</button>
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
    }
}

export default withRouter(Actividad);