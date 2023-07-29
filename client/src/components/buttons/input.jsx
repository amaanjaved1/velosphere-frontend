import React from "react";
import "./buttons.css";

export const InputFieldButton = (props) => {
  let max = 250;
  if (props.max) {
    max = props.max;
  }
  return (
    <div>
      <div className="registration-form-entry">
        <label htmlFor={props.name} className="registration-label">
          {props.label}
        </label>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value={props.content}
          className="registration-input-content"
          onChange={(e) => props.valuefunction(e.target.value)}
          readOnly={props.readOnly}
          maxLength={max}
        />
      </div>
    </div>
  );
};
