import React, { useContext } from "react";
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
  padding: 5% 0;
`;

const Home = () => {
  const { auth } = useContext(AuthContext);

  // console.log("authcontext", auth.isAuthenticated);

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
    return <Wrapper>{auth.loading ? pageLoading : homePage}</Wrapper>;
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
