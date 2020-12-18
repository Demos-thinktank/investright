import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";
import Login from "../components/Login";
import HomeTitle from "../components/HomeTitle";
import styled from "styled-components";
import Loading from "../components/Loading";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 5% 0;
`;

const Home = () => {
  const { isLoggedIn, isLoading, isNotAuthenticated } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  if (isNotAuthenticated) {
    return (
      <Wrapper>
        <HomeTitle />
        <br /> <br />
        <Login />
      </Wrapper>
    );
  }
};

export default Home;
