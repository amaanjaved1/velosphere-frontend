import React from "react";
import "./registration.css";
import { InputFieldButton } from "../../components/buttons/input";
import { LargeInputFieldButton } from "components/buttons/largeinput";

export const Page6 = ({ inputProps }) => {
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
          content={inputProps.meInOneSentenceKey.content}
          valuefunction={inputProps.meInOneSentenceKey.valuefunction}
        />
        <InputFieldButton
          type="Tag1"
          name="Tag1"
          id="Tag1"
          label="Tag1"
          placeholder="i.e. Coding"
          content={inputProps.tag1Key.content}
          valuefunction={inputProps.tag1Key.valuefunction}
        />
        <InputFieldButton
          type="Tag2"
          name="Tag2"
          id="Tag2"
          label="Tag2"
          placeholder="i.e. Tennis"
          content={inputProps.tag2Key.content}
          valuefunction={inputProps.tag2Key.valuefunction}
        />
        <InputFieldButton
          type="Tag3"
          name="Tag3"
          id="Tag3"
          label="Tag3"
          placeholder="i.e. Foodie"
          content={inputProps.tag3Key.content}
          valuefunction={inputProps.tag3Key.valuefunction}
        />
        <InputFieldButton
          type="Tag4"
          name="Tag4"
          id="Tag4"
          label="Tag4"
          placeholder="i.e. Gym Bro"
          content={inputProps.tag4Key.content}
          valuefunction={inputProps.tag4Key.valuefunction}
        />
      </div>
    </div>
  );
};
