import React from 'react'


function BodyInit(){

    return(
        <div className = "m-2">
            <h1>¿Necesitas Ayuda? ¡Podemos solucionarlo!</h1>
            <div className = "row">
                <div className="col-lg-12">
                       <h2>Guía de Navegación y Manual de Usuario</h2>
                       <hr color="grey"/>
                    </div>
            </div>    
            <div className = "row">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                    <div id="guia" className="img_bullets">
                
                    </div>
                </div>
                <div className="col-lg-8">
                    <p className="descrip">Haz click sobre la imagen para abrir la guia y el manual de usuario en el navegador. Presiona descargar para guardarlo en tu dispositivo.
                        <div className="d-flex justify-content-center">
                            <button className = "btn btn-saloua-reg">Descargar</button>
                        </div>
                    </p>

                </div>
            </div>
            <div className = "row">
                <div className="col-lg-12">
                        <h2>Preguntas Frecuentes</h2>
                        <hr color="grey" />
                    </div>
            </div>    
            <div className = "row">
              
               <div className="col-lg-8">
                    <p className="descrip">Da click en la imagen para acceder a nuestro portal de preguntas frecuentes.</p>
                </div>
                 <div className="col-lg-3">
                    <div id="faqs" className="img_bullets">
                
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className="col-lg-12">
                        <h2>Reportar un Problema</h2>
                        <hr color="grey" />
                    </div>
            </div>    
            <div className = "row">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                    
                    <div id="error" className="img_bullets">
                
                    </div>
                </div>
                <div className="col-lg-8">
                    <p className="descrip">Gracias por ayudarnos, cuentanos ¿Qué pasa?:
                        <input type="text" id="Input_reporte_tx" className="form-control" name="reporte" required></input>
                        Agregar Captura:<br />
                        <input type="file" id="Input_img_rep" className="im_rep" name="im_rep" required>
                        </input>
                        <div className="d-flex justify-content-center">
                                <input className="btn btn-saloua-reg" type="submit" value="Enviar Reporte" style={{margin : "10px"}}></input>
                    </div>
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