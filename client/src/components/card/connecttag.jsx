import React from "react";
import "./connecttag.css";
import {
  sendConnection,
  acceptConnection,
  cancelConnection,
  denyConnection,
  removeConnection,
} from "functions/connections";

export const ConnectTag = ({ cstate, sentby, user }) => {
  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case "accept":
        acceptConnection();
        break;
      case "deny":
        denyConnection();
        break;
      case "connect":
        sendConnection();
        break;
      case "cancel":
        cancelConnection();
        break;
      case "remove":
        removeConnection();
        break;
      default:
        break;
    }
  };

  return (
    <select className="connection-tag" onChange={handleOptionChange}>
      <option className="connection-tag-option" selected disabled hidden>
        ...
      </option>
      {cstate === "accepted" ? (
        <option className="connection-tag-option-reject" value="remove">
          Remove
        </option>
      ) : null}
      {cstate === "pending" && sentby === user ? (
        <option className="connection-tag-option-reject" value="cancel">
          Cancel
        </option>
      ) : null}
      {cstate === "pending" && sentby !== user ? (
        <option className="connection-tag-option-accept" value="accept">
          Accept
        </option>
      ) : null}
      {cstate === "pending" && sentby !== user ? (
        <option className="connection-tag-option-reject" value="deny">
          Deny
        </option>
      ) : null}
      {cstate === "not connected" ? (
        <option className="connection-tag-option-connect" value="connect">
          Connect
        </option>
      ) : null}
    </select>
  );
};
