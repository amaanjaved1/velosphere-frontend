import React from "react";
import "./connecttag.css";
import {
  sendConnection,
  acceptConnection,
  cancelConnection,
  denyConnection,
  removeConnection,
} from "functions/connections";
import { useSelector } from "react-redux";

export const ConnectTag = ({ cstate, user, profileEmail, sentby }) => {
  const token = useSelector((state) => state.token);

  const handleOptionChange = async (e) => {
    const selectedOption = e.target.value;
    let response; // Declare the variable outside the switch statement
    switch (selectedOption) {
      case "accept":
        response = await acceptConnection({
          token: token,
          actionFrom: user,
          actionTo: profileEmail,
        });

        if (response.status !== 200) {
          window.alert("Accept connection request failed");
          break;
        }

        cstate.setCState("accepted");
        console.log("Connection request accepted");
        break;
      case "deny":
        response = await denyConnection({
          token: token,
          actionFrom: user,
          actionTo: profileEmail,
        });

        if (response.status !== 200) {
          window.alert("Deny connection request failed");
        }

        cstate.setCState("not connected");
        sentby.setSentBy(false);
        console.log("Connection request denied");
        break;
      case "connect":
        response = await sendConnection({
          token: token,
          actionFrom: user,
          actionTo: profileEmail,
        });

        if (response.status !== 200) {
          window.alert("Connection request failed");
          break;
        }
        cstate.setCState("pending");
        sentby.setSentBy(user);
        console.log("Connection request sent");
        break;
      case "cancel":
        response = await cancelConnection({
          token: token,
          actionFrom: user,
          actionTo: profileEmail,
        });

        if (response.status !== 200) {
          window.alert("Connection request failed");
        }

        cstate.setCState("not connected");
        sentby.setSentBy(false);
        console.log("Connection request cancelled");
        break;
      case "remove":
        response = await removeConnection({
          token: token,
          actionFrom: user,
          actionTo: profileEmail,
        });

        if (response.status !== 200) {
          window.alert("Connection request failed");
        }

        cstate.setCState("not connected");
        sentby.setSentBy(false);
        console.log("Connection removed");
        break;
      default:
        break;
    }
  };

  return (
    <select
      className="connection-tag"
      onChange={handleOptionChange}
      value="default"
      style={{
        backgroundColor:
          cstate.cstate === "accepted"
            ? "#256c0d"
            : cstate.cstate === "pending"
            ? "#FFA500"
            : "#980A0E",
      }}
    >
      <option className="connection-tag-option" value="default" disabled hidden>
        Actions
      </option>
      {cstate.cstate === "accepted" ? (
        <option className="connection-tag-option-reject" value="remove">
          Remove
        </option>
      ) : null}
      {cstate.cstate === "pending" && sentby.sentby === user ? (
        <option className="connection-tag-option-reject" value="cancel">
          Cancel
        </option>
      ) : null}
      {cstate.cstate === "pending" && sentby.sentby !== user ? (
        <option className="connection-tag-option-accept" value="accept">
          Accept
        </option>
      ) : null}
      {cstate.cstate === "pending" && sentby.sentby !== user ? (
        <option className="connection-tag-option-reject" value="deny">
          Deny
        </option>
      ) : null}
      {cstate.cstate === "not connected" ? (
        <option className="connection-tag-option-connect" value="connect">
          Connect
        </option>
      ) : null}
    </select>
  );
};
