import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "./Auth/authSlice";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import img1 from "../assets/img1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(formData));
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-image">
          <img src={img1} alt="Shopping concept" />
        </div>
        <div className="signup-form">
          <h2>Create an account</h2>
          <p>Enter your <strong>details below</strong></p>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <button type="submit" className="create-account" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <p className="login-link">Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
