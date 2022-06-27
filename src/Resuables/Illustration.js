import React from 'react';
import Vault from '../Images/amico.png';
import './Illustration.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Illustration = () => {
  return (
    <div className='illustrate' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <h2>
            Safe
        </h2>

        <p>
            Buffer Africa is regulated by National Pensions Commisions
        </p>

        <img src={Vault} alt='vault'/>
    </div>
  )
}

export default Illustration