import React from "react";
import "./registration.css";
import { InputFieldButton } from "../../components/buttons/input";

export const Page2 = ({ inputProps }) => {
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
          content={inputProps.firstNameKey.content}
          valuefunction={inputProps.firstNameKey.valuefunction}
        />
        <InputFieldButton
          type="lastName"
          name="lastName"
          id="lastName"
          label="Last Name"
          placeholder="i.e. Javed"
          content={inputProps.lastNameKey.content}
          valuefunction={inputProps.lastNameKey.valuefunction}
        />
        <InputFieldButton
          type="password"
          name="password"
          id="password"
          label="Password"
          placeholder="i.e. FolW!MYlinkdIN"
          content={inputProps.passwordKey.content}
          valuefunction={inputProps.passwordKey.valuefunction}
        />
      </div>
    </div>
  );
};