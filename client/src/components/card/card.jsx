import React from "react";
import "./card.css";
import { ConnectTag } from "components/card/connecttag";

export const Card = ({ cardContent, isMyProfile, user }) => {
  return (
    <div className="card">
      <div className="card-left">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${cardContent.profilePicture})` }}
        ></div>
        <div className="card-tags">
          <div className="term-tag">{cardContent.currentTerm}</div>
          {isMyProfile === false ? (
            <ConnectTag
              cstate={cardContent.cstate}
              sentby={cardContent.sentby}
              user={user}
            />
          ) : null}
        </div>
      </div>
      <div className="card-right">
        <h1 className="right-title">{cardContent.firstName}</h1>
        <h1 className="right-title">{cardContent.lastName}</h1>
        <h2 className="right-company">{cardContent.company}</h2>
        <h2 className="right-program">{cardContent.studentProgram}</h2>
        <h2 className="right-loc">{cardContent.studentLocation}</h2>
        <h2 className="right-school">{cardContent.educationalInstitution}</h2>
      </div>
    </div>
  );
};
