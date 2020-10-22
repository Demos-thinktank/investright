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
          {" "}
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
      <Box
        border={{
          color: "demosDark",
          size: "small",
          style: "solid",
          side: "all",
        }}
        round="medium"
        margin={{ top: "medium", bottom: "medium" }}
        pad="medium"
        justify="center"
        align="center"
        overflow="hidden"
      >
        <Box
          direction="row"
          justify="center"
          wrap="true"
          margin={{ bottom: "small" }}
        >
          <Box
            direction="row"
            weight="bold"
            justify="center"
            align="center"
            margin={{ horizontal: "xsmall" }}
          >
            <Box
              height="1rem"
              width="1.25rem"
              background="red"
              margin={{ right: "0.25rem" }}
            />
            <Text>Critical Funds</Text>
          </Box>
          <Box
            direction="row"
            weight="bold"
            justify="center"
            align="center"
            margin={{ horizontal: "xsmall" }}
          >
            <Box
              height="1rem"
              width="1.25rem"
              background="orange"
              margin={{ right: "0.25rem" }}
            />
            <Text>Mediocre Funds</Text>
          </Box>
          <Box
            direction="row"
            weight="bold"
            justify="center"
            align="center"
            margin={{ horizontal: "xsmall" }}
          >
            <Box
              height="1rem"
              width="1.25rem"
              background="green"
              margin={{ right: "0.25rem" }}
            />
            <Text>Good Funds</Text>
          </Box>
        </Box>
        <ActionsResultChart />
        <Box
          direction="row"
          align="center"
          margin={{ top: "medium", bottom: "small" }}
        >
          <Box
            border={{
              color: "#e30303",
              size: "medium",
            }}
            pad={{ horizontal: "small" }}
            margin={{ right: "small" }}
            round="small"
          >
            <Announce color="#e30303" size="large" />
          </Box>
          <Box
            pad={{ horizontal: "1rem", vertical: "0.5rem" }}
            background="#e30303"
          >
            <Text color="white" size="xxlarge" weight="bold" textAlign="center">
              Take action
            </Text>
          </Box>
        </Box>
        <Text size="large" textAlign="center" weight="bold">
          You have
          <Text size="xlarge" color="red">
            {" "}
            2 critical{" "}
          </Text>
          and
          <Text size="xlarge" color="orange">
            {" "}
            4 mediocre{" "}
          </Text>
          funds
          <br />
          You can take action to improve these below
        </Text>
      </Box>
    </Layout>
  );
};

export default MyActions;
