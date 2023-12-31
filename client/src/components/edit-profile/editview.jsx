import React from "react";
import "./editview.css";
import { InputFieldButton } from "../../components/buttons/input";
import { LargeInputFieldButton } from "components/buttons/largeinput";
import { useState } from "react";
import { getCurrentTerm, validateTerm } from "helper";

export const EditView = ({ cardContent, user, token, setIsEditing }) => {
  const [currentTerm, setCurrentTerm] = useState(getCurrentTerm());
  const [company, setCompany] = useState(cardContent.company);
  const [studentProgram, setStudentProgram] = useState(
    cardContent.studentProgram
  );
  const [internPosition, setInternPosition] = useState(
    cardContent.internPosition
  );
  const [internTeam, setInternTeam] = useState(cardContent.internTeam);
  const [location, setLocation] = useState(cardContent.studentLocation);
  const [educationalInstitution, setEducationalInstitution] = useState(
    cardContent.educationalInstitution
  );
  const [schoolProgram, setSchoolProgram] = useState(cardContent.schoolProgram);
  const [facebook, setFacebook] = useState(cardContent.facebook);
  const [linkedin, setLinkedin] = useState(cardContent.linkedin);
  const [github, setGithub] = useState(cardContent.github);
  const [meInOneSentence, setMeInOneSentence] = useState(
    cardContent.meInOneSentence
  );
  const [meInFourTags1, setMeInFourTags1] = useState(cardContent.meInFourTags1);
  const [meInFourTags2, setMeInFourTags2] = useState(cardContent.meInFourTags2);
  const [meInFourTags3, setMeInFourTags3] = useState(cardContent.meInFourTags3);
  const [meInFourTags4, setMeInFourTags4] = useState(cardContent.meInFourTags4);
  const [pastTerms, setPastTerms] = useState(cardContent.pastTerms);
  const [isFetched, setIsFetched] = useState(false);

  const validatePastTerms = () => {
    if (pastTerms.length === 0) {
      return true;
    }

    // Make sure that each term is in the format of s##, f##, or w##
    // and that each term is separated by a comma and a space

    const terms = pastTerms.split(", ");

    for (let i = 0; i < terms.length; i++) {
      if (!validateTerm(terms[i])) {
        return false;
      }
    }

    return true;
  };

  const validateEdits = () => {
    let valid = true;

    if (!validateTerm(currentTerm)) {
      document.getElementById("currentTerm").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("currentTerm").style.backgroundColor = "";
    }

    if (company.length === 0) {
      document.getElementById("company").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("company").style.backgroundColor = "";
    }

    if (
      !["SCOTIABANK", "TANGERINE", "MDFINANCIAL"].includes(
        company.toUpperCase()
      )
    ) {
      window.alert("Company must be SCOTIABANK, TANGERINE, or MDFINANCIAL");
      document.getElementById("company").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("company").style.backgroundColor = "";
    }

    if (studentProgram.length === 0) {
      document.getElementById("studentProgram").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("studentProgram").style.backgroundColor = "";
    }

    if (!"VELOCITY" === studentProgram.toUpperCase()) {
      window.alert("Student program must be 'Velocity'");
      document.getElementById("studentProgram").style.backgroundColor = "red";
    } else {
      document.getElementById("studentProgram").style.backgroundColor = "";
    }

    if (internPosition.length === 0) {
      document.getElementById("internPosition").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("internPosition").style.backgroundColor = "";
    }

    if (internTeam.length === 0) {
      document.getElementById("internTeam").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("internTeam").style.backgroundColor = "";
    }

    if (location.length === 0) {
      document.getElementById("location").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("location").style.backgroundColor = "";
    }

    if (educationalInstitution.length === 0) {
      document.getElementById("educationalInstitution").style.backgroundColor =
        "red";
      valid = false;
    } else {
      document.getElementById("educationalInstitution").style.backgroundColor =
        "";
    }

    if (schoolProgram.length === 0) {
      document.getElementById("schoolProgram").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("schoolProgram").style.backgroundColor = "";
    }

    if (facebook.length === 0) {
      document.getElementById("facebook").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("facebook").style.backgroundColor = "";
    }

    if (linkedin.length === 0) {
      document.getElementById("linkedin").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("linkedin").style.backgroundColor = "";
    }

    if (github.length === 0) {
      document.getElementById("github").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("github").style.backgroundColor = "";
    }

    if (meInOneSentence.length === 0) {
      document.getElementById("meInOneSentence").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("meInOneSentence").style.backgroundColor = "";
    }

    if (meInFourTags1.length === 0) {
      document.getElementById("tag1").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("tag1").style.backgroundColor = "";
    }

    if (meInFourTags2.length === 0) {
      document.getElementById("tag2").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("tag2").style.backgroundColor = "";
    }

    if (meInFourTags3.length === 0) {
      document.getElementById("tag3").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("tag3").style.backgroundColor = "";
    }

    if (meInFourTags4.length === 0) {
      document.getElementById("tag4").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("tag4").style.backgroundColor = "";
    }

    if (validatePastTerms() === false) {
      document.getElementById("pastTerms").style.backgroundColor = "red";
      valid = false;
    } else {
      document.getElementById("pastTerms").style.backgroundColor = "";
    }

    return valid;
  };

  const updateProfile = async () => {
    try {
      setIsFetched(true);
      const requestBody = {
        actionFrom: user,
        fieldsToUpdate: {
          currentterm: currentTerm,
          pastterms: pastTerms,
          company: company.toLowerCase(),
          studentprogram: studentProgram,
          internposition: internPosition.replace(/'/g, ""),
          internteam: internTeam.replace(/'/g, ""),
          studentlocation: location,
          educationalinstitution: educationalInstitution.replace(/'/g, ""),
          schoolprogram: schoolProgram.replace(/'/g, ""),
          facebook: facebook,
          linkedin: linkedin,
          github: github,
          meinonesentence: meInOneSentence,
          mein4tags1: meInFourTags1,
          mein4tags2: meInFourTags2,
          mein4tags3: meInFourTags3,
          mein4tags4: meInFourTags4,
        },
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/profile/update/${user}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      console.log(response);
      setIsFetched(false);
    } catch (err) {
      setIsFetched(false);
      console.log(err);
    }
  };

  return (
    <div className="edit-view-outer-container">
      <form className="edit-view-container">
        <h1 id="edit-view-heading">Editing Profile</h1>
        <InputFieldButton
          type="currentTerm"
          name="currentTerm"
          id="currentTerm"
          label="Current Term (_2_ format)"
          placeholder="i.e. S23"
          content={currentTerm}
          valuefunction={setCurrentTerm}
        />
        <InputFieldButton
          type="company"
          name="company"
          id="company"
          label="Company"
          placeholder="Scotiabank"
          content={company}
          valuefunction={setCompany}
        />
        <InputFieldButton
          type="studentProgram"
          name="studentProgram"
          id="studentProgram"
          label="Student Program"
          placeholder="i.e. Velocity"
          content={studentProgram}
          valuefunction={setStudentProgram}
        />
        <InputFieldButton
          type="internPosition"
          name="internPosition"
          id="internPosition"
          label="Intern Position"
          placeholder="i.e. Software Developer Intern"
          content={internPosition}
          valuefunction={setInternPosition}
        />
        <InputFieldButton
          type="internTeam"
          name="internTeam"
          id="internTeam"
          label="Service Line"
          placeholder="i.e. CID&A"
          content={internTeam}
          valuefunction={setInternTeam}
        />
        <InputFieldButton
          type="location"
          name="location"
          id="location"
          label="Office Location (please use format below)"
          placeholder="i.e. 44 King Street West, Toronto, ON"
          content={location}
          valuefunction={setLocation}
        />
        <InputFieldButton
          type="educationalInstitution"
          name="educationalInstitution"
          id="educationalInstitution"
          label="Educational Institution"
          placeholder="i.e. Queen's University"
          content={educationalInstitution}
          valuefunction={setEducationalInstitution}
        />
        <InputFieldButton
          type="schoolProgram"
          name="schoolProgram"
          id="schoolProgram"
          label="School Program"
          placeholder="i.e. Computer Science"
          content={schoolProgram}
          valuefunction={setSchoolProgram}
        />
        <InputFieldButton
          type="LinkedIn"
          name="LinkedIn"
          id="linkedin"
          label="LinkedIn"
          placeholder="Link to your LinkedIn account"
          content={linkedin}
          valuefunction={setLinkedin}
        />
        <InputFieldButton
          type="Facebook"
          name="Facebook"
          id="facebook"
          label="Facebook"
          placeholder="Link to your Facebook account"
          content={facebook}
          valuefunction={setFacebook}
        />
        <InputFieldButton
          type="GitHub"
          name="GitHub"
          id="github"
          label="GitHub"
          placeholder="Link to your GitHub account"
          content={github}
          valuefunction={setGithub}
        />
        <LargeInputFieldButton
          type="meInOneSentence"
          name="meInOneSentence"
          id="meInOneSentence"
          label="Describe Yourself In One Sentence! (150 char max)"
          placeholder="i.e. I enjoy playing soccer and tennis on the weekends!"
          content={meInOneSentence}
          valuefunction={setMeInOneSentence}
        />
        <InputFieldButton
          type="Tag1"
          name="Tag1"
          id="tag1"
          label="Tag 1"
          placeholder="i.e. Coding"
          content={meInFourTags1}
          valuefunction={setMeInFourTags1}
        />
        <InputFieldButton
          type="Tag2"
          name="Tag2"
          id="tag2"
          label="Tag 2"
          placeholder="i.e. Tennis"
          content={meInFourTags2}
          valuefunction={setMeInFourTags2}
        />
        <InputFieldButton
          type="Tag3"
          name="Tag3"
          id="tag3"
          label="Tag 3"
          placeholder="i.e. Foodie"
          content={meInFourTags3}
          valuefunction={setMeInFourTags3}
        />
        <InputFieldButton
          type="Tag4"
          name="Tag4"
          id="tag4"
          label="Tag 4"
          placeholder="i.e. Gym Bro"
          content={meInFourTags4}
          valuefunction={setMeInFourTags4}
        />
        <InputFieldButton
          type="pastTerms"
          name="pastTerms"
          id="pastTerms"
          label="Past Terms (must be separated by comma and space) - F22, W21"
          placeholder="Format: S23, F22, W22 or blank!"
          content={pastTerms}
          valuefunction={setPastTerms}
        />
        {isFetched ? (
          <div className="loading-spinner" style={{ marginBottom: "15px" }} />
        ) : (
          <button
            className="edit-view-submit"
            onClick={async (e) => {
              // Prevent the form from submitting
              e.preventDefault();

              let result = validateEdits();

              if (result) {
                await updateProfile();
                setIsEditing(false);
              } else {
                window.alert("Invalid fields");
              }
            }}
          >
            Save
          </button>
        )}
      </form>
    </div>
  );
};
