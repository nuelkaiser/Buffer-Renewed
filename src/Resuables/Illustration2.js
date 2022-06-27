import React from 'react';
import Girl from '../Images/rafiki.png';
import './Illustration2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Illustration2 = () => {
  return (
    <div className='illustrate2' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <h2>
            Higher Returns
        </h2>

        <p>
            Your money is invested by one of the biggest and most reliable pension managers in Africa.
        </p>

        <img src={Girl} alt='vault'/>
    </div>
  )
}

export default Illustration2