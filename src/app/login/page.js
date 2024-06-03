'use client'
import React, { useState } from 'react';
import { login } from '../actions/cookie';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/searchuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });


      const userData = await response.json();
      console.log('Logged in as:', userData.username);


    } catch (error) {
      console.error('Error during login:', error.message);
      setError(error.message);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </main>
  );
}
