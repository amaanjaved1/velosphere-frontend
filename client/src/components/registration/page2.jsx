import React from "react";
import "./registration.css";
import { InputFieldButton } from "../../components/buttons/input";

export const Page2 = ({ inputProps }) => {
  return (
    <div>
      <h2 className="registration-page-desc">User Information:</h2>
      <div className="registration-content-container">
        <InputFieldButton
          type="personalEmail"
          name="personalEmail"
          id="personalEmail"
          label="Personal Email"
          placeholder="Where email communications will be sent"
          content={inputProps.commEmailKey.content}
          valuefunction={inputProps.commEmailKey.valuefunction}
          max={200}
        />
        <InputFieldButton
          type="firstName"
          name="firstName"
          id="firstName"
          label="First Name"
          placeholder="i.e. Amaan"
          content={inputProps.firstNameKey.content}
          valuefunction={inputProps.firstNameKey.valuefunction}
          max={25}
        />
        <InputFieldButton
          type="lastName"
          name="lastName"
          id="lastName"
          label="Last Name"
          placeholder="i.e. Javed"
          content={inputProps.lastNameKey.content}
          valuefunction={inputProps.lastNameKey.valuefunction}
          max={25}
        />
        <InputFieldButton
          type="password"
          name="password"
          id="password"
          label="Password"
          placeholder="Please DO NOT use your work password(s)"
          content={inputProps.passwordKey.content}
          valuefunction={inputProps.passwordKey.valuefunction}
          max={230}
        />
      </div>
    </div>
  );
};
