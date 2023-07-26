import React, { useState, useEffect } from "react";
import { Page1 } from "../../components/registration/page1";
import { Page2 } from "../../components/registration/page2";
import { Page3 } from "../../components/registration/page3";
import { Page4 } from "../../components/registration/page4";
import { Page5 } from "../../components/registration/page5";
import { Page6 } from "../../components/registration/page6";
import { Page7 } from "../../components/registration/page7";
import { RegisterPagination } from "../../components/registration/regpag";
import { NextButton } from "../../components/buttons/next";
import { getCurrentTerm } from "helper";
import { useDispatch } from "react-redux";
import { setColorTheme } from "state";
import { useNavigate } from "react-router-dom";
import "./register.css";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("scotiabank");
  const [color, setColor] = useState("#980A0E");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("First + Last + XXX");
  const [commEmail, setCommEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentProgram, setStudentProgram] = useState("Velocity");
  const [internPosition, setInternPosition] = useState("");
  const [internTeam, setInternTeam] = useState("");
  const [location, setLocation] = useState("");
  const [currentTerm, setCurrentTerm] = useState(getCurrentTerm());
  const [educationalInstitution, setEducationalInstitution] = useState("");
  const [schoolProgram, setSchoolProgram] = useState("");
  const [meInOneSentence, setMeInOneSentence] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [tag4, setTag4] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [facebook, setFacebook] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const num = Math.floor(Math.random() * 1000);
  const [pagesCompleted, setPagesCompleted] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formValues = {
    "My Email": email,
    "First Name": firstName,
    "Last Name": lastName,
    "My Password": password,
    "Student Program": studentProgram,
    "Internship Position": internPosition,
    "Internship Team": internTeam,
    "Internship Location": location,
    "Current Term": currentTerm,
    "My School": educationalInstitution,
    "School Program": schoolProgram,
    "One Sentence": meInOneSentence,
    "Tag 1": tag1,
    "Tag 2": tag2,
    "Tag 3": tag3,
    "Tag 4": tag4,
    "Twitter Account": twitter,
    "LinkedIn Account": linkedin,
    "GitHub Account": github,
    "Facebook Account": facebook,
    "Personal Email": commEmail,
  };

  const nextPage = () => {
    if (page >= 1 && page <= 6) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const validatePage = () => {
    if (page === 1) {
      checkPage1Completion();
    } else if (page === 2) {
      checkPage2Completion();
    } else if (page === 3) {
      checkPage3Completion();
    } else if (page === 4) {
      checkPage4Completion();
    } else if (page === 5) {
      checkPage5Completion();
    } else if (page === 6) {
      checkPage6Completion();
    }
  };

  const updateStore = () => {
    dispatch(setColorTheme({ color: color, company: company }));
  };

  useEffect(() => {
    checkFormCompletion();
  }, [pagesCompleted]);

  const checkFormCompletion = () => {
    // If all of the 6 pages are completed, then the form is done
    if (pagesCompleted.length === 6) {
      setIsFormComplete(true);
    }
  };

  useEffect(() => {
    validatePage();
  }, [
    email,
    firstName,
    lastName,
    password,
    studentProgram,
    internPosition,
    internTeam,
    location,
    currentTerm,
    educationalInstitution,
    schoolProgram,
    meInOneSentence,
    tag1,
    tag2,
    tag3,
    tag4,
    twitter,
    linkedin,
    github,
    facebook,
    commEmail,
  ]);

  const checkPage1Completion = () => {
    // Check if the email is in the proper format (aka. contains @scotiabank, @tangerine, @mdfinancial)
    // Check if the email is already in the database

    // If the email is in the proper format, then add it to the pagesCompleted array
    if (
      email.includes("@scotiabank.com") ||
      email.includes("@tangerine.ca") ||
      email.includes("@mdfinancial.ca")
    ) {
      if (!pagesCompleted.includes(1)) {
        setPagesCompleted([...pagesCompleted, 1]);
      }
    }
    // If the email is not in the proper format, then remove it from the pagesCompleted array
    if (
      !(
        email.includes("@scotiabank.com") ||
        email.includes("@tangerine.ca") ||
        email.includes("@mdfinancial.ca")
      )
    ) {
      if (pagesCompleted.includes(1)) {
        setPagesCompleted(pagesCompleted.filter((page) => page !== 1));
      }
    }
  };

  const checkPage2Completion = () => {
    // Check to see if the first name, last name, and password are all filled in
    // If they are, then add page 2 to the pagesCompleted array
    if (firstName && lastName && password && commEmail) {
      if (!pagesCompleted.includes(2)) {
        setPagesCompleted([...pagesCompleted, 2]);
      }
    }

    // If they are not, then remove page 2 from the pagesCompleted array
    if (!(firstName && lastName && password && commEmail)) {
      if (pagesCompleted.includes(2)) {
        setPagesCompleted(pagesCompleted.filter((page) => page !== 2));
      }
    }
  };

  const checkPage3Completion = () => {
    // Check to see if the student program, internship position, internship team, location, and current term are all filled in
    // If they are, then add page 3 to the pagesCompleted array
    if (
      studentProgram &&
      internPosition &&
      internTeam &&
      location &&
      currentTerm
    ) {
      if (!pagesCompleted.includes(3)) {
        setPagesCompleted([...pagesCompleted, 3]);
      }
    }

    // If they are not, then remove page 3 from the pagesCompleted array
    if (
      !(
        studentProgram &&
        internPosition &&
        internTeam &&
        location &&
        currentTerm
      )
    ) {
      if (pagesCompleted.includes(3)) {
        setPagesCompleted(pagesCompleted.filter((page) => page !== 3));
      }
    }
  };

  const checkPage4Completion = () => {
    // Check to see if the educational institution and school program are all filled in
    // If they are, then add page 4 to the pagesCompleted array
    if (educationalInstitution && schoolProgram) {
      if (!pagesCompleted.includes(4)) {
        setPagesCompleted([...pagesCompleted, 4]);
      }
    }

    // If they are not, then remove page 4 from the pagesCompleted array
    if (!(educationalInstitution && schoolProgram)) {
      if (pagesCompleted.includes(4)) {
        setPagesCompleted(pagesCompleted.filter((page) => page !== 4));
      }
    }
  };

  const checkPage5Completion = () => {
    // Check to see if the social media accounts are all filled in
    // If they are, then add page 6 to the pagesCompleted array
    if (twitter && linkedin && github && facebook) {
      if (!pagesCompleted.includes(5)) {
        setPagesCompleted([...pagesCompleted, 5]);
      }
    }

    // If they are not, then remove page 6 from the pagesCompleted array
    if (!(twitter && linkedin && github && facebook)) {
      if (pagesCompleted.includes(5)) {
        setPagesCompleted(pagesCompleted.filter((page) => page !== 5));
      }
    }
  };

  const checkPage6Completion = () => {
    // Check to see if the me in one sentence and tags are all filled in
    // If they are, then add page 5 to the pagesCompleted array
    if (meInOneSentence && tag1 && tag2 && tag3 && tag4) {
      if (!pagesCompleted.includes(6)) {
        setPagesCompleted([...pagesCompleted, 6]);
      }
    }

    // If they are not, then remove page 5 from the pagesCompleted array
    if (!(meInOneSentence && tag1 && tag2 && tag3 && tag4)) {
      if (pagesCompleted.includes(6)) {
        setPagesCompleted(pagesCompleted.filter((page) => page !== 6));
      }
    }
  };

  const register = async () => {
    let name = `${firstName}${lastName}${num}`.replace(/[^a-zA-Z0-9]/g, "");
    setUsername(name);

    let profilePicture = `https://robohash.org/${email}.png`;

    const requestBody = {
      username: name,
      password: formValues["My Password"],
      firstName: formValues["First Name"],
      lastName: formValues["Last Name"],
      email: formValues["My Email"],
      studentProgram: formValues["Student Program"],
      company: company,
      internPosition: formValues["Internship Position"],
      educationalInstitution: formValues["My School"],
      schoolProgram: formValues["School Program"],
      profilePicture: profilePicture,
      meInOneSentence: formValues["One Sentence"],
      studentLocation: location,
      twitter: formValues["Twitter Account"],
      linkedIn: formValues["LinkedIn Account"],
      facebook: formValues["Facebook Account"],
      github: formValues["GitHub Account"],
      meIn4Tags1: formValues["Tag 1"],
      meIn4Tags2: formValues["Tag 2"],
      meIn4Tags3: formValues["Tag 3"],
      meIn4Tags4: formValues["Tag 4"],
      internTeam: formValues["Internship Team"],
      currentTerm: formValues["Current Term"],
      pastTerms: [],
      commEmail: formValues["Personal Email"],
    };

    // Make the backend request
    try {
      setIsSubmitted(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        // Registration successful
        // Handle the successful response
        // For example, display a success message to the user
        navigate("/registration-success");
        updateStore();
      } else {
        const errorResponse = await response.json();
        window.alert(errorResponse.message);
      }
      setIsSubmitted(false);
    } catch (error) {
      // Network error or other exception occurred
      // Handle the error
      // For example, display a generic error message to the user
      setIsSubmitted(false);
      window.alert("An error occurred during registration", error);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        const inputProps1 = {
          emailKey: { content: email, valuefunction: setEmail },
          companyKey: { content: company, valuefunction: setCompany },
          colorKey: { content: color, valuefunction: setColor },
        };
        return <Page1 inputProps={inputProps1} />;
      case 2:
        const inputProps2 = {
          firstNameKey: { content: firstName, valuefunction: setFirstName },
          lastNameKey: { content: lastName, valuefunction: setLastName },
          passwordKey: { content: password, valuefunction: setPassword },
          commEmailKey: { content: commEmail, valuefunction: setCommEmail },
        };
        return <Page2 inputProps={inputProps2} />;
      case 3:
        const inputProps3 = {
          studentProgramKey: {
            content: studentProgram,
            valuefunction: setStudentProgram,
          },
          internPositionKey: {
            content: internPosition,
            valuefunction: setInternPosition,
          },
          internTeamKey: { content: internTeam, valuefunction: setInternTeam },
          locationKey: { content: location, valuefunction: setLocation },
          currentTermKey: {
            content: currentTerm,
            valuefunction: setCurrentTerm,
          },
        };
        return <Page3 inputProps={inputProps3} />;
      case 4:
        const inputProps4 = {
          educationalInstitutionKey: {
            content: educationalInstitution,
            valuefunction: setEducationalInstitution,
          },
          schoolProgramKey: {
            content: schoolProgram,
            valuefunction: setSchoolProgram,
          },
        };
        return <Page4 inputProps={inputProps4} />;
      case 5:
        const inputProps5 = {
          twitterKey: { content: twitter, valuefunction: setTwitter },
          linkedinKey: { content: linkedin, valuefunction: setLinkedin },
          githubKey: { content: github, valuefunction: setGithub },
          facebookKey: { content: facebook, valuefunction: setFacebook },
        };
        return <Page5 inputProps={inputProps5} />;
      case 6:
        const inputProps6 = {
          meInOneSentenceKey: {
            content: meInOneSentence,
            valuefunction: setMeInOneSentence,
          },
          tag1Key: { content: tag1, valuefunction: setTag1 },
          tag2Key: { content: tag2, valuefunction: setTag2 },
          tag3Key: { content: tag3, valuefunction: setTag3 },
          tag4Key: { content: tag4, valuefunction: setTag4 },
        };
        return <Page6 inputProps={inputProps6} />;
      case 7:
        return <Page7 formValues={formValues} />;
      default:
        return <Page1 />;
    }
  };

  const getBackgroundClass = () => {
    if (company === "tangerine") {
      return `tangerine-background`;
    } else if (company === "mdfinancial") {
      return `mdfinancial-background`;
    } else {
      return `scotiabank-background`;
    }
  };

  return (
    <div className="register-page">
      <div className={getBackgroundClass()} />
      <div className="register-form">
        <h1 className="register-title-text">Register!</h1>
        {renderPage()}
        {page < 7 ? (
          <div>
            {page > 1 ? (
              <NextButton color={color} action={prevPage} message="Prev" />
            ) : null}
            {pagesCompleted.includes(page) ? (
              <NextButton color={color} action={nextPage} message="Next" />
            ) : null}
          </div>
        ) : (
          <div>
            {" "}
            <NextButton color={color} action={prevPage} message="Prev" />
            {isFormComplete ? (
              isSubmitted ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{ marginBottom: "20px" }}
                    className="loading-spinner"
                  />
                </div>
              ) : (
                <NextButton
                  color={color}
                  action={register}
                  message="Register"
                />
              )
            ) : null}
          </div>
        )}
        <div className="regpag-container">
          <RegisterPagination currentPage={page} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
