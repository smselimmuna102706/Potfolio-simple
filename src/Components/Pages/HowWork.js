import React from 'react';
import './HowWork.css';
import { GiDiscussion } from 'react-icons/gi';
import { FcPlanner } from 'react-icons/fc';
import { MdDesignServices } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import { TbSubmarine } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';

const HowWork = () => {
    return (
        <section className='howWork-section' id="How-Work">
             <div className="work">
                <div className="work-heading">
                    <h1>How do i work?</h1>
                </div>
                <div className="work-bottom">
                    <div className="work-planing">
                        <GiDiscussion className='w-icon'/>
                        <h3>01. Discussion</h3>
                        <p>To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations.</p>
                    </div>

                    <div className="work-planing">
                        <FcPlanner className='w-icon'/>
                        <h3>02. Planing</h3>
                        <p>Then I can create a plan for the interior projects. Planning gives high potential to every projects. Every single detail listed in the plan, when I deliver, when I need website data form you.</p>
                    </div>

                    <div className="work-planing">
                        <MdDesignServices className='w-icon'/>
                        <h3>03. Design</h3>
                        <p>I give highly concentration to website design, every time I try to give my best to do clean and services related awesome design for the website. A nice design can improve your business quality.</p>
                    </div>

                    <div className="work-planing">
                        <BsCodeSlash className='w-icon'/>
                        <h3>04. Coding</h3>
                        <p>The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.</p>
                    </div>

                    <div className="work-planing">
                        <TbSubmarine className='w-icon'/>
                        <h3>05. Submit for Review</h3>
                        <p>After design and coding, I send for review to client. After client’s checking, If have to change or revision, I say client to send all of them in a list and I am happy to do all changes every time.</p>
                    </div>

                    <div className="work-planing">
                        <CgWebsite className='w-icon'/>
                        <h3>06.  Website Is Ready!</h3>
                        <p>After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone. In every project, i make sure to give full support to the clients.</p>
                    </div>



                </div>
             </div>
        </section>
    );
};

export default HowWork;