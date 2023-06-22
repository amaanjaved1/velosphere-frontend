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
        <form>
          <label htmlFor="company" className="label">
            Select company:
          </label>
          <select name="company" id="company" className="input">
            <option value="scotiabank">Scotiabank</option>
            <option value="tangerine">Tangerine</option>
            <option value="mdfinancial">MD Financial</option>
          </select>

          <label htmlFor="email" className="label">
            Enter email:
          </label>
          <input type="email" name="email" id="email" className="input" />

          <label htmlFor="password" className="label">
            Enter password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
          />

          <button type="submit" className="button">
            Submit
          </button>
          <h4 className="select-company">Select company first</h4>
        </form>
        <div className="bottom">
          <h3 className="forgot-password">Forgot your password?</h3>
          <h3 className="no-account">Don't have an account?</h3>
          <h5 className="no-account">App created by Amaan Javed</h5>
        </div>
      </div>
      <div className="image-side"></div>
    </div>
  );
};
