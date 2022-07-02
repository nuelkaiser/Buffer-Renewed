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
import Readmore from './Readmore';

AOS.init();

const Footer = () => {


    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div className='buffer' data-aos='fade-up' data-aos-duration='2000'>
                    <Logo />

                    <Readmore>
                            Buffer Africa is a financial services comapany that uses technology to meet the demands of it's consumers.
                            We are on a quest to strengthen Africa's financial safety net (pension, insurance and credit).
                            We have noticed a significant disconnect
                            between traditional pension companies' products and the needs of thier consumers.
                            We are starting to fill in the gap by developing solutions that meet are customers' needs.
                            Remote workers in Africa for example, do not have access to pension funds. For these customer sectors. we will develop targeted solutions.
                    </Readmore>

                    <div className='media-reach'>
                        <img src={Facebook} alt='facebook' />
                        <img src={Youtube} alt='facebook' />
                        <img src={Ball} alt='ball' />
                        <img src={Figma} alt='figma' />
                        <img src={Whatsapp} alt='whatsapp' />
                    </div>
                </div>
                <div className='asf' >
                    <ul className='asf-inner' data-aos='fade-up' data-aos-duration='2000'>
                        <h3>About</h3>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Jobs</li>
                        <li>In Press</li>
                    </ul>

                    <ul className='asf-inner' data-aos='fade-up' data-aos-duration='1500'>
                        <h3>Support</h3>
                        <li>Contact Us</li>
                        <li>Online Chat</li>
                        <li>Whatsapp</li>
                        <li>Telegram</li>
                        <li>Ticketing</li>
                    </ul>

                    <ul className='asf-inner' data-aos='fade-up' data-aos-duration='1000'>
                        <h3>FAQ</h3>
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
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