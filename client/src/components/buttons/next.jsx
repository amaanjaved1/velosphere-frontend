import React from "react";
import "./buttons.css";

export const NextButton = ({ action, message, color }) => {
  return (
    <div className="next-button-container">
      <div
        style={{
          backgroundColor:
            message === "Register"
              ? "#FFD700"
              : color === null
              ? "#980A0E"
              : color,
          color: message === "Register" ? "black" : "white",
        }}
        className="next-button"
        onClick={action}
      >
        {message}
      </div>
    </div>
  );
};
