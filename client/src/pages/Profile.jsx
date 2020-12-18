import React, { useContext } from "react";
import { AuthContext } from "../store/AuthProvider";
import Layout from "../components/Layout";
import { Text, Box } from "grommet";
import styled from "styled-components";
import { AddCircle } from "grommet-icons";
import { Link, Redirect } from "react-router-dom";
import Loading from "../components/Loading";

const StyledIcon = styled(AddCircle)`
  /* border-radius: 50%; */
  width: 3.5rem;
  height: 3.5rem;
  /* border: 1px solid black; */
  &:hover {
    cursor: pointer;
  }
`;

const Profile = () => {
  const { isLoggedIn, isLoading, isNotAuthenticated } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }

  if (isNotAuthenticated) {
    return <Redirect to="/" />;
  }

  if (isLoggedIn) {
    return (
      <Layout>
        <Box width={{ min: "100%", max: "100%" }}>
          <Box justify="end" direction="row" margin={{ bottom: "medium" }}>
            <Text as="h1" size="xlarge" margin="small">
              Add new funds
            </Text>
            <Link to="/add-new-funds">
              <StyledIcon color="demosOrange" />
            </Link>
          </Box>
          <Text as="h2" size="xxlarge" textAlign="center" margin="xsmall">
            No funds entered
          </Text>
          <Text as="p" size="medium" textAlign="center" margin="small">
            Add a new pension or investment using the button above
          </Text>
        </Box>
      </Layout>
    );
  }
};

export default Profile;
