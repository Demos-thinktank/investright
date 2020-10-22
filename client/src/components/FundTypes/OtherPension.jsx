import { Box, Button, Form, Text, TextInput } from "grommet";
import React, { useState } from "react";
import PageHeading from "../PageHeading";
import { FormSearch } from "grommet-icons";
import AutoSuggestInput from "../AutoSuggest/AutoSuggestInput";
import dummyInputVals from "../AutoSuggest/dummyInputVals";

const OtherPension = () => {
  const [personalPensionSearch, setPersonalPensionSearch] = useState();
  const [formerEmployerSearch, setFormerEmployerSearch] = useState();

  return (
    <>
      <PageHeading title="Tell us who provides your personal pension" subheading='Tell us who provides any personal pension you have. If you have more than one click on the button ‘Add another provider’.' />
      <Text as="h3" size="large">
        Personal pensions
      </Text>
      <Text as="p">
        A self-invested personal pension (SIPP) is a personal pension where you
        are free to choose any investment you like and not just the provider's
        range of funds. If you have a SIPP, please click the button below
      </Text>
      <Button fill={false} secondary disabled margin={{ vertical: "small", right: 'auto' }}>
        Add a self-invested personal pension
      </Button>
      {/* <br /> */}
      <Text as="p" margin={{bottom: 'small'}}>
        Otherwise, who is the provider of any personal pension(s) you have? If
        you have more than one, you'll be able to enter these on the next page.
      </Text>
      <Form>
        <Box direction="row" gap="medium">
          <AutoSuggestInput inputVals={dummyInputVals} />
        </Box>
      </Form>
      {/* <br />
      <br /> */}
      <Text as="h3" size="large" margin={{ top: "large" }}>
        Pensions from former employers
      </Text>
      <Text as="p" margin={{ bottom: "small" }}>
        What is the name of any pension schemes provided by former employers?{" "}
        <br />
        If you have more than one, you'll be able to enter these on the next
        page.
      </Text>
      <Form>
        <Box direction="row" gap="medium">
          <AutoSuggestInput inputVals={dummyInputVals} />
        </Box>
      </Form>
    </>
  );
};

export default OtherPension;
