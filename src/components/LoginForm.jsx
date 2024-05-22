"use client"
// src/components/LoginForm.jsx
import React, { useRef } from 'react';
import '@/styles/forms.css'


export function Form() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      Username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
    <label className="form-label">
      Username:
      <input type="text" name="Username" ref={usernameRef} className="form-input" />
    </label>
    <br />
    <label className="form-label">
      Password:
      <input type="password" name="password" ref={passwordRef} className="form-input" />
    </label>
    <br /><br />
    <button type="submit" className="form-submit">Sign In</button>
  </form>
  );
}
