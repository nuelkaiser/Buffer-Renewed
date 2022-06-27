import React from 'react';
import './Button.css'

const Button = ({ok}) => {
  return (
    <div className={ok ? 'alt-button' : 'button'}>
        <p>Join waitlist</p>
    </div>
  )
}

export default Button