import React from "react";
import "./search.css";
import { Navbar } from "components/navbar/navbar";
import { Grid } from "components/grid/grid";
import { useParams } from "react-router-dom";

export const SearchResultsPage = () => {
  const { searchBy, searchContent } = useParams();
  return (
    <div>
      <Navbar />
      <h1 className="search-results-heading">Search Results</h1>
      <Grid
        pageType={"search"}
        searchBy={searchBy}
        searchContent={searchContent}
      />
    </div>
  );
};
