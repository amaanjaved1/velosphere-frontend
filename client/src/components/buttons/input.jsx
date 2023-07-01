import React from "react";
import "./buttons.css";

export const InputFieldButton = (props) => {
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
        />
      </div>
    </div>
  );
};
