import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";
import { useParams } from "react-router-dom";
import CurrentEmployer from "../components/FundTypes/CurrentEmployer";
import OtherInvestment from "../components/FundTypes/OtherInvestment";
import OtherPension from "../components/FundTypes/OtherPension";
import Layout from "../components/Layout";

const FundType = () => {
  const { auth } = useContext(AuthContext);
  let { type } = useParams();

  let fundType = {
    "current-employer": <CurrentEmployer />,
    "other-pension": <OtherPension />,
    "other-investment": <OtherInvestment />,
  };

  if (!auth.loading && auth.isAuthenticated) {
    return <Layout>{fundType[type]}</Layout>;
  }

  if (!auth.loading && !auth.isAuthenticated) {
    return <Redirect to="/" />;
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

export default FundType;
