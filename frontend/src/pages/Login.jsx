// src/components/Login.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "./Auth/authSlice";
import { Link } from "react-router-dom";
import "../styles/login.css";
import img1 from "../assets/img1.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const { userInfo, loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(formData));

    if (result.meta.requestStatus === "fulfilled") {
      const redirectTo = new URLSearchParams(location.search).get("redirect") || "/";
      navigate(redirectTo); 
    }
  };

  
  useEffect(() => {
    if (userInfo) {
      const redirectTo = new URLSearchParams(location.search).get("redirect") || "/";
      navigate(redirectTo);
    }
  }, [userInfo, location.search, navigate]);

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={img1} alt="Shopping concept" />
      </div>
      <div className="login-form">
        <h2>Log in to your account</h2>
        <p>Enter your <strong>credentials below</strong></p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;
