import React from "react";
import "./grid.css";
import { Card } from "components/card/card";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { GridPagination } from "components/grid-pagination/gridpagination";

export const Grid = () => {
  const email = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [page, setPage] = useState(1);
  const limit = 6;
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [cardContent, setCardContent] = useState([]);

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

  const getConnections = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/query/connections/${email}/?page=${page}&limit=${limit}`,
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

      console.log(results);

      for (let i = 0; i < content.length; i++) {
        // const card = (
        //   <RequestCard
        //     key={i}
        //     email={content[i].sentby}
        //     link={`/profile/${content[i].sentby}`}
        //     token={token}
        //     actionFrom={email}
        //     handleRemove={handleRemove}
        //   />
        // );
        // cards.push(card);
        console.log(content[i]);
      }

      setCardContent(cards);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConnections();
  }, [page]);

  return (
    <div className="grid-root-container">
      <div className="grid-container">
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
    </div>
  );
};
