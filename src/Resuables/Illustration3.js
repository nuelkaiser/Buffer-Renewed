import React from 'react';
import './Illustration3.css';
import CreditCard from '../Images/CreditCard.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Illustration3 = () => {
    return (
        <div className='illustrate3' data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>
                Transparent
            </h2>

            <p>
                Manage your pensions from the comfort of your mobile phone.
            </p>

            <img src={CreditCard} alt='vault' />
        </div>
    )
}

export default Illustration3