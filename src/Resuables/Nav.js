import React from 'react'
import Logo from '../Images/Logo';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='nav-container'>
            <Logo />

            <ul className='nav-list-container'>
                <Link to='/' className='link'>
                    <li>
                        Home
                    </li>
                </Link>

                <li>
                    Services
                </li>

                <li>
                    About us
                </li>
                <Link to='/SignUp' className='link'>
                    <Button />
                </Link>
            </ul>
        </div>
    )
}

export default Nav