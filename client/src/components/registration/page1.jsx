import React from "react";
import "./registration.css";
import { DropDownButton } from "../../components/buttons/dropdown";
import { InputFieldButton } from "../../components/buttons/input";

export const Page1 = ({ inputProps }) => {
  return (
    <div>
      <h1 id="registration-welcome">Welcome to the Velosphere Community</h1>
      <h2 className="registration-page-desc">
        First, please verify the following:
      </h2>
      <div className="registration-content-container">
        <DropDownButton
          contentCompany={inputProps.companyKey.content}
          valuefunctionCompany={inputProps.companyKey.valuefunction}
          contentColor={inputProps.colorKey.content}
          valuefunctionColor={inputProps.colorKey.valuefunction}
        />
        <InputFieldButton
          type="email"
          name="email"
          id="email"
          label="Email address"
          placeholder="i.e. you@company-email.com"
          content={inputProps.emailKey.content}
          valuefunction={inputProps.emailKey.valuefunction}
        />
      </div>
    </div>
  );
};
