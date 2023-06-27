import React from "react";
import "./registration.css";
import { NextButton } from "../../components/buttons/next";
import { InputFieldButton } from "../../components/buttons/input";

export const Page2 = () => {
  return (
    <div>
      <h2 className="registration-page-desc">User Information:</h2>
      <div className="registration-content-container">
        <InputFieldButton
          type="firstName"
          name="firstName"
          id="firstName"
          label="First Name"
          placeholder="i.e. Amaan"
        />
        <InputFieldButton
          type="lastName"
          name="lastName"
          id="lastName"
          label="Last Name"
          placeholder="i.e. Javed"
        />
        <InputFieldButton
          type="username"
          name="username"
          id="username"
          label="Username"
          placeholder="i.e. amaanjaved123"
        />
        <InputFieldButton
          type="password"
          name="password"
          id="password"
          label="Password"
          placeholder="i.e. FolW!MYlinkdIN"
        />
      </div>
      <NextButton message="Next" />
    </div>
  );
};
