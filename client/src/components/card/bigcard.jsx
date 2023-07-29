import React from "react";
import "./bigcard.css";
import { ConnectTag } from "components/card/connecttag";

export const BigCard = ({
  cardContent,
  isMyProfile,
  user,
  profileEmail,
  cstate,
  sentby,
  color,
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
  if (fname.length > 12) {
    fname = fname.slice(0, 9) + "...";
  }

  let lname = cardContent.lastName || "";
  if (lname.length > 12) {
    lname = lname.slice(0, 9) + "...";
  }

  let location = cardContent.studentLocation || "";
  if (location.length > 31) {
    location = location.slice(0, 28) + "...";
  }

  return (
    <div className="big-card">
      <div className="big-card-left">
        <div
          className="big-image-container"
          style={{ backgroundImage: `url(${cardContent.profilePicture})` }}
        ></div>
        <div className="big-card-tags">
          <div className="big-term-tag" style={{ backgroundColor: color }}>
            {cardContent.currentTerm}
          </div>
          {isMyProfile === false ? (
            <ConnectTag
              cstate={cstate}
              sentby={sentby}
              user={user}
              profileEmail={profileEmail}
            />
          ) : null}
        </div>
      </div>
      <div className="big-card-right">
        <h1 className="big-right-title">{fname}</h1>
        <h1 className="big-right-title">{lname}</h1>
        <h2 className="big-right-company" style={{ color: companyColor }}>
          {cardContent.company}
        </h2>
        <h2 className="big-right-program">{cardContent.studentProgram}</h2>
        <h2 className="big-right-loc">{location}</h2>
      </div>
    </div>
  );
};
