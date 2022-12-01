import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if(!validateEmail(email)) {
      setErrorMessage('Your email is invalid.');
      return;
    } else if (inputType === 'email') {
      setEmail(inputValue);
    }
    if(!name) {
      setErrorMessage('Name is required.');
      return;
    } else if (inputType === 'name') {
      setName(inputValue);
    }
    if(!message) {
      setErrorMessage('Message is required.');
      return;
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  return (
    <div>
      <h1>Contact</h1>
        <form className="form">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
          />
          <button type="button">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    </div>
  );
}