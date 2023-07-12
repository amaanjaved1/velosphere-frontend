import React from "react";
import "./search.css";
import { NextButton } from "components/buttons/next";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Search = () => {
  const color = useSelector((state) => state.color);
  const [searchBy, setSearchBy] = useState("username");
  const [searchByContent, setSearchByContent] = useState("");

  const searchAction = (e) => {
    // Prevent form submission
    e.preventDefault();
    // Make request to backend
  };

  const onSelectSearchBy = (e) => {
    setSearchBy(e.target.value);
  };

  const onSearchByContent = (e) => {
    setSearchByContent(e.target.value);
  };

  return (
    <form className="main-search" onSubmit={searchAction}>
      <div className="main-search-first">
        <button name="main-go-by" id="main-go-by" className="main-go-by">
          Go
        </button>
        <select
          name="main-search-by"
          id="main-search-by"
          className="main-search-by"
          onChange={onSelectSearchBy}
        >
          <option className="main-option-dropdown" value="username">
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
          onChange={onSearchByContent}
        />
      </div>
    </form>
  );
};
