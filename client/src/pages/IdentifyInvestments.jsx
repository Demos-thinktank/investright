import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import { AuthContext } from "../store/AuthProvider";
import { Box, Button, Text, TextArea } from "grommet";
import { Mail } from "grommet-icons";
import Loading from "../components/Loading";

const IdentifyingInvestments = () => {
  const [value, setValue] = React.useState(
    "Dear xxxx,\n\nPlease could you send me a list of all the funds I have investments in. Thank you.\n\nYours sincerely\n\nXXXX"
  );

  const history = useHistory();

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
        <PageHeading
          title="Enquiry email page - placeholder"
          subheading="If you have a financial advisor or stockbroker, you may want to ask your them for a list of the funds you have investments in. Here is a suggested email which you can edit and send via your email app by clicking on the button below."
        />
        <Box height={{ min: "small" }}>
          <TextArea
            placeholder="type here"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            size="medium"
            fill={true}
          />
        </Box>
        <Button
          margin={{ top: "medium", right: "auto" }}
          label="Open in email app"
          disabled
          icon={<Mail />}
          reverse={true}
        />
        <Text margin={{ vertical: "medium" }}>
          If you don't have a financial advisor or stockbroker, and cannot tell
          us which funds you have invested in, we will unfortunately be unable
          to calculate the performance of these funds. A list of financial
          advisors can be found{" "}
          <a href="https://moneysupermarket.com" target="blank">
            here
          </a>{" "}
          - note these are not endorsed by Investright.
        </Text>
        <Button
          secondary
          label="Take me to my funds page"
          onClick={() => history.push("/profile")}
          margin={{ right: "auto" }}
        />
      </Layout>
    );
  }
};

export default IdentifyingInvestments;
