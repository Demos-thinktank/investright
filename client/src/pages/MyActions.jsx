import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Box, Text } from "grommet";
import { AddCircle, Announce } from "grommet-icons";
import ActionsResultChart from "../components/MyActions/ActionsResultChart";

const StyledIcon = styled(AddCircle)`
  /* border-radius: 50%; */
  width: 3rem;
  height: 3rem;
  /* border: 1px solid black; */
  &:hover {
    cursor: pointer;
  }
`;

const MyActions = () => {
  return (
    <Layout>
      <Box direction="row" justify="between" wrap="reverse">
        <Box direction="column" margin={{ right: "2rem" }}>
          <Text as="h1" size="xlarge" margin={{ top: "small", bottom: "0" }}>
            Your Results
          </Text>
          <Text
            as="h2"
            size="medium"
            weight="normal"
            margin={{ bottom: "small" }}
            style={{ whiteSpace: "pre-line" }}
          >
            Based on the funds you've told us about
          </Text>
          <Link
            to="#"
            style={{ fontSize: "0.8em", textDecoration: "underline" }}
          >
            How do we calculate these scores?
          </Link>
        </Box>
        <Box direction="row" justify="end" margin={{ left: "auto" }}>
          <Text
            as="h1"
            size="large"
            margin={{ top: "small", bottom: "small", right: "small" }}
          >
            Add new funds
          </Text>
          <Link to="/add-new-funds">
            <StyledIcon color="demosOrange" />
          </Link>
        </Box>
      </Box>
      <Box margin={{vertical: 'small'}}>
      <Text>On this page you can see a summary report on the climate and financial performance of your pensions and investments. For more detail and to take action, click on the relevant more details button. The climate figures are based on data from <Link
            to="#"
            style={{ fontSize: "0.8em", textDecoration: "underline" }}
          >
            Climetrics
          </Link> and the financial figures on data from <Link
            to="#"
            style={{ fontSize: "0.8em", textDecoration: "underline" }}
          >
            Refinitiv
          </Link>, both leading suppliers of data in their fields. </Text>
      <Text margin={{vertical: 'small'}}>Financial performance is rated from 1 to 5, where 1 is the best possible performance</Text>
      <Text margin={{bottom: 'small'}}>Climate performance is rated on the following scale:</Text>
      <Text>Click on any climate or financial performance section to see more details </Text>
      </Box>
    </Layout>
  );
};

export default MyActions;
