import React from "react";
import "./buttons.css";

export const SubmitButton = (props) => {
  return (
    <div className="submit-button-container">
      <div className="submit-button">{props.message}</div>
    </div>
  );
};
