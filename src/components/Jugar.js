import react from 'react'
import { withRouter } from 'react-router-dom'
import API from '../http-axios'

class Jugar extends react.Component {
    constructor(props) {
        super(props)
        console.log(this.props.archivo);
        const archivojson = JSON.parse(this.props.archivo);
        console.log(archivojson);

        this.state = {
            res1: '',
            res2: '',
            res3: '',
            res4: '',
            res5: '',
            res6: '',
            res7: '',
            res8: '',
            res9: '',
            res10: '',
            preguntas: archivojson.questions,
            respuestas: archivojson.answers,
            userType : JSON.parse(sessionStorage.getItem('usersession'))
        }
        this.onChangeR1 = this.onChangeR1.bind(this);
        this.onChangeR2 = this.onChangeR2.bind(this);
        this.onChangeR3 = this.onChangeR3.bind(this);
        this.onChangeR4 = this.onChangeR4.bind(this);
        this.onChangeR5 = this.onChangeR5.bind(this);
        this.onChangeR6 = this.onChangeR6.bind(this);
        this.onChangeR7 = this.onChangeR7.bind(this);
        this.onChangeR8 = this.onChangeR8.bind(this);
        this.onChangeR9 = this.onChangeR9.bind(this);
        this.onChangeR10 = this.onChangeR10.bind(this);
        this.onCalificar = this.onCalificar.bind(this);

    }

    componentDidMount() {
        console.log(this.state.preguntas[0], this.state.respuestas);
    }

    onChangeR1(e) { this.setState({ res1: e.target.value }); }
    onChangeR2(e) { this.setState({ res2: e.target.value }); }
    onChangeR3(e) { this.setState({ res3: e.target.value }); }
    onChangeR4(e) { this.setState({ res4: e.target.value }); }
    onChangeR5(e) { this.setState({ res5: e.target.value }); }
    onChangeR6(e) { this.setState({ res6: e.target.value }); }
    onChangeR7(e) { this.setState({ res7: e.target.value }); }
    onChangeR8(e) { this.setState({ res8: e.target.value }); }
    onChangeR9(e) { this.setState({ res9: e.target.value }); }
    onChangeR10(e) { this.setState({ res10: e.target.value }); }

    onCalificar(e){
        e.preventDefault();
        console.log("calificando");
        var calificacion = 0;
        if(this.state.res1 === this.state.respuestas[0]) calificacion ++; 
        if(this.state.res2 === this.state.respuestas[1]) calificacion ++; 
        if(this.state.res3 === this.state.respuestas[2]) calificacion ++; 
        if(this.state.res4 === this.state.respuestas[3]) calificacion ++; 
        if(this.state.res5 === this.state.respuestas[4]) calificacion ++;      
        if(this.state.res6 === this.state.respuestas[5]) calificacion ++; 
        if(this.state.res7 === this.state.respuestas[6]) calificacion ++; 
        if(this.state.res8 === this.state.respuestas[7]) calificacion ++; 
        if(this.state.res9 === this.state.respuestas[8]) calificacion ++; 
        if(this.state.res10 === this.state.respuestas[9]) calificacion ++;
        const credenciales = {
            id_alumno : this.state.userType.id,
            id_actividad : this.props.actId,
            calificacion : calificacion
        }
        API.post('/node/users/calificar', credenciales)
            .then(respuesta => {
                console.log(respuesta.data);
                this.props.history.push('/dashboard/clases');
            }).catch(error=>{
                console.log(error);
            });            
    }

    render() {
        return (
            <div className="actividad-svg container my-2">
                <div className="row">
                    <form onSubmit={this.onCalificar}>
                        <div className="col-12">
                            <label id="que1">{this.state.preguntas[0]}</label>
                            <input type="text" className="form-control" value={this.state.res1} onChange={this.onChangeR1} placeholder="respuesta1"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">{this.state.preguntas[1]}</label>
                            <input type="text" className="form-control" value={this.state.res2} onChange={this.onChangeR2} placeholder="respuesta2"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">Un label</label>
                            <input type="text" className="form-control" value={this.state.res3} onChange={this.onChangeR3} placeholder="respuesta3"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">Un label</label>
                            <input type="text" className="form-control" value={this.state.res4} onChange={this.onChangeR4} placeholder="respuesta4"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">Un label</label>
                            <input type="text" className="form-control" value={this.state.res5} onChange={this.onChangeR5} placeholder="respuesta5"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">Un label</label>
                            <input type="text" className="form-control" value={this.state.res6} onChange={this.onChangeR6} placeholder="respuesta6"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">Un label</label>
                            <input type="text" className="form-control" value={this.state.res7} onChange={this.onChangeR7} placeholder="respuesta7"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">Un label</label>
                            <input type="text" className="form-control" value={this.state.res8} onChange={this.onChangeR8} placeholder="respuesta8"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">Un label</label>
                            <input type="text" className="form-control" value={this.state.res9} onChange={this.onChangeR9} placeholder="respuesta9"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12">
                            <label id="que1">Un label</label>
                            <input type="text" className="form-control" value={this.state.res10} onChange={this.onChangeR10} placeholder="respuesta10"></input>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        <div className="col-12" align="center">
                            <input type="submit" className="btn btn-saloua my-2" value="Finalizar"></input>
                        </div>
                    </form>

                </div>
            </div>
        );
    }

}

export default withRouter(Jugar);