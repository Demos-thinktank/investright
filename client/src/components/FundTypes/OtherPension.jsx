import { Box, Button, Form, Text, TextInput } from "grommet";
import React, { useState } from "react";
import PageHeading from "../PageHeading";
import { FormSearch } from "grommet-icons";

const OtherPension = () => {
  const [personalPensionSearch, setPersonalPensionSearch] = useState();
  const [formerEmployerSearch, setFormerEmployerSearch] = useState();

  return (
    <>
      <PageHeading title="Add new funds - Other pensions" />
      <Text as="h3" size="large">
        Personal pensions
      </Text>
      <Text as="p">
        A self-invested personal pension (SIPP) is a personal pension where you
        are free to choose any investment you like and not just the provider's
        range of funds. If you have a SIPP, please click the button below
      </Text>
      <Button secondary disabled margin={{ top: "small", bottom: "small" }}>
        Add a self-invested personal pension
      </Button>
      {/* <br /> */}
      <Text as="p">
        Otherwise, who is the provider of any personal pension(s) you have? If
        you have more than one, you'll be able to enter these on the next page.
      </Text>
      <Form>
        <Box direction="row" gap="medium">
          <TextInput
            placeholder="Type here"
            value={personalPensionSearch}
            size="medium"
            onChange={(event) => setPersonalPensionSearch(event.target.value)}
          />
          <Button
            disabled
            //   label="Search"
            icon={<FormSearch />}
            reverse={true}
          ></Button>
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
          <TextInput
            placeholder="Type here"
            value={formerEmployerSearch}
            size="medium"
            onChange={(event) => setFormerEmployerSearch(event.target.value)}
          />
          <Button
            disabled
            //   label="Search"
            icon={<FormSearch />}
            reverse={true}
          ></Button>
        </Box>
      </Form>
    </>
  );
};

export default OtherPension;
