import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Box, Text } from "grommet";
import FundButton from "../components/AddNewFunds/FundButton";
import { AuthContext } from "../store/AuthProvider";
import { Redirect } from "react-router-dom";
import Loading from "../components/Loading";

const fundButtonData = [
  {
    label:
      "A pension organised by your current employer or any former employer",
    href: "/add-new-funds/current-employer",
  },
  {
    label: "A personal pension",
    href: "/add-new-funds/other-pension",
    iconText:
      "Any pension which has not been organised be one of your employers, unless it is a SIPP - in which case see next option",
  },
  {
    label: "A self-invested personal pension (a ‘SIPP’)",
    href: "/add-new-funds/other-investment",
    iconText:
      "A self-invested personal pension (SIPP) is a personal pension where you are free to choose any investment you like and not just the provider's range of funds.",
  },
  {
    label: "Another type of investment",
  },
];

const AddNewFunds = () => {
  const { isLoggedIn, isLoading, isNotAuthenticated } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }

  if (isNotAuthenticated) {
    return <Redirect to="/" />;
  }

  if (isLoggedIn) {
    return (
      <Layout>
        <Text
          as="h1"
          size="xlarge"
          margin={{ vertical: "medium" }}
          alignSelf="start"
        >
          Add New Funds
        </Text>
        <Text
          as="p"
          size="xlarge"
          weight={500}
          margin={{ top: "small", bottom: "small" }}
          textAlign="center"
        >
          Please enter the type of investment* you want to find out about{" "}
        </Text>

        <Box
          align="center"
          justify="between"
          pad="medium"
          flex="grow"
          fill="horizontal"
        >
          {fundButtonData.map((element, i) => (
            <FundButton
              key={i}
              label={element.label}
              href={element.href}
              iconText={element.iconText ? element.iconText : ""}
            />
          ))}
        </Box>
        <Text
          as="p"
          size="small"
          textAlign="center"
          margin={{ vertical: "small" }}
        >
          <Text size="medium">*</Text>Do not worry: if you have more than one
          type of investment there is an option to return to this page later
        </Text>
      </Layout>
    );
  }
};

export default AddNewFunds;
