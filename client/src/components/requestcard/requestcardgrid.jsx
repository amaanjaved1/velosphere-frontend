import React from "react";
import "./requestcard.css";
import { RequestCard } from "./requestcard.jsx";
import { LoadButton } from "components/load/load";

export const RequestCardGrid = () => {
  return (
    <div className="request-card-grid-container">
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <LoadButton />
    </div>
  );
};
