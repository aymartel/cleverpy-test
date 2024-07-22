import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';



export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center text-2xl font-bold text-primary mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-primary mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button ">Login</button>
          <label className="text-xs text-primary mt-2" htmlFor="password">*Click en Login! No se esta gestionando email & password</label>

        </form>
      </div>
    </div>
  );
};
