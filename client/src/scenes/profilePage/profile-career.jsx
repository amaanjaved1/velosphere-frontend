import React from "react";

export const ProfileCareer = ({ cardContent }) => {
  let educationalInstitution = cardContent.educationalInstitution || "";
  let schoolProgram = cardContent.schoolProgram || "";
  let internPosition = cardContent.internPosition || "";
  let internTeam = cardContent.internTeam || "";
  let studentLocation = cardContent.studentLocation || "";

  if (educationalInstitution.length > 60) {
    educationalInstitution = educationalInstitution.slice(0, 57) + "...";
  }

  if (schoolProgram.length > 60) {
    schoolProgram = schoolProgram.slice(0, 57) + "...";
  }

  if (internPosition.length > 60) {
    internPosition = internPosition.slice(0, 57) + "...";
  }

  if (internTeam.length > 60) {
    internTeam = internTeam.slice(0, 57) + "...";
  }

  if (studentLocation.length > 60) {
    studentLocation = studentLocation.slice(0, 57) + "...";
  }

  return (
    <div className="profile-career-content">
      <h1 className="profile-career-heading">School:</h1>
      <div className="profile-text">
        <h1>{educationalInstitution}</h1>
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
      <h1 className="profile-career-heading">Location:</h1>
      <div className="profile-text">
        <h1>{studentLocation}</h1>
      </div>
    </div>
  );
};
