import React from "react";
import "./regsuc.css";

export const RegistrationSuccessPage = () => {
  return (
    <>
      <h1 className="registration-successful-main">Registration Successful!</h1>
      <h2 className="registration-successful-message">
        An email has been sent to the provided email with a confirmation link.
      </h2>
      <h2 className="registration-successful-message">
        You MUST click the link to activate your account.
      </h2>
      <h3 className="registration-successful-message">
        Otherwise you cannot log in{" "}
      </h3>
      <a href="/login">
        <h3 id="registration-successful-link">Go to login page</h3>
      </a>
      <h3 className="registration-successful-bottom">Happy Networking!</h3>
    </>
  );
};
