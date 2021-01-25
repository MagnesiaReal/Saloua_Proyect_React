import react, { useState, useEffect } from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'
import API from '../http-axios'
import { withRouter, Link } from 'react-router-dom'

function Clase(props) {
    const [cambio, setCambio] = useState(false);
    const [listAct, setlistAct] = useState();
    const [claseDatos, setclaseDatos] = useState();
    const [actSueltas, setactSueltas] = useState();
    const userType = JSON.parse(sessionStorage.getItem('usersession'));
    const [newActividad, setnewActividad] = useState({ nombre: '', type: 'cuestionario' });
    let lista_actividades = null,
        lista_actividades_a = null,
        lista_actsueltas = null;
    // componentdidupdate, componentwillunmount, componentdidunmount
    useEffect(() => {
        let credencial = {
            id: props.match.params.classId,
            ocupacion: userType.ocupacion,
            id_user: userType.id
        };
        API.post('/node/users/listar_actividades_de_clase', credencial)
            .then((respuesta) => {
                console.log("Respuesta a clase y actividad", respuesta.data.data);
                setlistAct(respuesta.data.data);
            }).catch((error) => {
                console.log(error);
            })
        API.post('/node/users/clasedatos', { id: props.match.params.classId })
            .then((respuesta) => {
                console.log("Respuesta datos de clase: ", respuesta.data.data[0]);
                setclaseDatos(respuesta.data.data[0]);
            }).catch((error) => {
                console.log(error);
            })
        API.post('/node/users/actsueltas', { id: props.match.params.classId, id_profesor: userType.id })
            .then((respuesta) => {
                console.log("Respuesta actividades sueltas: ", respuesta.data.data);
                setactSueltas(respuesta.data.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [cambio]);
    //Funcion Borrar actividad
    function onDeleteAct(e) {
        const idact = {
            id: e.target.getAttribute("id_act"),
            id_clase: props.match.params.classId
        };
        console.log('ID de la actividad que se borrara :', idact);
        if (window.confirm("Estas seguro que deseas borrar esta Actividad de esta Clase?")) {
            API.post('/node/users/deleteactividad_fromclase', idact)
                .then(respuesta => {
                    console.log(respuesta.data);
                    if (cambio) setCambio(false);
                    else setCambio(true);
                }).catch(error => {
                    console.log(error);
                });
        } else {
            alert("Actividad salvada con exito :)");
        }
    }
    // Aciendo solicitud HTTP para guardar la nueva actividad
    function onCreateAct() {
        console.log("Creando Nueva Clase con id = ", userType.id);
        const credenciales = {
            id_clase: props.match.params.classId,
            id_user: userType.id,
            nombre: newActividad.nombre,
            type: newActividad.type,
        }
        console.log(credenciales);
        API.post('/node/users/newactividad', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
                // Solo existe para actualizar el useEffect
                setnewActividad({ nombre: '', type: 'memorama' });
                if (cambio) setCambio(false);
                else setCambio(true);
            }).catch(error => {
                console.log(error);
            });

    }

    function onaddActividad(e) {
        e.preventDefault();
        var credenciales = {
            id_actividad: e.target.getAttribute("id_actividad"),
            id_clase: props.match.params.classId
        }
        API.post('/node/users/addactividad', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
                // Solo existe para actualizar el useEffect
                if (cambio) setCambio(false);
                else setCambio(true);
            }).catch(error => {
                console.log(error);
            });
    }

    function onChangeNombreActividad(e) {
        setnewActividad(valores => ({ ...valores, nombre: e.target.value }));
    }

    function onChangeType(e) {
        setnewActividad(valores => ({ ...valores, type: e.target.value }));
    }

    if (userType.ocupacion === 0) {
        if (listAct !== undefined && listAct.length !== 0) {
            lista_actividades_a = listAct.map((actividad, key) =>
                <div className="row list-saloua mt-1" key={key}>
                    <div className="col-2 list-saloua-id" align="center"><h2><i className="fas fa-gamepad"></i></h2>
                    </div>
                    <span>
                        <div className="v-divider-saloua"></div>
                    </span>
                    <Link to={"/dashboard/actividades/" + actividad.id} className="col d-flex justify-content-center flex-column">
                        <h3>{actividad.nombre_act}</h3>
                        <h5>{actividad.type}</h5>
                    </Link>
                    <span>
                        <div className="v-divider-saloua"></div>
                    </span>
                    <div className="col-2 d-flex justify-content-center flex-column list-saloua-calif" align="center">
                        <h2>{actividad.calificacion}</h2>
                    </div>
                </div>
            );
            console.log("si liste we, fecilitame :'v");
        } else {
            lista_actividades_a = <div className="container list-saliua">
                <div className="row list-saloua" align="center">
                    {userType.ocupacion === 0 ? <h3 className="col">No tienes ninguna actividad</h3> : <h3 className="col">Aun no has creado actividades</h3>}
                </div>
            </div>
        }
        return (
            <div id='content'>
                <div className="container">
                    <HeaderLog outSession={props.outSession} />
                    <div style={{ minHeight: "80vh" }}>
                        <div className="container clase-header my-1" align="center">
                            <h1>{claseDatos ? claseDatos.nombre_clase : null}</h1>
                            <h5 className="p-2">Profesor: {claseDatos ? claseDatos.nombre + ' ' + claseDatos.apellido : null}</h5>
                        </div>
                        <div className="container">
                            <div className="row list-saloua">
                                <div className="col-2"></div>
                                <div className="col-8">Nombre de clase</div>
                                <div className="col-2">Calif.</div>
                            </div>
                            {lista_actividades_a}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );

    } else { // return de profesor
        if (listAct !== undefined && listAct.length !== 0) {
            lista_actividades = listAct.map((actividad, key) =>
                <div className="row list-saloua mt-1" key={key}>
                    <div className="col-2 list-saloua-id" align="center"><h2><i className="fas fa-gamepad"></i></h2>
                    </div>
                    <span>
                        <div className="v-divider-saloua"></div>
                    </span>
                    <Link to={"/dashboard/actividades/" + actividad.id} className="col d-flex justify-content-center flex-column">
                        <h3>{actividad.nombre_act}</h3>
                        <h5>{actividad.type}</h5>
                    </Link>
                    <span>
                        <div className="v-divider-saloua"></div>
                    </span>
                    <div className="col-1 delete-class" align="center" onClick={onDeleteAct} id_act={actividad.id} style={{ fontSize: "30px" }}>&times;</div>
                </div>
            );
            console.log("si liste we, fecilitame :'v");
        } else {
            lista_actividades = <div className="container list-saliua">
                <div className="row list-saloua" align="center">
                    {userType.ocupacion === 0 ? <h3 className="col">No tienes ninguna actividad</h3> : <h3 className="col">Aun no has creado actividades</h3>}
                </div>
            </div>
        }

        if (actSueltas !== undefined && actSueltas.length !== 0) {
            lista_actsueltas = actSueltas.map((actividad, key) =>
                <div align="center" key={key}>
                    <button className="btn btn-primary" id_actividad={actividad.id} onClick={(e) => onaddActividad(e)}>
                        &#9820; {actividad.nombre_act}
                    </button>
                    <br />
                    {actividad.type}
                    <hr />
                </div>

            )
        }
        return (
            <div id='content'>
                <div className="container">
                    <HeaderLog outSession={props.outSession} />
                    <div style={{ minHeight: "80vh" }}>
                        <div className="container clase-header my-1" align="center">
                            <h1>{claseDatos ? claseDatos.nombre_clase : null}</h1>
                            <h5 className="p-2">{claseDatos ? claseDatos.nombre + ' ' + claseDatos.apellido : null}</h5>
                        </div>
                        <div className="container">
                            <button className="btn btn-saloua" data-toggle="modal" data-target="#modalactnueva"><i className="fas fa-chess-rook"></i> Nueva Actividad </button>
                        </div>
                        <div className="container">
                            {lista_actividades}
                        </div>
                    </div>
                    <Footer />
                </div>
                <div className="modal fade" id="modalactnueva" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Nueva Clase</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label className="col-form-label">Nombre de la Actitivdad</label>
                                        <input type="text" className="form-control" id="recipient-name" value={newActividad.nombre} onChange={(e) => onChangeNombreActividad(e)} required />
                                        <br />
                                        <label className="col-form-label">Tipo de actividad</label>
                                        <select className="form-control" value={newActividad.type} onChange={(e) => onChangeType(e)}>
                                            <option value="cuestionario">cuestionario</option>
                                            <option value="memorama" disabled>memorama</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => onCreateAct()}>Crear</button>
                                </div>
                                <hr />
                                {lista_actsueltas}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Clase);