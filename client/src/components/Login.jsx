import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { setInStorage } from "../utils/storage";
import { AuthContext } from "../store/AuthProvider";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import { Button, Box, FormField, Text, TextInput } from "grommet";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkText = styled(Text)`
  margin: 1rem;
  text-decoration: underline;
`;

const Login = ({ history }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);

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
    e.preventDefault();
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
      .catch(() => setError(true));
  }

  useEffect(() => {
    const storage = localStorage.getItem("Investright");
    if (storage) {
      history.push("/profile");
    }
  });

  return (
    <Wrapper>
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
      <p style={{ visibility: error ? "visible" : "hidden" }}>
        Please try again
      </p>
      <Box direction="row">
        <Link to="/signup">
          <Button type="submit" size="medium" label="Register" margin="small" />
        </Link>
        <Button
          type="submit"
          size="medium"
          label="Login"
          margin="small"
          onClick={handleLogin}
        />
      </Box>
      <Link to="/signup">
        <Button
          type="submit"
          size="medium"
          label="Proceed as guest"
          margin="small"
        />
      </Link>
      <LinkText>Forgot your password?</LinkText>
    </Wrapper>
  );
};

export default withRouter(Login);
