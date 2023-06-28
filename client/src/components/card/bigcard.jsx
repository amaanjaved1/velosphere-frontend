import React from "react";
import "./bigcard.css";

export const BigCard = () => {
  return (
    <div className="big-card">
      <div className="big-card-left">
        <div className="big-image-container"></div>
        <div classNamew="big-card-tags">
          <div className="big-term-tag">W23</div>
          <div className="big-connection-tag">Connect</div>
        </div>
      </div>
      <div className="big-card-right">
        <h1 className="big-right-title">Jack</h1>
        <h1 className="big-right-title">FakeGuy</h1>
        <h2 className="big-right-company">Scotiabank</h2>
        <h2 className="big-right-program">Velocity</h2>
        <h2 className="big-right-loc">Toronto, ON</h2>
        <h2 className="big-right-school">Queen's University</h2>
      </div>
    </div>
  );
};
