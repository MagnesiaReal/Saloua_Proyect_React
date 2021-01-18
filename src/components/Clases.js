import react, { useEffect, useState } from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'
import API from '../http-axios'

function Clases(props) {
    function nuevaClase() {
        console.log("Creando Nueva Clase con id = ", userType.id);
        const credenciales = {id : userType.id,
            nombre : nombreClass.valor
        }
        API.post('/node/users/newclass', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
            }).catch(error => {
                console.log(error);
            });
        setCambio(0);
    }

    function onChangeNombre(e){
        console.log(e.target.value);
        setnombreClass({valor : e.target.value});
    }

    const [nombreClass, setnombreClass] = useState({valor : ''});
    const [listaClases, setlistaClases] = useState();
    const [cambio, setCambio] = useState();
    let clases_disp = null;

    const userType = JSON.parse(sessionStorage.getItem('usersession'))

    useEffect(() => {
        API.post('/node/users/listarclases', userType)
            .then((respuesta) => {
                setlistaClases(respuesta.data.data);
                console.log("lista de clases", respuesta.data.data);
            }).catch(error => {
                console.log(error);
            });
    },[cambio]);

    if(listaClases != undefined && listaClases.length != 0){
        console.log("listando clasesen html");
        clases_disp = listaClases.map((clase, key) =>
            <div className="row btn-saloua" key={key}>
                <div className="col-2"><h1>{clase.id}</h1></div>
                <div className="col-10"><h2>{clase.nombre_clase}</h2></div>
            </div>
        )
    }else{
        clases_disp = <div className="row">
            <h4><i className="fas fa-folder-open"></i> Al parecer no tienes clases </h4>
        </div>
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
                    <div style={{ minHeight : "80vh" }}>
                        <div className="container">
                            <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-saloua"><i className="fas fa-plus-square"></i> Nueva clase</button>
                            <button className="btn btn-saloua"><i className="fas fa-door-open"></i> Eliminar clase</button>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-2">ID clase</div>
                                <div className="col-10">Nombre de clase</div>
                            </div>
                            {clases_disp}
                        </div>
                    </div>
                    <Footer />

                    {/*Aqui va el Modal para la creacion de clase*/}
                    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Nueva Clase</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="col-form-label">Nombre de la Clase</label>
                                            <input type="text" className="form-control" id="recipient-name" value={nombreClass.valor} onChange={onChangeNombre}/>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={()=> nuevaClase()} data-dismiss="modal">Crear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}

export default Clases;