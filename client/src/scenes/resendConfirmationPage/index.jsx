import "./resend.css";
import React, { useState } from "react";
import { InputFieldButton } from "../../components/buttons/input";
import { NextButton } from "../../components/buttons/next";

export const ResendVerificationPage = () => {
  const [email, setEmail] = useState("");
  const [commEmail, setCommEmail] = useState("");

  const resendVerification = async () => {
    if (email === "") {
      window.alert("Please enter your email address");
      return;
    }

    if (!isValidEmail()) {
      window.alert("Please enter a valid email address");
      return;
    }

    try {
      const requestBody = { email: email, commEmail: commEmail };
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/resend-confirmation-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      console.log(response);

      if (response.ok) {
        window.alert(
          "Verification email has been recent! Please check your inbox!"
        );
      } else {
        window.alert(`Request failed: ${response.status}`);
      }
    } catch (err) {
      window.alert("An error occurred", err);
    }
  };

  const isValidEmail = () => {
    if (
      email.includes("@scotiabank.com") ||
      email.includes("@tangerine.ca") ||
      (email.includes("@mdfinancial.ca") && commEmail.includes("@"))
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="change-password-form">
        <h1 className="change-password-main">Resend Verification Email</h1>
        <h2 className="change-password-message">
          Return to <a href="/login">Login</a>
        </h2>
        <InputFieldButton
          type="email"
          name="email"
          id="email"
          label="Work Email"
          placeholder=""
          content={email}
          valuefunction={setEmail}
        />
        <InputFieldButton
          type="personalEmail"
          name="personalEmail"
          id="personalEmail"
          label="Personal Email"
          placeholder="Where the confirmation email will be sent"
          content={commEmail}
          valuefunction={setCommEmail}
        />
        <NextButton action={resendVerification} message="Send" color="#ffa877">
          Send
        </NextButton>
      </div>
    </>
  );
};
