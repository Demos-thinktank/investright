import React, { useState, useEffect } from "react";
import axios from "axios";
import { getFromStorage, setInStorage } from "../utils/storage";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signInError, setSignInError] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleSignUpChange(e) {
    // why this?
    const { name, value } = e.target;
    // form validation library?
    if (name === "email") {
      value = value.toLowerCase().trim();
    }
    value.trim();
    setSignUp((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
    console.log(signUp);
  }

  useEffect(() => {
    // app local storage naming convention?
    const localStorageToken = getFromStorage("Investright");
    if (localStorageToken) {
      axios
        .get("/api/account/verify?token=" + localStorageToken)
        .then((res) => {
          console.log(res);
          if (res.success) {
            setToken(localStorageToken);
            setLoading(false);
          } else {
            setLoading(false);
          }
        });
    } else {
      setLoading(false);
    }
  }, []);

  const pageLoading = loading && <div>loading...</div>;
  const homePage = token ? (
    <div>My Account</div>
  ) : (
    <>
      <div>
        <p>Sign Up</p>
        {/* https://www.w3schools.com/tags/tag_input.asp */}
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleSignUpChange}
          value={signUp.firstName}
          required
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={signUp.lastName}
          onChange={handleSignUpChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signUp.email}
          onChange={handleSignUpChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUp.password}
          onChange={handleSignUpChange}
          required
        />
        {/* retype password? */}
        <br />
        <button>Sign Up</button>
      </div>
      <br />
      <div>
        <p>Sign In</p>
        <input type="email" placeholder="Email" value={signInEmail} required />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={signInPassword}
          required
        />
        <br />
        <button>Sign In</button>
      </div>
    </>
  );

  return (
    <div>
      {loading ? pageLoading : homePage}
      {signInError && signInError}
      {signUpError && signUpError}
    </div>
  );
};

export default Home;
