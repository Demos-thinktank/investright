import { Box, Button, Form, RadioButtonGroup, Text, TextInput } from "grommet";
import { FormAdd, FormNextLink, FormSearch } from "grommet-icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HelpDropdown from "../components/HelpDropdown";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const FundTypeSubPage = () => {
  const [value, setValue] = React.useState("one");

  const history = useHistory();

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
        // reverse={true}
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
        // onClick={() => history.push("/identify-investments")}
        label="Next Step"
        disabled
        icon={<FormNextLink />}
      />
    </Layout>
  );
};

export default FundTypeSubPage;
