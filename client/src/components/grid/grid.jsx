import React from "react";
import "./grid.css";
import { Card } from "components/card/card";

export const Grid = () => {
  return (
    <div className="grid-root-container">
      <div className="grid-container">
        <div className="grid-item">
          <Card />
        </div>
        <div className="grid-item">
          <Card />
        </div>
        <div className="grid-item">
          <Card />
        </div>
        <div className="grid-item">
          <Card />
        </div>
        <div className="grid-item">
          <Card />
        </div>
        <div className="grid-item">
          <Card />
        </div>
      </div>
    </div>
  );
};
