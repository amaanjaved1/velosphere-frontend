// All functions related to connections

export const sendConnection = async (args) => {
  try {
    const { actionFrom, actionTo, token } = args;

    const requestBody = {
      actionFrom: actionFrom,
      actionTo: actionTo,
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/profile/send-connection/${actionTo}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const acceptConnection = async (args) => {
  try {
    const { actionFrom, actionTo, token } = args;

    const requestBody = {
      actionFrom: actionFrom,
      actionTo: actionTo,
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/profile/accept-connection/${actionTo}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const cancelConnection = async (args) => {
  try {
    const { actionFrom, actionTo, token } = args;

    const requestBody = {
      actionFrom: actionFrom,
      actionTo: actionTo,
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/profile/cancel-connection/${actionTo}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const denyConnection = async (args) => {
  try {
    const { actionFrom, actionTo, token } = args;

    const requestBody = {
      actionFrom: actionFrom,
      actionTo: actionTo,
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/profile/deny-connection/${actionTo}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const removeConnection = async (args) => {
  try {
    const { actionFrom, actionTo, token } = args;

    const requestBody = {
      actionFrom: actionFrom,
      actionTo: actionTo,
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/profile/remove-connection/${actionTo}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};
