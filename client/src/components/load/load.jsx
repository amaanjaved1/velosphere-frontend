import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "./load.css";

export const LoadButton = () => {
  return (
    <div className="load-more-container">
      <button className="load-more-button">
        <BsFillPersonFill className="load-more-icon" />
        <h4 className="load-more-text">Load More</h4>
      </button>
    </div>
  );
};
