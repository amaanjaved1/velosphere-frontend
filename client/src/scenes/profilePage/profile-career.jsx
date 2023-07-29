import React from "react";

export const ProfileCareer = ({ cardContent }) => {
  let educationalInstitution = cardContent.educationalInstitution || "";
  let schoolProgram = cardContent.schoolProgram || "";
  let internPosition = cardContent.internPosition || "";
  let internTeam = cardContent.internTeam || "";

  if (educationalInstitution.length > 25) {
    educationalInstitution = educationalInstitution.slice(0, 22) + "...";
  }

  if (schoolProgram.length > 25) {
    schoolProgram = schoolProgram.slice(0, 22) + "...";
  }

  if (internPosition.length > 25) {
    internPosition = internPosition.slice(0, 22) + "...";
  }

  if (internTeam.length > 25) {
    internTeam = internTeam.slice(0, 22) + "...";
  }

  return (
    <div className="profile-career-content">
      <h1 className="profile-career-heading">School:</h1>
      <div className="profile-text">
        <h1> {educationalInstitution}</h1>
      </div>
      <h1 className="profile-career-heading">School Program:</h1>
      <div className="profile-text">
        <h1>{schoolProgram}</h1>
      </div>
      <h1 className="profile-career-heading">Position:</h1>
      <div className="profile-text">
        <h1>{internPosition}</h1>
      </div>
      <h1 className="profile-career-heading">Service Line:</h1>
      <div className="profile-text">
        <h1>{internTeam}</h1>
      </div>
    </div>
  );
};
