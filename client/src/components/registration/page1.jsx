import React from "react";
import "./registration.css";
import { NextButton } from "../../components/buttons/next";
import { DropDownButton } from "../../components/buttons/dropdown";
import { InputFieldButton } from "../../components/buttons/input";

export const Page1 = () => {
  return (
    <div>
      <h1 id="registration-welcome">Welcome to the Velosphere Community</h1>
      <h2 className="registration-page-desc">
        First, please verify the following:
      </h2>
      <div className="registration-content-container">
        <DropDownButton />
        <InputFieldButton
          type="email"
          name="email"
          id="email"
          label="Email address"
          placeholder="i.e. you@company-email.com"
        />
        <NextButton message="Verify" />
      </div>
      <NextButton message="Next" />
    </div>
  );
};
