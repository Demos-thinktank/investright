import { Button, Select } from "grommet";
import React from "react";
import { useHistory } from "react-router-dom";
import PageHeading from "../PageHeading";

const OtherInvestment = () => {
  const [value, setValue] = React.useState("option1");

  const history = useHistory();

  return (
    <>
      <PageHeading
        title="Add new funds - Other pensions"
        subheading="Do you manage your investments through one of these platforms?"
      />
      <Select
        options={["option1", "option2", "option3"]}
        value={value}
        onChange={({ option }) => setValue(option)}
      />
      <Button
        secondary
        margin={{ vertical: "medium", right: 'auto' }}
        onClick={() =>
          history.push("/add-new-funds/other-investment/asset-managers")
        }
      >
        I don't use any of these platforms
      </Button>
    </>
  );
};

export default OtherInvestment;
