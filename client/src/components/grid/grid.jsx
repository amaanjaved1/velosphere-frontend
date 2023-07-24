import React from "react";
import "./grid.css";
import { Card } from "components/card/card";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { GridPagination } from "components/grid-pagination/gridpagination";

export const Grid = ({ pageType, searchBy, searchContent }) => {
  const email = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [page, setPage] = useState(1);
  const limit = 6;
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [cardContent, setCardContent] = useState([]);
  const [isFetched, setIsFetched] = useState(true);

  const handleNext = () => {
    if (hasNext) {
      setPage(page + 1);
    }
    setIsFetched(true);
  };

  const handlePrev = () => {
    if (hasPrev) {
      setPage(page - 1);
    }
    setIsFetched(true);
  };

  const getMain = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/query/main/?page=${page}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const status = response.status;

      if (status !== 200) {
        throw new Error("Failed to fetch requests");
      }

      const data = await response.json();
      const results = data.results;

      if (results.hasOwnProperty("next")) {
        setHasNext(true);
      } else {
        setHasNext(false);
      }

      if (results.hasOwnProperty("previous")) {
        setHasPrev(true);
      } else {
        setHasPrev(false);
      }

      setTotalPages(results.totalPages);

      // results.content is an array of objects
      // iterate over each object and create an array of objects
      // then, set cardContent to that array

      const content = results.content;
      const cards = [];

      for (let i = 0; i < content.length; i++) {
        let color;
        if (content[i].company === "scotiabank") {
          color = "#980a0e";
        } else if (content[i].company === "tangerine") {
          color = "#fe793e";
        } else {
          color = "#0a085b";
        }

        let cardContent = {
          profilePicture: content[i].profilepicture,
          company: content[i].company.toUpperCase(),
          currentTerm: content[i].currentterm,
          firstName: content[i].firstname,
          lastName: content[i].lastname,
          studentProgram: content[i].studentprogram,
          studentLocation: content[i].studentlocation,
          educationalInstitution: content[i].educationalinstitution,
          email: content[i].email,
        };

        const card = (
          <Card
            className="grid-item"
            cardContent={cardContent}
            isMyProfile={false}
            user={email}
            profileEmail={content[i].email}
            color={color}
            inGrid={true}
            cstate={false}
            sentby={false}
          />
        );
        cards.push(card);
      }

      setCardContent(cards);
      setIsFetched(false);
    } catch (err) {
      setIsFetched(false);
      console.log(err);
    }
  };

  const getSearch = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/query/search/${searchBy}/${searchContent}/?page=${page}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const status = response.status;

      if (status !== 200) {
        console.log("failed");
      }

      const data = await response.json();
      const results = data.results;

      if (results.hasOwnProperty("next")) {
        setHasNext(true);
      } else {
        setHasNext(false);
      }

      if (results.hasOwnProperty("previous")) {
        setHasPrev(true);
      } else {
        setHasPrev(false);
      }

      setTotalPages(results.totalPages);

      // results.content is an array of objects
      // iterate over each object and create an array of objects
      // then, set cardContent to that array

      const content = results.content;
      const cards = [];

      for (let i = 0; i < content.length; i++) {
        let color;
        if (content[i].company === "scotiabank") {
          color = "#980a0e";
        } else if (content[i].company === "tangerine") {
          color = "#fe793e";
        } else {
          color = "#0a085b";
        }

        let cardContent = {
          profilePicture: content[i].profilepicture,
          company: content[i].company.toUpperCase(),
          currentTerm: content[i].currentterm,
          firstName: content[i].firstname,
          lastName: content[i].lastname,
          studentProgram: content[i].studentprogram,
          studentLocation: content[i].studentlocation,
          educationalInstitution: content[i].educationalinstitution,
          email: content[i].email,
        };

        const card = (
          <Card
            className="grid-item"
            cardContent={cardContent}
            isMyProfile={false}
            user={email}
            profileEmail={content[i].email}
            color={color}
            inGrid={true}
            cstate={false}
            sentby={false}
          />
        );
        cards.push(card);
      }

      setCardContent(cards);
      setIsFetched(false);
    } catch (err) {
      setIsFetched(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (pageType === "main") {
      getMain();
    } else {
      getSearch();
    }
  }, [page]);

  return (
    <div className="grid-root-container">
      {totalPages === 0 ? (
        isFetched === false ? (
          <div className="no-results">
            <h1 style={{ fontSize: "100%" }}>No Results Found</h1>
          </div>
        ) : (
          <div className="loading-spinner"></div>
        )
      ) : null}
      <GridPagination
        inputProps={{
          previous: { action: handlePrev, hasPrev: hasPrev },
          next: { action: handleNext, hasNext: hasNext },
          page,
          totalPages,
        }}
      />
      <div className="grid-container">
        {cardContent.map((card, index) => (
          <React.Fragment key={index}>{card}</React.Fragment>
        ))}
      </div>
    </div>
  );
};
