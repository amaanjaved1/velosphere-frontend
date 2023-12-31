import React from "react";
import "./edit.css";

export const EditNav = ({ message, onClick, color }) => {
  return (
    <div className="edit-nav-container-outer">
      <div className="editnav-container">
        <button
          className="editnav-message"
          style={{
            color: message === "Edit" ? "#000000" : "#ffffff",
            backgroundColor: message === "Edit" ? color : "#ffffff26",
            cursor: "pointer",
          }}
          onClick={onClick}
        >
          {message}
        </button>
      </div>
    </div>
  );
};
