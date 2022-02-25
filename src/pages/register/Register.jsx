import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Email</label>
        <input className="registerInput" type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Login</button>
      </form>
      <button className="registerLoginButton">Register</button>
    </div>
  );
};

export default Register;
