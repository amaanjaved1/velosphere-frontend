import React from "react";
import "./connectBigCard.css";
import {
  sendConnection,
  acceptConnection,
  cancelConnection,
  denyConnection,
  removeConnection,
} from "functions/connections";
import { useSelector } from "react-redux";

export const ConnectBigCard = ({ cstate, user, profileEmail, sentby }) => {
  const token = useSelector((state) => state.token);

  const acceptRequest = async () => {
    const response = await acceptConnection({
      token: token,
      actionFrom: user,
      actionTo: profileEmail,
    });

    if (response.status !== 200) {
      window.alert("Accept connection request failed");
    }

    cstate.setCState("accepted");
    console.log("Connection request accepted");
  };

  const denyRequest = async () => {
    const response = await denyConnection({
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
  };

  const connectRequest = async () => {
    const response = await sendConnection({
      token: token,
      actionFrom: user,
      actionTo: profileEmail,
    });

    if (response.status !== 200) {
      window.alert("Connection request failed");
    }

    cstate.setCState("pending");
    sentby.setSentBy(user);
    console.log("Connection request sent");
  };

  const cancelRequest = async () => {
    const response = await cancelConnection({
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
  };

  const removeRequest = async () => {
    const response = await removeConnection({
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
  };

  return (
    <div>
      {cstate.cstate === "accepted" ? (
        <button
          className="connect-big-card"
          onClick={removeRequest}
          style={{ backgroundColor: "#980a0e", color: "white" }}
        >
          Remove
        </button>
      ) : null}
      {cstate.cstate === "pending" && sentby.sentby === user ? (
        <button
          className="connect-big-card"
          onClick={cancelRequest}
          style={{ backgroundColor: "#980a0e", color: "white" }}
        >
          Cancel
        </button>
      ) : null}
      {cstate.cstate === "pending" && sentby.sentby !== user ? (
        <button
          className="connect-big-card"
          onClick={acceptRequest}
          style={{
            backgroundColor: "#256c0d",
            color: "white",
          }}
        >
          Accept
        </button>
      ) : null}
      {cstate.cstate === "pending" && sentby.sentby !== user ? (
        <button
          className="connect-big-card"
          onClick={denyRequest}
          style={{ backgroundColor: "#980a0e", color: "white" }}
        >
          Deny
        </button>
      ) : null}
      {cstate.cstate === "not connected" ? (
        <button
          className="connect-big-card"
          onClick={connectRequest}
          style={{
            background:
              "linear-gradient(83.1deg, #ff46c0 6.87%, #ffa877 105.82%)",
          }}
        >
          Connect
        </button>
      ) : null}
    </div>
  );
};
