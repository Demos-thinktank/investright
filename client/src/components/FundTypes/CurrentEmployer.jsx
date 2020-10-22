import React, { useEffect, useContext } from "react";
import axios from 'axios';
import { Box, Button, Form, TextInput } from "grommet";
import { FormAdd } from "grommet-icons";
import { useHistory } from "react-router-dom";
import PageHeading from "../PageHeading";
import Autocomplete from "../AutoComplete";
import AutoSuggest from "../AutoSuggest/AutoSuggestInput";
import { getFromStorage } from "../../utils/storage";
import { ClimetricsContext } from '../../store/ClimetricsProvider'

import dummyInputVals from "../AutoSuggest/dummyInputVals";

const CurrentEmployer = () => {
  const { climetricsFunds, setClimetricsFunds } = useContext(ClimetricsContext)

  const history = useHistory();

  useEffect(() => {
    climetricsData()
  }, [])

  async function climetricsData() {
    const localStorageToken = await getFromStorage("Investright");
    const config = {
      headers: { Authorization: `Bearer ${localStorageToken}` },
    };
    axios
      .get("/api/climetrics/funds", config)
      .then((res) => {
        setClimetricsFunds(res.data);
      })
      .catch(console.log);
  }

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
            {/* <TextInput
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
            ></Button> */}
            {/* <Autocomplete
              suggestions={[
                "Alligator",
                "Bask",
                "Crocodilian",
                "Death Roll",
                "Eggs",
                "Jaws",
                "Reptile",
                "Solitary",
                "Tail",
                "Wetlands",
              ]}
            /> */}
            <AutoSuggest inputVals={climetricsFunds} />
          </Box>
        </Form>
        {/* <Box direction="row" margin={{ vertical: "medium" }} gap="medium"> */}
          <Button 
          secondary 
          disabled
          margin={{ vertical: 'medium', right: 'auto'}}
          label='Enter another pension organised by an employer'
          icon={<FormAdd />}
          // reverse={true}
          >
            
          </Button>
          <Button 
          secondary 
          disabled
          margin={{right: 'auto'}}
          >
            I have entered all my pensions organised by an employer{" "}
          </Button>
        {/* </Box> */}
        <Button
          secondary
          label="I don't know the name of my pension fund"
          onClick={() => history.push("/identify-funds")}
          margin={{ vertical: "large", right: 'auto' }}
          //   alignSelf="start"
        />
      </Box>
    </>
  );
};

export default CurrentEmployer;
