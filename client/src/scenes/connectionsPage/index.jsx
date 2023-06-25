import React from "react";
import { Navbar } from "components/navbar/navbar";
import "./connections.css";
import { Grid } from "components/grid/grid";
import { LoadButton } from "components/load/load";

export const ConnectionsPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="connections-heading">My Connections</h1>
      <Grid />
      <LoadButton />
    </div>
  );
};
