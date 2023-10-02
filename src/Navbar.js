import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import imagen from './assets/navbar-cake.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} /> Inicio 
                    </Link>

                </li>
                <li>
                    <Link to="/contacto">
                        <FontAwesomeIcon icon={faEnvelope}/> Contacto
                    </Link>
                </li>
                <li>
                    <Link to="/catalogo">
                        <FontAwesomeIcon icon={faCakeCandles}/> Catalogo
                    </Link>
                </li>
            </ul>
            <ul>
                <li className='logo-section'>
                    <h3>Happy Cake</h3>
                    <img className='navbar-img' src={imagen} alt="navbar image" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;