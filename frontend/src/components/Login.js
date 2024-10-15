import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Add your CSS styles here

const Login = () => {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username && email && password) {
      try {
        const response = await fetch('http://localhost:5004/register', { // Use the register endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.message); // Alert on successful registration
          navigate('/'); // Redirect after successful registration
        } else {
          setError(data.error);
          alert(data.error); // Alert on error
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
        alert('An error occurred. Please try again.'); // Alert on error
      }
    } else {
      setError('Please fill in all fields');
      alert('Please fill in all fields'); // Alert on empty fields
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
