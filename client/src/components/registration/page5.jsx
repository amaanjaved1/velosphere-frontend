import React from "react";
import "./registration.css";
import { InputFieldButton } from "../../components/buttons/input";

export const Page5 = ({ inputProps }) => {
  return (
    <div>
      <h2 className="registration-page-desc" style={{ marginBottom: "5px" }}>
        Link Your Socials:{" "}
      </h2>
      <h3 id="registration-not-applicable" style={{ marginBottom: "25px" }}>
        (Type n/a if not applicable)
      </h3>
      <div className="registration-content-container">
        <InputFieldButton
          type="LinkedIn"
          name="LinkedIn"
          id="LinkedIn"
          label="LinkedIn"
          placeholder="Link to your LinkedIn account"
          content={inputProps.linkedinKey.content}
          valuefunction={inputProps.linkedinKey.valuefunction}
        />
        <InputFieldButton
          type="Facebook"
          name="Facebook"
          id="Facebook"
          label="Facebook"
          placeholder="Link to your Facebook account"
          content={inputProps.facebookKey.content}
          valuefunction={inputProps.facebookKey.valuefunction}
        />
        <InputFieldButton
          type="GitHub"
          name="GitHub"
          id="GitHub"
          label="GitHub"
          placeholder="Link to your GitHub account"
          content={inputProps.githubKey.content}
          valuefunction={inputProps.githubKey.valuefunction}
        />
      </div>
    </div>
  );
};
