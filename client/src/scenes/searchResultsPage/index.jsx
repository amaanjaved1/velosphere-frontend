import React from "react";
import "./search.css";
import { Navbar } from "components/navbar/navbar";
import { Grid } from "components/grid/grid";
import { LoadButton } from "components/load/load";

export const SearchResultsPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="search-results-heading">Search Results</h1>
      <Grid />
      <LoadButton />
    </div>
  );
};
