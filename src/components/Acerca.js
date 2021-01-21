import React from 'react'


function Acerca(){

    return(
        <div className = "m-2">
            <h1>Acerca de Nosotros</h1>
            <div className = "row">
                <div className="col-lg-12">
                       <h2>¿Por qué nace SALOUA? ¡Te contamos!</h2>
                       <hr color="grey"/>
                    </div>
            </div>    
            <div className = "row">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                    <div id="nace" className="img_bullets">
                
                    </div>
                </div>
                <div className="col-lg-8">
                    <p className="descrip">En la actualidad nos hemos visto inmersos en la necesidad de proponer mecanismos para la educación a distancia; Nosotros pensamos en enfocar el diseño a una herramienta, para auto gestionar el ritmo de estuido. El hecho de ser un sitio que promueve el uso y difusión del Náhuatl, fortalece la relevancia del proyecto.
                    </p>

                </div>
            </div>
            <div className = "row">
                <div className="col-lg-12">
                        <h2>Nuestra Misión</h2>
                        <hr color="grey" />
                    </div>
            </div>    
            <div className = "row">
              
               <div className="col-lg-8">
                    <p className="descrip">Permitir a los estudiantes de primaria y secundaria acceder a material educativo y que a su vez sea capaz de ejecutarse en cualquier tipo de dispositivo, ya sea pc o móvil, enfatizando el diseño para equipos de gama media-baja para un mayor alcance de la utilidad práctica del sistema</p>
                </div>
                 <div className="col-lg-3">
                    <div id="mision" className="img_bullets">
                
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className="col-lg-12">
                        <h2>Nuestra Visión</h2>
                        <hr color="grey" />
                    </div>
            </div>    
            <div className = "row">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                    
                    <div id="vision" className="img_bullets">
                
                    </div>
                </div>
                <div className="col-lg-8">
                    <p className="descrip">Consolidar una herramienta 100% inclusiva que le permita a la infancia y juventud mexicana aprovechar al maximo el contenido que provee la Comisión Nacional de Libros de Texto Gratuitos, integrando la extensa cantidad de lenguas y dialectos indígenas de nuesto hermoso y diverso país. Conformando así, un referente para la regularización academica y el desarollo personal de la comunidad del nivel Básico educativo.
                        
                    </p>
                    
                </div>
            </div>
            <div className = "row">
                <div className="space">
                    </div>
            </div>    
        </div>
    );
}

export default Acerca;