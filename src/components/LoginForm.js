import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Podaj prawidłowy email';
    }

    if (!password.trim()) {
      newErrors.password = 'Hasło jest wymagane';
    } else if (password.length < 6) {
      newErrors.password = 'Hasło musi mieć co najmniej 6 znaków';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', email.split('@')[0]);
        onLogin(email.split('@')[0]);
      } else {
        setErrors({ form: 'Błędne dane logowania' });
      }
    } catch (error) {
      setErrors({ form: 'Błąd połączenia z serwerem' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>CryptoApp</h1>
        <p className="subtitle">Szyfrowanie i deszyfrowanie wiadomości</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Wpisz swój email"
              aria-label="Email"
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Hasło:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wpisz swoje hasło"
              aria-label="Hasło"
              aria-invalid={!!errors.password}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          {errors.form && <span className="error form-error">{errors.form}</span>}

          <button type="submit" disabled={loading} aria-busy={loading}>
            {loading ? 'Logowanie...' : 'Zaloguj się'}
          </button>
        </form>

        <p className="info">
          Demo: email@example.com / password123
        </p>
      </div>
    </div>
  );
};

export default LoginForm;