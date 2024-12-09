import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      navigate('/todo');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-box">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <h2>Login</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
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
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
