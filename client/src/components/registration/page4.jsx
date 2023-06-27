import React from "react";
import "./registration.css";
import { NextButton } from "../../components/buttons/next";
import { InputFieldButton } from "../../components/buttons/input";

export const Page4 = () => {
  return (
    <div>
      <h2 className="registration-page-desc">School Information:</h2>
      <div className="registration-content-container">
        <InputFieldButton
          type="educationalInstitution"
          name="educationalInstitution"
          id="educationalInstitution"
          label="Educational Institution"
          placeholder="i.e. Queen's University"
        />
        <InputFieldButton
          type="schoolProgram"
          name="schoolProgram"
          id="schoolProgram"
          label="School Program"
          placeholder="i.e. Computer Science"
        />
      </div>
      <NextButton message="Next" />
    </div>
  );
};
