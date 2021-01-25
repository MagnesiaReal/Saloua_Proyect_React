import react, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import API from '../http-axios'
import HeaderLog from './HeaderLog'
import Footer from './Footer'

function Editar(props) {
    const [cambio, setCambio] = useState(null);
    const [alumnosCal, setalumnosCal] = useState();
    const [resp0, setResp0] = useState('');
    const [resp1, setResp1] = useState('');
    const [resp2, setResp2] = useState('');
    const [resp3, setResp3] = useState('');
    const [resp4, setResp4] = useState('');
    const [resp5, setResp5] = useState('');
    const [resp6, setResp6] = useState('');
    const [resp7, setResp7] = useState('');
    const [resp8, setResp8] = useState('');
    const [resp9, setResp9] = useState('');
    const [presg0, setPresg0] = useState('');
    const [presg1, setPresg1] = useState('');
    const [presg2, setPresg2] = useState('');
    const [presg3, setPresg3] = useState('');
    const [presg4, setPresg4] = useState('');
    const [presg5, setPresg5] = useState('');
    const [presg6, setPresg6] = useState('');
    const [presg7, setPresg7] = useState('');
    const [presg8, setPresg8] = useState('');
    const [presg9, setPresg9] = useState('');
    const userType = JSON.parse(sessionStorage.getItem('usersession'));
    var datosact = null;
    // componentdidupdate, componentwillunmount, componentdidunmount
    useEffect(() => {
        const credenciales = {
            id_actividad: props.match.params.actId,
            id_profesor: userType.id
        }
        // Con esta peticion obtenemos la calificacion de los alumnos pero tambien viene incluido el nombre, type y archivo de la actividad
        // y lo que nos interesa es el archivo de la actividad
        console.log("La id de actividad es", props.match.params.actId)
        API.post('/node/users/calificaciones_alumnos', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
                setalumnosCal(respuesta.data.data);
                if (respuesta.data.data[1][0].archivo !== undefined && respuesta.data.data[1][0].archivo !== null) {
                    datosact = JSON.parse(respuesta.data.data[1][0].archivo);
                    // preguntas
                    setPresg0(datosact.questions[0]);
                    setPresg1(datosact.questions[1]);
                    setPresg2(datosact.questions[2]);
                    setPresg3(datosact.questions[3]);
                    setPresg4(datosact.questions[4]);
                    setPresg5(datosact.questions[5]);
                    setPresg6(datosact.questions[6]);
                    setPresg7(datosact.questions[7]);
                    setPresg8(datosact.questions[8]);
                    setPresg9(datosact.questions[9]);
                    // respu
                    setResp0(datosact.answers[0]);
                    setResp1(datosact.answers[1]);
                    setResp2(datosact.answers[2]);
                    setResp3(datosact.answers[3]);
                    setResp4(datosact.answers[4]);
                    setResp5(datosact.answers[5]);
                    setResp6(datosact.answers[6]);
                    setResp7(datosact.answers[7]);
                    setResp8(datosact.answers[8]);
                    setResp9(datosact.answers[9]);
                    console.log('archivo leido con exito');
                } else {
                    console.log('archivo nulo');
                }
            }).catch((error) => {
                console.log(error);
            })

    }, []);
    // Preguntas
    function onChangePreg0(e) {
        setPresg0(e.target.value);
    }
    function onChangePreg1(e) {
        setPresg1(e.target.value);
    }
    function onChangePreg2(e) {
        setPresg2(e.target.value);
    }
    function onChangePreg3(e) {
        setPresg3(e.target.value);
    }
    function onChangePreg4(e) {
        setPresg4(e.target.value);
    }
    function onChangePreg5(e) {
        setPresg5(e.target.value);
    }
    function onChangePreg6(e) {
        setPresg6(e.target.value);
    }
    function onChangePreg7(e) {
        setPresg7(e.target.value);
    }
    function onChangePreg8(e) {
        setPresg8(e.target.value);
    }
    function onChangePreg9(e) {
        setPresg9(e.target.value);
    }
    // Respuestas
    function onChangeResp0(e) {
        setResp0(e.target.value);
    }
    function onChangeResp1(e) {
        setResp1(e.target.value);
    }
    function onChangeResp2(e) {
        setResp2(e.target.value);
    }
    function onChangeResp3(e) {
        setResp3(e.target.value);
    }
    function onChangeResp4(e) {
        setResp4(e.target.value);
    }
    function onChangeResp5(e) {
        setResp5(e.target.value);
    }
    function onChangeResp6(e) {
        setResp6(e.target.value);
    }
    function onChangeResp7(e) {
        setResp7(e.target.value);
    }
    function onChangeResp8(e) {
        setResp8(e.target.value);
    }
    function onChangeResp9(e) {
        setResp9(e.target.value);
    }

    function onGuardar(e){
        e.preventDefault();
        console.log("Se Submit Guardar");
        // Se guarda el archivo en formato JSON STRINGIFTY
        const archivojson = {
            answers : [resp0, resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8, resp9],
            questions : [presg0, presg1, presg2, presg3, presg4, presg5, presg6, presg7, presg8, presg9]
        }
        const credencialsave = {
            archivo : JSON.stringify(archivojson),
            id_actividad: props.match.params.actId,
            id_profesor: userType.id
        }
        API.post('/node/users/guardar_editactividad', credencialsave)
            .then(respuesta => {
                console.log("Archivo guardado con exito", respuesta.data);
                setCambio("Cambios Guardados");

            }).catch(error=>{
                console.log(error);
            })
    }

    return (
        <div id='content'>
            <div className="container">
                <HeaderLog outSession={props.outSession} />
                <div style={{ minHeight: "80vh" }}>
                    <div className="container clase-header my-1" align="center">
                        <h2>{alumnosCal !== undefined ? alumnosCal[1][0].nombre_act : null}</h2>
                        <h4 className="p-1">{alumnosCal !== undefined ? alumnosCal[1][0].type : null}</h4>
                    </div>
                    <div id='s1' className="actividad-svg container my-2" align="center">
                        <h2>EDICION DE ACTIVIDAD</h2>

                    </div>
                    <div id='s1' className="actividad-svg container my-2">
                        <form onSubmit={(e)=>onGuardar(e)}>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 1</label>
                                    <input type="text" className="form-control" value={presg0} onChange={(e) => onChangePreg0(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 1</label>
                                    <input type="text" className="form-control" value={resp0} onChange={(e) => onChangeResp0(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 2</label>
                                    <input type="text" className="form-control" value={presg1} onChange={(e) => onChangePreg1(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 2</label>
                                    <input type="text" className="form-control" value={resp1} onChange={(e) => onChangeResp1(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 3</label>
                                    <input type="text" className="form-control" value={presg2} onChange={(e) => onChangePreg2(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 3</label>
                                    <input type="text" className="form-control" value={resp2} onChange={(e) => onChangeResp2(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 4</label>
                                    <input type="text" className="form-control" value={presg3} onChange={(e) => onChangePreg3(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 4</label>
                                    <input type="text" className="form-control" value={resp3} onChange={(e) => onChangeResp3(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 5</label>
                                    <input type="text" className="form-control" value={presg4} onChange={(e) => onChangePreg4(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 5</label>
                                    <input type="text" className="form-control" value={resp4} onChange={(e) => onChangeResp4(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 6</label>
                                    <input type="text" className="form-control" value={presg5} onChange={(e) => onChangePreg5(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 6</label>
                                    <input type="text" className="form-control" value={resp5} onChange={(e) => onChangeResp5(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 7</label>
                                    <input type="text" className="form-control" value={presg6} onChange={(e) => onChangePreg6(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 7</label>
                                    <input type="text" className="form-control" value={resp6} onChange={(e) => onChangeResp6(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 8</label>
                                    <input type="text" className="form-control" value={presg7} onChange={(e) => onChangePreg7(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 8</label>
                                    <input type="text" className="form-control" value={resp7} onChange={(e) => onChangeResp7(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 9</label>
                                    <input type="text" className="form-control" value={presg8} onChange={(e) => onChangePreg8(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 9</label>
                                    <input type="text" className="form-control" value={resp8} onChange={(e) => onChangeResp8(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Pregunta 10</label>
                                    <input type="text" className="form-control" value={presg9} onChange={(e) => onChangePreg9(e)} required></input>
                                </div>
                                <div className="col-6">
                                    <label>Respuesta 10</label>
                                    <input type="text" className="form-control" value={resp9} onChange={(e) => onChangeResp9(e)} required></input>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-12" align="center">
                                    <input type="submit" className="btn btn-saloua my-2" value="Guardar"></input>
                                </div>
                                <div className="col-12" align="center">
                                    <h4>{cambio}</h4>
                                </div>                       
                            </div>
                        </form>
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    );


}

export default withRouter(Editar);