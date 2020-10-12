import React, { useState } from "react";
import { Box, Button, Form, TextInput } from "grommet";
import { FormSearch } from "grommet-icons";
import { useHistory } from "react-router-dom";
import PageHeading from "../PageHeading";

const CurrentEmployer = () => {
  const [search, setSearch] = useState("");

  const history = useHistory();

  return (
    <>
      <PageHeading
        title="Tell us about the pensions your employers have organised"
        subheading="Search below for each of your pension schemes by name. This should be on
        a document provided by your current or former employers. Click the
        button below if you're not sure, and we can help you find out"
      />
      <Box>
        <Form>
          <Box direction="row" gap="medium">
            <TextInput
              placeholder="Type here"
              value={search}
              size="medium"
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button
              disabled
              //   label="Search"
              icon={<FormSearch />}
              reverse={true}
            ></Button>
          </Box>
        </Form>
        <Box direction="row" margin={{ vertical: "medium" }} gap="medium">
          <Button secondary disabled>
            Enter another pension organised by an employer
          </Button>
          <Button secondary disabled>
            I have entered all my pensions organised by an employer{" "}
          </Button>
        </Box>
        <Button
          secondary
          label="I don't know the name of my pension fund"
          onClick={() => history.push("/identify-funds")}
          margin={{ vertical: "medium" }}
          //   alignSelf="start"
        />
      </Box>
    </>
  );
};

export default CurrentEmployer;
