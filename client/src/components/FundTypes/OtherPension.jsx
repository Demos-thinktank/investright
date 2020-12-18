import { Box, Button } from "grommet";
import React from "react";
import PageHeading from "../PageHeading";
import { FormAdd, FormNextLink } from "grommet-icons";
import AutoSuggestInput from "../AutoSuggest/AutoSuggestInput";
// import dummyInputVals from "../AutoSuggest/dummyInputVals";
// import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";

const OtherPension = () => {
  return (
    <>
      <PageHeading
        title="Tell us who provides your personal pension"
        subheading="Tell us who provides any personal pension you have."
      />
      <Box direction="row" gap="medium">
        <AutoSuggestInput placeholder="Start typing to search" />
        <Button disabled icon={<FormAdd />} label="Add provider"></Button>
      </Box>
      <Button
        margin={{ vertical: "medium", right: "auto" }}
        label="I've entered all of my personal pensions"
        disabled
        icon={<FormNextLink />}
      />
      <Link to="/my-actions">
        <Button
          margin={{ right: "auto" }}
          label="Go to results page (temporary)"
          icon={<FormNextLink />}
        />
      </Link>
    </>
  );
};

export default OtherPension;
