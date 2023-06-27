import React from "react";
import "./buttons.css";

export const NextButton = (props) => {
  const { message } = props;
  return (
    <div className="next-button-container">
      <div className="next-button">{message}</div>
    </div>
  );
};
