import { Box, Button, RadioButtonGroup, Text } from "grommet";
import { FormAdd, FormNextLink } from "grommet-icons";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import PageHeading from "../components/PageHeading";
import { AuthContext } from "../store/AuthProvider";

const FundTypeSubPage = () => {
  const [value, setValue] = React.useState("one");

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
        <PageHeading
          title="Tell us about the pensions your employers have organised"
          subheading="Your employer pensions"
        />
        <Button
          disabled
          margin={{ bottom: "medium", right: "auto" }}
          label="Add or edit employer pensions"
          icon={<FormAdd />}
        />
        <Text as="p">
          We can provide a rating of the asset managers you have told us about.
          However asset managers manage many different funds, and your pensions
          will be in one or more of these funds. If we can identify which funds
          they are in, we can provide a more accurate rating of your pensions.
        </Text>
        <Box margin={{ vertical: "medium" }}>
          <RadioButtonGroup
            name="doc"
            options={[
              {
                disabled: true,
                name: "one",
                label: "I don't know which funds my pensions are in",
              },
              {
                disabled: true,
                name: "one",
                label: "I know which funds my pensions are in",
              },
            ]}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Box>
        <Button
          margin={{ vertical: "small", right: "auto" }}
          label="Next Step"
          disabled
          icon={<FormNextLink />}
        />
      </Layout>
    );
  }
};

export default FundTypeSubPage;
