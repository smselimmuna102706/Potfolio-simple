import React from 'react';
import './About2.css';
import aboutlogo2 from '../Resource/Images/aobut2.png';

const About2 = () => {
    return (
        <section className='about2-section'>
              <div className="about-bottom">

                <div className="about-bottom-left">
                <img src={aboutlogo2} width={300} alt="" />
                </div>

                <div className="about-bottom-right">
                    <h1>About Me</h1>
                    <h3>Hello! You're Welcome -</h3>
                    <h4>Professional Web Developer & WordPress Customizer.</h4>
                    <p>I’m Selim mia Passionate at webDesign & development. I’m working minimum of 7-8 hours every day, I love to do this it’s my life-everything.
                        My goal is to satisfy clients, try to understand what they want for there website, help them from beginning to end the project and give support for every problem.</p>
                </div>


            </div>
        </section>
    );
};

export default About2;