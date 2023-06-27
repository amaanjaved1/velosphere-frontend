import React from "react";
import "./buttons.css";

export const DropDownButton = () => {
  return (
    <div>
      <select name="company" id="company" className="dropdown-button">
        <option value="mdfinancial">MD Financial</option>
        <option value="scotiabank">Scotiabank</option>
        <option value="tangerine">Tangerine</option>
      </select>
    </div>
  );
};
