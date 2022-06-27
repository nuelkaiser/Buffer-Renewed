import React from 'react';
import './Decide.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


export const Decide = ({heading, words, image}) => {
    return (
        <div className='decide-card'  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration='1000'>
            <img src={image} alt='paabolic img' />

            <div className='decide-card-inner'>
                <h2>
                   {heading}
                </h2>


                <p>
                   {words}
                </p>

                <button>
                    Learn More
                </button>
            </div>
        </div>
    )
}
