import React from "react";
import "./profile.css";
import { Navbar } from "components/navbar/navbar";
import { Card } from "components/card/card";
import { BigCard } from "components/card/bigcard";
import { ProfileAbout } from "scenes/profilePage/profile-about";
import { ProfileCareer } from "scenes/profilePage/profile-career";
import { EditNav } from "components/edit-profile/editnav";
import { useMediaQuery } from "@mui/material";
import { InputFieldButton } from "../../components/buttons/input";
import { LargeInputFieldButton } from "components/buttons/largeinput";

export const ProfilePage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 518px)");
  const [isMyProfile, setIsMyProfile] = React.useState(true);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isAboutSection, setIsAboutSection] = React.useState(false);

  return (
    <div>
      <Navbar />
      {isMyProfile ? (
        <EditNav message={isEditing ? "Back" : "Edit"} />
      ) : (
        <div style={{ marginTop: "25px" }}></div>
      )}
      {isEditing ? (
        <div className="edit-view-outer-container">
          <form className="edit-view-container">
            <h1 id="edit-view-heading">Editing Profile</h1>
            <InputFieldButton
              type="password"
              name="password"
              id="password"
              label="Password"
              value="i.e. FolW!MYlinkdIN"
            />
            <InputFieldButton
              type="currentTerm"
              name="currentTerm"
              id="currentTerm"
              label="Current Term (_2_ format)"
              value="i.e. S23, F20, W21"
            />
            <InputFieldButton
              type="company"
              name="company"
              id="company"
              label="Company"
              value="Scotiabank"
            />
            <InputFieldButton
              type="studentProgram"
              name="studentProgram"
              id="studentProgram"
              label="Student Program"
              value="i.e. Velocity"
            />
            <InputFieldButton
              type="internPosition"
              name="internPosition"
              id="internPosition"
              label="Intern Position"
              value="i.e. Software Developer Intern"
            />
            <InputFieldButton
              type="internTeam"
              name="internTeam"
              id="internTeam"
              label="Intern Team"
              value="i.e. ISS"
            />
            <InputFieldButton
              type="location"
              name="location"
              id="location"
              label="Location (Please use city)"
              value="i.e. Toronto"
            />
            <InputFieldButton
              type="educationalInstitution"
              name="educationalInstitution"
              id="educationalInstitution"
              label="Educational Institution"
              value="i.e. Queen's University"
            />
            <InputFieldButton
              type="schoolProgram"
              name="schoolProgram"
              id="schoolProgram"
              label="School Program"
              value="i.e. Computer Science"
            />
            <InputFieldButton
              type="twitter"
              name="twitter"
              id="twitter"
              label="Twitter"
              value="Link to your Twitter account"
            />
            <InputFieldButton
              type="LinkedIn"
              name="LinkedIn"
              id="LinkedIn"
              label="LinkedIn"
              value="Link to your LinkedIn account"
            />
            <InputFieldButton
              type="Facebook"
              name="Facebook"
              id="Facebook"
              label="Facebook"
              value="Link to your Facebook account"
            />
            <InputFieldButton
              type="GitHub"
              name="GitHub"
              id="GitHub"
              label="GitHub"
              value="Link to your GitHub account"
            />
            <LargeInputFieldButton
              type="meInOneSentence"
              name="meInOneSentence"
              id="meInOneSentence"
              label="Describe Yourself In One Sentence! (150 char max)"
              value="i.e. I enjoy playing soccer and tennis on the weekends!"
            />
            <InputFieldButton
              type="Tag1"
              name="Tag1"
              id="Tag1"
              label="Tag1"
              value="i.e. Coding"
            />
            <InputFieldButton
              type="Tag2"
              name="Tag2"
              id="Tag2"
              label="Tag2"
              value="i.e. Tennis"
            />
            <InputFieldButton
              type="Tag3"
              name="Tag3"
              id="Tag3"
              label="Tag3"
              value="i.e. Foodie"
            />
            <InputFieldButton
              type="Tag4"
              name="Tag4"
              id="Tag4"
              label="Tag4"
              value="i.e. Gym Bro"
            />
            <button className="edit-view-submit">Save</button>
          </form>
        </div>
      ) : (
        <div className="profile-view-container">
          {isSmallScreen ? <Card /> : <BigCard />}
          <div className="profile-nav">
            <div id="temp-1">ABOUT</div>
            <div id="temp-2">CAREER</div>
          </div>
          {isAboutSection ? <ProfileAbout /> : <ProfileCareer />}
        </div>
      )}
    </div>
  );
};
