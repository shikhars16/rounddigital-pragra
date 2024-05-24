"use client"
import React, { useRef, useState } from 'react';
import '@/styles/forms.css';

export function Form() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showUserNotFound, setShowUserNotFound] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch(isRegisterMode ? 'http://localhost:3000/register' : 'http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        if (!isRegisterMode && errorMessage.includes('User not found')) {
          setShowUserNotFound(true);
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Response:', data);

      // Reset input fields
      usernameRef.current.value = '';
      passwordRef.current.value = '';

      // Hide "User not found" message if it was displayed previously
      setShowUserNotFound(false);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleRegisterClick = () => {
    setIsRegisterMode(true);
  };

  const handleAddData = async (event) => {
    await handleSubmit(event);
    setIsRegisterMode(false);
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  const handleCancel = () => {
    setIsRegisterMode(false);
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  const handleInputChange = () => {
    const usernameValue = usernameRef.current.value.trim();
    const passwordValue = passwordRef.current.value.trim();
    setIsFormValid(usernameValue !== '' && passwordValue !== '');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        {isRegisterMode ? 'New Username:' : 'Username:'}
        <input type="text" name="username" ref={usernameRef} className="form-input" onChange={handleInputChange} />
      </label>
      <br />
      <label className="form-label">
        {isRegisterMode ? 'New Password:' : 'Password:'}
        <input type="password" name="password" ref={passwordRef} className="form-input" onChange={handleInputChange} />
      </label>
      <br />
      {showUserNotFound && (
        <p style={{ color: 'red' }}>User not found. Please register.</p>
      )}
      <br />
      {isRegisterMode ? (
        <>
          <button type="button" className="form-submit" onClick={handleAddData} disabled={!isFormValid}>
            Register
          </button>
          <button type="button" className="form-submit" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <button type="submit" className="form-submit">
          Sign in
        </button>
      )}
    </form>
  );
}
