import React from "react";
import "./registration.css";

export const Page7 = ({ formValues }) => {
  return (
    <div>
      <h2 className="registration-page-desc">Almost done...</h2>
      <h3 id="registration-not-applicable" style={{ marginBottom: "35px" }}>
        Please check everything one last time!
      </h3>
      <div className="registration-confirmation-container">
        <div className="registration-confirmation">
          <h4>
            Username (autogenerated):{" "}
            <span>
              {formValues["First Name"]}
              {formValues["Last Name"]}
              {Math.floor(Math.random() * 1000) + 1}
            </span>
          </h4>
          {Object.keys(formValues).map((key, index) => (
            <h4 key={index}>
              {key}: <span>{formValues[key]}</span>
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};
