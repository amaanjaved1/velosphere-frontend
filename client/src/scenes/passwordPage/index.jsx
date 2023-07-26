import React from "react";
import { InputFieldButton } from "../../components/buttons/input";
import { useState, useEffect } from "react";
import { NextButton } from "../../components/buttons/next";
import "./password.css";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidForm, setisValidForm] = useState(false);

  const sendPassword = async () => {
    try {
      if (!isValidForm) {
        window.alert("Passwords must match");
      } else {
        const requestBody = {
          email: email,
          password: password,
        };

        const response = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}/auth/forgot-password`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        // Get the status of the response

        const status = response.status;

        if (status === 200) {
          window.alert("Instructions sent to your email");
        } else {
          window.alert("Something went wrong. Try again later");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isValidEmail = () => {
    if (
      email.includes("@scotiabank.com") ||
      email.includes("@tangerine.ca") ||
      email.includes("@mdfinancial.ca")
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (
      password === confirmPassword &&
      password.length > 0 &&
      isValidEmail() === true
    ) {
      setisValidForm(true);
    } else {
      setisValidForm(false);
    }
  }, [email, password, confirmPassword]);

  return (
    <>
      <div className="change-password-form">
        <h1 className="change-password-main">Change Password</h1>
        <h2 className="change-password-message">
          (Passwords must match in order to reset)
        </h2>
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
          type="password"
          name="password"
          id="password"
          label="New Password"
          placeholder="Enter a new password"
          content={password}
          valuefunction={setPassword}
        />
        <InputFieldButton
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          label="Retype New Password"
          placeholder="Passwords must match"
          content={confirmPassword}
          valuefunction={setConfirmPassword}
        />
        <NextButton
          action={sendPassword}
          message="Reset"
          color={isValidForm === true ? "green" : "#3e3e3e"}
        >
          Submit
        </NextButton>
      </div>
    </>
  );
};
