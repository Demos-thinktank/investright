import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HomeTitle from "../components/HomeTitle";
import { setInStorage } from "../utils/storage";
import styled from "styled-components";
import axios from "axios";

import { Box, Button, Form, FormField, Layer, Text, TextInput } from "grommet";
import { FormCheckmark, StatusGood } from "grommet-icons";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 5% 0;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75%;
`;

const StyledFormField = styled(FormField)`
  position: relative;
  max-width: fit-content;
`;

const StyledButton = styled(Button)`
  width: max-content;
`;

const StyledLayer = styled(Layer)`
  justify-content: center;
  align-items: center;
`;

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);

  const history = useHistory();

  const passwordError =
    signUp.password &&
    signUp.confirmPassword &&
    signUp.password !== signUp.confirmPassword
      ? "Passwords do not match"
      : undefined;

  function handleSubmit(e) {
    e.preventDefault();
    const user = { ...signUp };
    delete user.confirmPassword;
    // validation object checking, state -> check fields
    axios
      .post("/api/account/signup", user)
      .then((res) => {
        console.log("signup response", res);
        setInStorage("Investright", res.data.token);
      })
      .then(() => setShow(true))
      .catch(console.log);
  }

  function handleSignUpChange(e) {
    let { name, value } = e.target;

    if (name === "email") {
      value = value.toLowerCase();
    }
    value.trim();

    setSignUp((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
    console.log(signUp);
  }

  const passwordRulesStrong = [
    {
      regexp: new RegExp("(?=.*?[A-Z])"),
      message: "One uppercase letter",
      status: "error",
    },
    {
      regexp: new RegExp("(?=.*?[a-z])"),
      message: "One lowercase letter",
      status: "error",
    },
    {
      regexp: new RegExp("(?=.*?[#?!@$ %^&*-])"),
      message: "One special character",
      status: "error",
    },
    {
      regexp: new RegExp(".{8,}"),
      message: "At least 8 characters",
      status: "error",
    },
  ];

  // const passwordError =
  //   confirmPassword.confirmPassword &&
  //   signUp.password &&
  //   confirmPassword.confirmPassword === signUp.password
  //     ? null
  //     : "Passwords do not match";

  return (
    <Wrapper>
      <HomeTitle />
      <br />
      <br />
      {/* ensure all fields have form validation */}
      <StyledForm
        validate="blur"
        onReset={(event) => console.log(event)}
        onSubmit={handleSubmit}
      >
        <StyledFormField
          placeholder="First Name"
          name="firstName"
          onChange={handleSignUpChange}
          value={signUp.firstName}
          required
          validate={[
            { regexp: /^[a-z]/i },
            (name) => {
              if (name && name.length < 2)
                return (
                  <Text color="status-critical" style={{ fontSize: "0.8rem" }}>
                    must be at least 1 character
                  </Text>
                );
              return undefined;
            },
            (name) => {
              if (name.length > 2)
                return {
                  message: (
                    <span
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        fontSize: "0.8rem",
                      }}
                    >
                      <FormCheckmark color="status-ok" />
                    </span>
                  ),
                  status: "info",
                };
              return undefined;
            },
          ]}
        />
        <StyledFormField
          placeholder="Last Name"
          name="lastName"
          onChange={handleSignUpChange}
          value={signUp.lastName}
          required
          validate={[
            { regexp: /^[a-z]/i },
            (name) => {
              if (name && name.length < 2)
                return (
                  <Text color="status-critical" style={{ fontSize: "0.8rem" }}>
                    must be at least 1 character
                  </Text>
                );
              return undefined;
            },
            (name) => {
              if (name.length > 2)
                return {
                  message: (
                    <span
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        fontSize: "0.8rem",
                      }}
                    >
                      <FormCheckmark color="status-ok" />
                    </span>
                  ),
                  status: "info",
                };
              return undefined;
            },
          ]}
        />
        <FormField
          name="email"
          onChange={handleSignUpChange}
          value={signUp.email}
          required
        >
          <TextInput name="email" type="email" placeholder="Email" />
        </FormField>
        <FormField
          name="password"
          htmlFor="password"
          value={signUp.password}
          onChange={handleSignUpChange}
          required
          validate={passwordRulesStrong}
        >
          <TextInput
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
        </FormField>
        <FormField
          name="confirmPassword"
          htmlFor="confirmPassword"
          value={signUp.confirmPassword}
          onChange={handleSignUpChange}
          required
        >
          <TextInput
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </FormField>
        {passwordError && (
          <Box pad={{ horizontal: "small" }}>
            <Text color="status-critical">{passwordError}</Text>
          </Box>
        )}
        <StyledButton
          label="Create new account and login"
          size="medium"
          margin="medium"
          type="submit"
        />
      </StyledForm>
      {show && (
        <StyledLayer animation="fadeIn" full={true} position="center">
          <Box
            align="center"
            justify="center"
            direction="column"
            elevation="medium"
            gap="xsmall"
            pad="large"
            round="small"
            animation={{
              type: "zoomIn",
              delay: 0,
              duration: 1000,
              size: "xsmall",
            }}
            background="light-1"
          >
            <Text>Your account has been registered successfully!</Text>
            <StatusGood color="status-ok" size="xlarge" />
            <Text>Continue to add new funds</Text>
            <StyledButton
              label="Continue"
              onClick={() => history.push("/profile")}
            />
          </Box>
        </StyledLayer>
      )}
    </Wrapper>
  );
};

export default SignUp;
