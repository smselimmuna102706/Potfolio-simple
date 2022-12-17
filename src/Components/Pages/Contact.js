import React from 'react';
import './Contact.css';
import contactLogo from '../Resource/Images/map2.png'

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className="contact-heading">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo alias minima at quis cum quas facilis voluptate, error enim ducimus?</p>
            </div>
            <div className="contact-info">
                <div className="contact-info-left">
                    <img src={contactLogo} width={500} alt="" />
                </div>
                <div className="contact-info-right">
                    <h3>Contact Me </h3>
                    <div>
                        <label htmlFor="">Name :</label>
                        <input type="name" id="name" placeholder='Enter the name ' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" id="password" placeholder='Enter the password ' />
                    </div>
                    <div>
                        <label htmlFor="">Massage : </label>
                        <textarea name="" id="textarea" placeholder='Write the Massage'></textarea>
                    </div>
                    <div>
                        <button type='submit' value="submit">Submit</button>
                    </div>
                </div>
            </div>


        </section>


    );
};

export default Contact;