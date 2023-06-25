import React from "react";
import "./card.css";

export const Card = () => {
  return (
    <div className="card">
      <div className="card-left">
        <div className="image-container"></div>
        <div className="card-tags">
          <div className="term-tag">W23</div>
          <div className="connection-tag">Connect</div>
        </div>
      </div>
      <div className="card-right">
        <h1 className="right-title">Jack</h1>
        <h1 className="right-title">FakeGuy</h1>
        <h2 className="right-company">Scotiabank</h2>
        <h2 className="right-program">Velocity</h2>
        <h2 className="right-loc">Toronto, ON</h2>
        <h2 className="right-school">Queen's University</h2>
      </div>
    </div>
  );
};
