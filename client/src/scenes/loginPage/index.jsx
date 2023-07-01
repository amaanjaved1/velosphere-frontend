import React from "react";
import "./login.css";
import { BsGlobe } from "react-icons/bs";

export const LoginPage = () => {
  return (
    <div className="login">
      <div className="form-side">
        <div className="top">
          <BsGlobe className="icon" color="white" />
          <div className="title">
            <h5 className="title-com">.com</h5>
            <h1 className="title-text">VeloSphere</h1>
          </div>
          <h2 className="slogan">Unite. Collaborate. Thrive.</h2>
        </div>
        <form className="form-content">
          <div className="form-entry">
            <label htmlFor="email" className="label">
              Enter email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-content"
            />
          </div>

          <div className="form-entry">
            <label htmlFor="password" className="label">
              Enter password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-content"
            />
          </div>

          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
        <div className="bottom">
          <h3 style={{ fontWeight: "700" }}>Forgot your password?</h3>
          <h3>
            Haven't signed up yet?
            <span style={{ fontWeight: "700" }}> Register here.</span>
          </h3>
          <h3
            style={{ marginTop: "50px", fontSize: "10px", fontWeight: "300" }}
          >
            App created by{" "}
            <a href="https://www.linkedin.com/in/amaan-javed/">Amaan Javed</a>
          </h3>
        </div>
      </div>
      <div className="image-side"></div>
    </div>
  );
};
