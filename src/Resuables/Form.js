import React from 'react';
import { useState } from 'react';
import '../Pages/SignUp.css';

const Form = () => {

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
        <form onSubmit={submit}>
            <label>Full Name</label>
            <input type='text' name='name' placeholder='Enter your Full name' value={name} onChange={(e) => { setName(e.target.value) }} />

            <label>Email Address</label>
            <input type='email' name='email' placeholder='Enter your Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }} />

            <button>Submit</button>
        </form>
    )
}

export default Form