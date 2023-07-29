import React from "react";

export const ProfileCareer = ({ cardContent }) => {
  return (
    <div className="profile-career-content">
      <div className="profile-text">
        <h1> {cardContent.educationalInstitution}</h1>
      </div>
      <div className="profile-text">
        <h1>{cardContent.schoolProgram}</h1>
      </div>
      <div className="profile-text">
        <h1>{cardContent.internPosition}</h1>
      </div>
      <div className="profile-text">
        <h1>{cardContent.internTeam}</h1>
      </div>
    </div>
  );
};
