import React from "react";
import { useParams } from "react-router-dom";
import CurrentEmployer from "../components/FundTypes/CurrentEmployer";
import OtherInvestment from "../components/FundTypes/OtherInvestment";
import OtherPension from "../components/FundTypes/OtherPension";
import Layout from "../components/Layout";

const FundType = () => {
  let { type } = useParams();

  let fundType = {
    "current-employer": <CurrentEmployer />,
    "other-pension": <OtherPension />,
    "other-investment": <OtherInvestment />,
  };

  return <Layout>{fundType[type]}</Layout>;
};

export default FundType;
