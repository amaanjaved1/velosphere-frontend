import React from "react";
import "./requestcard.css";
import {
  acceptConnection,
  denyConnection,
  removeConnection,
} from "functions/connections";

export const RequestCard = ({
  email,
  link,
  token,
  actionFrom,
  handleClear,
  pageType,
}) => {
  const split = email.split(".");
  const firstName = split[0].toUpperCase();
  const lastName = split[1].split("@")[0].toUpperCase();
  const company = split[1].split("@")[1].toUpperCase();
  const profilePicture = `https://avatars.dicebear.com/api/initials/${firstName}%20${lastName}.svg`;

  const handleAccept = async () => {
    try {
      const response = await acceptConnection({
        token: token,
        actionFrom: actionFrom,
        actionTo: email,
      });

      if (response.status !== 200) {
        window.alert("Accept connection request failed");
      }

      handleClear(email);

      console.log("Connection request accepted");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeny = async () => {
    try {
      const response = await denyConnection({
        token: token,
        actionFrom: actionFrom,
        actionTo: email,
      });

      if (response.status !== 200) {
        window.alert("Deny connection request failed");
      }

      handleClear(email);

      console.log("Connection request denied");
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async () => {
    try {
      const response = await removeConnection({
        token: token,
        actionFrom: actionFrom,
        actionTo: email,
      });

      if (response.status !== 200) {
        window.alert("Connection request failed");
      }

      handleClear(email);

      console.log("Connection removed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="request-card-container">
      <div className="request-card-left">
        <a href={link}>
          <div
            className="request-card-image-container"
            style={{ backgroundImage: `url(${profilePicture})` }}
          ></div>
        </a>
      </div>
      <div className="request-card-right">
        <h1 className="request-card-name">
          {firstName} {lastName}
        </h1>
        <h2 className="request-card-company">{company}</h2>
        <h2 className="request-card-program">Velocity</h2>
        <hr className="request-card-hr" />
        {pageType === "requests" ? (
          <div className="request-card-buttons-container">
            <button className="request-card-accept" onClick={handleAccept}>
              Accept
            </button>
            <button className="request-card-decline" onClick={handleDeny}>
              Decline
            </button>
          </div>
        ) : (
          <button className="request-card-remove" onClick={handleRemove}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};
