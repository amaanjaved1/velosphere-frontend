import React from "react";
import "./buttons.css";

export const LargeInputFieldButton = (props) => {
  return (
    <div>
      <div className="registration-form-entry">
        <label htmlFor={props.name} className="registration-label">
          {props.label}
        </label>
        <textarea
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value={props.content}
          className="large-registration-input-content"
          maxLength={150}
          onChange={(e) => props.valuefunction(e.target.value)}
        />
      </div>
    </div>
  );
};
