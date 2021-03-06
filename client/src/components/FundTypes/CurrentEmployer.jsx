import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Box, Button, Text } from "grommet";
import { FormAdd, FormSearch, HelpOption } from "grommet-icons";
import { useHistory } from "react-router-dom";
import PageHeading from "../PageHeading";
// import Autocomplete from "../AutoComplete";
import AutoSuggest from "../AutoSuggest/AutoSuggestInput";
import { getFromStorage } from "../../utils/storage";
import { ClimetricsContext } from "../../store/ClimetricsProvider";

// import dummyInputVals from "../AutoSuggest/dummyInputVals";

const CurrentEmployer = () => {
  const { climetricsFunds, setClimetricsFunds } = useContext(ClimetricsContext);

  const history = useHistory();

  useEffect(() => {
    climetricsData();
    // eslint-disable-next-line
  }, []);

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
        subheading="Enter the name of your employer"
      />
      <Box>
        <Box direction="row" gap="small">
          {/* <AutoSuggest
            inputVals={dummyInputVals}
            // inputVals={climetricsFunds}
            placeholder="Your employer's name"
          /> */}
          <input
            list="browsers"
            name="browser"
            id="browser"
            placeholder="Your employer's name"
            style={{ width: "360px", padding: "10px 20px" }}
          />

          <datalist id="browsers">
            {climetricsFunds &&
              climetricsFunds.map((fund, i) => (
                <option value={fund["Fund Name"]} key={i} />
              ))}
          </datalist>
          <Button disabled icon={<FormSearch />}></Button>
        </Box>
        <Box
          pad={{ left: "medium" }}
          margin={{ vertical: "medium" }}
          border={{
            color: "disabledForNow",
            size: "medium",
            style: "solid",
            side: "left",
          }}
        >
          <Text color="disabledForNow">
            Enter the asset managers who manage your pension organised by this
            employer
          </Text>
          <Text color="disabledForNow" margin={{ vertical: "small" }}>
            If you know which asset managers manage your pension please enter
            them here <HelpOption color="disabledForNow" />
          </Text>
          <Box direction="row" gap="medium">
            <AutoSuggest placeholder="Start typing to search" />
            <Button
              disabled
              icon={<FormAdd />}
              label="Add asset manager"
              // reverse={true}
            ></Button>
          </Box>
          <Button
            disabled
            label="I don't know which asset managers manage my pension from this employer"
            // onClick={() => history.push("/identify-funds")}
            margin={{ vertical: "medium", right: "auto" }}
          />
        </Box>
        <Button
          disabled
          margin={{ right: "auto" }}
          label="Add details of a pension organised by another employer"
          icon={<FormAdd />}
        />
        <Button
          secondary
          label="I have entered all my pensions organised by an employer"
          margin={{ vertical: "medium", right: "auto" }}
          onClick={() =>
            history.push("/add-new-funds/current-employer/pensions")
          }
        />
      </Box>
    </>
  );
};

export default CurrentEmployer;
