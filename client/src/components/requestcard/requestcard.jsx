import React from "react";
import "./requestcard.css";
import { BsCheckAll } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export const RequestCard = () => {
  return (
    <div className="request-card-container">
      <div className="request-card-left">
        <div className="request-card-image-container"></div>
      </div>
      <div className="request-card-right">
        <h1 className="request-card-name">Jack Fakester</h1>
        <h2 className="request-card-company">Scotiabank</h2>
        <h2 className="request-card-program">Velocity</h2>
        <hr className="request-card-hr" />
        <div className="request-card-buttons-container">
          <button className="request-card-accept">Accept</button>
          <button className="request-card-decline">Decline</button>
        </div>
      </div>
    </div>
  );
};
