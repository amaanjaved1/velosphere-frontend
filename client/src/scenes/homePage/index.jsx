import React from "react";
import { Navbar } from "components/navbar/navbar";
import { Grid } from "components/grid/grid";
import { Search } from "components/search/search";
import "./home.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-main-header">
        <div className="home-title">
          <h5 className="home-title-com">.com</h5>
          <h1 className="home-title-text">Velosphere</h1>
        </div>
      </div>
      <Search />
      <h2 id="home-recommendation-header" style={{ marginBottom: "20px" }}>
        Recommended for you
      </h2>
      <Grid pageType={"main"} />
    </div>
  );
};
