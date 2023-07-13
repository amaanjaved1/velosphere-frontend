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
  return (
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
          ) : (
            <a href={`/profile/${profileEmail}`}>
              <div className="term-tag" style={{ backgroundColor: color }}>
                Visit
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="card-right">
        <h1 className="right-title">{cardContent.firstName}</h1>
        <h1 className="right-title">{cardContent.lastName}</h1>
        <h2 className="right-company" style={{ color: color }}>
          {cardContent.company}
        </h2>
        <h2 className="right-program">{cardContent.studentProgram}</h2>
        <h2 className="right-loc">{cardContent.educationalInstitution}</h2>
      </div>
    </div>
  );
};
