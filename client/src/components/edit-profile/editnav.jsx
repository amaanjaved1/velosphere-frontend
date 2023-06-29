import React from "react";
import "./edit.css";

export const EditNav = (props) => {
  return (
    <div className="edit-nav-container-outer">
      <div className="editnav-container">
        <button
          className="editnav-message"
          style={{
            backgroundColor: props.message === "Edit" ? "#980a0e" : "#ffffff26",
          }}
        >
          {props.message}
        </button>
      </div>
    </div>
  );
};
