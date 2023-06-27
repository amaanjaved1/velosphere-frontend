import React from "react";
import "./registration.css";
import { NextButton } from "../../components/buttons/next";
import { InputFieldButton } from "../../components/buttons/input";

export const Page3 = () => {
  return (
    <div>
      <h2 className="registration-page-desc">Internship Information:</h2>
      <div className="registration-content-container">
        <InputFieldButton
          type="studentProgram"
          name="studentProgram"
          id="studentProgram"
          label="Student Program"
          placeholder="i.e. Velocity"
        />
        <InputFieldButton
          type="internPosition"
          name="internPosition"
          id="internPosition"
          label="Intern Position"
          placeholder="i.e. Software Developer Intern"
        />
        <InputFieldButton
          type="location"
          name="location"
          id="location"
          label="Location (Please use city)"
          placeholder="i.e. Toronto"
        />
        <InputFieldButton
          type="currentTerm"
          name="currentTerm"
          id="currentTerm"
          label="Current Term (_2_ format)"
          placeholder="i.e. S23, F20, W21"
        />
      </div>
      <NextButton message="Next" />
    </div>
  );
};
