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
  let company = "";
  if (email.includes("tangerine")) {
    company = "Tangerine";
  } else if (email.includes("scotiabank")) {
    company = "Scotiabank";
  } else {
    company = "MD Financial";
  }

  const profilePicture = `https://robohash.org/${email}.png`;

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
        <h1 className="request-card-name">{email}</h1>
        <h2
          className="request-card-company"
          style={{
            color:
              company === "Tangerine"
                ? "#fe793e"
                : company === "Scotiabank"
                ? "#980a0e"
                : "#0a085b",
          }}
        >
          {company}
        </h2>

        <h2 className="request-card-program">Velocity</h2>
        <hr className="request-card-hr" />
        {pageType === "requests" ? (
          <div className="request-card-buttons-container">
            <button
              className="request-card-accept"
              onClick={handleAccept}
              style={{ cursor: "pointer" }}
            >
              Accept
            </button>
            <button
              className="request-card-decline"
              onClick={handleDeny}
              style={{ cursor: "pointer" }}
            >
              Decline
            </button>
          </div>
        ) : (
          <button
            className="request-card-remove"
            onClick={handleRemove}
            style={{ cursor: "pointer" }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};
