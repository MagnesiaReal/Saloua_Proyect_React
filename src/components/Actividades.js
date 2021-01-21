import react,{ useState, useEffect } from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'
import API from '../http-axios'
import { Link } from 'react-router-dom'

function Actividades(props) {
    const [cambio, setCambio] = useState(false);
    const [listActs, setlistActs] = useState();
    const [claseDatos, setclaseDatos] = useState();
    const [actSueltas, setactSueltas] = useState();
    const userType = JSON.parse(sessionStorage.getItem('usersession'));
    const [newActividad, setnewActividad] = useState({ nombre: '', type: 'memorama' });
    let lista_actividades = null,
        lista_actsueltas = null;

    useEffect(() => {
        let credencial = {
            ocupacion: userType.ocupacion,
            id_user: userType.id
        };
        API.post('/node/users/listar_actividades_totales', credencial)
            .then((respuesta) => {
                console.log("Respuesta a clase y actividad", respuesta.data.data);
                setlistActs(respuesta.data.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [cambio]);

    if (listActs !== undefined && listActs.length !== 0) {
        lista_actividades = listActs.map((actividad, key) =>
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
                {userType.ocupacion === 0 ? <h3 className="col">Tu profesor aun no sube clases</h3> : <h3 className="col">Aun no has creado actividades</h3>}
            </div>
        </div>
    }

    function onChangeNombreActividad(e){
        setnewActividad((valores) => ({...valores, nombre : e.target.value}));
    }
    function onChangeType(e){
        setnewActividad(valores => ({ ...valores, type: e.target.value }));
    }
    function onCreateAct(e){
        e.preventDefault();
        console.log("Creando Nueva Clase con id = ", userType.id);
        const credenciales = {
            id_user: userType.id,
            nombre: newActividad.nombre,
            type: newActividad.type,
        }
        console.log(credenciales);
        API.post('/node/users/newactividad_sola', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
                // Solo existe para actualizar el useEffect
                if (cambio) setCambio(false);
                else setCambio(true);
            }).catch(error => {
                console.log(error);
            });
        setnewActividad({ nombre: '', type: 'memorama' });
    }

    function onDeleteAct(e) {
        const idact = {
            id: e.target.getAttribute("id_act")
        };
        console.log('ID de la actividad que se borrara:', idact);
        if (window.confirm("Estas seguro que deseas borrar esta Actividad permamentemente? esto tambien la borrara de las clases donde se encuentra alojada")) {
            API.post('/node/users/deleteactividad_permanente', idact)
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

    const modal_nuevaActividad = <div className="modal fade" id="modalactnueva" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <option value="memorama">memorama</option>
                                <option value="relacion de circulos">relacion de ciruculos</option>
                            </select>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => onCreateAct(e)}>Crear</button>
                    </div>
                    <hr />
                    {lista_actsueltas}
                </form>
            </div>
        </div>
    </div>



    return (
        <div id='content'>
            <div className="container">
                <HeaderLog outSession={props.outSession} />
                <div style={{ minHeight: "80vh" }}>
                    <div className="container clase-header my-1" align="center">
                        <h1>Actividades</h1>
                        <h5 className="p-2">{userType.ocupacion === 1 ? userType.nombre + ' ' + userType.apellido : null}</h5>
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
            {modal_nuevaActividad}
        </div>

    );

}

export default Actividades;