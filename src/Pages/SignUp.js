import React from 'react';
import './SignUp.css';
import Final from '../Images/final-burry.png';
import Footer from '../Resuables/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Form from '../Resuables/Form';

AOS.init();


const SignUp = () => {
 


  return (
    <div>
      <div className='hero-section2'>
        <img src={Final} className='final' alt='orange blurry background' />
        <div className='signup-hero-words' data-aos="fade-up">
          <h1>
            Get early access
          </h1>

          <p>
            Excited to try out buffer? We are too!
          </p>
        </div>
      </div>


      <div className='footer-hold'>

        <div className='form-container'  data-aos="fade-up" data-aos-duration='1000' data-aos-anchor-placement="top-center">

          <div className='join'>
              <h1>Join the waitlist</h1>
              <p>Join the waitlist and we'll contact you for access</p>
          </div>

          <Form />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default SignUp