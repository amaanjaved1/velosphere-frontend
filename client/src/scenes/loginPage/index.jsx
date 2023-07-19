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

  const resendVerification = async () => {
    if (email === "") {
      window.alert("Please enter your email address");
      return;
    }

    try {
      const requestBody = { email: email };
      const response = await fetch(
        "http://localhost:5000/auth/resend-confirmation-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        window.alert(
          "Verification email has been recent! Please check your inbox!"
        );
      } else {
        window.alert(`Request failed: ${response.status}`);
      }
    } catch (err) {
      window.alert("An error occurred", err);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      window.alert("Please fill out all fields");
      return;
    }

    try {
      const requestBody = { email: email, password: password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

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
        window.alert(`Request failed: ${response.status}`);
      }
    } catch (err) {
      window.alert(
        "An error occurred...Please make sure that your email is verified.",
        err
      );
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
          <h2 className="slogan">Unite. Collaborate. Thrive.</h2>
        </div>
        <form className="form-content" onSubmit={login}>
          <div className="form-entry">
            <label htmlFor="email" className="label">
              Enter email:
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
              Enter password:
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

          <button type="submit" className="submit-button">
            Sign In
          </button>
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
            onClick={resendVerification}
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
            App created by{" "}
            <a href="https://www.linkedin.com/in/amaan-javed/">Amaan Javed</a>
          </h3>
        </div>
      </div>
      <div className="image-side"></div>
    </div>
  );
};
