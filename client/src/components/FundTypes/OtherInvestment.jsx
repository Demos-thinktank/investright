import { Box, Button, Select, Text } from "grommet";
import { FormAdd, FormNextLink, HelpOption } from "grommet-icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import AutoSuggestInput from "../AutoSuggest/AutoSuggestInput";
import PageHeading from "../PageHeading";

const OtherInvestment = () => {
  const [value, setValue] = React.useState("option1");

  const history = useHistory();

  return (
    <>
      <PageHeading
        title="Tell us about your investments or your SIPP"
        subheading="Enter the asset managers"
      />
      <Text color="disabledForNow" margin={{ bottom: "small" }}>
        If you know which asset managers manage you use, please enter them here{" "}
        <HelpOption color="disabledForNow" />
      </Text>
      <Box direction="row" gap="medium">
        <AutoSuggestInput placeholder="Start typing to search" />
        <Button
          disabled
          icon={<FormAdd />}
          label="Add asset manager"
          // reverse={true}
        ></Button>
      </Box>
      {/* <Select
        options={["option1", "option2", "option3"]}
        value={value}
        onChange={({ option }) => setValue(option)}
      /> */}
      <Button
        margin={{ vertical: "medium", right: "auto" }}
        label="I don't know which asset managers I use"
        onClick={() => history.push("/identify-investments")}
      />
      <Link to="/my-actions">
        <Button
          margin={{ right: "auto" }}
          label="I've added all of my asset managers"
          icon={<FormNextLink />}
        />
      </Link>
    </>
  );
};

export default OtherInvestment;
