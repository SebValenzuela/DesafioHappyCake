// En Home.js
import React from 'react';
import './Home.css';
import imagen from '../assets/home-cake.png';

const Home = () => {
  return (
    <div className='home-body'>
      <h1 className='title'>Bienvenido a <span>Happy Cake</span></h1>
      <h3 className='subtitle'>¡Encuentra el pastel ideal para ti!</h3>
      <img className='principal-img' src={imagen} alt="welcome image" />
    </div>
  );
};

export default Home;
