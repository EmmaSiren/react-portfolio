import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import './contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'name') {
      setErrorMessage('');
      setName(inputValue);
      return;
    } else if (!name) {
      setErrorMessage('Name is required.');
      return;
    }
    if (inputType === 'email') {
      setErrorMessage('');
      setEmail(inputValue);
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage('Your email is invalid.');
      return;
    }
    if (inputType === 'message') {
      setErrorMessage('');
      setMessage(inputValue);
      return;
    } else if (!message) {
      setErrorMessage('Message is required.');
      return;
    } 
  };

  return (
    <div>
      <h1 className="title">Contact</h1>
        <form className="form">
          <p>Name:</p>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
          />
          <p>Email:</p>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          />
          <p>Message:</p>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            className="message"
          />
        </form>
        <button className="button" type="button">Submit</button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    </div>
  );
}