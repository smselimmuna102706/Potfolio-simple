import React from 'react';
import './Footer.css';
// import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
    return (
        <section className='footer-section'>

            <div className="footer-first">
                <h4>About me</h4>
                <p>Mirpur -11 , Dhaka</p>
                <p>Phone Number : 01986524850</p>
                <p>Email : selim102706dpi@gmail.com</p>
            </div>

            <div className="footer-second">
                <h5>Useful Links</h5>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="portfolio">Portfolio</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>

            </div>
            <div className="footer-third">
                <h5>Our Services</h5>
                <ul>
                    <li><a href="">Web Design</a></li>
                    <li><a href="">Web Development</a></li>
                    <li><a href="">WordPress Theme customization</a></li>
                </ul>
            </div>
            <div className="footer-fourth">
                <h5>Our Newsletter</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolor.</p>

                <input type="text" name="" id="" placeholder='Enter the text' />  <br />


                <a href="https://www.facebook.com/"><BsFacebook className='f-icon' /></a>
                <a href="https://twitter.com/"><AiFillTwitterCircle className='f-icon' /></a>
                <a href="https://www.linkedin.com/notifications/?filter=all"><AiFillLinkedin className='f-icon' /></a>
                <a href="https://www.instagram.com/challenge/?next=https%3A%2F%2Fwww.instagram.com%2F%3F__coig_challenged%3D1"><FaInstagramSquare className='f-icon' /></a>
                <a href="https://www.pinterest.com/"><BsPinterest className='f-icon' /></a>

            </div>
        </section>


    );
};

export default Footer;


