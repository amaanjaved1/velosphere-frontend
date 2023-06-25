import React from "react";
import { Navbar } from "components/navbar/navbar";
import { LoadButton } from "components/load/load";
import { Grid } from "components/grid/grid";
import { BsFillPersonFill } from "react-icons/bs";
import "./home.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-main-header">
        <div className="home-title">
          <h5 className="home-title-com">.com</h5>
          <h1 className="home-title-text">VeloSphere</h1>
        </div>
      </div>
      <form className="main-search">
        <div className="main-search-first">
          <select
            name="main-filter-by"
            id="main-filter-by"
            className="main-filter-by"
          >
            <option
              className="main-option-dropdown"
              disabled
              style={{
                backgroundColor: "#1a1a1a",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              Filter By...
            </option>
            <option className="main-option-dropdown" value="all" selected>
              All
            </option>
            <option className="main-option-dropdown" value="current">
              Now
            </option>
            <option className="main-option-dropdown" value="past">
              Past
            </option>
          </select>
          <select
            name="main-search-by"
            id="main-search-by"
            className="main-search-by"
          >
            <option
              className="main-option-dropdown"
              disabled
              style={{
                backgroundColor: "#1a1a1a",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              Search By...
            </option>
            <option className="main-option-dropdown" value="username" selected>
              Username
            </option>
            <option className="main-option-dropdown" value="firstName">
              First Name
            </option>
            <option className="main-option-dropdown" value="lastName">
              Last Name
            </option>
            <option className="main-option-dropdown" value="email">
              Email
            </option>
            <option className="main-option-dropdown" value="studentProgram">
              Student Program
            </option>
            <option className="main-option-dropdown" value="company">
              Company
            </option>
            <option className="main-option-dropdown" value="internPosition">
              Intern Position
            </option>
            <option
              className="main-option-dropdown"
              value="educationalInstitution"
            >
              School
            </option>
            <option className="main-option-dropdown" value="schoolProgram">
              School Program
            </option>
            <option className="main-option-dropdown" value="studentLocation">
              Location
            </option>
            <option className="main-option-dropdown" value="oneofthe4tags">
              Tags
            </option>
            <option className="main-option-dropdown" value="internTeam">
              Team
            </option>
          </select>
        </div>
        <div className="main-search-second">
          <input
            type="main-search-by-content-input"
            name="main-search-by-content-input"
            id="main-search-by-content-input"
            className="main-search-by-content-input"
            placeholder="Search..."
          />
        </div>
      </form>
      <h2 id="home-recommendation-header">Recommended for you...</h2>
      <Grid />
      <LoadButton />
    </div>
  );
};
