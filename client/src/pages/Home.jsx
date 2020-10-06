import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";
import Login from "../components/Login";
import HomeTitle from "../components/HomeTitle";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 100vh;
  padding: 10% 0;
`;

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { auth } = useContext(AuthContext);

  // console.log("authcontext", auth.isAuthenticated);

  useEffect(() => {
    if (auth && auth.isAuthenticated) {
      setLoggedIn(true);
    }
  }, [loggedIn, auth]);

  const pageLoading = auth.loading && <div>loading...</div>;
  const homePage = (
    <>
      <HomeTitle />
      <br /> <br />
      <Login />
      {/* <SignUp /> */}
    </>
  );

  if (!auth.loading && auth.isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  if (!auth.loading && !auth.isAuthenticated) {
    return (
      <Wrapper>
        {auth.loading ? pageLoading : homePage}
        {/* {loggedIn && <Redirect to="/profile" />} */}
      </Wrapper>
    );
  }

  if (auth.loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default Home;
