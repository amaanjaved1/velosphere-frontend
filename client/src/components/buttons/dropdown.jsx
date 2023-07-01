import React from "react";
import "./buttons.css";

export const DropDownButton = (props) => {
  const handleDropdownChange = (e) => {
    // Change the company variable to the selected company
    props.valuefunctionCompany(e.target.value);
    // Change the color to the respective color

    if (e.target.value === "mdfinancial") {
      props.valuefunctionColor("#0a085b");
    } else if (e.target.value === "scotiabank") {
      props.valuefunctionColor("#980A0E");
    } else {
      props.valuefunctionColor("#FE793E");
    }
  };

  return (
    <div>
      <select
        value={props.contentCompany}
        name="company"
        id="company"
        className="dropdown-button"
        onChange={handleDropdownChange}
        style={{ backgroundColor: props.contentColor }}
      >
        <option value="mdfinancial">MD Financial</option>
        <option value="scotiabank">Scotiabank</option>
        <option value="tangerine">Tangerine</option>
      </select>
    </div>
  );
};
