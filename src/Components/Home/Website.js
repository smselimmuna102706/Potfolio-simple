import React from 'react';
import './Website.css';



const Website = () => {
    return (
        <div className='MainNavbar' id='home'>
            <div className="left">
                <a href="#home" style={{ textDecoration: 'none' }}><h1 className='name-style'>SELIM</h1></a>
            </div>

            <div className="middle">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="right">
                <a href="https://www.fiverr.com/tupi12?up_rollout=true"><button>Fiver</button></a>

            </div>
        </div>
    );
};

export default Website;