import React from "react";
import Layout from "../components/Layout";
import { Box, Text } from "grommet";
import FundButton from "../components/AddNewFunds/FundButton";

const fundButtonData = [
  {
    label:
      "A pension organised by your current employer or any former employer",
    href: "/add-new-funds/current-employer",
    iconText: "TBC",
  },
  {
    label: "A personal pension",
    href: "/add-new-funds/other-pension",
    iconText:
      "This option includes any pension that has not been organised by one of your employers, unless it is a SIPP (see next option)",
  },
  {
    label: "A self-invested personal pension (a ‘SIPP’)",
    href: "/add-new-funds/other-investment",
    iconText: "TBC",
  },
];

const AddNewFunds = () => {
  return (
    <Layout>
      <Text as="h1" size="xlarge" margin="medium">
        Add New Funds
      </Text>
      <Text
        as="h2"
        size="xlarge"
        // margin="small"
        textAlign="center"
        weight="normal"
      >
        Please select the type if investment you want to find out about{" "}
      </Text>

      <Box align="center" justify="around" flex="grow">
        {fundButtonData.map((element, i) => (
          // <>
          <FundButton
            key={i}
            label={element.label}
            href={element.href}
            iconText={element.iconText}
          />
          // </>
        ))}
      </Box>
      <Text
        as="p"
        size="xsmall"
        textAlign="center"
        margin={{ horizontal: "large", vertical: "small" }}
      >
        <Text size="small">*</Text>Do not worry: if you have more than one type
        of investment there is an option to return to this page later
      </Text>
    </Layout>
  );
};

export default AddNewFunds;
