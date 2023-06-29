import React from "react";
import "./registration.css";
import { NextButton } from "../../components/buttons/next";

export const Page7 = () => {
  return (
    <div>
      <h2 className="registration-page-desc">Almost done...</h2>
      <h3 id="registration-not-applicable" style={{ marginBottom: "35px" }}>
        Please check everything one last time!
      </h3>
      <div className="registration-confirmation-container">
        <div className="registration-confirmation">
          <h4>
            Username: <span>example</span>
          </h4>
          <h4>
            Password: <span>example</span>
          </h4>
          <h4>
            First Name: <span>example</span>
          </h4>
          <h4>
            Last Name: <span>example</span>
          </h4>
          <h4>...</h4>
          <h4>
            Tag 1: <span>example</span>
          </h4>
          <h4>
            Tag 2: <span>example</span>
          </h4>
          <h4>
            Tag 3: <span>example</span>
          </h4>
          <h4>
            Tag 4: <span>example</span>
          </h4>
        </div>
      </div>
      <NextButton message="Register" />
    </div>
  );
};
