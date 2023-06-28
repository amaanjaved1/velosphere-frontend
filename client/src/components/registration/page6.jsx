import React from "react";
import "./registration.css";
import { NextButton } from "../../components/buttons/next";
import { InputFieldButton } from "../../components/buttons/input";
import { LargeInputFieldButton } from "components/buttons/largeinput";

export const Page6 = () => {
  return (
    <div>
      <h2 className="registration-page-desc">About You! </h2>
      <div className="registration-content-container">
        <LargeInputFieldButton
          type="meInOneSentence"
          name="meInOneSentence"
          id="meInOneSentence"
          label="Describe Yourself In One Sentence! (150 char max)"
          placeholder="i.e. I enjoy playing soccer and tennis on the weekends!"
        />
        <InputFieldButton
          type="Tag1"
          name="Tag1"
          id="Tag1"
          label="Tag1"
          placeholder="i.e. Coding"
        />
        <InputFieldButton
          type="Tag2"
          name="Tag2"
          id="Tag2"
          label="Tag2"
          placeholder="i.e. Tennis"
        />
        <InputFieldButton
          type="Tag3"
          name="Tag3"
          id="Tag3"
          label="Tag3"
          placeholder="i.e. Foodie"
        />
        <InputFieldButton
          type="Tag4"
          name="Tag4"
          id="Tag4"
          label="Tag4"
          placeholder="i.e. Gym Bro"
        />
      </div>
      <NextButton message="Next" />
    </div>
  );
};
