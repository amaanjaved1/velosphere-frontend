import React from "react";
import "./register.css";
import { Page1 } from "../../components/registration/page1";
import { Page2 } from "../../components/registration/page2";
import { Page3 } from "../../components/registration/page3";
import { Page4 } from "../../components/registration/page4";
import { Page5 } from "../../components/registration/page5";
import { Page6 } from "../../components/registration/page6";
import { Page7 } from "../../components/registration/page7";
import { RegisterPagination } from "../../components/registration/regpag";

export const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-bg"></div>
      <div className="register-form">
        <h1 className="register-title-text">Register!</h1>
        <Page7 />
        <div className="regpag-container">
          <RegisterPagination />
        </div>
      </div>
    </div>
  );
};
