import React, { useState, useEffect } from "react";
import "./requestcard.css";
import { RequestCard } from "./requestcard.jsx";
import { useSelector } from "react-redux";
import { GridPagination } from "components/grid-pagination/gridpagination";

export const RequestCardGrid = ({ pageType, defaultMessage }) => {
  const email = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [cardContent, setCardContent] = useState([]);

  let limit = 6;
  if (pageType === "requests") {
    limit = 3;
  }

  const handleNext = () => {
    if (hasNext) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setPage(page - 1);
    }
  };

  const getRequests = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/query/${pageType}/${email}/?page=${page}&limit=${limit}`,
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
        const card = (
          <RequestCard
            key={i}
            email={content[i].sentby}
            link={`/profile/${content[i].sentby}`}
            token={token}
            actionFrom={email}
            handleClear={handleClear}
            pageType={pageType}
          />
        );
        cards.push(card);
      }

      setCardContent(cards);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClear = (email) => {
    const newCardContent = cardContent.filter((card) => {
      return card.props.email !== email;
    });

    setCardContent(newCardContent);
    getRequests();
  };

  useEffect(() => {
    getRequests();
  }, [page]);

  return (
    <div className="request-card-grid-container">
      {totalPages === 0 && (
        <h1
          style={{
            textAlign: "center",
            fontSize: "15px",
            background:
              "linear-gradient(263.1deg, #ff46c0 6.87%, #ffa877 105.82%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {defaultMessage}
        </h1>
      )}
      {cardContent.map((card, index) => (
        <React.Fragment key={index}>{card}</React.Fragment>
      ))}
      <GridPagination
        inputProps={{
          previous: { action: handlePrev, hasPrev: hasPrev },
          next: { action: handleNext, hasNext: hasNext },
          page,
          totalPages,
        }}
      />
    </div>
  );
};
