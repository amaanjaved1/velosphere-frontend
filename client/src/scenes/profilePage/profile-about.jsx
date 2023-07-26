import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const ProfileAbout = ({ cardContent, color }) => {
  return (
    <div className="profile-about-content">
      <div className="profile-large-text">
        <h1>Me In One Sentence</h1>
        <h2 id="profile-large-sentence">{cardContent.meInOneSentence}</h2>
      </div>
      <div className="profile-large-text">
        <h1>Connect With Me</h1>
        <div className="profile-large-sub-elements">
          {cardContent.github ? (
            cardContent.github.includes("github") ? (
              <a href={cardContent.github}>
                <FiGithub size={50} className="profile-large-icon" />
              </a>
            ) : null
          ) : null}
          {cardContent.linkedin ? (
            cardContent.linkedin.includes("linkedin") ? (
              <a href={cardContent.linkedin}>
                <FaLinkedinIn size={50} className="profile-large-icon" />
              </a>
            ) : null
          ) : null}
          {cardContent.twitter ? (
            cardContent.twitter.includes("twitter") ? (
              <a href={cardContent.twitter}>
                <BsTwitter size={50} className="profile-large-icon" />
              </a>
            ) : null
          ) : null}
          {cardContent.facebook ? (
            cardContent.facebook.includes("facebook") ? (
              <a href={cardContent.facebook}>
                <FaFacebookF size={50} className="profile-large-icon" />
              </a>
            ) : null
          ) : null}
        </div>
      </div>
      <div className="profile-large-text">
        <h1>Me In 4 Tags</h1>
        <div className="profile-large-sub-elements">
          <div
            className="profile-large-tag"
            style={{ backgroundColor: color, color: "black" }}
          >
            {cardContent.meInFourTags1}
          </div>
          <div
            className="profile-large-tag"
            style={{ backgroundColor: color, color: "black" }}
          >
            {cardContent.meInFourTags2}
          </div>
          <div
            className="profile-large-tag"
            style={{ backgroundColor: color, color: "black" }}
          >
            {cardContent.meInFourTags3}
          </div>
          <div
            className="profile-large-tag"
            style={{ backgroundColor: color, color: "black" }}
          >
            {cardContent.meInFourTags4}
          </div>
        </div>
      </div>
    </div>
  );
};
