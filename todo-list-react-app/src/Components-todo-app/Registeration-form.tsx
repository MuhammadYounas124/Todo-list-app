// Registration.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Redux/Redux-action";

const Registration = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { displayName, email, password };
    dispatch(register(user));
    alert('Registration Successful');
    navigate('/login');
  };

  return (
    <div className="register-box">
      <div className="card">
        <div className="card-body">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;



