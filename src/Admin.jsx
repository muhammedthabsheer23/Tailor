
import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Admin1.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      login(username);
      navigate(`/admin`);
    }
    else if (username === 'user' && password === '111') {
        login(username);
        navigate(`/admin`);
      }
     else {
      alert('Invalid password or username');
    }
  };

  return (
    <div className='admin'>
      <div className="adminheader">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <br />
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
