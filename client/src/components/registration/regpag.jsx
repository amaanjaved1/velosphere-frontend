import React from "react";
import "./registration.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export const RegisterPagination = () => {
  return (
    <div className="regpag-container">
      <div className="regpag-menu">
        <h1 className="regpag-pagenum-selected">1</h1>
        <h1 className="regpag-pagenum">2</h1>
        <h1 className="regpag-pagenum">3</h1>
        <h1 className="regpag-pagenum">4</h1>
        <h1 className="regpag-pagenum">5</h1>
        <h1 className="regpag-pagenum">6</h1>
        <h1 className="regpag-pagenum">7</h1>
      </div>
    </div>
  );
};
