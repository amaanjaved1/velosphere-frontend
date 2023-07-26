import React from "react";
import "./login.css";
import { BsGlobe } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";

export const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFetched, setIsFetched] = React.useState(false);

  const login = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      window.alert("Please fill out all fields");
      return;
    }

    setIsFetched(true);

    try {
      const requestBody = { email: email, password: password };
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const { token, expirationDate } = await response.json();
        dispatch(
          setLogin({
            user: email,
            token: token,
            expirationDate: expirationDate,
          })
        );
        navigate("/");
      } else {
        const errorResponse = await response.json();
        window.alert(errorResponse.message);
      }
      setIsFetched(false);
    } catch (err) {
      setIsFetched(false);
      window.alert("An error occurred... Please try again later.");
    }
  };

  return (
    <div className="login">
      <div className="form-side">
        <div className="top">
          <BsGlobe className="icon" color="white" />
          <div className="title">
            <h5 className="title-com">.com</h5>
            <h1 className="title-text">VeloSphere</h1>
          </div>
          <h2 className="slogan" style={{ textAlign: "center" }}>
            Building community, fostering connections
          </h2>
        </div>
        <form className="form-content" onSubmit={login}>
          <div className="form-entry">
            <label htmlFor="email" className="label">
              Work Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-content"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-entry">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-content"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {isFetched ? (
            <div className="loading-spinner" />
          ) : (
            <button type="submit" className="submit-button">
              Sign In
            </button>
          )}
        </form>
        <div className="bottom">
          <h3 style={{ fontWeight: "700", marginTop: "30px" }}>
            Forgot your password?
          </h3>
          <h3
            style={{
              marginBottom: "30px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/change-password")}
          >
            Click here
          </h3>
          <h3 style={{ fontWeight: "700" }}>
            Need another verification email?
          </h3>
          <h3
            style={{
              marginBottom: "30px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/resend-confirmation")}
          >
            Click here
          </h3>
          <h3 style={{ fontWeight: "700" }}>Haven't signed up yet?</h3>{" "}
          <a href="/register">
            <h3
              style={{
                marginBottom: "30px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Register here
            </h3>
          </a>
          <h3
            style={{ marginTop: "50px", fontSize: "10px", fontWeight: "300" }}
          >
            <span style={{ fontWeight: "800", color: "#ffa877" }}>
              Work email
            </span>{" "}
            is linked to your account
          </h3>
          <h3 style={{ fontSize: "10px", fontWeight: "300" }}>
            <span style={{ fontWeight: "800", color: "#ffa877" }}>
              Personal email
            </span>{" "}
            is where we send you the verification/password reset emails
          </h3>
          <h3
            style={{ marginTop: "50px", fontSize: "10px", fontWeight: "300" }}
          >
            App created by{" "}
            <a href="https://www.linkedin.com/in/amaan-javed/">Amaan Javed</a>
          </h3>
        </div>
      </div>
      <div className="image-side"></div>
    </div>
  );
};
