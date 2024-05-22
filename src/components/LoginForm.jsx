"use client"
// src/components/form.jsx
import React, { useRef } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="Username" ref={usernameRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="text" name="password" ref={passwordRef} />
      </label>
      <br /><br />
      <input type="submit" value="Submit" />
    </form>
  );
}
