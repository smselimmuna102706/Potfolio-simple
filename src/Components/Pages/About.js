import React from 'react';
import './About.css';
import aboutLogo from '../Resource/Images/2-removebg-preview.png';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';


const About = () => {
    return (
        <div className='About-container' id='about'>
            <div className="about-left">

                <div className="about-left-info">
                    <div className="about-info">
                        <div className="about-icon">
                            <p>
                                <a href="https://github.com/smselimmuna102706"> <AiOutlineGithub className='about-i' /></a>
                                <a href="https://www.linkedin.com/feed/"><AiFillLinkedin className='about-i' /></a>
                                <a href="https://www.facebook.com/selim.mia.73157203"><AiFillFacebook className='about-i' /></a>
                                <a href="selim102706dpi@gmail.com"><SiGmail className='about-i' /> </a>
                            </p>
                        </div>

                        <h1>I'm Selim</h1>
                        <p>I am Selim , Professional web developer with long  time experience in this field </p>
                        <p>
                            <a href="https://github.com/smselimmuna102706"><button className='Btn1'> My Work</button></a>  <a href="https://www.facebook.com/selim.mia.73157203"><button className='Btn2'>Contact</button></a>
                        </p>
                    </div>
                </div>



                <div className="about-right-img">

                </div>



            </div>

            <div className="about-right">
                <img src={aboutLogo} width={500} alt="About img" />
            </div>

        </div>
    );
};

export default About;