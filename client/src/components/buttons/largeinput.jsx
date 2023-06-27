import React from "react";
import "./buttons.css";

export const LargeInputFieldButton = (props) => {
  const { type, name, id, label, placeholder } = props;
  return (
    <div>
      <div className="registration-form-entry">
        <label htmlFor="email" className="registration-label">
          {label}
        </label>
        <textarea
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="large-registration-input-content"
        />
      </div>
    </div>
  );
};
