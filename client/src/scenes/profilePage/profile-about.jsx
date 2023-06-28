import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const ProfileAbout = () => {
  return (
    <div className="profile-about-content">
      <div className="profile-large-text">
        <h1>Me In One Sentence</h1>
        <h2 id="profile-large-sentence">
          Lorem ipsum dolor sit amet, consectetur adipi scing elit. Tortor
          turpis sodales nulla velit. Lorem ipsum dolor sit amet, consectetur
          adipi scing elit. Tortor
        </h2>
      </div>
      <div className="profile-large-text">
        <h1>Connect With Me</h1>
        <div className="profile-large-sub-elements">
          <FaLinkedinIn size={50} className="profile-large-icon" />
          <BsTwitter size={50} className="profile-large-icon" />
          <FaFacebookF size={50} className="profile-large-icon" />
          <FiGithub size={50} className="profile-large-icon" />
        </div>
      </div>
      <div className="profile-large-text">
        <h1>Me In 4 Tags</h1>
        <div className="profile-large-sub-elements">
          <div className="profile-large-tag">Tag 1</div>
          <div className="profile-large-tag">Tag 2</div>
          <div className="profile-large-tag">Tag 3</div>
          <div className="profile-large-tag">Tag 4</div>
        </div>
      </div>
    </div>
  );
};
