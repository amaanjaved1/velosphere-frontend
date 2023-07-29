import React from "react";
import "./registration.css";
import { InputFieldButton } from "../../components/buttons/input";

export const Page3 = ({ inputProps }) => {
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
          content={inputProps.studentProgramKey.content}
          valuefunction={inputProps.studentProgramKey.valuefunction}
          readOnly={true}
        />
        <InputFieldButton
          type="internPosition"
          name="internPosition"
          id="internPosition"
          label="Intern Position"
          placeholder="i.e. Software Developer Intern"
          content={inputProps.internPositionKey.content}
          valuefunction={inputProps.internPositionKey.valuefunction}
          max={55}
        />
        <InputFieldButton
          type="internTeam"
          name="internTeam"
          id="internTeam"
          label="Service Line"
          placeholder="i.e. CID&A"
          content={inputProps.internTeamKey.content}
          valuefunction={inputProps.internTeamKey.valuefunction}
          max={55}
        />
        <InputFieldButton
          type="location"
          name="location"
          id="location"
          label="Office Location (please use format below)"
          placeholder="i.e. 44 King Street West, Toronto, ON"
          content={inputProps.locationKey.content}
          valuefunction={inputProps.locationKey.valuefunction}
        />
        <InputFieldButton
          type="currentTerm"
          name="currentTerm"
          id="currentTerm"
          label="Current Term (_2_ format)"
          placeholder="i.e. S23, F20, W21"
          content={inputProps.currentTermKey.content}
          valuefunction={inputProps.currentTermKey.valuefunction}
          readOnly={true}
        />
      </div>
    </div>
  );
};
