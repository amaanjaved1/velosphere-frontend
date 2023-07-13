import React from "react";
import { Navbar } from "components/navbar/navbar";
import "./connections.css";
import { RequestCardGrid } from "components/requestcard/requestcardgrid";

export const ConnectionsPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="connections-heading">My Connections</h1>
      <RequestCardGrid
        defaultMessage={"No connections! Take initiative!"}
        pageType={"connections"}
      />
    </div>
  );
};
