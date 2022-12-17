import React from 'react';
import './Services.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { BsWordpress } from 'react-icons/bs';

const Services = () => {
    return (
        <section className='services' id="services">
           <div className="services-heading">
           <h1>My Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente totam nulla</p>
           </div>

            <div className="services-info">
                <div className="s-skill">
                    <AiFillHtml5 className='s-icon'/>
                    <h4>95%</h4>
                    <h2>HTML5</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, nostrum quod explicabo aspernatur sit magni earum libero in veritatis!</p>
                </div>

                <div className="s-skill">
                    <SiCss3 className='s-icon'/>
                    <h4>90%</h4>
                    <h2>CSS3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, nostrum quod explicabo aspernatur sit magni earum libero in veritatis!</p>
                </div>

                <div className="s-skill">
                    <FaBootstrap className='s-icon'/>
                    <h4>95%</h4>
                    <h2>BOOTSTRAP</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, nostrum quod explicabo aspernatur sit magni earum libero in veritatis!</p>
                </div>

                <div className="s-skill">
                    <IoLogoJavascript className='s-icon'/>
                    <h4>70%</h4>
                    <h2>JAVASCRIPT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, nostrum quod explicabo aspernatur sit magni earum libero in veritatis!</p>
                </div>

                <div className="s-skill">
                    <RiReactjsLine className='s-icon'/>
                    <h4>60%</h4>
                    <h2>REACT JS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, nostrum quod explicabo aspernatur sit magni earum libero in veritatis!</p>
                </div>

                <div className="s-skill">
                    <BsWordpress className='s-icon'/>
                    <h4>90%</h4>
                    <h2>WORDPRESS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, nostrum quod explicabo aspernatur sit magni earum libero in veritatis!</p>
                </div>
            </div>

        </section>


    );
};

export default Services;