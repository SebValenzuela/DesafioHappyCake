import React from "react";
import './Contacto.css';

const Contacto = () => {
    return (
        <div className='contact'>
            <h1>¿Cuentanos que estás buscando?</h1>

            <div className="email-input">
                <h5>Correo:</h5>
                <input type="email" placeholder='example@email' />
            </div>

            <div className="comentary-input">
                <h5>Descripción:</h5>
                <textarea rows="5" />
            </div>

            <div className="buttom">
                <button>Enviar</button>
            </div>
        </div>
    );
};

export default Contacto;
