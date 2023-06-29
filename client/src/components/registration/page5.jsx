import React from "react";
import "./registration.css";
import { NextButton } from "../../components/buttons/next";
import { InputFieldButton } from "../../components/buttons/input";

export const Page5 = () => {
  return (
    <div>
      <h2 className="registration-page-desc" style={{ marginBottom: "5px" }}>
        Link Your Socials:{" "}
      </h2>
      <h3 id="registration-not-applicable">(Leave blank if n/a)</h3>
      <div className="registration-content-container">
        <InputFieldButton
          type="twitter"
          name="twitter"
          id="twitter"
          label="Twitter"
          placeholder="Link to your Twitter account"
        />
        <InputFieldButton
          type="LinkedIn"
          name="LinkedIn"
          id="LinkedIn"
          label="LinkedIn"
          placeholder="Link to your LinkedIn account"
        />
        <InputFieldButton
          type="Facebook"
          name="Facebook"
          id="Facebook"
          label="Facebook"
          placeholder="Link to your Facebook account"
        />
        <InputFieldButton
          type="GitHub"
          name="GitHub"
          id="GitHub"
          label="GitHub"
          placeholder="Link to your GitHub account"
        />
      </div>
      <NextButton message="Next" />
    </div>
  );
};
