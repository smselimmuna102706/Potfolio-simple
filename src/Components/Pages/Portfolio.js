import React from 'react';
import './Portfolio.css';
import plogo1 from '../Resource/Images/p1.png'
import plogo2 from '../Resource/Images/p2.jpg'
import plogo3 from '../Resource/Images/p3.png'
import plogo4 from '../Resource/Images/p4.png'
import plogo5 from '../Resource/Images/p5.png'
import plogo6 from '../Resource/Images/p6.png'

const Portfolio = () => {
    return (
        <section className='portfolio' id='portfolio'>
            <div className="portfolio-heading">
                <h1>My Work</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus nesciunt ullam ab iste</p>
            </div>
            <div className="portfolio-info">
                <div className="portfolio-skill">
                    <div className="portfolio-skill-left">
                        <img src={plogo1} width={150} height={200} alt="" />
                    </div>
                    <div className="portfolio-skill-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis adipisicing elit. Blanditiis </p>
                        <a href="https://github.com/smselimmuna102706"><button>Visit Website</button></a>
                    </div>

                </div>

                <div className="portfolio-skill">
                    <div className="portfolio-skill-left">
                        <img src={plogo2} width={150} height={200} alt="" />
                    </div>
                    <div className="portfolio-skill-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis adipisicing elit. Blanditiis </p>
                        <a href="https://github.com/smselimmuna102706"><button>Visit Website</button></a>
                    </div>

                </div>
                <div className="portfolio-skill">
                    <div className="portfolio-skill-left">
                        <img src={plogo3} width={150} height={200} alt="" />
                    </div>
                    <div className="portfolio-skill-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis adipisicing elit. Blanditiis </p>
                        <a href="https://github.com/smselimmuna102706"><button>Visit Website</button></a>
                    </div>

                </div>
                <div className="portfolio-skill">
                    <div className="portfolio-skill-left">
                        <img src={plogo4} width={150} height={200} alt="" />
                    </div>
                    <div className="portfolio-skill-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis adipisicing elit. Blanditiis </p>
                        <a href="https://github.com/smselimmuna102706"><button>Visit Website</button></a>
                    </div>

                </div>
                <div className="portfolio-skill">
                    <div className="portfolio-skill-left">
                        <img src={plogo5} width={150} height={200} alt="" />
                    </div>
                    <div className="portfolio-skill-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis adipisicing elit. Blanditiis </p>
                        <a href="https://github.com/smselimmuna102706"><button>Visit Website</button></a>
                    </div>

                </div>
                <div className="portfolio-skill">
                    <div className="portfolio-skill-left">
                        <img src={plogo6} width={150} height={200} alt="" />
                    </div>
                    <div className="portfolio-skill-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis adipisicing elit. Blanditiis </p>
                        <a href="https://github.com/smselimmuna102706"><button>Visit Website</button></a>
                    </div>

                </div>




            </div>
        </section>


    );
};

export default Portfolio;