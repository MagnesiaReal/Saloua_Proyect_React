import react, { useEffect, useState } from 'react'
import HeaderLog from './HeaderLog'
import Footer from './Footer'
import API from '../http-axios'
import { Link } from 'react-router-dom'

function Clases(props) {
    function nuevaClase() {
        console.log("Creando Nueva Clase con id = ", userType.id);
        const credenciales = {
            id: userType.id,
            nombre: nombreClass.valor
        }
        API.post('/node/users/newclass', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
            }).catch(error => {
                console.log(error);
            });
        // Solo existe para actualizar el useEffect
        setnombreClass({ valor: '' });
        if (cambio) setCambio(false);
        else setCambio(true);
    }

    function onChangeNombre(e) {
        setnombreClass({ valor: e.target.value });
    }

    function onDeleteClass(e) {
        const idcl = { id: e.target.getAttribute("id_class") };
        console.log('ID de clase que se borrara :', idcl);
        if (window.confirm("Estas seguro que deseas borrar esta clase?")) {
            API.post('/node/users/deleteclass', idcl)
                .then(respuesta => {
                    console.log(respuesta.data);
                    if (cambio) setCambio(false);
                    else setCambio(true);
                }).catch(error => {
                    console.log(error);
                });
        } else {
            alert("Clase salvada con exito :)");
        }

    }

    function accederClase(e){
        e.preventDefault();
        console.log("Intentando entrar a clase");
        const credenciales = {
            id_alumno : userType.id,
            id_clase : nombreClass.valor
        }
        API.post('/node/users/accederclase', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
                if (cambio) setCambio(false);
                else setCambio(true);
                if(respuesta.data.exist === 0){
                    alert("Clase no existente, ingresa una Id diferente");
                }else if(respuesta.data.exist === 1){
                    alert("Ya te has unido a esa clase");
                } 
            }).catch(error => {
                console.log(error);
            });

    }

    const [nombreClass, setnombreClass] = useState({ valor: '' });
    const [listaClases, setlistaClases] = useState();
    const [cambio, setCambio] = useState(false);
    let clases_disp = null,
        clases_disp_a = null;

    const modal_clase = <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <label className="col-form-label">Nombre de la Clase</label>
                            <input type="text" className="form-control" id="recipient-name" value={nombreClass.valor} onChange={onChangeNombre} required />
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={() => nuevaClase()} data-dismiss="modal">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    const modal_clase_a = <div className="modal fade" id="modalunir" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Unierte a Clase</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="modal-body">

                        <div className="form-group">
                            <label className="col-form-label">Id de Clase </label>
                            <input type="text" className="form-control" id="recipient-name" value={nombreClass.valor} onChange={onChangeNombre} required />
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={(e) => accederClase(e)} data-dismiss="modal">Unirte</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    const userType = JSON.parse(sessionStorage.getItem('usersession'))

    useEffect(() => {
        API.post('/node/users/listarclases', userType)
            .then((respuesta) => {
                setlistaClases(respuesta.data.data);
                console.log("lista de clases", respuesta.data.data);
            }).catch(error => {
                console.log(error);
            });
    }, [cambio]);


    if (userType.ocupacion === 0) { // es un alumno
        //Listando clases del alumno
        if (listaClases !== undefined && listaClases.length !== 0) {
            console.log("listando clasesen html");
            clases_disp_a = listaClases.map((clase, key) =>
                <div className="row list-saloua mt-1" key={key}>
                    <div className="col-2 list-saloua-id" align="center">
                        <h2>{clase.id}</h2>
                    </div>
                    <span>
                        <div className="v-divider-saloua"></div>
                    </span>
                    <Link to={"/dashboard/clases/" + clase.id} className="col">
                        <h2>{clase.nombre_clase}</h2>
                        <h5>{'Profesor: '+clase.nombre+' '+clase.apellido}</h5>
                    </Link>
                    
                </div>
    
            )
        } else {
            clases_disp_a = <div className="row">
                <h4><i className="fas fa-folder-open"></i> Al parecer no tienes clases </h4>
            </div>
        }
        //html de alumno
        return (
            <div id='content'>
                <div className="container">
                    <HeaderLog outSession={props.outSession} />
                    <div style={{ minHeight: "80vh" }}>
                        <div className="container">
                            <button className="btn btn-saloua" data-toggle="modal" data-target="#modalunir"><i className="fas fa-door-open"></i> Unirte a clase</button>
                        </div>
                        <div className="container">
                            <div className="row list-saloua" align="center">
                                <h2 className="col">Nombre de clase</h2>
                            </div>
                            {clases_disp_a}
                        </div>
                    </div>
                    <Footer />
                    {modal_clase_a}
                </div>
            </div>
        );
    }
    else if (userType.ocupacion === 1) { // es profesor
        //Listando clases del profesor
        if (listaClases !== undefined && listaClases.length !== 0) {
            console.log("listando clasesen html");
            clases_disp = listaClases.map((clase, key) =>
                <div className="row list-saloua mt-1" key={key}>
                    <div className="col-2 list-saloua-id"><h2>{clase.id}</h2>
                    </div>
                    <span>
                        <div className="v-divider-saloua"></div>
                    </span>
                    <Link to={"/dashboard/clases/" + clase.id} className="col">
                        <h2>{clase.nombre_clase}</h2>
                    </Link>
                    <span>
                        <div className="v-divider-saloua"></div>
                    </span>
                    <div className="col-1 delete-class" id_class={clase.id} onClick={onDeleteClass} style={{ fontSize: "30px" }}>&times;</div>
                </div>
    
            )
        } else {
            clases_disp = <div className="row">
                <h4><i className="fas fa-folder-open"></i> Al parecer no tienes clases </h4>
            </div>
        }
        return (
            <div id='content'>
                <div className="container">
                    <HeaderLog outSession={props.outSession} />
                    <div style={{ minHeight: "80vh" }}>
                        <div className="container">
                            <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-saloua"><i className="fas fa-plus-square"></i> Nueva clase</button>
                        </div>
                        <div className="container">
                            <div className="row list-saloua">
                                <div className="col-2">ID clase</div>
                                <div className="col-10">Nombre de clase</div>
                            </div>
                            {clases_disp}
                        </div>
                    </div>
                    <Footer />

                    {modal_clase}

                </div>
            </div>
        );
    }



}

export default Clases;