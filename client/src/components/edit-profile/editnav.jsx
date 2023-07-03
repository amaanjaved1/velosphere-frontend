import React from "react";
import "./edit.css";

export const EditNav = ({ message, onClick }) => {
  return (
    <div className="edit-nav-container-outer">
      <div className="editnav-container">
        <button
          className="editnav-message"
          style={{
            backgroundColor: message === "Edit" ? "#980a0e" : "#ffffff26",
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
