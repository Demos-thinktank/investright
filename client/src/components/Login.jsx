import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { setInStorage } from "../utils/storage";
import { AuthContext } from "../store/AuthProvider";
import { Link, withRouter } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";

import { Button, FormField, TextInput } from "grommet";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Button = styled.button`
//   padding: 0.2rem 0.5rem;
// `;

const Signup = styled.p`
  font-size: 1rem;
  padding: 0.5rem;
`;

const Login = ({ history }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);

  // const history = useHistory();
  // let location = useLocation();

  const { auth, setAuth } = useContext(AuthContext);

  // console.log("authcontext", auth.isAuthenticated);

  useEffect(() => {
    console.log(login, auth);
  }, [login, auth]);

  function handleLoginChange(e) {
    setError(false);
    let { name, value } = e.target;
    setLogin((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  }

  async function handleLogin(e) {
    // if login fields not empty, not found, email val, password val...
    e.preventDefault();
    // let { from } = location.state || { from: { pathname: "/profile" } };
    await axios
      .post("/api/account/login", login)
      .then((res) => {
        console.log("login response", res);
        setInStorage("Investright", res.data.token);
        setAuth((previous) => ({
          ...previous,
          isAuthenticated: true,
          // token: res.data.token,
          loading: false,
          // user: res.data,
        }));
      })
      // .then(() => setLoggedIn(true))
      // .then(() => history.push("/profile"))
      // .then(() => window.location.reload())
      .catch(() => setError("Please try again"));
    // setLoggedIn(true);
  }

  useEffect(() => {
    const storage = localStorage.getItem("Investright");
    if (storage) {
      history.push("/profile");
    }
  });

  return (
    <Wrapper>
      {/* Redirect for login/signup component */}
      {/* {auth && auth.isAuthenticated && <Redirect to="/select" />} */}
      {/* <Form> */}
      <FormField
        name="email"
        onChange={handleLoginChange}
        value={login.email}
        required
      >
        <TextInput name="email" type="email" placeholder="Email" />
      </FormField>
      <FormField
        name="password"
        htmlFor="password"
        value={login.password}
        onChange={handleLoginChange}
        required
      >
        <TextInput
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </FormField>
      <p>{error && error}</p>
      {/* <Box margin="medium"> */}
      <Button
        primary
        type="submit"
        size="large"
        label="Login"
        margin="medium"
        // style={{ margin: "1rem auto" }}
        onClick={handleLogin}
        // style={{
        //   color: "#15343a",
        //   backgroundColor: "#e47058",
        //   borderRadius: "5px",
        //   fontSize: "1.5rem",
        // }}
      />
      {/* </Box> */}
      {/* </Form> */}
      {/* <br /> */}
      <Signup>
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: "#00739D" }}>
          Sign Up
        </Link>
      </Signup>
      {/* {loggedIn && <Redirect to="/profile" />} */}
    </Wrapper>
  );
};

export default withRouter(Login);
