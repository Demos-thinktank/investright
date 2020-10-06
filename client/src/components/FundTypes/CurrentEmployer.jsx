import React, { useState } from "react";
import { Box, Button, Form, Text, TextInput } from "grommet";
import { FormSearch } from "grommet-icons";

const CurrentEmployer = () => {
  const [search, setSearch] = useState({});

  return (
    <Box>
      <Text as="h1" size="xlarge" margin="medium">
        Tell us about the pensions your employers have organised{" "}
      </Text>
      <Text as="p" size="normal" margin="medium">
        Search below for each of your pension schemes by name. This should be on
        a document provided by your current or former employers. Click the
        button below if you're not sure, and we can help you find out
      </Text>
      <Box margin="large">
        <Form>
          <Box direction="row" gap="medium">
            <TextInput
              placeholder="Type here"
              value={search}
              size="medium"
              messages="Search here for a pension with your current employer"
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button
              //   label="Search"
              icon={<FormSearch />}
              reverse={true}
            ></Button>
          </Box>
        </Form>
        <Box direction="row" margin="medium" gap="medium">
          <Button>Enter another pension organised by an employer</Button>
          <Button>
            I have entered all my pensions organised by an employer{" "}
          </Button>
        </Box>
        <Button
          label="I don't know the name of my pension fund"
          margin={{ vertical: "large" }}
          //   alignSelf="start"
        />
      </Box>
    </Box>
  );
};

export default CurrentEmployer;
