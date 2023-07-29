import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export const ProfileAbout = ({ cardContent, color, profileEmail }) => {
  let meInFourTags1 = cardContent.meInFourTags1 || "";
  let meInFourTags2 = cardContent.meInFourTags2 || "";
  let meInFourTags3 = cardContent.meInFourTags3 || "";
  let meInFourTags4 = cardContent.meInFourTags4 || "";

  if (meInFourTags1.length > 13) {
    meInFourTags1 = meInFourTags1.slice(0, 10) + "...";
  }

  if (meInFourTags2.length > 13) {
    meInFourTags2 = meInFourTags2.slice(0, 10) + "...";
  }

  if (meInFourTags3.length > 13) {
    meInFourTags3 = meInFourTags3.slice(0, 10) + "...";
  }

  if (meInFourTags4.length > 13) {
    meInFourTags4 = meInFourTags4.slice(0, 10) + "...";
  }

  return (
    <div className="profile-about-content">
      <div className="profile-large-text">
        <h1>Me In One Sentence</h1>
        <h2 id="profile-large-sentence">{cardContent.meInOneSentence}</h2>
      </div>
      <div className="profile-large-text">
        <h1>Connect With Me</h1>
        <div className="profile-large-sub-elements">
          <a href={`mailto:${profileEmail}`}>
            <MdEmail size={50} className="profile-large-icon" />
          </a>
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
            {meInFourTags1}
          </div>
          <div
            className="profile-large-tag"
            style={{ backgroundColor: color, color: "black" }}
          >
            {meInFourTags2}
          </div>
          <div
            className="profile-large-tag"
            style={{ backgroundColor: color, color: "black" }}
          >
            {meInFourTags3}
          </div>
          <div
            className="profile-large-tag"
            style={{ backgroundColor: color, color: "black" }}
          >
            {meInFourTags4}
          </div>
        </div>
      </div>
    </div>
  );
};
