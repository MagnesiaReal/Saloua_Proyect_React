import React from 'react'


function BodyInit(){

    return(
        <div className = "m-2">
            <h1>¡Accede y disfruta de los siguientes servicios!</h1>
            <div className = "row">
                <div className="col-lg-12">
                       <h2>Inscríbete a uno de nuestros cursos</h2>
                       <hr color="grey"/>
                    </div>
            </div>    
            <div className = "row">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                    <div id="curso" className="img_bullets">
                
                    </div>
                </div>
                <div className="col-lg-8">
                    <p className="descrip">Es extremadamente fácil seleccionar e inscribir uno de nuestros cursos, los cuales estan organizados en diferentes categorías que seguramente serán de tu interés. 
                    Registra tu trayectoria y solicita acceso al 100% de la funcionalidad del sitio, es totalmente gratuito.
                    </p>
                </div>
            </div>
            <div className = "row">
                <div className="col-lg-12">
                        <h2>Descubre material didactico</h2>
                        <hr color="grey" />
                    </div>
            </div>    
            <div className = "row">
              
               <div className="col-lg-8">
                    <p className="descrip">Te garantizamos un material confiable y 100% de calidad, que cumple con las normas y estandares que establece la Comision Nacional de Libros de Texto Gratuitos para la creacion, revisión y distribucion de material. </p>
                </div>
                 <div className="col-lg-3">
                    <div id="material" className="img_bullets">
                
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className="col-lg-12">
                        <h2>Realiza actividades y comprueba tu avance</h2>
                        <hr color="grey" />
                    </div>
            </div>    
            <div className = "row">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                    
                    <div id="actividad" className="img_bullets">
                
                    </div>
                </div>
                <div className="col-lg-8">
                    <p className="descrip">Estudia a tu propio ritmo y evalua tu progreso con actividades realizadas por profesores. No pierdas la oportunidad para aprender y desarollar tus valiosas habilidades.
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

export default BodyInit;