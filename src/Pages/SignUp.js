import React from 'react';
import './SignUp.css';
import Final from '../Images/final-burry.png';
import Footer from '../Resuables/Footer';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();

    console.log(name)
    console.log(email)

    setName('');
    setEmail('');
  }


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

            <form onSubmit={submit}>
              <label>Full Name</label>
              <input type='text' name='name' placeholder='Enter your Full name' value={name} onChange={(e) => {setName(e.target.value)}} />

              <label>Email Address</label>
              <input  type='email' name='email' placeholder='Enter your Email Address' value={email} onChange={(e) => {setEmail(e.target.value)}}/>

              <button>Submit</button>
            </form>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default SignUp