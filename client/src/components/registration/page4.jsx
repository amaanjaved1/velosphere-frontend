import React from "react";
import "./registration.css";
import { InputFieldButton } from "../../components/buttons/input";

export const Page4 = ({ inputProps }) => {
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
          content={inputProps.educationalInstitutionKey.content}
          valuefunction={inputProps.educationalInstitutionKey.valuefunction}
        />
        <InputFieldButton
          type="schoolProgram"
          name="schoolProgram"
          id="schoolProgram"
          label="School Program"
          placeholder="i.e. Computer Science"
          content={inputProps.schoolProgramKey.content}
          valuefunction={inputProps.schoolProgramKey.valuefunction}
        />
      </div>
    </div>
  );
};
