import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";
import { useParams } from "react-router-dom";
import CurrentEmployer from "../components/FundTypes/CurrentEmployer";
import OtherInvestment from "../components/FundTypes/OtherInvestment";
import OtherPension from "../components/FundTypes/OtherPension";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

const FundType = () => {
  const { isLoggedIn, isLoading, isNotAuthenticated } = useContext(AuthContext);
  let { type } = useParams();

  let fundType = {
    "current-employer": <CurrentEmployer />,
    "other-pension": <OtherPension />,
    "other-investment": <OtherInvestment />,
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isNotAuthenticated) {
    return <Redirect to="/" />;
  }

  if (isLoggedIn) {
    return <Layout>{fundType[type]}</Layout>;
  }
};

export default FundType;
