import React from "react";
import "./buttons.css";

export const InputFieldButton = (props) => {
  const { type, name, id, label, placeholder, value } = props;
  return (
    <div>
      <div className="registration-form-entry">
        <label htmlFor="email" className="registration-label">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          className="registration-input-content"
        />
      </div>
    </div>
  );
};
