import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../store/AuthProvider";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //   const auth = useContext(AuthContext);

  function handleSignUpChange(e) {
    // why this?
    let { name, value } = e.target;
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

  return (
    <div>
      <p>Sign Up</p>
      {/* validation */}
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
      <p>
        Have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
