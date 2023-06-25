import React from "react";
import { Navbar } from "components/navbar/navbar";
import { RequestCardGrid } from "components/requestcard/requestcardgrid";
import "./requests.css";

export const RequestsPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="requests-heading">My Requests</h1>
      <RequestCardGrid />
    </div>
  );
};
