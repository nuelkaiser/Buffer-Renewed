import React from 'react';
import { Link } from 'react-router-dom';
import Woman from '../Images/business-woman.png';
import './Home.css';
import Button from '../Resuables/Button';
import Orange from '../Images/orange-shaped-bg.png';
import BlueBurry from '../Images/blue-burry.png';
import BlueBurry2 from '../Images/blue-burry2.png';
import OrangeBurry from '../Images/orange-burry.png';
import OrangeBurry2 from '../Images/orange-burry2.png';
import Balance from '../Images/Balance.png';
import Earning from '../Images/Earning Source.png';
import Microsoft from '../Images/microsoft.png';
import Tangerine from '../Images/Tangerine';
import { Decide } from '../Resuables/Decide';
import Get from '../Images/Get-the-money.png';
import Curve from '../Images/The-curve.png';
import Mobile from '../Images/Mobile.png';
import Illustration from '../Resuables/Illustration';
import Illustration2 from '../Resuables/Illustration2';
import Illustration3 from '../Resuables/Illustration3';
import Illustration4 from '../Resuables/Illustration4';
import Bg from '../Images/Illustration-bg.png';
import LightButton from '../Resuables/LightButton';
import Footer from '../Resuables/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Home = () => {
    return (
        <div>

            <div className='hero-section'>
                <img src={Orange} className='orange' alt='Orange-shape' data-aos='zoom-in' data-aos-duration='2000'/>
                <img src={Balance} className='card-1' alt='Balance Card'  data-aos='fade-down-left' data-aos-duration='2000'/>
                <img src={Earning} className='card-2' alt='Earnings Card'  data-aos='fade-down-right' data-aos-duration='2000'/>
                <img src={BlueBurry} className='blue-burry' alt='blue blurry background' />
                <img src={BlueBurry2} className='blue-burry2' alt='blue blurry background' />
                <img src={OrangeBurry} className='orange-burry' alt='Orange blurry background' />
                <img src={OrangeBurry2} className='orange-burry-2' alt='Orange blurry background' />
                <div className='hero-words' data-aos="fade-down" data-aos-duration='3000'>
                    <h1>
                        After Hardwork, comes <span>Retirement</span> Enjoyment.
                    </h1>

                    <p className='hero-p'>
                        Buffer helps you and your team save for retirement with no hassle on your end.
                    </p>

                    <Link to='/SignUp' className='link'>
                        <Button ok={true} />
                    </Link>
                </div>

                <div className='image-container' data-aos='fade-up' data-aos-duration='3000'>
                    <img className='hero-img' src={Woman} alt='business-woman' />
                </div>
            </div>

            <div className='sponsors-container'>
                <h2 data-aos='zoom-in-down' >Trusted by your favourite businesses</h2>

                <div className='sponsors' data-aos='zoom-in-up' data-aos-duration='500'>
                   <Tangerine />
                   <img className='microsoft' src={Microsoft} alt='Microsoft'/>
                </div>
            </div>

            <div className='decide-container'>
                <h1>
                    Your pensions, your decisions
                </h1>

                <p>
                    Buffer allows you invest your pensions in line with your risk appetite and ethical (sharia)
                    standards
                </p>

                <div className='decision-option-container'>
                    <Decide heading={`Onboard your setup employees`}
                        words={`Pay your company's pension contributon with no hassle`}
                        image={Get} />

                    <Decide heading={`Grow your pensions`}
                        words={`Make your pensions work for you with our range of investment profiles`}
                        image={Curve} />

                    <Decide heading={`Manage from your phone`}
                        words={`Manage your pension account with confidence.`}
                        image={Mobile} />
                </div>
            </div>

            <div className='illustration-container '>
                <div className='illustrations'>
                    <div className='illustration-inner-1'>
                        <Illustration />
                        <Illustration3 />
                    </div>

                    <div className='illustration-inner-2'>
                        <div className='safe'  data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1>
                                Keeping your money Safe
                            </h1>
                            <p>
                                Buffer allows you invest your pensions in line with your risk appetite
                                and ethical (Sharia) standards.
                            </p>
                        </div>
                        <Illustration2 />
                        <Illustration4 />
                    </div>
                    <img className='Bg' src={Bg} alt='Background' />
                </div>
            </div>

            <div className='safe-container'>
                <div className='safe-container-inner' data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <h2>
                        Start Saving today with Buffer
                    </h2>

                    <p>
                        Open an account in 10 minutes, right from your phone.
                    </p>

                    <Link to='/SignUp' className='link'>
                        <LightButton />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home