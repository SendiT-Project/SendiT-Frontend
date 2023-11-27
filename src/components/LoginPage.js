import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Perform email validation
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Perform password validation
    setPasswordError(validatePassword(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform overall form validation
    const isFormValid = validateForm();

    if (isFormValid) {
      // Implement your login logic here, e.g., send a request to the API
      console.log('Email:', email);
      console.log('Password:', password);
      // You can redirect the user to the dashboard or handle authentication as needed
    } else {
      console.log('Form submission aborted due to validation errors');
    }
  };

  const validateEmail = (value) => {
    // Add your email validation logic here
    // For simplicity, let's assume a basic check for a non-empty value
    return value.trim() === '' ? 'Email is required' : '';
  };

  const validatePassword = (value) => {
    // Add your password validation logic here
    // For simplicity, let's assume a basic check for a minimum length
    return value.length < 6 ? 'Password must be at least 6 characters long' : '';
  };

  const validateForm = () => {
    // Validate each form field
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    // Update state with validation errors
    setEmailError(emailError);
    setPasswordError(passwordError);

    // Return true if there are no validation errors
    return emailError === '' && passwordError === '';
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
