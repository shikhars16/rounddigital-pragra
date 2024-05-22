"use client"
import React, { useRef } from 'react';
import '@/styles/forms.css';

export function Form() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Assuming the server returns a JSON object with a token
      const data = await response.json();
      console.log('Token:', data.token);

      // Reset input fields to null
      usernameRef.current.value = '';
      passwordRef.current.value = '';
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        Username:
        <input type="text" name="username" ref={usernameRef} className="form-input" />
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
