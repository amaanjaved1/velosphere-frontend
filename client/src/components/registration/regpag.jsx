import React from "react";
import "./registration.css";

export const RegisterPagination = ({ currentPage }) => {
  return (
    <div className="regpag-container">
      <div className="regpag-menu">
        <h1
          className={
            currentPage === 1 ? "regpag-pagenum-selected" : "regpag-pagenum"
          }
        >
          1
        </h1>
        <h1
          className={
            currentPage === 2 ? "regpag-pagenum-selected" : "regpag-pagenum"
          }
        >
          2
        </h1>
        <h1
          className={
            currentPage === 3 ? "regpag-pagenum-selected" : "regpag-pagenum"
          }
        >
          3
        </h1>
        <h1
          className={
            currentPage === 4 ? "regpag-pagenum-selected" : "regpag-pagenum"
          }
        >
          4
        </h1>
        <h1
          className={
            currentPage === 5 ? "regpag-pagenum-selected" : "regpag-pagenum"
          }
        >
          5
        </h1>
        <h1
          className={
            currentPage === 6 ? "regpag-pagenum-selected" : "regpag-pagenum"
          }
        >
          6
        </h1>
        <h1
          className={
            currentPage === 7 ? "regpag-pagenum-selected" : "regpag-pagenum"
          }
        >
          7
        </h1>
      </div>
    </div>
  );
};
