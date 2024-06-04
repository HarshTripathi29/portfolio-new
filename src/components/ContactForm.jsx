import React, { useState } from 'react';
import '../App.css';
import './style.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You would integrate EmailJS or another email service here
    alert('Form submitted');
  };

  return (
    <div>
    <div className='contact-heading'>
    <h1>Contact Me</h1>
    <p>Shoot me an email if you want to connect!</p>
    <p>harshtripathi@gmail.com</p>
    </div>
    <form onSubmit={handleSubmit} className='contact-form'>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit">Contact Me</button>
    </form>
    </div>
  );
}

export default ContactForm;
