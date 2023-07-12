import React from "react";
import "./gridpag.css";

export const GridPagination = ({ inputProps }) => {
  const baseStyles = {
    color: "black",
    cursor: "default",
  };

  const conditionalStyles = {
    background: "linear-gradient(263.1deg, #ff46c0 6.87%, #ffa877 105.82%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer",
  };

  return (
    <div className="grid-pag-container">
      <div className="grid-pag-content">
        <div
          className="grid-pag-arrow"
          onClick={inputProps.previous.action}
          style={inputProps.previous.hasPrev ? conditionalStyles : baseStyles}
        >
          {"<"}
        </div>
        <div className="grid-pag-num">{inputProps.page}</div>
        <div
          className="grid-pag-arrow"
          onClick={inputProps.next.action}
          style={inputProps.next.hasNext ? conditionalStyles : baseStyles}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};
