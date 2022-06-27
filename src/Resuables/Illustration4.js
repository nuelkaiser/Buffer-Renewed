import React from 'react';
import './Illustration4.css';
import Pie from '../Images/pie-chart.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Illustration4 = () => {
    return (
        <div className='illustrate4' data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>
                Reliable
            </h2>

            <p>
                Our system operates with 99%+ uptime and is certified with the highest  standards.
            </p>

            <img src={Pie} alt='vault' />
        </div>
    )
}

export default Illustration4