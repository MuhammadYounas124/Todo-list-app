import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Redux-action";
import "admin-lte/dist/css/adminlte.min.css";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Uses useNavigate from react-router-dom to redirect the user after a successful login.
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email === "jun123@gmail.com" && password === "password123") { // email and password manage input values.
      dispatch(login({ email })); // Checks if the entered credentials match predefined values
      // (jun123@gmail.com and password123).
      setIsLoggedIn(true); // If valid, dispatches a login action, updates login state (setIsLoggedIn), 
      //and navigates to the /todo page.
      navigate("/todo"); // Redirect to the todo page after successful login
    } else {
      setError("Invalid credentials"); // error shows an error message if credentials are invalid.
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button onClick={handleLogin} className="btn btn-primary w-100">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;

