import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../store/AuthProvider";
import Login from "../components/Login";
import { Redirect } from "react-router-dom";

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
  const homePage = auth.token ? (
    <div>My Account</div>
  ) : (
    <>
      <h1>% Investright</h1>
      <p>
        Helping you use your pension and investments to tackle climate change
      </p>
      <br /> <br />
      <Login />
      {/* <SignUp /> */}
    </>
  );

  return (
    <div>
      {auth.loading ? pageLoading : homePage}
      {loggedIn && <Redirect to="/profile" />}
    </div>
  );
};

export default Home;
