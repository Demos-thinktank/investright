import React from "react";
import Layout from "../components/Layout";
import { Box, Text } from "grommet";
import FundButton from "../components/AddNewFunds/FundButton";

const fundButtonData = [
  {
    label:
      "A pension organised by your current employer or any former employer",
    href: "/add-new-funds/current-employer",
    // iconText: "TBC",
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
    // iconText: "TBC",
  },
];

const AddNewFunds = () => {
  return (
    <Layout>
      {/* <Box
        width={{ min: "320px", max: "1024px" }}
        align="center"
        fill="vertical"
        style={{ margin: "auto" }}
        pad={{ horizontal: "medium" }}
      > */}
      <Text
        as="h1"
        size="xlarge"
        margin={{ vertical: "medium" }}
        alignSelf="start"
      >
        Add New Funds
      </Text>
      <Text as="p" size="medium" margin={{ top: "small", bottom: "small" }}>
        Please select the type if investment you want to find out about{" "}
      </Text>

      <Box
        align="center"
        justify="between"
        pad="medium"
        flex="grow"
        fill="horizontal"
      >
        {fundButtonData.map((element, i) => (
          // <>
          <FundButton
            key={i}
            label={element.label}
            href={element.href}
            iconText={element.iconText ? element.iconText : ""}
          />
          // </>
        ))}
      </Box>
      <Text
        as="p"
        size="small"
        textAlign="center"
        margin={{ vertical: "small" }}
      >
        <Text size="medium">*</Text>Do not worry: if you have more than one type
        of investment there is an option to return to this page later
      </Text>
      {/* </Box> */}
    </Layout>
  );
};

export default AddNewFunds;
