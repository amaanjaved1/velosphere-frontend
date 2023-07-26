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
          <h1 className="right-title">{cardContent.firstName}</h1>
          <h1 className="right-title">{cardContent.lastName}</h1>
          <h2 className="right-company" style={{ color: companyColor }}>
            {cardContent.company}
          </h2>
          <h2 className="right-program">{cardContent.studentProgram}</h2>
          <h2 className="right-loc">{cardContent.educationalInstitution}</h2>
          <h2 className="right-loc-position" style={{ marginTop: "5px" }}>
            {cardContent.internPosition}
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
        <h1 className="right-title">{cardContent.firstName}</h1>
        <h1 className="right-title">{cardContent.lastName}</h1>
        <h2 className="right-company" style={{ color: companyColor }}>
          {cardContent.company}
        </h2>
        <h2 className="right-program">{cardContent.studentProgram}</h2>
        <h2 className="right-loc">{cardContent.educationalInstitution}</h2>
        <h2 className="right-loc-position" style={{ marginTop: "5px" }}>
          {cardContent.internPosition}
        </h2>
      </div>
    </div>
  );
};
