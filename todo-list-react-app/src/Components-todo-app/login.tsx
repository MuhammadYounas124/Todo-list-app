import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication check (you can replace this with a real API call)
    if (email === "jun123@gmail.com" && password === "password123") {
      setIsLoggedIn(true);
      navigate("/todo"); // Redirect to the todo page after successful login
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
      {error && <div className="text-danger">{error}</div>}
      <button onClick={handleLogin} className="btn btn-primary">Log In</button>
    </div>
  );
};

export default Login;


