import React from 'react';
import './Footer.css';
import Logo from '../Images/Logo';
import Facebook from '../Images/facebook.png';
import Youtube from '../Images/youtube.png';
import Ball from '../Images/ball.png';
import Figma from '../Images/figma.png';
import Whatsapp from '../Images/whatsapp.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div className='buffer'   data-aos='fade-up' data-aos-duration='2000'>
                    <Logo />

                    <p>
                        We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <span>Read More</span>
                    </p>

                    <div className='media-reach'>
                        <img src={Facebook} alt='facebook' />
                        <img src={Youtube} alt='facebook' />
                        <img src={Ball} alt='ball' />
                        <img src={Figma} alt='figma' />
                        <img src={Whatsapp} alt='whatsapp' />
                    </div>
                </div>
                <div className='asf' >
                    <ul className='asf-inner'  data-aos='fade-up' data-aos-duration='2000'>
                        <h3>About</h3>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Jobs</li>
                        <li>In Press</li>
                    </ul>

                    <ul className='asf-inner'  data-aos='fade-up' data-aos-duration='1500'>
                        <h3>Supprt</h3>
                        <li>Contact Us</li>
                        <li>Online Chat</li>
                        <li>Whatsapp</li>
                        <li>Telegram</li>
                        <li>Ticketing</li>
                    </ul>

                    <ul className='asf-inner'  data-aos='fade-up' data-aos-duration='1000'>
                        <h3>FAQ</h3>
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Ordrs</li>
                        <li>Payments</li>
                        <li>Returns</li>
                    </ul>


                </div>
            </div>
            <small className='footer-copyright'>  &copy; 2020-2021, All Rights Reserved</small>
        </div>
    )
}

export default Footer