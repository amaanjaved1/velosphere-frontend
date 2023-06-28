import React from "react";
import "./profile.css";
import { Navbar } from "components/navbar/navbar";
import { Card } from "components/card/card";
import { BigCard } from "components/card/bigcard";
import { ProfileAbout } from "scenes/profilePage/profile-about";
import { ProfileCareer } from "scenes/profilePage/profile-career";
import { EditNav } from "components/edit-profile/editnav";
import { useMediaQuery } from "@mui/material";

export const ProfilePage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 518px)");
  const [isMyProfile, setIsMyProfile] = React.useState(true);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isAboutSection, setIsAboutSection] = React.useState(false);

  return (
    <div>
      <Navbar />
      {isMyProfile ? <EditNav message={isEditing ? "Back" : "Edit"} /> : null}
      <div className="profile-view-container">
        {isSmallScreen ? <Card /> : <BigCard />}
        <div className="profile-nav">
          <div id="temp-1">ABOUT</div>
          <div id="temp-2">CAREER</div>
        </div>
        {isAboutSection ? <ProfileAbout /> : <ProfileCareer />}
      </div>
    </div>
  );
};
