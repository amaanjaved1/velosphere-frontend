import React from "react";
import "./regsuc.css";

export const RegistrationSuccessPage = () => {
  return (
    <>
      <h1 className="registration-successful-main">Registration Successful!</h1>
      <a href="/login">
        <h3 id="registration-successful-link">Go to login page</h3>
      </a>
      <h3 className="registration-successful-bottom">Happy Networking!</h3>
    </>
  );
};
