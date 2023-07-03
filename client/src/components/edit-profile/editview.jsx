import React from "react";
import "./editview.css";
import { InputFieldButton } from "../../components/buttons/input";
import { LargeInputFieldButton } from "components/buttons/largeinput";

export const EditView = ({ cardContent }) => {
  return (
    <div className="edit-view-outer-container">
      <form className="edit-view-container">
        <h1 id="edit-view-heading">Editing Profile</h1>
        <InputFieldButton
          type="password"
          name="password"
          id="password"
          label="Password"
          placeholder="i.e. FolW!MYlinkdIN"
        />
        <InputFieldButton
          type="currentTerm"
          name="currentTerm"
          id="currentTerm"
          label="Current Term (_2_ format)"
          placeholder="i.e. S23, F20, W21"
        />
        <InputFieldButton
          type="company"
          name="company"
          id="company"
          label="Company"
          placeholder="Scotiabank"
        />
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
          type="internTeam"
          name="internTeam"
          id="internTeam"
          label="Service Line"
          placeholder="i.e. CID&A"
        />
        <InputFieldButton
          type="location"
          name="location"
          id="location"
          label="Office Location (please use format below)"
          placeholder="i.e. 44 King Street West, Toronto, ON"
        />
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
        <LargeInputFieldButton
          type="meInOneSentence"
          name="meInOneSentence"
          id="meInOneSentence"
          label="Describe Yourself In One Sentence! (150 char max)"
          placeholder="i.e. I enjoy playing soccer and tennis on the weekends!"
        />
        <InputFieldButton
          type="Tag1"
          name="Tag1"
          id="Tag1"
          label="Tag1"
          placeholder="i.e. Coding"
        />
        <InputFieldButton
          type="Tag2"
          name="Tag2"
          id="Tag2"
          label="Tag2"
          placeholder="i.e. Tennis"
        />
        <InputFieldButton
          type="Tag3"
          name="Tag3"
          id="Tag3"
          label="Tag3"
          placeholder="i.e. Foodie"
        />
        <InputFieldButton
          type="Tag4"
          name="Tag4"
          id="Tag4"
          label="Tag4"
          placeholder="i.e. Gym Bro"
        />
        <button className="edit-view-submit">Save</button>
      </form>
    </div>
  );
};
