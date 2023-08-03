import React from "react";
import "./profile.css";
import { Navbar } from "components/navbar/navbar";
import { ProfileAbout } from "scenes/profilePage/profile-about";
import { ProfileCareer } from "scenes/profilePage/profile-career";
import { EditNav } from "components/edit-profile/editnav";
import { EditView } from "components/edit-profile/editview";
import { CardContainer } from "components/card/cardcontainer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Own profile: cstate= false, sentby=false
// Other profile:
// Not connected: cstate="not connected", sentby=false
// Pending: csate="pending", sentby=true/false
// Connected: cstate="accepted", sentby=true/false

export const ProfilePage = () => {
  const token = useSelector((state) => state.token);
  const email = useSelector((state) => state.user);
  const { profileEmail } = useParams();
  const [isMyProfile, setIsMyProfile] = useState(email === profileEmail);
  const [isEditing, setIsEditing] = useState(false);
  const [isAboutSection, setIsAboutSection] = useState(true);
  const [cstate, setCState] = useState(false);
  const [sentby, setSentBy] = useState(false);
  const [card, setCard] = useState({});
  const [company, setCompany] = useState("");
  const color = "#FFFFEA";

  const getCard = async () => {
    try {
      const requestBody = { actionFrom: email };
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/profile/${profileEmail}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const {
          username,
          firstName,
          lastName,
          company,
          studentProgram,
          studentLocation,
          educationalInstitution,
          schoolProgram,
          meInOneSentence,
          github,
          linkedin,
          twitter,
          facebook,
          meInFourTags1,
          meInFourTags2,
          meInFourTags3,
          meInFourTags4,
          internPosition,
          internTeam,
          currentTerm,
          pastTerms,
          isMyProfile,
          cstate,
          sentby,
        } = await response.json();

        let cardContent = {
          username: username,
          firstName: firstName,
          lastName: lastName,
          company: company.toUpperCase(),
          studentProgram: studentProgram,
          studentLocation: studentLocation,
          educationalInstitution: educationalInstitution,
          schoolProgram: schoolProgram,
          meInOneSentence: meInOneSentence,
          github: github,
          linkedin: linkedin,
          twitter: twitter,
          facebook: facebook,
          meInFourTags1: meInFourTags1,
          meInFourTags2: meInFourTags2,
          meInFourTags3: meInFourTags3,
          meInFourTags4: meInFourTags4,
          internPosition: internPosition,
          internTeam: internTeam,
          currentTerm: currentTerm,
          pastTerms: pastTerms,
          isMyProfile: isMyProfile,
          cstate: cstate,
          sentby: sentby,
        };

        setCard(cardContent);

        if (cstate === false) {
          setIsMyProfile(true);
        }

        setCState(cstate);
        setSentBy(sentby);
        setCompany(company);
        return true;
      } else {
        console.log(`Request failed: ${response.status}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getCard();
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [isEditing]);

  return (
    <div>
      <Navbar />
      {isMyProfile ? (
        <EditNav
          message={isEditing ? "Back" : "Edit"}
          color={color}
          onClick={toggleEdit}
        />
      ) : (
        <div style={{ marginTop: "25px" }}></div>
      )}
      {isEditing ? (
        <EditView
          cardContent={card}
          user={email}
          token={token}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div className="profile-view-container">
          <CardContainer
            profileEmail={profileEmail}
            cardContent={card}
            isMyProfile={isMyProfile}
            user={email}
            cstate={{ cstate, setCState }}
            sentby={{ sentby, setSentBy }}
            color={color}
          />
          <div className="profile-nav">
            <div
              id="temp-1"
              style={{
                color: isAboutSection ? "#000000" : "#FFFFFF",
                backgroundColor: isAboutSection ? color : "#3e3e3e",
              }}
              onClick={() => {
                setIsAboutSection(true);
              }}
            >
              ABOUT
            </div>
            <div
              id="temp-2"
              style={{
                color: isAboutSection ? "#FFFFFF" : "#000000",
                backgroundColor: isAboutSection ? "#3e3e3e" : color,
              }}
              onClick={() => {
                setIsAboutSection(false);
              }}
            >
              CAREER
            </div>
          </div>
          {isAboutSection ? (
            <ProfileAbout
              cardContent={card}
              color={color}
              profileEmail={profileEmail}
            />
          ) : (
            <ProfileCareer cardContent={card} />
          )}
        </div>
      )}
    </div>
  );
};
