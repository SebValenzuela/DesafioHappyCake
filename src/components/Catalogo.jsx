import React from 'react';
import './Catalogo.css';
import imagenMarried from '../assets/married-cake.jpg';
import imagenBirthday from '../assets/birthday-cake.jpg';
import imageShower from '../assets/baby-shower-cake.jpg';

const Catalogo = () => {
    return (
        <div className='catalogo'>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-title">
                            <img className='married-img' src={imagenMarried} alt="welcome image" />
                        </div>
                        <div className="card-body">
                            <h3>Birthday Cake</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dicta tempore, minima obcaecati quis illo eum molestias aliquid voluptatem dolorem! Eius, quam molestias provident recusandae atque possimus perferendis eos nostrum.</p>
                            <hr />
                            <button>Pedir</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-title">
                            <img className='married-img' src={imagenBirthday} alt="welcome image" />
                        </div>
                        <div className="card-body">
                            <h3>Married Cake</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dicta tempore, minima obcaecati quis illo eum molestias aliquid voluptatem dolorem! Eius, quam molestias provident recusandae atque possimus perferendis eos nostrum.</p>
                            <hr />
                            <button>Pedir</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-title">
                            <img className='married-img' src={imageShower} alt="welcome image" />
                        </div>
                        <div className="card-body">
                            <h3>Baby Shower Cake</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dicta tempore, minima obcaecati quis illo eum molestias aliquid voluptatem dolorem! Eius, quam molestias provident recusandae atque possimus perferendis eos nostrum.</p>
                            <hr />
                            <button>Pedir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalogo;