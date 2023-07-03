import React from "react";
import "./bigcard.css";

export const BigCard = ({ cardContent, isMyProfile }) => {
  return (
    <div className="big-card">
      <div className="big-card-left">
        <div
          className="big-image-container"
          style={{ backgroundImage: `url(${cardContent.profilePicture})` }}
        ></div>
        <div className="big-card-tags">
          <div className="big-term-tag">{cardContent.currentTerm}</div>
          {isMyProfile === false ? (
            <div className="big-connection-tag">Connect</div>
          ) : null}
        </div>
      </div>
      <div className="big-card-right">
        <h1 className="big-right-title">{cardContent.firstName}</h1>
        <h1 className="big-right-title">{cardContent.lastName}</h1>
        <h2 className="big-right-company">{cardContent.company}</h2>
        <h2 className="big-right-program">{cardContent.studentProgram}</h2>
        <h2 className="big-right-loc">{cardContent.studentLocation}</h2>
        <h2 className="big-right-school">
          {cardContent.educationalInstitution}
        </h2>
      </div>
    </div>
  );
};
