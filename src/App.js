import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import CryptoForm from './components/CryptoForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (username) => {
    setUserName(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <CryptoForm userName={userName} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;