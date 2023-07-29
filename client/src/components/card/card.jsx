import React from "react";
import "./card.css";
import { ConnectTag } from "components/card/connecttag";

export const Card = ({
  cardContent,
  isMyProfile,
  user,
  profileEmail,
  cstate,
  sentby,
  color,
  inGrid,
}) => {
  let companyColor = "";

  if (cardContent.company === "SCOTIABANK") {
    companyColor = "#980a0e";
  } else if (cardContent.company === "TANGERINE") {
    companyColor = "#fe793e";
  } else {
    companyColor = "#0a085b";
  }

  let fname = cardContent.firstName || "";
  if (fname.length > 10) {
    fname = fname.slice(0, 8) + "...";
  }

  let lname = cardContent.lastName || "";
  if (lname.length > 10) {
    lname = lname.slice(0, 8) + "...";
  }

  let educationalInstitution = cardContent.educationalInstitution || "";
  if (educationalInstitution.length > 21) {
    educationalInstitution = educationalInstitution.slice(0, 18) + "...";
  }

  let internPosition = cardContent.internPosition || "";
  if (internPosition.length > 74) {
    internPosition = internPosition.slice(0, 71) + "...";
  }

  return inGrid ? (
    <a href={`/profile/${profileEmail}`} style={{ textDecoration: "none" }}>
      {" "}
      <div className="card">
        <div className="card-left">
          <div
            className="image-container"
            style={{ backgroundImage: `url(${cardContent.profilePicture})` }}
          ></div>
          <div className="card-tags">
            <div className="term-tag" style={{ backgroundColor: color }}>
              {cardContent.currentTerm}
            </div>
            {isMyProfile === false && inGrid === false ? (
              <ConnectTag
                cstate={cstate}
                user={user}
                profileEmail={profileEmail}
                sentby={sentby}
              />
            ) : null}
          </div>
        </div>
        <div className="card-right">
          <h1 className="right-title">{fname}</h1>
          <h1 className="right-title">{lname}</h1>
          <h2 className="right-company" style={{ color: companyColor }}>
            {cardContent.company}
          </h2>
          <h2 className="right-program">{cardContent.studentProgram}</h2>
          <h2 className="right-loc">{educationalInstitution}</h2>
          <h2 className="right-loc-position" style={{ marginTop: "5px" }}>
            {internPosition}
          </h2>
        </div>
      </div>
    </a>
  ) : (
    <div className="card">
      <div className="card-left">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${cardContent.profilePicture})` }}
        ></div>
        <div className="card-tags">
          <div className="term-tag" style={{ backgroundColor: color }}>
            {cardContent.currentTerm}
          </div>
          {isMyProfile === false && inGrid === false ? (
            <ConnectTag
              cstate={cstate}
              user={user}
              profileEmail={profileEmail}
              sentby={sentby}
            />
          ) : null}
        </div>
      </div>
      <div className="card-right">
        <h1 className="right-title">{fname}</h1>
        <h1 className="right-title">{lname}</h1>
        <h2 className="right-company" style={{ color: companyColor }}>
          {cardContent.company}
        </h2>
        <h2 className="right-program">{cardContent.studentProgram}</h2>
        <h2 className="right-loc">{educationalInstitution}</h2>
        <h2 className="right-loc-position" style={{ marginTop: "5px" }}>
          {internPosition}
        </h2>
      </div>
    </div>
  );
};
