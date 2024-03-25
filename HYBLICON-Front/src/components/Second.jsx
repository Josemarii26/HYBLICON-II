import React from 'react'
import './Second.css'

export const Second = () => {
    return (
        <div className='second'>
            
            <div className="conjunto">
           
                <div className='texto'>
                <h2 data-aos="fade-right">HYBLICON II</h2>
                    <p data-aos="fade-right"> Con el objetivo de monitorizar el flujo de personas, hemos creado esta inteligencia artificial capaz de detectar tanto personas como herramientas de movilidad reducida.</p>
                    <p>Para poder usar esta herramienta de forma sencilla hemos desarrollado esta interfaz gráfica que simplica el proceso y permite obviar la parte de código. </p>
                    <p>Pudiendo en este caso probar detectando personas u objetos de movilidad reducida como sillas de ruedas, bastones o andadores.</p>
                </div>
                <div className="imagen" data-aos="fade-left">
                    <img src="https://www.duplexascensores.com/wp-content/uploads/2022/03/Dos-personas-esperando-al-ascensor-delante-de-las-puertas-scaled.jpg" alt="imagen" />
                </div>
            </div>

        </div>
    )
}
