import React from 'react';
import { useState } from 'react';
import '../Pages/SignUp.css';


const Form = ({ status, message, onValidated }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

  

  
    const submit = (e) => {
      e.preventDefault();

      email &&
      name &&
      email.indexOf("@") > -1 &&
      onValidated({
          EMAIL: email,
          MERGE1: name,
      });
  
   
  
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

            
        {status === "sending" && 
          <div className='sending'>
            sending...
          </div>
        }
        {status === "error" && (
          <div 
          className='error'
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className='success'
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        </form>
    )
}

export default Form